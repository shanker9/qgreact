import AmpsControllerSingleton from '../Amps/AmpsController.js';
// import AppDataModelSingleton from '../DataModel/AppDataModel.js';
import GraphNodeDataModel from '../DataModel/GraphNodeDataModel';
import Wrapper_pb from '../proto_js/Wrapper_pb';

export default class GraphQueryController {
    constructor() {
        this.ampsController = AmpsControllerSingleton.getInstance();
        this.parentNodeSubscriptionId = undefined;
    }

    getGraphDataWithId(isLiveData, queryTopic, filter, dataHandler, subscriptionIdHandler, queryId) {
        let commandObject = {
            "topic": queryTopic,
            "filter": filter
        };

        commandObject.command = isLiveData ? 'sow_and_subscribe' : 'sow';

        this.ampsController.connectAndSubscribeForProtobuf(dataHandler, subscriptionIdHandler, commandObject);
    }

    getParentNodeData(isLiveData, queryTopic, nodeId, callback) {
        let graphNodeData, updateData;
        return new Promise((resolve, reject) => {
            this.getGraphDataWithId(isLiveData, queryTopic, `/vertex/id=="${nodeId}"`, (message) => {

                let messageType = message.c;

                switch (messageType) {
                    case 'group_begin':
                        break;
                    case 'group_end':
                        // this.ampsController.unsubscribeProtobuf(subscriptionId, unsubscribeId => console.log('Query Unsubscribed Id:', unsubscribeId))
                        resolve(graphNodeData);
                        break;
                    case 'sow':
                        graphNodeData = new GraphNodeDataModel(this.convertBinaryToProtobuf(message.data));
                        graphNodeData.deserializeSubType();
                        break;
                    case 'p':
                        updateData = new GraphNodeDataModel(this.convertBinaryToProtobuf(message.data));
                        updateData.deserializeSubType();
                        callback(updateData);
                        break;
                    default:
                        console.log('Unmatched message type received');
                }
            }, subId => this.parentNodeSubscriptionId = subId)
        })
    }

    getGraphDataForNodeWithId(queryTopic, nodeId, unsubscribeAfterSowData, callback) {
        let graphNodeData, subscriptionId, isLiveData = false;
        return new Promise((resolve, reject) => {
            this.getGraphDataWithId(isLiveData, queryTopic, `/sources/id=="${nodeId}"`, (message) => {

                let messageType = message.c;

                switch (messageType) {
                    case 'group_begin':
                        break;
                    case 'group_end':
                        this.ampsController.unsubscribeProtobuf(subscriptionId, unsubscribeId => console.log('Query Unsubscribed Id:', unsubscribeId))
                        resolve(graphNodeData);
                        break;
                    case 'sow':
                        graphNodeData = this.convertBinaryToProtobuf(message.data);
                        break;
                    case 'p':
                        break;
                    default:
                        console.log('Unmatched message type received');
                }
            }, subId => subscriptionId = subId)
        })
    }

    unsubscribeParentNodeData() {
        if (this.parentNodeSubscriptionId !== undefined) {
            this.ampsController.unsubscribeProtobuf(this.parentNodeSubscriptionId, unsubscribeId => console.log('Query Unsubscribed Id:', unsubscribeId));
        }
    }

    getGraphNodesDataArrayWithIds(queryTopic, nodeIdArray) {
        let subscriptionId, graphNodesArray = [], isLiveData = false;
        let commaSeparatedNodeIds = nodeIdArray.map(item => `"${item}"`).join(',');
        let queryString = `/vertex/id in (${commaSeparatedNodeIds})`;

        return new Promise((resolve, reject) => {
            this.getGraphDataWithId(isLiveData, queryTopic, queryString, (message) => {

                let messageType = message.c;

                switch (messageType) {
                    case 'group_begin':
                        break;
                    case 'group_end':
                        this.ampsController.unsubscribeProtobuf(subscriptionId, unsubscribeId => console.log('Query Unsubscribed Id:', unsubscribeId))
                        resolve(graphNodesArray);
                        break;
                    case 'sow':
                        graphNodesArray.push(new GraphNodeDataModel(this.convertBinaryToProtobuf(message.data)));
                        break;
                    case 'p':
                        break;
                    default:
                        console.log('Unmatched message type received');
                }
            }, subId => subscriptionId = subId)
        })
    }

    convertBinaryToProtobuf(binaryData) {
        let deserializedProtobufData = Wrapper_pb.Wrapper.deserializeBinary(binaryData);
        return deserializedProtobufData;
    }

}