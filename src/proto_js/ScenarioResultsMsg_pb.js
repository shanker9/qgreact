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

var PricingOutput_pb = require('./PricingOutput_pb.js');
goog.exportSymbol('proto.qspace.ScenarioResultsMsg', null, global);

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
proto.qspace.ScenarioResultsMsg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qspace.ScenarioResultsMsg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.qspace.ScenarioResultsMsg.displayName = 'proto.qspace.ScenarioResultsMsg';
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
proto.qspace.ScenarioResultsMsg.prototype.toObject = function(opt_includeInstance) {
  return proto.qspace.ScenarioResultsMsg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qspace.ScenarioResultsMsg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qspace.ScenarioResultsMsg.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: jspb.Message.getFieldWithDefault(msg, 1, ""),
    run: jspb.Message.getFieldWithDefault(msg, 2, ""),
    batch: jspb.Message.getFieldWithDefault(msg, 3, ""),
    vertex: jspb.Message.getFieldWithDefault(msg, 4, ""),
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
 * @return {!proto.qspace.ScenarioResultsMsg}
 */
proto.qspace.ScenarioResultsMsg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qspace.ScenarioResultsMsg;
  return proto.qspace.ScenarioResultsMsg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qspace.ScenarioResultsMsg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qspace.ScenarioResultsMsg}
 */
proto.qspace.ScenarioResultsMsg.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setRun(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBatch(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setVertex(value);
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
proto.qspace.ScenarioResultsMsg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qspace.ScenarioResultsMsg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qspace.ScenarioResultsMsg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qspace.ScenarioResultsMsg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRun();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBatch();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getVertex();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
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
proto.qspace.ScenarioResultsMsg.prototype.getProduct = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.qspace.ScenarioResultsMsg.prototype.setProduct = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string run = 2;
 * @return {string}
 */
proto.qspace.ScenarioResultsMsg.prototype.getRun = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.qspace.ScenarioResultsMsg.prototype.setRun = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string batch = 3;
 * @return {string}
 */
proto.qspace.ScenarioResultsMsg.prototype.getBatch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.qspace.ScenarioResultsMsg.prototype.setBatch = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string vertex = 4;
 * @return {string}
 */
proto.qspace.ScenarioResultsMsg.prototype.getVertex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.qspace.ScenarioResultsMsg.prototype.setVertex = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional PricingOutput output = 5;
 * @return {?proto.qspace.PricingOutput}
 */
proto.qspace.ScenarioResultsMsg.prototype.getOutput = function() {
  return /** @type{?proto.qspace.PricingOutput} */ (
    jspb.Message.getWrapperField(this, PricingOutput_pb.PricingOutput, 5));
};


/** @param {?proto.qspace.PricingOutput|undefined} value */
proto.qspace.ScenarioResultsMsg.prototype.setOutput = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.qspace.ScenarioResultsMsg.prototype.clearOutput = function() {
  this.setOutput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.qspace.ScenarioResultsMsg.prototype.hasOutput = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.qspace);
