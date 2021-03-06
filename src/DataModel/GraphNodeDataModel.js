import TimeSeriesMsg_pb from '../proto_js/TimeSeriesMsg_pb';
import RateCurveMsg_pb from '../proto_js/RateCurveMsg_pb';
import SwapDefinitionMsg_pb from '../proto_js/SwapDefinitionMsg_pb';
import HolidayCalendarMsg_pb from '../proto_js/HolidayCalendarMsg_pb';
import SwapMsg_pb from '../proto_js/SwapMsg_pb';
import ProductDetailsMsg_pb from '../proto_js/ProductDetailsMsg_pb';
import OptionMsg_pb from '../proto_js/OptionMsg_pb';
import PricingResultsMsg_pb from '../proto_js/PricingResultsMsg_pb';//VolSurfaceMsg_pb
import DateTimeMsg_pb from '../proto_js/DateTimeMsg_pb';
import VolSurfaceMsg_pb from '../proto_js/VolSurfaceMsg_pb';
import PriceMsg_pb from '../proto_js/PriceMsg_pb';


class GraphNodeDataModel {
    constructor(graphNodeDataObject) {
        this.vertexObject = graphNodeDataObject;
        this.subTypeDeserialized = undefined;
        this.isSubTypeDeserialized = false;
        this.deserializedJson = undefined;
    }

    getVertex() {
        return this.vertexObject.getVertex();
    }

    getSubType() {
        return this.subTypeDeserialized;
    }

    getId() {
        return this.getVertex().getId();
    }

    getShortId() {
        return this.getVertex().getShortId();
    }

    getPrice() {
        return this.getSubType().getOutput().getPrice();
    }

    getSources() {
        return this.isFunctionVertex() ? this.getVertex().getFunc().getSourcesList() : null;
    }

    isFunctionVertex() {
        return this.getVertex().hasFunc();
    }

    isDataVertex() {
        return this.getVertex().hasData();
    }

    /* Subtype serialization and JSON conversion methods */

    getDeserializedJson() {
        if (!this.deserializedJson) {
            let jsonObject = this.formDeserializedJson(this.vertexObject);
            this.deserializedJson = JSON.parse(JSON.stringify(jsonObject));
        }
        return this.deserializedJson;
    }

    deserializeSubType() {
        let isDataVertex, type, value, deserializeSubType;
        isDataVertex = this.vertexObject.getVertex().hasData();

        if (isDataVertex) {
            type = this.vertexObject.getVertex().getData().getData().getTypeName();
            value = this.vertexObject.getVertex().getData().getData().getValue();
        } else {
            type = this.vertexObject.getVertex().getFunc().getResult().getData().getTypeName();
            value = this.vertexObject.getVertex().getFunc().getResult().getData().getValue();
        };

        deserializeSubType = this.deserializeBinaryToType(type, value);
        this.subTypeDeserialized = deserializeSubType;
        this.isSubTypeDeserialized = true;
    }

    formDeserializedJson(deserializedProtobufData) {
        let isDataVertex, deserializedObjectData, type, value, deserializedVertexTypeProtobufData;
        deserializedObjectData = deserializedProtobufData.toObject();
        isDataVertex = deserializedProtobufData.getVertex().hasData();

        if (isDataVertex) {
            type = deserializedProtobufData.getVertex().getData().getData().getTypeName();
            value = deserializedProtobufData.getVertex().getData().getData().getValue();
        } else {
            type = deserializedProtobufData.getVertex().getFunc().getResult().getData().getTypeName();
            value = deserializedProtobufData.getVertex().getFunc().getResult().getData().getValue();
        };

        deserializedVertexTypeProtobufData = this.deserializeBinaryToType(type, value);
        isDataVertex ? deserializedObjectData.vertex.data.data.value = deserializedVertexTypeProtobufData.toObject() : deserializedObjectData.vertex.func.result.data.value = deserializedVertexTypeProtobufData.toObject();
        return deserializedObjectData;
    }

    deserializeBinaryToType(type, binaryData) {
        let deserializedVertexTypeProtobufData;
        switch (type) {
            case 'qspace.TimeSeriesMsg':
                deserializedVertexTypeProtobufData = TimeSeriesMsg_pb.TimeSeriesMsg.deserializeBinary(binaryData);
                break;
            case 'qspace.RateCurveMsg':
                deserializedVertexTypeProtobufData = RateCurveMsg_pb.RateCurveMsg.deserializeBinary(binaryData);
                break;
            case 'qspace.SwapDefinitionMsg':
                deserializedVertexTypeProtobufData = SwapDefinitionMsg_pb.SwapDefinitionMsg.deserializeBinary(binaryData);
                break;
            case 'qspace.HolidayCalendarMsg':
                deserializedVertexTypeProtobufData = HolidayCalendarMsg_pb.HolidayCalendarMsg.deserializeBinary(binaryData);
                break;
            case 'qspace.SwapMsg':
                deserializedVertexTypeProtobufData = SwapMsg_pb.SwapMsg.deserializeBinary(binaryData);
                break;
            case 'qspace.ProductDetailsMsg':
                deserializedVertexTypeProtobufData = ProductDetailsMsg_pb.ProductDetailsMsg.deserializeBinary(binaryData);
                break;
            case 'qspace.OptionMsg':
                deserializedVertexTypeProtobufData = OptionMsg_pb.OptionMsg.deserializeBinary(binaryData);
                break;
            case 'qspace.PricingResultsMsg':
                deserializedVertexTypeProtobufData = PricingResultsMsg_pb.PricingResultsMsg.deserializeBinary(binaryData);
                break;
            case 'qspace.DateTimeMsg':
                deserializedVertexTypeProtobufData = DateTimeMsg_pb.DateTimeMsg.deserializeBinary(binaryData);
                break;
            case 'qspace.VolSurfaceMsg':
                deserializedVertexTypeProtobufData = VolSurfaceMsg_pb.VolSurfaceMsg.deserializeBinary(binaryData);
                break;
            case 'qspace.PriceMsg':
                deserializedVertexTypeProtobufData = PriceMsg_pb.PriceMsg.deserializeBinary(binaryData);
                break;
            default:
                console.log('Invalid Msg type');
        }
        return deserializedVertexTypeProtobufData;
    }

}

export default GraphNodeDataModel;