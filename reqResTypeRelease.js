/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const RegisterReqBody = $root.RegisterReqBody = (() => {

    /**
     * Properties of a RegisterReqBody.
     * @exports IRegisterReqBody
     * @interface IRegisterReqBody
     * @property {string|null} [name] RegisterReqBody name
     * @property {string|null} [email] RegisterReqBody email
     * @property {string|null} [password] RegisterReqBody password
     * @property {string|null} [confirmPassword] RegisterReqBody confirmPassword
     * @property {string|null} [dateOfBirth] RegisterReqBody dateOfBirth
     */

    /**
     * Constructs a new RegisterReqBody.
     * @exports RegisterReqBody
     * @classdesc Represents a RegisterReqBody.
     * @implements IRegisterReqBody
     * @constructor
     * @param {IRegisterReqBody=} [properties] Properties to set
     */
    function RegisterReqBody(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RegisterReqBody name.
     * @member {string} name
     * @memberof RegisterReqBody
     * @instance
     */
    RegisterReqBody.prototype.name = "";

    /**
     * RegisterReqBody email.
     * @member {string} email
     * @memberof RegisterReqBody
     * @instance
     */
    RegisterReqBody.prototype.email = "";

    /**
     * RegisterReqBody password.
     * @member {string} password
     * @memberof RegisterReqBody
     * @instance
     */
    RegisterReqBody.prototype.password = "";

    /**
     * RegisterReqBody confirmPassword.
     * @member {string} confirmPassword
     * @memberof RegisterReqBody
     * @instance
     */
    RegisterReqBody.prototype.confirmPassword = "";

    /**
     * RegisterReqBody dateOfBirth.
     * @member {string} dateOfBirth
     * @memberof RegisterReqBody
     * @instance
     */
    RegisterReqBody.prototype.dateOfBirth = "";

    /**
     * Creates a new RegisterReqBody instance using the specified properties.
     * @function create
     * @memberof RegisterReqBody
     * @static
     * @param {IRegisterReqBody=} [properties] Properties to set
     * @returns {RegisterReqBody} RegisterReqBody instance
     */
    RegisterReqBody.create = function create(properties) {
        return new RegisterReqBody(properties);
    };

    /**
     * Encodes the specified RegisterReqBody message. Does not implicitly {@link RegisterReqBody.verify|verify} messages.
     * @function encode
     * @memberof RegisterReqBody
     * @static
     * @param {IRegisterReqBody} message RegisterReqBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RegisterReqBody.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.email != null && Object.hasOwnProperty.call(message, "email"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.email);
        if (message.password != null && Object.hasOwnProperty.call(message, "password"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.password);
        if (message.confirmPassword != null && Object.hasOwnProperty.call(message, "confirmPassword"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.confirmPassword);
        if (message.dateOfBirth != null && Object.hasOwnProperty.call(message, "dateOfBirth"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.dateOfBirth);
        return writer;
    };

    /**
     * Encodes the specified RegisterReqBody message, length delimited. Does not implicitly {@link RegisterReqBody.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RegisterReqBody
     * @static
     * @param {IRegisterReqBody} message RegisterReqBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RegisterReqBody.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RegisterReqBody message from the specified reader or buffer.
     * @function decode
     * @memberof RegisterReqBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RegisterReqBody} RegisterReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RegisterReqBody.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RegisterReqBody();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.name = reader.string();
                    break;
                }
            case 2: {
                    message.email = reader.string();
                    break;
                }
            case 3: {
                    message.password = reader.string();
                    break;
                }
            case 4: {
                    message.confirmPassword = reader.string();
                    break;
                }
            case 5: {
                    message.dateOfBirth = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RegisterReqBody message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RegisterReqBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RegisterReqBody} RegisterReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RegisterReqBody.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RegisterReqBody message.
     * @function verify
     * @memberof RegisterReqBody
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RegisterReqBody.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.email != null && message.hasOwnProperty("email"))
            if (!$util.isString(message.email))
                return "email: string expected";
        if (message.password != null && message.hasOwnProperty("password"))
            if (!$util.isString(message.password))
                return "password: string expected";
        if (message.confirmPassword != null && message.hasOwnProperty("confirmPassword"))
            if (!$util.isString(message.confirmPassword))
                return "confirmPassword: string expected";
        if (message.dateOfBirth != null && message.hasOwnProperty("dateOfBirth"))
            if (!$util.isString(message.dateOfBirth))
                return "dateOfBirth: string expected";
        return null;
    };

    /**
     * Creates a RegisterReqBody message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RegisterReqBody
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RegisterReqBody} RegisterReqBody
     */
    RegisterReqBody.fromObject = function fromObject(object) {
        if (object instanceof $root.RegisterReqBody)
            return object;
        let message = new $root.RegisterReqBody();
        if (object.name != null)
            message.name = String(object.name);
        if (object.email != null)
            message.email = String(object.email);
        if (object.password != null)
            message.password = String(object.password);
        if (object.confirmPassword != null)
            message.confirmPassword = String(object.confirmPassword);
        if (object.dateOfBirth != null)
            message.dateOfBirth = String(object.dateOfBirth);
        return message;
    };

    /**
     * Creates a plain object from a RegisterReqBody message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RegisterReqBody
     * @static
     * @param {RegisterReqBody} message RegisterReqBody
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RegisterReqBody.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.name = "";
            object.email = "";
            object.password = "";
            object.confirmPassword = "";
            object.dateOfBirth = "";
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.email != null && message.hasOwnProperty("email"))
            object.email = message.email;
        if (message.password != null && message.hasOwnProperty("password"))
            object.password = message.password;
        if (message.confirmPassword != null && message.hasOwnProperty("confirmPassword"))
            object.confirmPassword = message.confirmPassword;
        if (message.dateOfBirth != null && message.hasOwnProperty("dateOfBirth"))
            object.dateOfBirth = message.dateOfBirth;
        return object;
    };

    /**
     * Converts this RegisterReqBody to JSON.
     * @function toJSON
     * @memberof RegisterReqBody
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RegisterReqBody.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RegisterReqBody
     * @function getTypeUrl
     * @memberof RegisterReqBody
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RegisterReqBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RegisterReqBody";
    };

    return RegisterReqBody;
})();

export const LogoutReqBody = $root.LogoutReqBody = (() => {

    /**
     * Properties of a LogoutReqBody.
     * @exports ILogoutReqBody
     * @interface ILogoutReqBody
     * @property {string|null} [refreshToken] LogoutReqBody refreshToken
     */

    /**
     * Constructs a new LogoutReqBody.
     * @exports LogoutReqBody
     * @classdesc Represents a LogoutReqBody.
     * @implements ILogoutReqBody
     * @constructor
     * @param {ILogoutReqBody=} [properties] Properties to set
     */
    function LogoutReqBody(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LogoutReqBody refreshToken.
     * @member {string} refreshToken
     * @memberof LogoutReqBody
     * @instance
     */
    LogoutReqBody.prototype.refreshToken = "";

    /**
     * Creates a new LogoutReqBody instance using the specified properties.
     * @function create
     * @memberof LogoutReqBody
     * @static
     * @param {ILogoutReqBody=} [properties] Properties to set
     * @returns {LogoutReqBody} LogoutReqBody instance
     */
    LogoutReqBody.create = function create(properties) {
        return new LogoutReqBody(properties);
    };

    /**
     * Encodes the specified LogoutReqBody message. Does not implicitly {@link LogoutReqBody.verify|verify} messages.
     * @function encode
     * @memberof LogoutReqBody
     * @static
     * @param {ILogoutReqBody} message LogoutReqBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LogoutReqBody.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.refreshToken != null && Object.hasOwnProperty.call(message, "refreshToken"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.refreshToken);
        return writer;
    };

    /**
     * Encodes the specified LogoutReqBody message, length delimited. Does not implicitly {@link LogoutReqBody.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LogoutReqBody
     * @static
     * @param {ILogoutReqBody} message LogoutReqBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LogoutReqBody.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LogoutReqBody message from the specified reader or buffer.
     * @function decode
     * @memberof LogoutReqBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LogoutReqBody} LogoutReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LogoutReqBody.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.LogoutReqBody();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.refreshToken = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LogoutReqBody message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LogoutReqBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LogoutReqBody} LogoutReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LogoutReqBody.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LogoutReqBody message.
     * @function verify
     * @memberof LogoutReqBody
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LogoutReqBody.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
            if (!$util.isString(message.refreshToken))
                return "refreshToken: string expected";
        return null;
    };

    /**
     * Creates a LogoutReqBody message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LogoutReqBody
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LogoutReqBody} LogoutReqBody
     */
    LogoutReqBody.fromObject = function fromObject(object) {
        if (object instanceof $root.LogoutReqBody)
            return object;
        let message = new $root.LogoutReqBody();
        if (object.refreshToken != null)
            message.refreshToken = String(object.refreshToken);
        return message;
    };

    /**
     * Creates a plain object from a LogoutReqBody message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LogoutReqBody
     * @static
     * @param {LogoutReqBody} message LogoutReqBody
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LogoutReqBody.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.refreshToken = "";
        if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
            object.refreshToken = message.refreshToken;
        return object;
    };

    /**
     * Converts this LogoutReqBody to JSON.
     * @function toJSON
     * @memberof LogoutReqBody
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LogoutReqBody.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LogoutReqBody
     * @function getTypeUrl
     * @memberof LogoutReqBody
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LogoutReqBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LogoutReqBody";
    };

    return LogoutReqBody;
})();

export const TokenPayload = $root.TokenPayload = (() => {

    /**
     * Properties of a TokenPayload.
     * @exports ITokenPayload
     * @interface ITokenPayload
     * @property {string|null} [userId] TokenPayload userId
     * @property {ITokenType|null} [tokenType] TokenPayload tokenType
     * @property {IUserVerifyStatus|null} [verify] TokenPayload verify
     * @property {number|null} [exp] TokenPayload exp
     * @property {number|null} [iat] TokenPayload iat
     */

    /**
     * Constructs a new TokenPayload.
     * @exports TokenPayload
     * @classdesc Represents a TokenPayload.
     * @implements ITokenPayload
     * @constructor
     * @param {ITokenPayload=} [properties] Properties to set
     */
    function TokenPayload(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TokenPayload userId.
     * @member {string} userId
     * @memberof TokenPayload
     * @instance
     */
    TokenPayload.prototype.userId = "";

    /**
     * TokenPayload tokenType.
     * @member {ITokenType|null|undefined} tokenType
     * @memberof TokenPayload
     * @instance
     */
    TokenPayload.prototype.tokenType = null;

    /**
     * TokenPayload verify.
     * @member {IUserVerifyStatus|null|undefined} verify
     * @memberof TokenPayload
     * @instance
     */
    TokenPayload.prototype.verify = null;

    /**
     * TokenPayload exp.
     * @member {number} exp
     * @memberof TokenPayload
     * @instance
     */
    TokenPayload.prototype.exp = 0;

    /**
     * TokenPayload iat.
     * @member {number} iat
     * @memberof TokenPayload
     * @instance
     */
    TokenPayload.prototype.iat = 0;

    /**
     * Creates a new TokenPayload instance using the specified properties.
     * @function create
     * @memberof TokenPayload
     * @static
     * @param {ITokenPayload=} [properties] Properties to set
     * @returns {TokenPayload} TokenPayload instance
     */
    TokenPayload.create = function create(properties) {
        return new TokenPayload(properties);
    };

    /**
     * Encodes the specified TokenPayload message. Does not implicitly {@link TokenPayload.verify|verify} messages.
     * @function encode
     * @memberof TokenPayload
     * @static
     * @param {ITokenPayload} message TokenPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TokenPayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
        if (message.tokenType != null && Object.hasOwnProperty.call(message, "tokenType"))
            $root.TokenType.encode(message.tokenType, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.verify != null && Object.hasOwnProperty.call(message, "verify"))
            $root.UserVerifyStatus.encode(message.verify, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.exp != null && Object.hasOwnProperty.call(message, "exp"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.exp);
        if (message.iat != null && Object.hasOwnProperty.call(message, "iat"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.iat);
        return writer;
    };

    /**
     * Encodes the specified TokenPayload message, length delimited. Does not implicitly {@link TokenPayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TokenPayload
     * @static
     * @param {ITokenPayload} message TokenPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TokenPayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TokenPayload message from the specified reader or buffer.
     * @function decode
     * @memberof TokenPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TokenPayload} TokenPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TokenPayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.TokenPayload();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.userId = reader.string();
                    break;
                }
            case 2: {
                    message.tokenType = $root.TokenType.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.verify = $root.UserVerifyStatus.decode(reader, reader.uint32());
                    break;
                }
            case 4: {
                    message.exp = reader.int32();
                    break;
                }
            case 5: {
                    message.iat = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TokenPayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TokenPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TokenPayload} TokenPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TokenPayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TokenPayload message.
     * @function verify
     * @memberof TokenPayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TokenPayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isString(message.userId))
                return "userId: string expected";
        if (message.tokenType != null && message.hasOwnProperty("tokenType")) {
            let error = $root.TokenType.verify(message.tokenType);
            if (error)
                return "tokenType." + error;
        }
        if (message.verify != null && message.hasOwnProperty("verify")) {
            let error = $root.UserVerifyStatus.verify(message.verify);
            if (error)
                return "verify." + error;
        }
        if (message.exp != null && message.hasOwnProperty("exp"))
            if (!$util.isInteger(message.exp))
                return "exp: integer expected";
        if (message.iat != null && message.hasOwnProperty("iat"))
            if (!$util.isInteger(message.iat))
                return "iat: integer expected";
        return null;
    };

    /**
     * Creates a TokenPayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TokenPayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TokenPayload} TokenPayload
     */
    TokenPayload.fromObject = function fromObject(object) {
        if (object instanceof $root.TokenPayload)
            return object;
        let message = new $root.TokenPayload();
        if (object.userId != null)
            message.userId = String(object.userId);
        if (object.tokenType != null) {
            if (typeof object.tokenType !== "object")
                throw TypeError(".TokenPayload.tokenType: object expected");
            message.tokenType = $root.TokenType.fromObject(object.tokenType);
        }
        if (object.verify != null) {
            if (typeof object.verify !== "object")
                throw TypeError(".TokenPayload.verify: object expected");
            message.verify = $root.UserVerifyStatus.fromObject(object.verify);
        }
        if (object.exp != null)
            message.exp = object.exp | 0;
        if (object.iat != null)
            message.iat = object.iat | 0;
        return message;
    };

    /**
     * Creates a plain object from a TokenPayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TokenPayload
     * @static
     * @param {TokenPayload} message TokenPayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TokenPayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.userId = "";
            object.tokenType = null;
            object.verify = null;
            object.exp = 0;
            object.iat = 0;
        }
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        if (message.tokenType != null && message.hasOwnProperty("tokenType"))
            object.tokenType = $root.TokenType.toObject(message.tokenType, options);
        if (message.verify != null && message.hasOwnProperty("verify"))
            object.verify = $root.UserVerifyStatus.toObject(message.verify, options);
        if (message.exp != null && message.hasOwnProperty("exp"))
            object.exp = message.exp;
        if (message.iat != null && message.hasOwnProperty("iat"))
            object.iat = message.iat;
        return object;
    };

    /**
     * Converts this TokenPayload to JSON.
     * @function toJSON
     * @memberof TokenPayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TokenPayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for TokenPayload
     * @function getTypeUrl
     * @memberof TokenPayload
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    TokenPayload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/TokenPayload";
    };

    return TokenPayload;
})();

export const LoginReqBody = $root.LoginReqBody = (() => {

    /**
     * Properties of a LoginReqBody.
     * @exports ILoginReqBody
     * @interface ILoginReqBody
     * @property {string|null} [email] LoginReqBody email
     * @property {string|null} [password] LoginReqBody password
     */

    /**
     * Constructs a new LoginReqBody.
     * @exports LoginReqBody
     * @classdesc Represents a LoginReqBody.
     * @implements ILoginReqBody
     * @constructor
     * @param {ILoginReqBody=} [properties] Properties to set
     */
    function LoginReqBody(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LoginReqBody email.
     * @member {string} email
     * @memberof LoginReqBody
     * @instance
     */
    LoginReqBody.prototype.email = "";

    /**
     * LoginReqBody password.
     * @member {string} password
     * @memberof LoginReqBody
     * @instance
     */
    LoginReqBody.prototype.password = "";

    /**
     * Creates a new LoginReqBody instance using the specified properties.
     * @function create
     * @memberof LoginReqBody
     * @static
     * @param {ILoginReqBody=} [properties] Properties to set
     * @returns {LoginReqBody} LoginReqBody instance
     */
    LoginReqBody.create = function create(properties) {
        return new LoginReqBody(properties);
    };

    /**
     * Encodes the specified LoginReqBody message. Does not implicitly {@link LoginReqBody.verify|verify} messages.
     * @function encode
     * @memberof LoginReqBody
     * @static
     * @param {ILoginReqBody} message LoginReqBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginReqBody.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.email != null && Object.hasOwnProperty.call(message, "email"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.email);
        if (message.password != null && Object.hasOwnProperty.call(message, "password"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
        return writer;
    };

    /**
     * Encodes the specified LoginReqBody message, length delimited. Does not implicitly {@link LoginReqBody.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LoginReqBody
     * @static
     * @param {ILoginReqBody} message LoginReqBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginReqBody.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LoginReqBody message from the specified reader or buffer.
     * @function decode
     * @memberof LoginReqBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LoginReqBody} LoginReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginReqBody.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginReqBody();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.email = reader.string();
                    break;
                }
            case 2: {
                    message.password = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LoginReqBody message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LoginReqBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LoginReqBody} LoginReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginReqBody.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LoginReqBody message.
     * @function verify
     * @memberof LoginReqBody
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LoginReqBody.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.email != null && message.hasOwnProperty("email"))
            if (!$util.isString(message.email))
                return "email: string expected";
        if (message.password != null && message.hasOwnProperty("password"))
            if (!$util.isString(message.password))
                return "password: string expected";
        return null;
    };

    /**
     * Creates a LoginReqBody message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LoginReqBody
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LoginReqBody} LoginReqBody
     */
    LoginReqBody.fromObject = function fromObject(object) {
        if (object instanceof $root.LoginReqBody)
            return object;
        let message = new $root.LoginReqBody();
        if (object.email != null)
            message.email = String(object.email);
        if (object.password != null)
            message.password = String(object.password);
        return message;
    };

    /**
     * Creates a plain object from a LoginReqBody message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LoginReqBody
     * @static
     * @param {LoginReqBody} message LoginReqBody
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LoginReqBody.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.email = "";
            object.password = "";
        }
        if (message.email != null && message.hasOwnProperty("email"))
            object.email = message.email;
        if (message.password != null && message.hasOwnProperty("password"))
            object.password = message.password;
        return object;
    };

    /**
     * Converts this LoginReqBody to JSON.
     * @function toJSON
     * @memberof LoginReqBody
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LoginReqBody.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LoginReqBody
     * @function getTypeUrl
     * @memberof LoginReqBody
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LoginReqBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LoginReqBody";
    };

    return LoginReqBody;
})();

export const VerifyEmailReqBody = $root.VerifyEmailReqBody = (() => {

    /**
     * Properties of a VerifyEmailReqBody.
     * @exports IVerifyEmailReqBody
     * @interface IVerifyEmailReqBody
     * @property {string|null} [emailVerifyToken] VerifyEmailReqBody emailVerifyToken
     */

    /**
     * Constructs a new VerifyEmailReqBody.
     * @exports VerifyEmailReqBody
     * @classdesc Represents a VerifyEmailReqBody.
     * @implements IVerifyEmailReqBody
     * @constructor
     * @param {IVerifyEmailReqBody=} [properties] Properties to set
     */
    function VerifyEmailReqBody(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * VerifyEmailReqBody emailVerifyToken.
     * @member {string} emailVerifyToken
     * @memberof VerifyEmailReqBody
     * @instance
     */
    VerifyEmailReqBody.prototype.emailVerifyToken = "";

    /**
     * Creates a new VerifyEmailReqBody instance using the specified properties.
     * @function create
     * @memberof VerifyEmailReqBody
     * @static
     * @param {IVerifyEmailReqBody=} [properties] Properties to set
     * @returns {VerifyEmailReqBody} VerifyEmailReqBody instance
     */
    VerifyEmailReqBody.create = function create(properties) {
        return new VerifyEmailReqBody(properties);
    };

    /**
     * Encodes the specified VerifyEmailReqBody message. Does not implicitly {@link VerifyEmailReqBody.verify|verify} messages.
     * @function encode
     * @memberof VerifyEmailReqBody
     * @static
     * @param {IVerifyEmailReqBody} message VerifyEmailReqBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VerifyEmailReqBody.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.emailVerifyToken != null && Object.hasOwnProperty.call(message, "emailVerifyToken"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.emailVerifyToken);
        return writer;
    };

    /**
     * Encodes the specified VerifyEmailReqBody message, length delimited. Does not implicitly {@link VerifyEmailReqBody.verify|verify} messages.
     * @function encodeDelimited
     * @memberof VerifyEmailReqBody
     * @static
     * @param {IVerifyEmailReqBody} message VerifyEmailReqBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VerifyEmailReqBody.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a VerifyEmailReqBody message from the specified reader or buffer.
     * @function decode
     * @memberof VerifyEmailReqBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {VerifyEmailReqBody} VerifyEmailReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VerifyEmailReqBody.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.VerifyEmailReqBody();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.emailVerifyToken = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a VerifyEmailReqBody message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof VerifyEmailReqBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {VerifyEmailReqBody} VerifyEmailReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VerifyEmailReqBody.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a VerifyEmailReqBody message.
     * @function verify
     * @memberof VerifyEmailReqBody
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    VerifyEmailReqBody.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.emailVerifyToken != null && message.hasOwnProperty("emailVerifyToken"))
            if (!$util.isString(message.emailVerifyToken))
                return "emailVerifyToken: string expected";
        return null;
    };

    /**
     * Creates a VerifyEmailReqBody message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof VerifyEmailReqBody
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {VerifyEmailReqBody} VerifyEmailReqBody
     */
    VerifyEmailReqBody.fromObject = function fromObject(object) {
        if (object instanceof $root.VerifyEmailReqBody)
            return object;
        let message = new $root.VerifyEmailReqBody();
        if (object.emailVerifyToken != null)
            message.emailVerifyToken = String(object.emailVerifyToken);
        return message;
    };

    /**
     * Creates a plain object from a VerifyEmailReqBody message. Also converts values to other types if specified.
     * @function toObject
     * @memberof VerifyEmailReqBody
     * @static
     * @param {VerifyEmailReqBody} message VerifyEmailReqBody
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    VerifyEmailReqBody.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.emailVerifyToken = "";
        if (message.emailVerifyToken != null && message.hasOwnProperty("emailVerifyToken"))
            object.emailVerifyToken = message.emailVerifyToken;
        return object;
    };

    /**
     * Converts this VerifyEmailReqBody to JSON.
     * @function toJSON
     * @memberof VerifyEmailReqBody
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    VerifyEmailReqBody.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for VerifyEmailReqBody
     * @function getTypeUrl
     * @memberof VerifyEmailReqBody
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    VerifyEmailReqBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/VerifyEmailReqBody";
    };

    return VerifyEmailReqBody;
})();

export const ForgotPasswordReqBody = $root.ForgotPasswordReqBody = (() => {

    /**
     * Properties of a ForgotPasswordReqBody.
     * @exports IForgotPasswordReqBody
     * @interface IForgotPasswordReqBody
     * @property {string|null} [email] ForgotPasswordReqBody email
     */

    /**
     * Constructs a new ForgotPasswordReqBody.
     * @exports ForgotPasswordReqBody
     * @classdesc Represents a ForgotPasswordReqBody.
     * @implements IForgotPasswordReqBody
     * @constructor
     * @param {IForgotPasswordReqBody=} [properties] Properties to set
     */
    function ForgotPasswordReqBody(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ForgotPasswordReqBody email.
     * @member {string} email
     * @memberof ForgotPasswordReqBody
     * @instance
     */
    ForgotPasswordReqBody.prototype.email = "";

    /**
     * Creates a new ForgotPasswordReqBody instance using the specified properties.
     * @function create
     * @memberof ForgotPasswordReqBody
     * @static
     * @param {IForgotPasswordReqBody=} [properties] Properties to set
     * @returns {ForgotPasswordReqBody} ForgotPasswordReqBody instance
     */
    ForgotPasswordReqBody.create = function create(properties) {
        return new ForgotPasswordReqBody(properties);
    };

    /**
     * Encodes the specified ForgotPasswordReqBody message. Does not implicitly {@link ForgotPasswordReqBody.verify|verify} messages.
     * @function encode
     * @memberof ForgotPasswordReqBody
     * @static
     * @param {IForgotPasswordReqBody} message ForgotPasswordReqBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ForgotPasswordReqBody.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.email != null && Object.hasOwnProperty.call(message, "email"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.email);
        return writer;
    };

    /**
     * Encodes the specified ForgotPasswordReqBody message, length delimited. Does not implicitly {@link ForgotPasswordReqBody.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ForgotPasswordReqBody
     * @static
     * @param {IForgotPasswordReqBody} message ForgotPasswordReqBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ForgotPasswordReqBody.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ForgotPasswordReqBody message from the specified reader or buffer.
     * @function decode
     * @memberof ForgotPasswordReqBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ForgotPasswordReqBody} ForgotPasswordReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ForgotPasswordReqBody.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ForgotPasswordReqBody();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.email = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ForgotPasswordReqBody message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ForgotPasswordReqBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ForgotPasswordReqBody} ForgotPasswordReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ForgotPasswordReqBody.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ForgotPasswordReqBody message.
     * @function verify
     * @memberof ForgotPasswordReqBody
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ForgotPasswordReqBody.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.email != null && message.hasOwnProperty("email"))
            if (!$util.isString(message.email))
                return "email: string expected";
        return null;
    };

    /**
     * Creates a ForgotPasswordReqBody message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ForgotPasswordReqBody
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ForgotPasswordReqBody} ForgotPasswordReqBody
     */
    ForgotPasswordReqBody.fromObject = function fromObject(object) {
        if (object instanceof $root.ForgotPasswordReqBody)
            return object;
        let message = new $root.ForgotPasswordReqBody();
        if (object.email != null)
            message.email = String(object.email);
        return message;
    };

    /**
     * Creates a plain object from a ForgotPasswordReqBody message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ForgotPasswordReqBody
     * @static
     * @param {ForgotPasswordReqBody} message ForgotPasswordReqBody
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ForgotPasswordReqBody.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.email = "";
        if (message.email != null && message.hasOwnProperty("email"))
            object.email = message.email;
        return object;
    };

    /**
     * Converts this ForgotPasswordReqBody to JSON.
     * @function toJSON
     * @memberof ForgotPasswordReqBody
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ForgotPasswordReqBody.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ForgotPasswordReqBody
     * @function getTypeUrl
     * @memberof ForgotPasswordReqBody
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ForgotPasswordReqBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ForgotPasswordReqBody";
    };

    return ForgotPasswordReqBody;
})();

export const VerifyForgotPasswordReqBody = $root.VerifyForgotPasswordReqBody = (() => {

    /**
     * Properties of a VerifyForgotPasswordReqBody.
     * @exports IVerifyForgotPasswordReqBody
     * @interface IVerifyForgotPasswordReqBody
     * @property {string|null} [forgotPasswordToken] VerifyForgotPasswordReqBody forgotPasswordToken
     */

    /**
     * Constructs a new VerifyForgotPasswordReqBody.
     * @exports VerifyForgotPasswordReqBody
     * @classdesc Represents a VerifyForgotPasswordReqBody.
     * @implements IVerifyForgotPasswordReqBody
     * @constructor
     * @param {IVerifyForgotPasswordReqBody=} [properties] Properties to set
     */
    function VerifyForgotPasswordReqBody(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * VerifyForgotPasswordReqBody forgotPasswordToken.
     * @member {string} forgotPasswordToken
     * @memberof VerifyForgotPasswordReqBody
     * @instance
     */
    VerifyForgotPasswordReqBody.prototype.forgotPasswordToken = "";

    /**
     * Creates a new VerifyForgotPasswordReqBody instance using the specified properties.
     * @function create
     * @memberof VerifyForgotPasswordReqBody
     * @static
     * @param {IVerifyForgotPasswordReqBody=} [properties] Properties to set
     * @returns {VerifyForgotPasswordReqBody} VerifyForgotPasswordReqBody instance
     */
    VerifyForgotPasswordReqBody.create = function create(properties) {
        return new VerifyForgotPasswordReqBody(properties);
    };

    /**
     * Encodes the specified VerifyForgotPasswordReqBody message. Does not implicitly {@link VerifyForgotPasswordReqBody.verify|verify} messages.
     * @function encode
     * @memberof VerifyForgotPasswordReqBody
     * @static
     * @param {IVerifyForgotPasswordReqBody} message VerifyForgotPasswordReqBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VerifyForgotPasswordReqBody.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.forgotPasswordToken != null && Object.hasOwnProperty.call(message, "forgotPasswordToken"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.forgotPasswordToken);
        return writer;
    };

    /**
     * Encodes the specified VerifyForgotPasswordReqBody message, length delimited. Does not implicitly {@link VerifyForgotPasswordReqBody.verify|verify} messages.
     * @function encodeDelimited
     * @memberof VerifyForgotPasswordReqBody
     * @static
     * @param {IVerifyForgotPasswordReqBody} message VerifyForgotPasswordReqBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VerifyForgotPasswordReqBody.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a VerifyForgotPasswordReqBody message from the specified reader or buffer.
     * @function decode
     * @memberof VerifyForgotPasswordReqBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {VerifyForgotPasswordReqBody} VerifyForgotPasswordReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VerifyForgotPasswordReqBody.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.VerifyForgotPasswordReqBody();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.forgotPasswordToken = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a VerifyForgotPasswordReqBody message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof VerifyForgotPasswordReqBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {VerifyForgotPasswordReqBody} VerifyForgotPasswordReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VerifyForgotPasswordReqBody.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a VerifyForgotPasswordReqBody message.
     * @function verify
     * @memberof VerifyForgotPasswordReqBody
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    VerifyForgotPasswordReqBody.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.forgotPasswordToken != null && message.hasOwnProperty("forgotPasswordToken"))
            if (!$util.isString(message.forgotPasswordToken))
                return "forgotPasswordToken: string expected";
        return null;
    };

    /**
     * Creates a VerifyForgotPasswordReqBody message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof VerifyForgotPasswordReqBody
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {VerifyForgotPasswordReqBody} VerifyForgotPasswordReqBody
     */
    VerifyForgotPasswordReqBody.fromObject = function fromObject(object) {
        if (object instanceof $root.VerifyForgotPasswordReqBody)
            return object;
        let message = new $root.VerifyForgotPasswordReqBody();
        if (object.forgotPasswordToken != null)
            message.forgotPasswordToken = String(object.forgotPasswordToken);
        return message;
    };

    /**
     * Creates a plain object from a VerifyForgotPasswordReqBody message. Also converts values to other types if specified.
     * @function toObject
     * @memberof VerifyForgotPasswordReqBody
     * @static
     * @param {VerifyForgotPasswordReqBody} message VerifyForgotPasswordReqBody
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    VerifyForgotPasswordReqBody.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.forgotPasswordToken = "";
        if (message.forgotPasswordToken != null && message.hasOwnProperty("forgotPasswordToken"))
            object.forgotPasswordToken = message.forgotPasswordToken;
        return object;
    };

    /**
     * Converts this VerifyForgotPasswordReqBody to JSON.
     * @function toJSON
     * @memberof VerifyForgotPasswordReqBody
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    VerifyForgotPasswordReqBody.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for VerifyForgotPasswordReqBody
     * @function getTypeUrl
     * @memberof VerifyForgotPasswordReqBody
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    VerifyForgotPasswordReqBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/VerifyForgotPasswordReqBody";
    };

    return VerifyForgotPasswordReqBody;
})();

export const ResetPasswordReqBody = $root.ResetPasswordReqBody = (() => {

    /**
     * Properties of a ResetPasswordReqBody.
     * @exports IResetPasswordReqBody
     * @interface IResetPasswordReqBody
     * @property {string|null} [forgotPasswordToken] ResetPasswordReqBody forgotPasswordToken
     * @property {string|null} [password] ResetPasswordReqBody password
     * @property {string|null} [confirmPassword] ResetPasswordReqBody confirmPassword
     */

    /**
     * Constructs a new ResetPasswordReqBody.
     * @exports ResetPasswordReqBody
     * @classdesc Represents a ResetPasswordReqBody.
     * @implements IResetPasswordReqBody
     * @constructor
     * @param {IResetPasswordReqBody=} [properties] Properties to set
     */
    function ResetPasswordReqBody(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ResetPasswordReqBody forgotPasswordToken.
     * @member {string} forgotPasswordToken
     * @memberof ResetPasswordReqBody
     * @instance
     */
    ResetPasswordReqBody.prototype.forgotPasswordToken = "";

    /**
     * ResetPasswordReqBody password.
     * @member {string} password
     * @memberof ResetPasswordReqBody
     * @instance
     */
    ResetPasswordReqBody.prototype.password = "";

    /**
     * ResetPasswordReqBody confirmPassword.
     * @member {string} confirmPassword
     * @memberof ResetPasswordReqBody
     * @instance
     */
    ResetPasswordReqBody.prototype.confirmPassword = "";

    /**
     * Creates a new ResetPasswordReqBody instance using the specified properties.
     * @function create
     * @memberof ResetPasswordReqBody
     * @static
     * @param {IResetPasswordReqBody=} [properties] Properties to set
     * @returns {ResetPasswordReqBody} ResetPasswordReqBody instance
     */
    ResetPasswordReqBody.create = function create(properties) {
        return new ResetPasswordReqBody(properties);
    };

    /**
     * Encodes the specified ResetPasswordReqBody message. Does not implicitly {@link ResetPasswordReqBody.verify|verify} messages.
     * @function encode
     * @memberof ResetPasswordReqBody
     * @static
     * @param {IResetPasswordReqBody} message ResetPasswordReqBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResetPasswordReqBody.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.forgotPasswordToken != null && Object.hasOwnProperty.call(message, "forgotPasswordToken"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.forgotPasswordToken);
        if (message.password != null && Object.hasOwnProperty.call(message, "password"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
        if (message.confirmPassword != null && Object.hasOwnProperty.call(message, "confirmPassword"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.confirmPassword);
        return writer;
    };

    /**
     * Encodes the specified ResetPasswordReqBody message, length delimited. Does not implicitly {@link ResetPasswordReqBody.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResetPasswordReqBody
     * @static
     * @param {IResetPasswordReqBody} message ResetPasswordReqBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResetPasswordReqBody.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ResetPasswordReqBody message from the specified reader or buffer.
     * @function decode
     * @memberof ResetPasswordReqBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResetPasswordReqBody} ResetPasswordReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResetPasswordReqBody.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResetPasswordReqBody();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.forgotPasswordToken = reader.string();
                    break;
                }
            case 2: {
                    message.password = reader.string();
                    break;
                }
            case 3: {
                    message.confirmPassword = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ResetPasswordReqBody message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResetPasswordReqBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResetPasswordReqBody} ResetPasswordReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResetPasswordReqBody.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ResetPasswordReqBody message.
     * @function verify
     * @memberof ResetPasswordReqBody
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResetPasswordReqBody.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.forgotPasswordToken != null && message.hasOwnProperty("forgotPasswordToken"))
            if (!$util.isString(message.forgotPasswordToken))
                return "forgotPasswordToken: string expected";
        if (message.password != null && message.hasOwnProperty("password"))
            if (!$util.isString(message.password))
                return "password: string expected";
        if (message.confirmPassword != null && message.hasOwnProperty("confirmPassword"))
            if (!$util.isString(message.confirmPassword))
                return "confirmPassword: string expected";
        return null;
    };

    /**
     * Creates a ResetPasswordReqBody message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResetPasswordReqBody
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResetPasswordReqBody} ResetPasswordReqBody
     */
    ResetPasswordReqBody.fromObject = function fromObject(object) {
        if (object instanceof $root.ResetPasswordReqBody)
            return object;
        let message = new $root.ResetPasswordReqBody();
        if (object.forgotPasswordToken != null)
            message.forgotPasswordToken = String(object.forgotPasswordToken);
        if (object.password != null)
            message.password = String(object.password);
        if (object.confirmPassword != null)
            message.confirmPassword = String(object.confirmPassword);
        return message;
    };

    /**
     * Creates a plain object from a ResetPasswordReqBody message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResetPasswordReqBody
     * @static
     * @param {ResetPasswordReqBody} message ResetPasswordReqBody
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResetPasswordReqBody.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.forgotPasswordToken = "";
            object.password = "";
            object.confirmPassword = "";
        }
        if (message.forgotPasswordToken != null && message.hasOwnProperty("forgotPasswordToken"))
            object.forgotPasswordToken = message.forgotPasswordToken;
        if (message.password != null && message.hasOwnProperty("password"))
            object.password = message.password;
        if (message.confirmPassword != null && message.hasOwnProperty("confirmPassword"))
            object.confirmPassword = message.confirmPassword;
        return object;
    };

    /**
     * Converts this ResetPasswordReqBody to JSON.
     * @function toJSON
     * @memberof ResetPasswordReqBody
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResetPasswordReqBody.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ResetPasswordReqBody
     * @function getTypeUrl
     * @memberof ResetPasswordReqBody
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResetPasswordReqBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResetPasswordReqBody";
    };

    return ResetPasswordReqBody;
})();

export const UpdateMeReqBody = $root.UpdateMeReqBody = (() => {

    /**
     * Properties of an UpdateMeReqBody.
     * @exports IUpdateMeReqBody
     * @interface IUpdateMeReqBody
     * @property {string|null} [name] UpdateMeReqBody name
     * @property {string|null} [dateOfBirth] UpdateMeReqBody dateOfBirth
     * @property {string|null} [bio] UpdateMeReqBody bio
     * @property {string|null} [location] UpdateMeReqBody location
     * @property {string|null} [website] UpdateMeReqBody website
     * @property {string|null} [username] UpdateMeReqBody username
     * @property {string|null} [avatar] UpdateMeReqBody avatar
     * @property {string|null} [coverPhoto] UpdateMeReqBody coverPhoto
     */

    /**
     * Constructs a new UpdateMeReqBody.
     * @exports UpdateMeReqBody
     * @classdesc Represents an UpdateMeReqBody.
     * @implements IUpdateMeReqBody
     * @constructor
     * @param {IUpdateMeReqBody=} [properties] Properties to set
     */
    function UpdateMeReqBody(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UpdateMeReqBody name.
     * @member {string} name
     * @memberof UpdateMeReqBody
     * @instance
     */
    UpdateMeReqBody.prototype.name = "";

    /**
     * UpdateMeReqBody dateOfBirth.
     * @member {string} dateOfBirth
     * @memberof UpdateMeReqBody
     * @instance
     */
    UpdateMeReqBody.prototype.dateOfBirth = "";

    /**
     * UpdateMeReqBody bio.
     * @member {string} bio
     * @memberof UpdateMeReqBody
     * @instance
     */
    UpdateMeReqBody.prototype.bio = "";

    /**
     * UpdateMeReqBody location.
     * @member {string} location
     * @memberof UpdateMeReqBody
     * @instance
     */
    UpdateMeReqBody.prototype.location = "";

    /**
     * UpdateMeReqBody website.
     * @member {string} website
     * @memberof UpdateMeReqBody
     * @instance
     */
    UpdateMeReqBody.prototype.website = "";

    /**
     * UpdateMeReqBody username.
     * @member {string} username
     * @memberof UpdateMeReqBody
     * @instance
     */
    UpdateMeReqBody.prototype.username = "";

    /**
     * UpdateMeReqBody avatar.
     * @member {string} avatar
     * @memberof UpdateMeReqBody
     * @instance
     */
    UpdateMeReqBody.prototype.avatar = "";

    /**
     * UpdateMeReqBody coverPhoto.
     * @member {string} coverPhoto
     * @memberof UpdateMeReqBody
     * @instance
     */
    UpdateMeReqBody.prototype.coverPhoto = "";

    /**
     * Creates a new UpdateMeReqBody instance using the specified properties.
     * @function create
     * @memberof UpdateMeReqBody
     * @static
     * @param {IUpdateMeReqBody=} [properties] Properties to set
     * @returns {UpdateMeReqBody} UpdateMeReqBody instance
     */
    UpdateMeReqBody.create = function create(properties) {
        return new UpdateMeReqBody(properties);
    };

    /**
     * Encodes the specified UpdateMeReqBody message. Does not implicitly {@link UpdateMeReqBody.verify|verify} messages.
     * @function encode
     * @memberof UpdateMeReqBody
     * @static
     * @param {IUpdateMeReqBody} message UpdateMeReqBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpdateMeReqBody.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.dateOfBirth != null && Object.hasOwnProperty.call(message, "dateOfBirth"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.dateOfBirth);
        if (message.bio != null && Object.hasOwnProperty.call(message, "bio"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.bio);
        if (message.location != null && Object.hasOwnProperty.call(message, "location"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.location);
        if (message.website != null && Object.hasOwnProperty.call(message, "website"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.website);
        if (message.username != null && Object.hasOwnProperty.call(message, "username"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.username);
        if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.avatar);
        if (message.coverPhoto != null && Object.hasOwnProperty.call(message, "coverPhoto"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.coverPhoto);
        return writer;
    };

    /**
     * Encodes the specified UpdateMeReqBody message, length delimited. Does not implicitly {@link UpdateMeReqBody.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UpdateMeReqBody
     * @static
     * @param {IUpdateMeReqBody} message UpdateMeReqBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UpdateMeReqBody.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an UpdateMeReqBody message from the specified reader or buffer.
     * @function decode
     * @memberof UpdateMeReqBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UpdateMeReqBody} UpdateMeReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpdateMeReqBody.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.UpdateMeReqBody();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.name = reader.string();
                    break;
                }
            case 2: {
                    message.dateOfBirth = reader.string();
                    break;
                }
            case 3: {
                    message.bio = reader.string();
                    break;
                }
            case 4: {
                    message.location = reader.string();
                    break;
                }
            case 5: {
                    message.website = reader.string();
                    break;
                }
            case 6: {
                    message.username = reader.string();
                    break;
                }
            case 7: {
                    message.avatar = reader.string();
                    break;
                }
            case 8: {
                    message.coverPhoto = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an UpdateMeReqBody message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UpdateMeReqBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UpdateMeReqBody} UpdateMeReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UpdateMeReqBody.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an UpdateMeReqBody message.
     * @function verify
     * @memberof UpdateMeReqBody
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UpdateMeReqBody.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.dateOfBirth != null && message.hasOwnProperty("dateOfBirth"))
            if (!$util.isString(message.dateOfBirth))
                return "dateOfBirth: string expected";
        if (message.bio != null && message.hasOwnProperty("bio"))
            if (!$util.isString(message.bio))
                return "bio: string expected";
        if (message.location != null && message.hasOwnProperty("location"))
            if (!$util.isString(message.location))
                return "location: string expected";
        if (message.website != null && message.hasOwnProperty("website"))
            if (!$util.isString(message.website))
                return "website: string expected";
        if (message.username != null && message.hasOwnProperty("username"))
            if (!$util.isString(message.username))
                return "username: string expected";
        if (message.avatar != null && message.hasOwnProperty("avatar"))
            if (!$util.isString(message.avatar))
                return "avatar: string expected";
        if (message.coverPhoto != null && message.hasOwnProperty("coverPhoto"))
            if (!$util.isString(message.coverPhoto))
                return "coverPhoto: string expected";
        return null;
    };

    /**
     * Creates an UpdateMeReqBody message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UpdateMeReqBody
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UpdateMeReqBody} UpdateMeReqBody
     */
    UpdateMeReqBody.fromObject = function fromObject(object) {
        if (object instanceof $root.UpdateMeReqBody)
            return object;
        let message = new $root.UpdateMeReqBody();
        if (object.name != null)
            message.name = String(object.name);
        if (object.dateOfBirth != null)
            message.dateOfBirth = String(object.dateOfBirth);
        if (object.bio != null)
            message.bio = String(object.bio);
        if (object.location != null)
            message.location = String(object.location);
        if (object.website != null)
            message.website = String(object.website);
        if (object.username != null)
            message.username = String(object.username);
        if (object.avatar != null)
            message.avatar = String(object.avatar);
        if (object.coverPhoto != null)
            message.coverPhoto = String(object.coverPhoto);
        return message;
    };

    /**
     * Creates a plain object from an UpdateMeReqBody message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UpdateMeReqBody
     * @static
     * @param {UpdateMeReqBody} message UpdateMeReqBody
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UpdateMeReqBody.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.name = "";
            object.dateOfBirth = "";
            object.bio = "";
            object.location = "";
            object.website = "";
            object.username = "";
            object.avatar = "";
            object.coverPhoto = "";
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.dateOfBirth != null && message.hasOwnProperty("dateOfBirth"))
            object.dateOfBirth = message.dateOfBirth;
        if (message.bio != null && message.hasOwnProperty("bio"))
            object.bio = message.bio;
        if (message.location != null && message.hasOwnProperty("location"))
            object.location = message.location;
        if (message.website != null && message.hasOwnProperty("website"))
            object.website = message.website;
        if (message.username != null && message.hasOwnProperty("username"))
            object.username = message.username;
        if (message.avatar != null && message.hasOwnProperty("avatar"))
            object.avatar = message.avatar;
        if (message.coverPhoto != null && message.hasOwnProperty("coverPhoto"))
            object.coverPhoto = message.coverPhoto;
        return object;
    };

    /**
     * Converts this UpdateMeReqBody to JSON.
     * @function toJSON
     * @memberof UpdateMeReqBody
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UpdateMeReqBody.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for UpdateMeReqBody
     * @function getTypeUrl
     * @memberof UpdateMeReqBody
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    UpdateMeReqBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/UpdateMeReqBody";
    };

    return UpdateMeReqBody;
})();

export const GetProfileReqParams = $root.GetProfileReqParams = (() => {

    /**
     * Properties of a GetProfileReqParams.
     * @exports IGetProfileReqParams
     * @interface IGetProfileReqParams
     * @property {string|null} [username] GetProfileReqParams username
     */

    /**
     * Constructs a new GetProfileReqParams.
     * @exports GetProfileReqParams
     * @classdesc Represents a GetProfileReqParams.
     * @implements IGetProfileReqParams
     * @constructor
     * @param {IGetProfileReqParams=} [properties] Properties to set
     */
    function GetProfileReqParams(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetProfileReqParams username.
     * @member {string} username
     * @memberof GetProfileReqParams
     * @instance
     */
    GetProfileReqParams.prototype.username = "";

    /**
     * Creates a new GetProfileReqParams instance using the specified properties.
     * @function create
     * @memberof GetProfileReqParams
     * @static
     * @param {IGetProfileReqParams=} [properties] Properties to set
     * @returns {GetProfileReqParams} GetProfileReqParams instance
     */
    GetProfileReqParams.create = function create(properties) {
        return new GetProfileReqParams(properties);
    };

    /**
     * Encodes the specified GetProfileReqParams message. Does not implicitly {@link GetProfileReqParams.verify|verify} messages.
     * @function encode
     * @memberof GetProfileReqParams
     * @static
     * @param {IGetProfileReqParams} message GetProfileReqParams message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetProfileReqParams.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.username != null && Object.hasOwnProperty.call(message, "username"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
        return writer;
    };

    /**
     * Encodes the specified GetProfileReqParams message, length delimited. Does not implicitly {@link GetProfileReqParams.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetProfileReqParams
     * @static
     * @param {IGetProfileReqParams} message GetProfileReqParams message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetProfileReqParams.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetProfileReqParams message from the specified reader or buffer.
     * @function decode
     * @memberof GetProfileReqParams
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetProfileReqParams} GetProfileReqParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetProfileReqParams.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetProfileReqParams();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.username = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetProfileReqParams message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetProfileReqParams
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetProfileReqParams} GetProfileReqParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetProfileReqParams.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetProfileReqParams message.
     * @function verify
     * @memberof GetProfileReqParams
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetProfileReqParams.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.username != null && message.hasOwnProperty("username"))
            if (!$util.isString(message.username))
                return "username: string expected";
        return null;
    };

    /**
     * Creates a GetProfileReqParams message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetProfileReqParams
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetProfileReqParams} GetProfileReqParams
     */
    GetProfileReqParams.fromObject = function fromObject(object) {
        if (object instanceof $root.GetProfileReqParams)
            return object;
        let message = new $root.GetProfileReqParams();
        if (object.username != null)
            message.username = String(object.username);
        return message;
    };

    /**
     * Creates a plain object from a GetProfileReqParams message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetProfileReqParams
     * @static
     * @param {GetProfileReqParams} message GetProfileReqParams
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetProfileReqParams.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.username = "";
        if (message.username != null && message.hasOwnProperty("username"))
            object.username = message.username;
        return object;
    };

    /**
     * Converts this GetProfileReqParams to JSON.
     * @function toJSON
     * @memberof GetProfileReqParams
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetProfileReqParams.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GetProfileReqParams
     * @function getTypeUrl
     * @memberof GetProfileReqParams
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GetProfileReqParams.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GetProfileReqParams";
    };

    return GetProfileReqParams;
})();

export const FollowReqBody = $root.FollowReqBody = (() => {

    /**
     * Properties of a FollowReqBody.
     * @exports IFollowReqBody
     * @interface IFollowReqBody
     * @property {string|null} [followedUserId] FollowReqBody followedUserId
     */

    /**
     * Constructs a new FollowReqBody.
     * @exports FollowReqBody
     * @classdesc Represents a FollowReqBody.
     * @implements IFollowReqBody
     * @constructor
     * @param {IFollowReqBody=} [properties] Properties to set
     */
    function FollowReqBody(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FollowReqBody followedUserId.
     * @member {string} followedUserId
     * @memberof FollowReqBody
     * @instance
     */
    FollowReqBody.prototype.followedUserId = "";

    /**
     * Creates a new FollowReqBody instance using the specified properties.
     * @function create
     * @memberof FollowReqBody
     * @static
     * @param {IFollowReqBody=} [properties] Properties to set
     * @returns {FollowReqBody} FollowReqBody instance
     */
    FollowReqBody.create = function create(properties) {
        return new FollowReqBody(properties);
    };

    /**
     * Encodes the specified FollowReqBody message. Does not implicitly {@link FollowReqBody.verify|verify} messages.
     * @function encode
     * @memberof FollowReqBody
     * @static
     * @param {IFollowReqBody} message FollowReqBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FollowReqBody.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.followedUserId != null && Object.hasOwnProperty.call(message, "followedUserId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.followedUserId);
        return writer;
    };

    /**
     * Encodes the specified FollowReqBody message, length delimited. Does not implicitly {@link FollowReqBody.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FollowReqBody
     * @static
     * @param {IFollowReqBody} message FollowReqBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FollowReqBody.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FollowReqBody message from the specified reader or buffer.
     * @function decode
     * @memberof FollowReqBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FollowReqBody} FollowReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FollowReqBody.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.FollowReqBody();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.followedUserId = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FollowReqBody message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FollowReqBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FollowReqBody} FollowReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FollowReqBody.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FollowReqBody message.
     * @function verify
     * @memberof FollowReqBody
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FollowReqBody.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.followedUserId != null && message.hasOwnProperty("followedUserId"))
            if (!$util.isString(message.followedUserId))
                return "followedUserId: string expected";
        return null;
    };

    /**
     * Creates a FollowReqBody message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FollowReqBody
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FollowReqBody} FollowReqBody
     */
    FollowReqBody.fromObject = function fromObject(object) {
        if (object instanceof $root.FollowReqBody)
            return object;
        let message = new $root.FollowReqBody();
        if (object.followedUserId != null)
            message.followedUserId = String(object.followedUserId);
        return message;
    };

    /**
     * Creates a plain object from a FollowReqBody message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FollowReqBody
     * @static
     * @param {FollowReqBody} message FollowReqBody
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FollowReqBody.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.followedUserId = "";
        if (message.followedUserId != null && message.hasOwnProperty("followedUserId"))
            object.followedUserId = message.followedUserId;
        return object;
    };

    /**
     * Converts this FollowReqBody to JSON.
     * @function toJSON
     * @memberof FollowReqBody
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FollowReqBody.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for FollowReqBody
     * @function getTypeUrl
     * @memberof FollowReqBody
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    FollowReqBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/FollowReqBody";
    };

    return FollowReqBody;
})();

export const UnfollowReqParams = $root.UnfollowReqParams = (() => {

    /**
     * Properties of an UnfollowReqParams.
     * @exports IUnfollowReqParams
     * @interface IUnfollowReqParams
     * @property {string|null} [userId] UnfollowReqParams userId
     */

    /**
     * Constructs a new UnfollowReqParams.
     * @exports UnfollowReqParams
     * @classdesc Represents an UnfollowReqParams.
     * @implements IUnfollowReqParams
     * @constructor
     * @param {IUnfollowReqParams=} [properties] Properties to set
     */
    function UnfollowReqParams(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UnfollowReqParams userId.
     * @member {string} userId
     * @memberof UnfollowReqParams
     * @instance
     */
    UnfollowReqParams.prototype.userId = "";

    /**
     * Creates a new UnfollowReqParams instance using the specified properties.
     * @function create
     * @memberof UnfollowReqParams
     * @static
     * @param {IUnfollowReqParams=} [properties] Properties to set
     * @returns {UnfollowReqParams} UnfollowReqParams instance
     */
    UnfollowReqParams.create = function create(properties) {
        return new UnfollowReqParams(properties);
    };

    /**
     * Encodes the specified UnfollowReqParams message. Does not implicitly {@link UnfollowReqParams.verify|verify} messages.
     * @function encode
     * @memberof UnfollowReqParams
     * @static
     * @param {IUnfollowReqParams} message UnfollowReqParams message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UnfollowReqParams.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
        return writer;
    };

    /**
     * Encodes the specified UnfollowReqParams message, length delimited. Does not implicitly {@link UnfollowReqParams.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UnfollowReqParams
     * @static
     * @param {IUnfollowReqParams} message UnfollowReqParams message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UnfollowReqParams.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an UnfollowReqParams message from the specified reader or buffer.
     * @function decode
     * @memberof UnfollowReqParams
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UnfollowReqParams} UnfollowReqParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UnfollowReqParams.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.UnfollowReqParams();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.userId = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an UnfollowReqParams message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UnfollowReqParams
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UnfollowReqParams} UnfollowReqParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UnfollowReqParams.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an UnfollowReqParams message.
     * @function verify
     * @memberof UnfollowReqParams
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UnfollowReqParams.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isString(message.userId))
                return "userId: string expected";
        return null;
    };

    /**
     * Creates an UnfollowReqParams message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UnfollowReqParams
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UnfollowReqParams} UnfollowReqParams
     */
    UnfollowReqParams.fromObject = function fromObject(object) {
        if (object instanceof $root.UnfollowReqParams)
            return object;
        let message = new $root.UnfollowReqParams();
        if (object.userId != null)
            message.userId = String(object.userId);
        return message;
    };

    /**
     * Creates a plain object from an UnfollowReqParams message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UnfollowReqParams
     * @static
     * @param {UnfollowReqParams} message UnfollowReqParams
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UnfollowReqParams.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.userId = "";
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        return object;
    };

    /**
     * Converts this UnfollowReqParams to JSON.
     * @function toJSON
     * @memberof UnfollowReqParams
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UnfollowReqParams.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for UnfollowReqParams
     * @function getTypeUrl
     * @memberof UnfollowReqParams
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    UnfollowReqParams.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/UnfollowReqParams";
    };

    return UnfollowReqParams;
})();

export const ChangePasswordReqBody = $root.ChangePasswordReqBody = (() => {

    /**
     * Properties of a ChangePasswordReqBody.
     * @exports IChangePasswordReqBody
     * @interface IChangePasswordReqBody
     * @property {string|null} [oldPassword] ChangePasswordReqBody oldPassword
     * @property {string|null} [password] ChangePasswordReqBody password
     * @property {string|null} [confirmPassword] ChangePasswordReqBody confirmPassword
     */

    /**
     * Constructs a new ChangePasswordReqBody.
     * @exports ChangePasswordReqBody
     * @classdesc Represents a ChangePasswordReqBody.
     * @implements IChangePasswordReqBody
     * @constructor
     * @param {IChangePasswordReqBody=} [properties] Properties to set
     */
    function ChangePasswordReqBody(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChangePasswordReqBody oldPassword.
     * @member {string} oldPassword
     * @memberof ChangePasswordReqBody
     * @instance
     */
    ChangePasswordReqBody.prototype.oldPassword = "";

    /**
     * ChangePasswordReqBody password.
     * @member {string} password
     * @memberof ChangePasswordReqBody
     * @instance
     */
    ChangePasswordReqBody.prototype.password = "";

    /**
     * ChangePasswordReqBody confirmPassword.
     * @member {string} confirmPassword
     * @memberof ChangePasswordReqBody
     * @instance
     */
    ChangePasswordReqBody.prototype.confirmPassword = "";

    /**
     * Creates a new ChangePasswordReqBody instance using the specified properties.
     * @function create
     * @memberof ChangePasswordReqBody
     * @static
     * @param {IChangePasswordReqBody=} [properties] Properties to set
     * @returns {ChangePasswordReqBody} ChangePasswordReqBody instance
     */
    ChangePasswordReqBody.create = function create(properties) {
        return new ChangePasswordReqBody(properties);
    };

    /**
     * Encodes the specified ChangePasswordReqBody message. Does not implicitly {@link ChangePasswordReqBody.verify|verify} messages.
     * @function encode
     * @memberof ChangePasswordReqBody
     * @static
     * @param {IChangePasswordReqBody} message ChangePasswordReqBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChangePasswordReqBody.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.oldPassword != null && Object.hasOwnProperty.call(message, "oldPassword"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.oldPassword);
        if (message.password != null && Object.hasOwnProperty.call(message, "password"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
        if (message.confirmPassword != null && Object.hasOwnProperty.call(message, "confirmPassword"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.confirmPassword);
        return writer;
    };

    /**
     * Encodes the specified ChangePasswordReqBody message, length delimited. Does not implicitly {@link ChangePasswordReqBody.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChangePasswordReqBody
     * @static
     * @param {IChangePasswordReqBody} message ChangePasswordReqBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChangePasswordReqBody.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChangePasswordReqBody message from the specified reader or buffer.
     * @function decode
     * @memberof ChangePasswordReqBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChangePasswordReqBody} ChangePasswordReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChangePasswordReqBody.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChangePasswordReqBody();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.oldPassword = reader.string();
                    break;
                }
            case 2: {
                    message.password = reader.string();
                    break;
                }
            case 3: {
                    message.confirmPassword = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ChangePasswordReqBody message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChangePasswordReqBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChangePasswordReqBody} ChangePasswordReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChangePasswordReqBody.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ChangePasswordReqBody message.
     * @function verify
     * @memberof ChangePasswordReqBody
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ChangePasswordReqBody.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.oldPassword != null && message.hasOwnProperty("oldPassword"))
            if (!$util.isString(message.oldPassword))
                return "oldPassword: string expected";
        if (message.password != null && message.hasOwnProperty("password"))
            if (!$util.isString(message.password))
                return "password: string expected";
        if (message.confirmPassword != null && message.hasOwnProperty("confirmPassword"))
            if (!$util.isString(message.confirmPassword))
                return "confirmPassword: string expected";
        return null;
    };

    /**
     * Creates a ChangePasswordReqBody message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChangePasswordReqBody
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChangePasswordReqBody} ChangePasswordReqBody
     */
    ChangePasswordReqBody.fromObject = function fromObject(object) {
        if (object instanceof $root.ChangePasswordReqBody)
            return object;
        let message = new $root.ChangePasswordReqBody();
        if (object.oldPassword != null)
            message.oldPassword = String(object.oldPassword);
        if (object.password != null)
            message.password = String(object.password);
        if (object.confirmPassword != null)
            message.confirmPassword = String(object.confirmPassword);
        return message;
    };

    /**
     * Creates a plain object from a ChangePasswordReqBody message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChangePasswordReqBody
     * @static
     * @param {ChangePasswordReqBody} message ChangePasswordReqBody
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChangePasswordReqBody.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.oldPassword = "";
            object.password = "";
            object.confirmPassword = "";
        }
        if (message.oldPassword != null && message.hasOwnProperty("oldPassword"))
            object.oldPassword = message.oldPassword;
        if (message.password != null && message.hasOwnProperty("password"))
            object.password = message.password;
        if (message.confirmPassword != null && message.hasOwnProperty("confirmPassword"))
            object.confirmPassword = message.confirmPassword;
        return object;
    };

    /**
     * Converts this ChangePasswordReqBody to JSON.
     * @function toJSON
     * @memberof ChangePasswordReqBody
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChangePasswordReqBody.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ChangePasswordReqBody
     * @function getTypeUrl
     * @memberof ChangePasswordReqBody
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ChangePasswordReqBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ChangePasswordReqBody";
    };

    return ChangePasswordReqBody;
})();

export const RefreshTokenReqBody = $root.RefreshTokenReqBody = (() => {

    /**
     * Properties of a RefreshTokenReqBody.
     * @exports IRefreshTokenReqBody
     * @interface IRefreshTokenReqBody
     * @property {string|null} [refreshToken] RefreshTokenReqBody refreshToken
     */

    /**
     * Constructs a new RefreshTokenReqBody.
     * @exports RefreshTokenReqBody
     * @classdesc Represents a RefreshTokenReqBody.
     * @implements IRefreshTokenReqBody
     * @constructor
     * @param {IRefreshTokenReqBody=} [properties] Properties to set
     */
    function RefreshTokenReqBody(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RefreshTokenReqBody refreshToken.
     * @member {string} refreshToken
     * @memberof RefreshTokenReqBody
     * @instance
     */
    RefreshTokenReqBody.prototype.refreshToken = "";

    /**
     * Creates a new RefreshTokenReqBody instance using the specified properties.
     * @function create
     * @memberof RefreshTokenReqBody
     * @static
     * @param {IRefreshTokenReqBody=} [properties] Properties to set
     * @returns {RefreshTokenReqBody} RefreshTokenReqBody instance
     */
    RefreshTokenReqBody.create = function create(properties) {
        return new RefreshTokenReqBody(properties);
    };

    /**
     * Encodes the specified RefreshTokenReqBody message. Does not implicitly {@link RefreshTokenReqBody.verify|verify} messages.
     * @function encode
     * @memberof RefreshTokenReqBody
     * @static
     * @param {IRefreshTokenReqBody} message RefreshTokenReqBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RefreshTokenReqBody.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.refreshToken != null && Object.hasOwnProperty.call(message, "refreshToken"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.refreshToken);
        return writer;
    };

    /**
     * Encodes the specified RefreshTokenReqBody message, length delimited. Does not implicitly {@link RefreshTokenReqBody.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RefreshTokenReqBody
     * @static
     * @param {IRefreshTokenReqBody} message RefreshTokenReqBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RefreshTokenReqBody.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RefreshTokenReqBody message from the specified reader or buffer.
     * @function decode
     * @memberof RefreshTokenReqBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RefreshTokenReqBody} RefreshTokenReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RefreshTokenReqBody.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RefreshTokenReqBody();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.refreshToken = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RefreshTokenReqBody message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RefreshTokenReqBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RefreshTokenReqBody} RefreshTokenReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RefreshTokenReqBody.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RefreshTokenReqBody message.
     * @function verify
     * @memberof RefreshTokenReqBody
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RefreshTokenReqBody.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
            if (!$util.isString(message.refreshToken))
                return "refreshToken: string expected";
        return null;
    };

    /**
     * Creates a RefreshTokenReqBody message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RefreshTokenReqBody
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RefreshTokenReqBody} RefreshTokenReqBody
     */
    RefreshTokenReqBody.fromObject = function fromObject(object) {
        if (object instanceof $root.RefreshTokenReqBody)
            return object;
        let message = new $root.RefreshTokenReqBody();
        if (object.refreshToken != null)
            message.refreshToken = String(object.refreshToken);
        return message;
    };

    /**
     * Creates a plain object from a RefreshTokenReqBody message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RefreshTokenReqBody
     * @static
     * @param {RefreshTokenReqBody} message RefreshTokenReqBody
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RefreshTokenReqBody.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.refreshToken = "";
        if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
            object.refreshToken = message.refreshToken;
        return object;
    };

    /**
     * Converts this RefreshTokenReqBody to JSON.
     * @function toJSON
     * @memberof RefreshTokenReqBody
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RefreshTokenReqBody.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RefreshTokenReqBody
     * @function getTypeUrl
     * @memberof RefreshTokenReqBody
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RefreshTokenReqBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RefreshTokenReqBody";
    };

    return RefreshTokenReqBody;
})();

export const TestReqBody21 = $root.TestReqBody21 = (() => {

    /**
     * Properties of a TestReqBody21.
     * @exports ITestReqBody21
     * @interface ITestReqBody21
     * @property {string|null} [testString] TestReqBody21 testString
     */

    /**
     * Constructs a new TestReqBody21.
     * @exports TestReqBody21
     * @classdesc Represents a TestReqBody21.
     * @implements ITestReqBody21
     * @constructor
     * @param {ITestReqBody21=} [properties] Properties to set
     */
    function TestReqBody21(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TestReqBody21 testString.
     * @member {string} testString
     * @memberof TestReqBody21
     * @instance
     */
    TestReqBody21.prototype.testString = "";

    /**
     * Creates a new TestReqBody21 instance using the specified properties.
     * @function create
     * @memberof TestReqBody21
     * @static
     * @param {ITestReqBody21=} [properties] Properties to set
     * @returns {TestReqBody21} TestReqBody21 instance
     */
    TestReqBody21.create = function create(properties) {
        return new TestReqBody21(properties);
    };

    /**
     * Encodes the specified TestReqBody21 message. Does not implicitly {@link TestReqBody21.verify|verify} messages.
     * @function encode
     * @memberof TestReqBody21
     * @static
     * @param {ITestReqBody21} message TestReqBody21 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TestReqBody21.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.testString != null && Object.hasOwnProperty.call(message, "testString"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.testString);
        return writer;
    };

    /**
     * Encodes the specified TestReqBody21 message, length delimited. Does not implicitly {@link TestReqBody21.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TestReqBody21
     * @static
     * @param {ITestReqBody21} message TestReqBody21 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TestReqBody21.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TestReqBody21 message from the specified reader or buffer.
     * @function decode
     * @memberof TestReqBody21
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TestReqBody21} TestReqBody21
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TestReqBody21.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.TestReqBody21();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.testString = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TestReqBody21 message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TestReqBody21
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TestReqBody21} TestReqBody21
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TestReqBody21.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TestReqBody21 message.
     * @function verify
     * @memberof TestReqBody21
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TestReqBody21.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.testString != null && message.hasOwnProperty("testString"))
            if (!$util.isString(message.testString))
                return "testString: string expected";
        return null;
    };

    /**
     * Creates a TestReqBody21 message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TestReqBody21
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TestReqBody21} TestReqBody21
     */
    TestReqBody21.fromObject = function fromObject(object) {
        if (object instanceof $root.TestReqBody21)
            return object;
        let message = new $root.TestReqBody21();
        if (object.testString != null)
            message.testString = String(object.testString);
        return message;
    };

    /**
     * Creates a plain object from a TestReqBody21 message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TestReqBody21
     * @static
     * @param {TestReqBody21} message TestReqBody21
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TestReqBody21.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.testString = "";
        if (message.testString != null && message.hasOwnProperty("testString"))
            object.testString = message.testString;
        return object;
    };

    /**
     * Converts this TestReqBody21 to JSON.
     * @function toJSON
     * @memberof TestReqBody21
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TestReqBody21.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for TestReqBody21
     * @function getTypeUrl
     * @memberof TestReqBody21
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    TestReqBody21.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/TestReqBody21";
    };

    return TestReqBody21;
})();

export const UserVerifyStatus = $root.UserVerifyStatus = (() => {

    /**
     * Properties of a UserVerifyStatus.
     * @exports IUserVerifyStatus
     * @interface IUserVerifyStatus
     * @property {number|null} [Unverified] UserVerifyStatus Unverified
     * @property {number|null} [Verified] UserVerifyStatus Verified
     * @property {number|null} [Banned] UserVerifyStatus Banned
     */

    /**
     * Constructs a new UserVerifyStatus.
     * @exports UserVerifyStatus
     * @classdesc Represents a UserVerifyStatus.
     * @implements IUserVerifyStatus
     * @constructor
     * @param {IUserVerifyStatus=} [properties] Properties to set
     */
    function UserVerifyStatus(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserVerifyStatus Unverified.
     * @member {number} Unverified
     * @memberof UserVerifyStatus
     * @instance
     */
    UserVerifyStatus.prototype.Unverified = 0;

    /**
     * UserVerifyStatus Verified.
     * @member {number} Verified
     * @memberof UserVerifyStatus
     * @instance
     */
    UserVerifyStatus.prototype.Verified = 0;

    /**
     * UserVerifyStatus Banned.
     * @member {number} Banned
     * @memberof UserVerifyStatus
     * @instance
     */
    UserVerifyStatus.prototype.Banned = 0;

    /**
     * Creates a new UserVerifyStatus instance using the specified properties.
     * @function create
     * @memberof UserVerifyStatus
     * @static
     * @param {IUserVerifyStatus=} [properties] Properties to set
     * @returns {UserVerifyStatus} UserVerifyStatus instance
     */
    UserVerifyStatus.create = function create(properties) {
        return new UserVerifyStatus(properties);
    };

    /**
     * Encodes the specified UserVerifyStatus message. Does not implicitly {@link UserVerifyStatus.verify|verify} messages.
     * @function encode
     * @memberof UserVerifyStatus
     * @static
     * @param {IUserVerifyStatus} message UserVerifyStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserVerifyStatus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Unverified != null && Object.hasOwnProperty.call(message, "Unverified"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Unverified);
        if (message.Verified != null && Object.hasOwnProperty.call(message, "Verified"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Verified);
        if (message.Banned != null && Object.hasOwnProperty.call(message, "Banned"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Banned);
        return writer;
    };

    /**
     * Encodes the specified UserVerifyStatus message, length delimited. Does not implicitly {@link UserVerifyStatus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserVerifyStatus
     * @static
     * @param {IUserVerifyStatus} message UserVerifyStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserVerifyStatus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserVerifyStatus message from the specified reader or buffer.
     * @function decode
     * @memberof UserVerifyStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserVerifyStatus} UserVerifyStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserVerifyStatus.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserVerifyStatus();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.Unverified = reader.int32();
                    break;
                }
            case 2: {
                    message.Verified = reader.int32();
                    break;
                }
            case 3: {
                    message.Banned = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UserVerifyStatus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserVerifyStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserVerifyStatus} UserVerifyStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserVerifyStatus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserVerifyStatus message.
     * @function verify
     * @memberof UserVerifyStatus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserVerifyStatus.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Unverified != null && message.hasOwnProperty("Unverified"))
            if (!$util.isInteger(message.Unverified))
                return "Unverified: integer expected";
        if (message.Verified != null && message.hasOwnProperty("Verified"))
            if (!$util.isInteger(message.Verified))
                return "Verified: integer expected";
        if (message.Banned != null && message.hasOwnProperty("Banned"))
            if (!$util.isInteger(message.Banned))
                return "Banned: integer expected";
        return null;
    };

    /**
     * Creates a UserVerifyStatus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserVerifyStatus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserVerifyStatus} UserVerifyStatus
     */
    UserVerifyStatus.fromObject = function fromObject(object) {
        if (object instanceof $root.UserVerifyStatus)
            return object;
        let message = new $root.UserVerifyStatus();
        if (object.Unverified != null)
            message.Unverified = object.Unverified | 0;
        if (object.Verified != null)
            message.Verified = object.Verified | 0;
        if (object.Banned != null)
            message.Banned = object.Banned | 0;
        return message;
    };

    /**
     * Creates a plain object from a UserVerifyStatus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserVerifyStatus
     * @static
     * @param {UserVerifyStatus} message UserVerifyStatus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserVerifyStatus.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.Unverified = 0;
            object.Verified = 0;
            object.Banned = 0;
        }
        if (message.Unverified != null && message.hasOwnProperty("Unverified"))
            object.Unverified = message.Unverified;
        if (message.Verified != null && message.hasOwnProperty("Verified"))
            object.Verified = message.Verified;
        if (message.Banned != null && message.hasOwnProperty("Banned"))
            object.Banned = message.Banned;
        return object;
    };

    /**
     * Converts this UserVerifyStatus to JSON.
     * @function toJSON
     * @memberof UserVerifyStatus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserVerifyStatus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for UserVerifyStatus
     * @function getTypeUrl
     * @memberof UserVerifyStatus
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    UserVerifyStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/UserVerifyStatus";
    };

    return UserVerifyStatus;
})();

export const TokenType = $root.TokenType = (() => {

    /**
     * Properties of a TokenType.
     * @exports ITokenType
     * @interface ITokenType
     * @property {number|null} [AccessToken] TokenType AccessToken
     * @property {number|null} [RefreshToken] TokenType RefreshToken
     * @property {number|null} [ForgotPasswordToken] TokenType ForgotPasswordToken
     * @property {number|null} [EmailVerificationToken] TokenType EmailVerificationToken
     */

    /**
     * Constructs a new TokenType.
     * @exports TokenType
     * @classdesc Represents a TokenType.
     * @implements ITokenType
     * @constructor
     * @param {ITokenType=} [properties] Properties to set
     */
    function TokenType(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TokenType AccessToken.
     * @member {number} AccessToken
     * @memberof TokenType
     * @instance
     */
    TokenType.prototype.AccessToken = 0;

    /**
     * TokenType RefreshToken.
     * @member {number} RefreshToken
     * @memberof TokenType
     * @instance
     */
    TokenType.prototype.RefreshToken = 0;

    /**
     * TokenType ForgotPasswordToken.
     * @member {number} ForgotPasswordToken
     * @memberof TokenType
     * @instance
     */
    TokenType.prototype.ForgotPasswordToken = 0;

    /**
     * TokenType EmailVerificationToken.
     * @member {number} EmailVerificationToken
     * @memberof TokenType
     * @instance
     */
    TokenType.prototype.EmailVerificationToken = 0;

    /**
     * Creates a new TokenType instance using the specified properties.
     * @function create
     * @memberof TokenType
     * @static
     * @param {ITokenType=} [properties] Properties to set
     * @returns {TokenType} TokenType instance
     */
    TokenType.create = function create(properties) {
        return new TokenType(properties);
    };

    /**
     * Encodes the specified TokenType message. Does not implicitly {@link TokenType.verify|verify} messages.
     * @function encode
     * @memberof TokenType
     * @static
     * @param {ITokenType} message TokenType message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TokenType.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.AccessToken != null && Object.hasOwnProperty.call(message, "AccessToken"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.AccessToken);
        if (message.RefreshToken != null && Object.hasOwnProperty.call(message, "RefreshToken"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.RefreshToken);
        if (message.ForgotPasswordToken != null && Object.hasOwnProperty.call(message, "ForgotPasswordToken"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ForgotPasswordToken);
        if (message.EmailVerificationToken != null && Object.hasOwnProperty.call(message, "EmailVerificationToken"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.EmailVerificationToken);
        return writer;
    };

    /**
     * Encodes the specified TokenType message, length delimited. Does not implicitly {@link TokenType.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TokenType
     * @static
     * @param {ITokenType} message TokenType message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TokenType.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TokenType message from the specified reader or buffer.
     * @function decode
     * @memberof TokenType
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TokenType} TokenType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TokenType.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.TokenType();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.AccessToken = reader.int32();
                    break;
                }
            case 2: {
                    message.RefreshToken = reader.int32();
                    break;
                }
            case 3: {
                    message.ForgotPasswordToken = reader.int32();
                    break;
                }
            case 4: {
                    message.EmailVerificationToken = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TokenType message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TokenType
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TokenType} TokenType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TokenType.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TokenType message.
     * @function verify
     * @memberof TokenType
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TokenType.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.AccessToken != null && message.hasOwnProperty("AccessToken"))
            if (!$util.isInteger(message.AccessToken))
                return "AccessToken: integer expected";
        if (message.RefreshToken != null && message.hasOwnProperty("RefreshToken"))
            if (!$util.isInteger(message.RefreshToken))
                return "RefreshToken: integer expected";
        if (message.ForgotPasswordToken != null && message.hasOwnProperty("ForgotPasswordToken"))
            if (!$util.isInteger(message.ForgotPasswordToken))
                return "ForgotPasswordToken: integer expected";
        if (message.EmailVerificationToken != null && message.hasOwnProperty("EmailVerificationToken"))
            if (!$util.isInteger(message.EmailVerificationToken))
                return "EmailVerificationToken: integer expected";
        return null;
    };

    /**
     * Creates a TokenType message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TokenType
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TokenType} TokenType
     */
    TokenType.fromObject = function fromObject(object) {
        if (object instanceof $root.TokenType)
            return object;
        let message = new $root.TokenType();
        if (object.AccessToken != null)
            message.AccessToken = object.AccessToken | 0;
        if (object.RefreshToken != null)
            message.RefreshToken = object.RefreshToken | 0;
        if (object.ForgotPasswordToken != null)
            message.ForgotPasswordToken = object.ForgotPasswordToken | 0;
        if (object.EmailVerificationToken != null)
            message.EmailVerificationToken = object.EmailVerificationToken | 0;
        return message;
    };

    /**
     * Creates a plain object from a TokenType message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TokenType
     * @static
     * @param {TokenType} message TokenType
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TokenType.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.AccessToken = 0;
            object.RefreshToken = 0;
            object.ForgotPasswordToken = 0;
            object.EmailVerificationToken = 0;
        }
        if (message.AccessToken != null && message.hasOwnProperty("AccessToken"))
            object.AccessToken = message.AccessToken;
        if (message.RefreshToken != null && message.hasOwnProperty("RefreshToken"))
            object.RefreshToken = message.RefreshToken;
        if (message.ForgotPasswordToken != null && message.hasOwnProperty("ForgotPasswordToken"))
            object.ForgotPasswordToken = message.ForgotPasswordToken;
        if (message.EmailVerificationToken != null && message.hasOwnProperty("EmailVerificationToken"))
            object.EmailVerificationToken = message.EmailVerificationToken;
        return object;
    };

    /**
     * Converts this TokenType to JSON.
     * @function toJSON
     * @memberof TokenType
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TokenType.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for TokenType
     * @function getTypeUrl
     * @memberof TokenType
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    TokenType.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/TokenType";
    };

    return TokenType;
})();

export const MediaType = $root.MediaType = (() => {

    /**
     * Properties of a MediaType.
     * @exports IMediaType
     * @interface IMediaType
     * @property {number|null} [Image] MediaType Image
     * @property {number|null} [Video] MediaType Video
     */

    /**
     * Constructs a new MediaType.
     * @exports MediaType
     * @classdesc Represents a MediaType.
     * @implements IMediaType
     * @constructor
     * @param {IMediaType=} [properties] Properties to set
     */
    function MediaType(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MediaType Image.
     * @member {number} Image
     * @memberof MediaType
     * @instance
     */
    MediaType.prototype.Image = 0;

    /**
     * MediaType Video.
     * @member {number} Video
     * @memberof MediaType
     * @instance
     */
    MediaType.prototype.Video = 0;

    /**
     * Creates a new MediaType instance using the specified properties.
     * @function create
     * @memberof MediaType
     * @static
     * @param {IMediaType=} [properties] Properties to set
     * @returns {MediaType} MediaType instance
     */
    MediaType.create = function create(properties) {
        return new MediaType(properties);
    };

    /**
     * Encodes the specified MediaType message. Does not implicitly {@link MediaType.verify|verify} messages.
     * @function encode
     * @memberof MediaType
     * @static
     * @param {IMediaType} message MediaType message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MediaType.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Image != null && Object.hasOwnProperty.call(message, "Image"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Image);
        if (message.Video != null && Object.hasOwnProperty.call(message, "Video"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Video);
        return writer;
    };

    /**
     * Encodes the specified MediaType message, length delimited. Does not implicitly {@link MediaType.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MediaType
     * @static
     * @param {IMediaType} message MediaType message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MediaType.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MediaType message from the specified reader or buffer.
     * @function decode
     * @memberof MediaType
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MediaType} MediaType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MediaType.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.MediaType();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.Image = reader.int32();
                    break;
                }
            case 2: {
                    message.Video = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MediaType message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MediaType
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MediaType} MediaType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MediaType.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MediaType message.
     * @function verify
     * @memberof MediaType
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MediaType.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Image != null && message.hasOwnProperty("Image"))
            if (!$util.isInteger(message.Image))
                return "Image: integer expected";
        if (message.Video != null && message.hasOwnProperty("Video"))
            if (!$util.isInteger(message.Video))
                return "Video: integer expected";
        return null;
    };

    /**
     * Creates a MediaType message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MediaType
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MediaType} MediaType
     */
    MediaType.fromObject = function fromObject(object) {
        if (object instanceof $root.MediaType)
            return object;
        let message = new $root.MediaType();
        if (object.Image != null)
            message.Image = object.Image | 0;
        if (object.Video != null)
            message.Video = object.Video | 0;
        return message;
    };

    /**
     * Creates a plain object from a MediaType message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MediaType
     * @static
     * @param {MediaType} message MediaType
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MediaType.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.Image = 0;
            object.Video = 0;
        }
        if (message.Image != null && message.hasOwnProperty("Image"))
            object.Image = message.Image;
        if (message.Video != null && message.hasOwnProperty("Video"))
            object.Video = message.Video;
        return object;
    };

    /**
     * Converts this MediaType to JSON.
     * @function toJSON
     * @memberof MediaType
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MediaType.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for MediaType
     * @function getTypeUrl
     * @memberof MediaType
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    MediaType.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/MediaType";
    };

    return MediaType;
})();

export { $root as default };
