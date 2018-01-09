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
goog.exportSymbol('proto.qspace.OptionMsg', null, global);

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
proto.qspace.OptionMsg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qspace.OptionMsg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.qspace.OptionMsg.displayName = 'proto.qspace.OptionMsg';
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
proto.qspace.OptionMsg.prototype.toObject = function(opt_includeInstance) {
  return proto.qspace.OptionMsg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qspace.OptionMsg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qspace.OptionMsg.toObject = function(includeInstance, msg) {
  var f, obj = {
    isPut: jspb.Message.getFieldWithDefault(msg, 1, false),
    earlyExercise: jspb.Message.getFieldWithDefault(msg, 2, false),
    expiry: (f = msg.getExpiry()) && DateTimeMsg_pb.DateTimeMsg.toObject(includeInstance, f),
    strike: +jspb.Message.getFieldWithDefault(msg, 4, 0.0),
    contractSize: +jspb.Message.getFieldWithDefault(msg, 5, 0.0),
    underlier: jspb.Message.getFieldWithDefault(msg, 6, ""),
    counterparty: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.qspace.OptionMsg}
 */
proto.qspace.OptionMsg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qspace.OptionMsg;
  return proto.qspace.OptionMsg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qspace.OptionMsg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qspace.OptionMsg}
 */
proto.qspace.OptionMsg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPut(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEarlyExercise(value);
      break;
    case 3:
      var value = new DateTimeMsg_pb.DateTimeMsg;
      reader.readMessage(value,DateTimeMsg_pb.DateTimeMsg.deserializeBinaryFromReader);
      msg.setExpiry(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStrike(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setContractSize(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnderlier(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCounterparty(value);
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
proto.qspace.OptionMsg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qspace.OptionMsg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qspace.OptionMsg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qspace.OptionMsg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsPut();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getEarlyExercise();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getExpiry();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      DateTimeMsg_pb.DateTimeMsg.serializeBinaryToWriter
    );
  }
  f = message.getStrike();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getContractSize();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getUnderlier();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCounterparty();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional bool is_put = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.qspace.OptionMsg.prototype.getIsPut = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.qspace.OptionMsg.prototype.setIsPut = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bool early_exercise = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.qspace.OptionMsg.prototype.getEarlyExercise = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.qspace.OptionMsg.prototype.setEarlyExercise = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional DateTimeMsg expiry = 3;
 * @return {?proto.qspace.DateTimeMsg}
 */
proto.qspace.OptionMsg.prototype.getExpiry = function() {
  return /** @type{?proto.qspace.DateTimeMsg} */ (
    jspb.Message.getWrapperField(this, DateTimeMsg_pb.DateTimeMsg, 3));
};


/** @param {?proto.qspace.DateTimeMsg|undefined} value */
proto.qspace.OptionMsg.prototype.setExpiry = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.qspace.OptionMsg.prototype.clearExpiry = function() {
  this.setExpiry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.qspace.OptionMsg.prototype.hasExpiry = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double strike = 4;
 * @return {number}
 */
proto.qspace.OptionMsg.prototype.getStrike = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.qspace.OptionMsg.prototype.setStrike = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional double contract_size = 5;
 * @return {number}
 */
proto.qspace.OptionMsg.prototype.getContractSize = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.qspace.OptionMsg.prototype.setContractSize = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string underlier = 6;
 * @return {string}
 */
proto.qspace.OptionMsg.prototype.getUnderlier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.qspace.OptionMsg.prototype.setUnderlier = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional string counterparty = 7;
 * @return {string}
 */
proto.qspace.OptionMsg.prototype.getCounterparty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.qspace.OptionMsg.prototype.setCounterparty = function(value) {
  jspb.Message.setField(this, 7, value);
};


goog.object.extend(exports, proto.qspace);
