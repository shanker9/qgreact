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
goog.exportSymbol('proto.qspace.VolCurveEntry', null, global);
goog.exportSymbol('proto.qspace.VolSurfaceMsg', null, global);

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
proto.qspace.VolCurveEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qspace.VolCurveEntry.repeatedFields_, null);
};
goog.inherits(proto.qspace.VolCurveEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.qspace.VolCurveEntry.displayName = 'proto.qspace.VolCurveEntry';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qspace.VolCurveEntry.repeatedFields_ = [2,3];



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
proto.qspace.VolCurveEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.qspace.VolCurveEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qspace.VolCurveEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qspace.VolCurveEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    maturity: (f = msg.getMaturity()) && DateTimeMsg_pb.DateTimeMsg.toObject(includeInstance, f),
    strikesList: jspb.Message.getRepeatedFloatingPointField(msg, 2),
    volsList: jspb.Message.getRepeatedFloatingPointField(msg, 3)
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
 * @return {!proto.qspace.VolCurveEntry}
 */
proto.qspace.VolCurveEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qspace.VolCurveEntry;
  return proto.qspace.VolCurveEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qspace.VolCurveEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qspace.VolCurveEntry}
 */
proto.qspace.VolCurveEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new DateTimeMsg_pb.DateTimeMsg;
      reader.readMessage(value,DateTimeMsg_pb.DateTimeMsg.deserializeBinaryFromReader);
      msg.setMaturity(value);
      break;
    case 2:
      var value = /** @type {!Array.<number>} */ (reader.readPackedDouble());
      msg.setStrikesList(value);
      break;
    case 3:
      var value = /** @type {!Array.<number>} */ (reader.readPackedDouble());
      msg.setVolsList(value);
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
proto.qspace.VolCurveEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qspace.VolCurveEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qspace.VolCurveEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qspace.VolCurveEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaturity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      DateTimeMsg_pb.DateTimeMsg.serializeBinaryToWriter
    );
  }
  f = message.getStrikesList();
  if (f.length > 0) {
    writer.writePackedDouble(
      2,
      f
    );
  }
  f = message.getVolsList();
  if (f.length > 0) {
    writer.writePackedDouble(
      3,
      f
    );
  }
};


/**
 * optional DateTimeMsg maturity = 1;
 * @return {?proto.qspace.DateTimeMsg}
 */
proto.qspace.VolCurveEntry.prototype.getMaturity = function() {
  return /** @type{?proto.qspace.DateTimeMsg} */ (
    jspb.Message.getWrapperField(this, DateTimeMsg_pb.DateTimeMsg, 1));
};


/** @param {?proto.qspace.DateTimeMsg|undefined} value */
proto.qspace.VolCurveEntry.prototype.setMaturity = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.qspace.VolCurveEntry.prototype.clearMaturity = function() {
  this.setMaturity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.qspace.VolCurveEntry.prototype.hasMaturity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated double strikes = 2;
 * @return {!Array.<number>}
 */
proto.qspace.VolCurveEntry.prototype.getStrikesList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 2));
};


/** @param {!Array.<number>} value */
proto.qspace.VolCurveEntry.prototype.setStrikesList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.qspace.VolCurveEntry.prototype.addStrikes = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.qspace.VolCurveEntry.prototype.clearStrikesList = function() {
  this.setStrikesList([]);
};


/**
 * repeated double vols = 3;
 * @return {!Array.<number>}
 */
proto.qspace.VolCurveEntry.prototype.getVolsList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 3));
};


/** @param {!Array.<number>} value */
proto.qspace.VolCurveEntry.prototype.setVolsList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.qspace.VolCurveEntry.prototype.addVols = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


proto.qspace.VolCurveEntry.prototype.clearVolsList = function() {
  this.setVolsList([]);
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
proto.qspace.VolSurfaceMsg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qspace.VolSurfaceMsg.repeatedFields_, null);
};
goog.inherits(proto.qspace.VolSurfaceMsg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.qspace.VolSurfaceMsg.displayName = 'proto.qspace.VolSurfaceMsg';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qspace.VolSurfaceMsg.repeatedFields_ = [1];



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
proto.qspace.VolSurfaceMsg.prototype.toObject = function(opt_includeInstance) {
  return proto.qspace.VolSurfaceMsg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qspace.VolSurfaceMsg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qspace.VolSurfaceMsg.toObject = function(includeInstance, msg) {
  var f, obj = {
    curvesList: jspb.Message.toObjectList(msg.getCurvesList(),
    proto.qspace.VolCurveEntry.toObject, includeInstance)
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
 * @return {!proto.qspace.VolSurfaceMsg}
 */
proto.qspace.VolSurfaceMsg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qspace.VolSurfaceMsg;
  return proto.qspace.VolSurfaceMsg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qspace.VolSurfaceMsg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qspace.VolSurfaceMsg}
 */
proto.qspace.VolSurfaceMsg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.qspace.VolCurveEntry;
      reader.readMessage(value,proto.qspace.VolCurveEntry.deserializeBinaryFromReader);
      msg.addCurves(value);
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
proto.qspace.VolSurfaceMsg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qspace.VolSurfaceMsg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qspace.VolSurfaceMsg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qspace.VolSurfaceMsg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurvesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.qspace.VolCurveEntry.serializeBinaryToWriter
    );
  }
};


/**
 * repeated VolCurveEntry curves = 1;
 * @return {!Array.<!proto.qspace.VolCurveEntry>}
 */
proto.qspace.VolSurfaceMsg.prototype.getCurvesList = function() {
  return /** @type{!Array.<!proto.qspace.VolCurveEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.qspace.VolCurveEntry, 1));
};


/** @param {!Array.<!proto.qspace.VolCurveEntry>} value */
proto.qspace.VolSurfaceMsg.prototype.setCurvesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.qspace.VolCurveEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.qspace.VolCurveEntry}
 */
proto.qspace.VolSurfaceMsg.prototype.addCurves = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.qspace.VolCurveEntry, opt_index);
};


proto.qspace.VolSurfaceMsg.prototype.clearCurvesList = function() {
  this.setCurvesList([]);
};


goog.object.extend(exports, proto.qspace);
