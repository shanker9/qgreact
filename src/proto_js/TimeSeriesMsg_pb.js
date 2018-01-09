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
goog.exportSymbol('proto.qspace.TimeSeriesMsg', null, global);
goog.exportSymbol('proto.qspace.TimeSeriesMsg.Entry', null, global);

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
proto.qspace.TimeSeriesMsg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qspace.TimeSeriesMsg.repeatedFields_, null);
};
goog.inherits(proto.qspace.TimeSeriesMsg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.qspace.TimeSeriesMsg.displayName = 'proto.qspace.TimeSeriesMsg';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qspace.TimeSeriesMsg.repeatedFields_ = [1];



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
proto.qspace.TimeSeriesMsg.prototype.toObject = function(opt_includeInstance) {
  return proto.qspace.TimeSeriesMsg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qspace.TimeSeriesMsg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qspace.TimeSeriesMsg.toObject = function(includeInstance, msg) {
  var f, obj = {
    entriesList: jspb.Message.toObjectList(msg.getEntriesList(),
    proto.qspace.TimeSeriesMsg.Entry.toObject, includeInstance)
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
 * @return {!proto.qspace.TimeSeriesMsg}
 */
proto.qspace.TimeSeriesMsg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qspace.TimeSeriesMsg;
  return proto.qspace.TimeSeriesMsg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qspace.TimeSeriesMsg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qspace.TimeSeriesMsg}
 */
proto.qspace.TimeSeriesMsg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.qspace.TimeSeriesMsg.Entry;
      reader.readMessage(value,proto.qspace.TimeSeriesMsg.Entry.deserializeBinaryFromReader);
      msg.addEntries(value);
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
proto.qspace.TimeSeriesMsg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qspace.TimeSeriesMsg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qspace.TimeSeriesMsg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qspace.TimeSeriesMsg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.qspace.TimeSeriesMsg.Entry.serializeBinaryToWriter
    );
  }
};



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
proto.qspace.TimeSeriesMsg.Entry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qspace.TimeSeriesMsg.Entry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.qspace.TimeSeriesMsg.Entry.displayName = 'proto.qspace.TimeSeriesMsg.Entry';
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
proto.qspace.TimeSeriesMsg.Entry.prototype.toObject = function(opt_includeInstance) {
  return proto.qspace.TimeSeriesMsg.Entry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qspace.TimeSeriesMsg.Entry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qspace.TimeSeriesMsg.Entry.toObject = function(includeInstance, msg) {
  var f, obj = {
    dateTime: (f = msg.getDateTime()) && DateTimeMsg_pb.DateTimeMsg.toObject(includeInstance, f),
    value: +jspb.Message.getFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.qspace.TimeSeriesMsg.Entry}
 */
proto.qspace.TimeSeriesMsg.Entry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qspace.TimeSeriesMsg.Entry;
  return proto.qspace.TimeSeriesMsg.Entry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qspace.TimeSeriesMsg.Entry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qspace.TimeSeriesMsg.Entry}
 */
proto.qspace.TimeSeriesMsg.Entry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new DateTimeMsg_pb.DateTimeMsg;
      reader.readMessage(value,DateTimeMsg_pb.DateTimeMsg.deserializeBinaryFromReader);
      msg.setDateTime(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
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
proto.qspace.TimeSeriesMsg.Entry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qspace.TimeSeriesMsg.Entry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qspace.TimeSeriesMsg.Entry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qspace.TimeSeriesMsg.Entry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDateTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      DateTimeMsg_pb.DateTimeMsg.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional DateTimeMsg date_time = 1;
 * @return {?proto.qspace.DateTimeMsg}
 */
proto.qspace.TimeSeriesMsg.Entry.prototype.getDateTime = function() {
  return /** @type{?proto.qspace.DateTimeMsg} */ (
    jspb.Message.getWrapperField(this, DateTimeMsg_pb.DateTimeMsg, 1));
};


/** @param {?proto.qspace.DateTimeMsg|undefined} value */
proto.qspace.TimeSeriesMsg.Entry.prototype.setDateTime = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.qspace.TimeSeriesMsg.Entry.prototype.clearDateTime = function() {
  this.setDateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.qspace.TimeSeriesMsg.Entry.prototype.hasDateTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double value = 2;
 * @return {number}
 */
proto.qspace.TimeSeriesMsg.Entry.prototype.getValue = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.qspace.TimeSeriesMsg.Entry.prototype.setValue = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * repeated Entry entries = 1;
 * @return {!Array.<!proto.qspace.TimeSeriesMsg.Entry>}
 */
proto.qspace.TimeSeriesMsg.prototype.getEntriesList = function() {
  return /** @type{!Array.<!proto.qspace.TimeSeriesMsg.Entry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.qspace.TimeSeriesMsg.Entry, 1));
};


/** @param {!Array.<!proto.qspace.TimeSeriesMsg.Entry>} value */
proto.qspace.TimeSeriesMsg.prototype.setEntriesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.qspace.TimeSeriesMsg.Entry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.qspace.TimeSeriesMsg.Entry}
 */
proto.qspace.TimeSeriesMsg.prototype.addEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.qspace.TimeSeriesMsg.Entry, opt_index);
};


proto.qspace.TimeSeriesMsg.prototype.clearEntriesList = function() {
  this.setEntriesList([]);
};


goog.object.extend(exports, proto.qspace);