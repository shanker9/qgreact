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

var DateTimeMsg_pb = require('./DateTimeMsg_pb.js');
var PricingOutput_pb = require('./PricingOutput_pb.js');
goog.exportSymbol('proto.qspace.PricingResultsMsg', null, global);

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
proto.qspace.PricingResultsMsg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qspace.PricingResultsMsg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.qspace.PricingResultsMsg.displayName = 'proto.qspace.PricingResultsMsg';
}


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
proto.qspace.PricingResultsMsg.prototype.toObject = function(opt_includeInstance) {
  return proto.qspace.PricingResultsMsg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qspace.PricingResultsMsg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qspace.PricingResultsMsg.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: jspb.Message.getFieldWithDefault(msg, 1, ""),
    underlier: jspb.Message.getFieldWithDefault(msg, 2, ""),
    vertex: jspb.Message.getFieldWithDefault(msg, 3, ""),
    lastUpdated: (f = msg.getLastUpdated()) && DateTimeMsg_pb.DateTimeMsg.toObject(includeInstance, f),
    output: (f = msg.getOutput()) && PricingOutput_pb.PricingOutput.toObject(includeInstance, f)
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
 * @return {!proto.qspace.PricingResultsMsg}
 */
proto.qspace.PricingResultsMsg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qspace.PricingResultsMsg;
  return proto.qspace.PricingResultsMsg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qspace.PricingResultsMsg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qspace.PricingResultsMsg}
 */
proto.qspace.PricingResultsMsg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProduct(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnderlier(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVertex(value);
      break;
    case 4:
      var value = new DateTimeMsg_pb.DateTimeMsg;
      reader.readMessage(value,DateTimeMsg_pb.DateTimeMsg.deserializeBinaryFromReader);
      msg.setLastUpdated(value);
      break;
    case 5:
      var value = new PricingOutput_pb.PricingOutput;
      reader.readMessage(value,PricingOutput_pb.PricingOutput.deserializeBinaryFromReader);
      msg.setOutput(value);
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
proto.qspace.PricingResultsMsg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qspace.PricingResultsMsg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qspace.PricingResultsMsg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qspace.PricingResultsMsg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUnderlier();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVertex();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLastUpdated();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      DateTimeMsg_pb.DateTimeMsg.serializeBinaryToWriter
    );
  }
  f = message.getOutput();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      PricingOutput_pb.PricingOutput.serializeBinaryToWriter
    );
  }
};


/**
 * optional string product = 1;
 * @return {string}
 */
proto.qspace.PricingResultsMsg.prototype.getProduct = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.qspace.PricingResultsMsg.prototype.setProduct = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string underlier = 2;
 * @return {string}
 */
proto.qspace.PricingResultsMsg.prototype.getUnderlier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.qspace.PricingResultsMsg.prototype.setUnderlier = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string vertex = 3;
 * @return {string}
 */
proto.qspace.PricingResultsMsg.prototype.getVertex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.qspace.PricingResultsMsg.prototype.setVertex = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional DateTimeMsg last_updated = 4;
 * @return {?proto.qspace.DateTimeMsg}
 */
proto.qspace.PricingResultsMsg.prototype.getLastUpdated = function() {
  return /** @type{?proto.qspace.DateTimeMsg} */ (
    jspb.Message.getWrapperField(this, DateTimeMsg_pb.DateTimeMsg, 4));
};


/** @param {?proto.qspace.DateTimeMsg|undefined} value */
proto.qspace.PricingResultsMsg.prototype.setLastUpdated = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.qspace.PricingResultsMsg.prototype.clearLastUpdated = function() {
  this.setLastUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.qspace.PricingResultsMsg.prototype.hasLastUpdated = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional PricingOutput output = 5;
 * @return {?proto.qspace.PricingOutput}
 */
proto.qspace.PricingResultsMsg.prototype.getOutput = function() {
  return /** @type{?proto.qspace.PricingOutput} */ (
    jspb.Message.getWrapperField(this, PricingOutput_pb.PricingOutput, 5));
};


/** @param {?proto.qspace.PricingOutput|undefined} value */
proto.qspace.PricingResultsMsg.prototype.setOutput = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.qspace.PricingResultsMsg.prototype.clearOutput = function() {
  this.setOutput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.qspace.PricingResultsMsg.prototype.hasOutput = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.qspace);
