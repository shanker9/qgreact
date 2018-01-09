/* eslint-disable */
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var DataVertexMsg_pb = require('./DataVertexMsg_pb.js');
var FuncVertexMsg_pb = require('./FuncVertexMsg_pb.js');
goog.exportSymbol('proto.qspace.VertexMsg', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qspace.VertexMsg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.qspace.VertexMsg.oneofGroups_);
};
goog.inherits(proto.qspace.VertexMsg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.qspace.VertexMsg.displayName = 'proto.qspace.VertexMsg';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.qspace.VertexMsg.oneofGroups_ = [[3,4]];

/**
 * @enum {number}
 */
proto.qspace.VertexMsg.VertexCase = {
  VERTEX_NOT_SET: 0,
  DATA: 3,
  FUNC: 4
};

/**
 * @return {proto.qspace.VertexMsg.VertexCase}
 */
proto.qspace.VertexMsg.prototype.getVertexCase = function() {
  return /** @type {proto.qspace.VertexMsg.VertexCase} */(jspb.Message.computeOneofCase(this, proto.qspace.VertexMsg.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qspace.VertexMsg.prototype.toObject = function(opt_includeInstance) {
  return proto.qspace.VertexMsg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qspace.VertexMsg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qspace.VertexMsg.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    shortId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    data: (f = msg.getData()) && DataVertexMsg_pb.DataVertexMsg.toObject(includeInstance, f),
    func: (f = msg.getFunc()) && FuncVertexMsg_pb.FuncVertexMsg.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qspace.VertexMsg}
 */
proto.qspace.VertexMsg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qspace.VertexMsg;
  return proto.qspace.VertexMsg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qspace.VertexMsg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qspace.VertexMsg}
 */
proto.qspace.VertexMsg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setShortId(value);
      break;
    case 3:
      var value = new DataVertexMsg_pb.DataVertexMsg;
      reader.readMessage(value,DataVertexMsg_pb.DataVertexMsg.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 4:
      var value = new FuncVertexMsg_pb.FuncVertexMsg;
      reader.readMessage(value,FuncVertexMsg_pb.FuncVertexMsg.deserializeBinaryFromReader);
      msg.setFunc(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qspace.VertexMsg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qspace.VertexMsg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qspace.VertexMsg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qspace.VertexMsg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getShortId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      DataVertexMsg_pb.DataVertexMsg.serializeBinaryToWriter
    );
  }
  f = message.getFunc();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      FuncVertexMsg_pb.FuncVertexMsg.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.qspace.VertexMsg.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.qspace.VertexMsg.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string short_id = 2;
 * @return {string}
 */
proto.qspace.VertexMsg.prototype.getShortId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.qspace.VertexMsg.prototype.setShortId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional DataVertexMsg data = 3;
 * @return {?proto.qspace.DataVertexMsg}
 */
proto.qspace.VertexMsg.prototype.getData = function() {
  return /** @type{?proto.qspace.DataVertexMsg} */ (
    jspb.Message.getWrapperField(this, DataVertexMsg_pb.DataVertexMsg, 3));
};


/** @param {?proto.qspace.DataVertexMsg|undefined} value */
proto.qspace.VertexMsg.prototype.setData = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.qspace.VertexMsg.oneofGroups_[0], value);
};


proto.qspace.VertexMsg.prototype.clearData = function() {
  this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.qspace.VertexMsg.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional FuncVertexMsg func = 4;
 * @return {?proto.qspace.FuncVertexMsg}
 */
proto.qspace.VertexMsg.prototype.getFunc = function() {
  return /** @type{?proto.qspace.FuncVertexMsg} */ (
    jspb.Message.getWrapperField(this, FuncVertexMsg_pb.FuncVertexMsg, 4));
};


/** @param {?proto.qspace.FuncVertexMsg|undefined} value */
proto.qspace.VertexMsg.prototype.setFunc = function(value) {
  jspb.Message.setOneofWrapperField(this, 4, proto.qspace.VertexMsg.oneofGroups_[0], value);
};


proto.qspace.VertexMsg.prototype.clearFunc = function() {
  this.setFunc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.qspace.VertexMsg.prototype.hasFunc = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.qspace);