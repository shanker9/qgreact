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
goog.exportSymbol('proto.qspace.HolidayCalendarMsg', null, global);

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
proto.qspace.HolidayCalendarMsg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qspace.HolidayCalendarMsg.repeatedFields_, null);
};
goog.inherits(proto.qspace.HolidayCalendarMsg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.qspace.HolidayCalendarMsg.displayName = 'proto.qspace.HolidayCalendarMsg';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qspace.HolidayCalendarMsg.repeatedFields_ = [1];



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
proto.qspace.HolidayCalendarMsg.prototype.toObject = function(opt_includeInstance) {
  return proto.qspace.HolidayCalendarMsg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qspace.HolidayCalendarMsg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qspace.HolidayCalendarMsg.toObject = function(includeInstance, msg) {
  var f, obj = {
    holidaysList: jspb.Message.toObjectList(msg.getHolidaysList(),
    DateTimeMsg_pb.DateTimeMsg.toObject, includeInstance)
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
 * @return {!proto.qspace.HolidayCalendarMsg}
 */
proto.qspace.HolidayCalendarMsg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qspace.HolidayCalendarMsg;
  return proto.qspace.HolidayCalendarMsg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qspace.HolidayCalendarMsg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qspace.HolidayCalendarMsg}
 */
proto.qspace.HolidayCalendarMsg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new DateTimeMsg_pb.DateTimeMsg;
      reader.readMessage(value,DateTimeMsg_pb.DateTimeMsg.deserializeBinaryFromReader);
      msg.addHolidays(value);
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
proto.qspace.HolidayCalendarMsg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qspace.HolidayCalendarMsg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qspace.HolidayCalendarMsg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qspace.HolidayCalendarMsg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHolidaysList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      DateTimeMsg_pb.DateTimeMsg.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DateTimeMsg holidays = 1;
 * @return {!Array.<!proto.qspace.DateTimeMsg>}
 */
proto.qspace.HolidayCalendarMsg.prototype.getHolidaysList = function() {
  return /** @type{!Array.<!proto.qspace.DateTimeMsg>} */ (
    jspb.Message.getRepeatedWrapperField(this, DateTimeMsg_pb.DateTimeMsg, 1));
};


/** @param {!Array.<!proto.qspace.DateTimeMsg>} value */
proto.qspace.HolidayCalendarMsg.prototype.setHolidaysList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.qspace.DateTimeMsg=} opt_value
 * @param {number=} opt_index
 * @return {!proto.qspace.DateTimeMsg}
 */
proto.qspace.HolidayCalendarMsg.prototype.addHolidays = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.qspace.DateTimeMsg, opt_index);
};


proto.qspace.HolidayCalendarMsg.prototype.clearHolidaysList = function() {
  this.setHolidaysList([]);
};


goog.object.extend(exports, proto.qspace);
