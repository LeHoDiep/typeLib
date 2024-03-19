import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a RegisterReqBody. */
export interface IRegisterReqBody {

    /** RegisterReqBody name */
    name?: (string|null);

    /** RegisterReqBody email */
    email?: (string|null);

    /** RegisterReqBody password */
    password?: (string|null);

    /** RegisterReqBody confirmPassword */
    confirmPassword?: (string|null);

    /** RegisterReqBody dateOfBirth */
    dateOfBirth?: (string|null);
}

/** Represents a RegisterReqBody. */
export class RegisterReqBody implements IRegisterReqBody {

    /**
     * Constructs a new RegisterReqBody.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRegisterReqBody);

    /** RegisterReqBody name. */
    public name: string;

    /** RegisterReqBody email. */
    public email: string;

    /** RegisterReqBody password. */
    public password: string;

    /** RegisterReqBody confirmPassword. */
    public confirmPassword: string;

    /** RegisterReqBody dateOfBirth. */
    public dateOfBirth: string;

    /**
     * Creates a new RegisterReqBody instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RegisterReqBody instance
     */
    public static create(properties?: IRegisterReqBody): RegisterReqBody;

    /**
     * Encodes the specified RegisterReqBody message. Does not implicitly {@link RegisterReqBody.verify|verify} messages.
     * @param message RegisterReqBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRegisterReqBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RegisterReqBody message, length delimited. Does not implicitly {@link RegisterReqBody.verify|verify} messages.
     * @param message RegisterReqBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRegisterReqBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RegisterReqBody message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RegisterReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RegisterReqBody;

    /**
     * Decodes a RegisterReqBody message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RegisterReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RegisterReqBody;

    /**
     * Verifies a RegisterReqBody message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RegisterReqBody message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RegisterReqBody
     */
    public static fromObject(object: { [k: string]: any }): RegisterReqBody;

    /**
     * Creates a plain object from a RegisterReqBody message. Also converts values to other types if specified.
     * @param message RegisterReqBody
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RegisterReqBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RegisterReqBody to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RegisterReqBody
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LogoutReqBody. */
export interface ILogoutReqBody {

    /** LogoutReqBody refreshToken */
    refreshToken?: (string|null);
}

/** Represents a LogoutReqBody. */
export class LogoutReqBody implements ILogoutReqBody {

    /**
     * Constructs a new LogoutReqBody.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILogoutReqBody);

    /** LogoutReqBody refreshToken. */
    public refreshToken: string;

    /**
     * Creates a new LogoutReqBody instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LogoutReqBody instance
     */
    public static create(properties?: ILogoutReqBody): LogoutReqBody;

    /**
     * Encodes the specified LogoutReqBody message. Does not implicitly {@link LogoutReqBody.verify|verify} messages.
     * @param message LogoutReqBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILogoutReqBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LogoutReqBody message, length delimited. Does not implicitly {@link LogoutReqBody.verify|verify} messages.
     * @param message LogoutReqBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILogoutReqBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LogoutReqBody message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LogoutReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LogoutReqBody;

    /**
     * Decodes a LogoutReqBody message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LogoutReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LogoutReqBody;

    /**
     * Verifies a LogoutReqBody message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LogoutReqBody message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LogoutReqBody
     */
    public static fromObject(object: { [k: string]: any }): LogoutReqBody;

    /**
     * Creates a plain object from a LogoutReqBody message. Also converts values to other types if specified.
     * @param message LogoutReqBody
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LogoutReqBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LogoutReqBody to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LogoutReqBody
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a TokenPayload. */
export interface ITokenPayload {

    /** TokenPayload userId */
    userId?: (string|null);

    /** TokenPayload tokenType */
    tokenType?: (ITokenType|null);

    /** TokenPayload verify */
    verify?: (IUserVerifyStatus|null);

    /** TokenPayload exp */
    exp?: (number|null);

    /** TokenPayload iat */
    iat?: (number|null);
}

/** Represents a TokenPayload. */
export class TokenPayload implements ITokenPayload {

    /**
     * Constructs a new TokenPayload.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITokenPayload);

    /** TokenPayload userId. */
    public userId: string;

    /** TokenPayload tokenType. */
    public tokenType?: (ITokenType|null);

    /** TokenPayload verify. */
    public verify?: (IUserVerifyStatus|null);

    /** TokenPayload exp. */
    public exp: number;

    /** TokenPayload iat. */
    public iat: number;

    /**
     * Creates a new TokenPayload instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TokenPayload instance
     */
    public static create(properties?: ITokenPayload): TokenPayload;

    /**
     * Encodes the specified TokenPayload message. Does not implicitly {@link TokenPayload.verify|verify} messages.
     * @param message TokenPayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITokenPayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TokenPayload message, length delimited. Does not implicitly {@link TokenPayload.verify|verify} messages.
     * @param message TokenPayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITokenPayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TokenPayload message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TokenPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TokenPayload;

    /**
     * Decodes a TokenPayload message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TokenPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TokenPayload;

    /**
     * Verifies a TokenPayload message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TokenPayload message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TokenPayload
     */
    public static fromObject(object: { [k: string]: any }): TokenPayload;

    /**
     * Creates a plain object from a TokenPayload message. Also converts values to other types if specified.
     * @param message TokenPayload
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TokenPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TokenPayload to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for TokenPayload
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LoginReqBody. */
export interface ILoginReqBody {

    /** LoginReqBody email */
    email?: (string|null);

    /** LoginReqBody password */
    password?: (string|null);
}

/** Represents a LoginReqBody. */
export class LoginReqBody implements ILoginReqBody {

    /**
     * Constructs a new LoginReqBody.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoginReqBody);

    /** LoginReqBody email. */
    public email: string;

    /** LoginReqBody password. */
    public password: string;

    /**
     * Creates a new LoginReqBody instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginReqBody instance
     */
    public static create(properties?: ILoginReqBody): LoginReqBody;

    /**
     * Encodes the specified LoginReqBody message. Does not implicitly {@link LoginReqBody.verify|verify} messages.
     * @param message LoginReqBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoginReqBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LoginReqBody message, length delimited. Does not implicitly {@link LoginReqBody.verify|verify} messages.
     * @param message LoginReqBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILoginReqBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginReqBody message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginReqBody;

    /**
     * Decodes a LoginReqBody message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LoginReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LoginReqBody;

    /**
     * Verifies a LoginReqBody message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LoginReqBody message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LoginReqBody
     */
    public static fromObject(object: { [k: string]: any }): LoginReqBody;

    /**
     * Creates a plain object from a LoginReqBody message. Also converts values to other types if specified.
     * @param message LoginReqBody
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LoginReqBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LoginReqBody to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LoginReqBody
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a VerifyEmailReqBody. */
export interface IVerifyEmailReqBody {

    /** VerifyEmailReqBody emailVerifyToken */
    emailVerifyToken?: (string|null);
}

/** Represents a VerifyEmailReqBody. */
export class VerifyEmailReqBody implements IVerifyEmailReqBody {

    /**
     * Constructs a new VerifyEmailReqBody.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVerifyEmailReqBody);

    /** VerifyEmailReqBody emailVerifyToken. */
    public emailVerifyToken: string;

    /**
     * Creates a new VerifyEmailReqBody instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VerifyEmailReqBody instance
     */
    public static create(properties?: IVerifyEmailReqBody): VerifyEmailReqBody;

    /**
     * Encodes the specified VerifyEmailReqBody message. Does not implicitly {@link VerifyEmailReqBody.verify|verify} messages.
     * @param message VerifyEmailReqBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVerifyEmailReqBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VerifyEmailReqBody message, length delimited. Does not implicitly {@link VerifyEmailReqBody.verify|verify} messages.
     * @param message VerifyEmailReqBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVerifyEmailReqBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VerifyEmailReqBody message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VerifyEmailReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VerifyEmailReqBody;

    /**
     * Decodes a VerifyEmailReqBody message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VerifyEmailReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VerifyEmailReqBody;

    /**
     * Verifies a VerifyEmailReqBody message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VerifyEmailReqBody message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VerifyEmailReqBody
     */
    public static fromObject(object: { [k: string]: any }): VerifyEmailReqBody;

    /**
     * Creates a plain object from a VerifyEmailReqBody message. Also converts values to other types if specified.
     * @param message VerifyEmailReqBody
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VerifyEmailReqBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VerifyEmailReqBody to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for VerifyEmailReqBody
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ForgotPasswordReqBody. */
export interface IForgotPasswordReqBody {

    /** ForgotPasswordReqBody email */
    email?: (string|null);
}

/** Represents a ForgotPasswordReqBody. */
export class ForgotPasswordReqBody implements IForgotPasswordReqBody {

    /**
     * Constructs a new ForgotPasswordReqBody.
     * @param [properties] Properties to set
     */
    constructor(properties?: IForgotPasswordReqBody);

    /** ForgotPasswordReqBody email. */
    public email: string;

    /**
     * Creates a new ForgotPasswordReqBody instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ForgotPasswordReqBody instance
     */
    public static create(properties?: IForgotPasswordReqBody): ForgotPasswordReqBody;

    /**
     * Encodes the specified ForgotPasswordReqBody message. Does not implicitly {@link ForgotPasswordReqBody.verify|verify} messages.
     * @param message ForgotPasswordReqBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IForgotPasswordReqBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ForgotPasswordReqBody message, length delimited. Does not implicitly {@link ForgotPasswordReqBody.verify|verify} messages.
     * @param message ForgotPasswordReqBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IForgotPasswordReqBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ForgotPasswordReqBody message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ForgotPasswordReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ForgotPasswordReqBody;

    /**
     * Decodes a ForgotPasswordReqBody message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ForgotPasswordReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ForgotPasswordReqBody;

    /**
     * Verifies a ForgotPasswordReqBody message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ForgotPasswordReqBody message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ForgotPasswordReqBody
     */
    public static fromObject(object: { [k: string]: any }): ForgotPasswordReqBody;

    /**
     * Creates a plain object from a ForgotPasswordReqBody message. Also converts values to other types if specified.
     * @param message ForgotPasswordReqBody
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ForgotPasswordReqBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ForgotPasswordReqBody to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ForgotPasswordReqBody
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a VerifyForgotPasswordReqBody. */
export interface IVerifyForgotPasswordReqBody {

    /** VerifyForgotPasswordReqBody forgotPasswordToken */
    forgotPasswordToken?: (string|null);
}

/** Represents a VerifyForgotPasswordReqBody. */
export class VerifyForgotPasswordReqBody implements IVerifyForgotPasswordReqBody {

    /**
     * Constructs a new VerifyForgotPasswordReqBody.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVerifyForgotPasswordReqBody);

    /** VerifyForgotPasswordReqBody forgotPasswordToken. */
    public forgotPasswordToken: string;

    /**
     * Creates a new VerifyForgotPasswordReqBody instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VerifyForgotPasswordReqBody instance
     */
    public static create(properties?: IVerifyForgotPasswordReqBody): VerifyForgotPasswordReqBody;

    /**
     * Encodes the specified VerifyForgotPasswordReqBody message. Does not implicitly {@link VerifyForgotPasswordReqBody.verify|verify} messages.
     * @param message VerifyForgotPasswordReqBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVerifyForgotPasswordReqBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VerifyForgotPasswordReqBody message, length delimited. Does not implicitly {@link VerifyForgotPasswordReqBody.verify|verify} messages.
     * @param message VerifyForgotPasswordReqBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVerifyForgotPasswordReqBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VerifyForgotPasswordReqBody message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VerifyForgotPasswordReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VerifyForgotPasswordReqBody;

    /**
     * Decodes a VerifyForgotPasswordReqBody message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VerifyForgotPasswordReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VerifyForgotPasswordReqBody;

    /**
     * Verifies a VerifyForgotPasswordReqBody message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VerifyForgotPasswordReqBody message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VerifyForgotPasswordReqBody
     */
    public static fromObject(object: { [k: string]: any }): VerifyForgotPasswordReqBody;

    /**
     * Creates a plain object from a VerifyForgotPasswordReqBody message. Also converts values to other types if specified.
     * @param message VerifyForgotPasswordReqBody
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VerifyForgotPasswordReqBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VerifyForgotPasswordReqBody to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for VerifyForgotPasswordReqBody
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ResetPasswordReqBody. */
export interface IResetPasswordReqBody {

    /** ResetPasswordReqBody forgotPasswordToken */
    forgotPasswordToken?: (string|null);

    /** ResetPasswordReqBody password */
    password?: (string|null);

    /** ResetPasswordReqBody confirmPassword */
    confirmPassword?: (string|null);
}

/** Represents a ResetPasswordReqBody. */
export class ResetPasswordReqBody implements IResetPasswordReqBody {

    /**
     * Constructs a new ResetPasswordReqBody.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResetPasswordReqBody);

    /** ResetPasswordReqBody forgotPasswordToken. */
    public forgotPasswordToken: string;

    /** ResetPasswordReqBody password. */
    public password: string;

    /** ResetPasswordReqBody confirmPassword. */
    public confirmPassword: string;

    /**
     * Creates a new ResetPasswordReqBody instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResetPasswordReqBody instance
     */
    public static create(properties?: IResetPasswordReqBody): ResetPasswordReqBody;

    /**
     * Encodes the specified ResetPasswordReqBody message. Does not implicitly {@link ResetPasswordReqBody.verify|verify} messages.
     * @param message ResetPasswordReqBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResetPasswordReqBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResetPasswordReqBody message, length delimited. Does not implicitly {@link ResetPasswordReqBody.verify|verify} messages.
     * @param message ResetPasswordReqBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResetPasswordReqBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResetPasswordReqBody message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResetPasswordReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResetPasswordReqBody;

    /**
     * Decodes a ResetPasswordReqBody message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResetPasswordReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResetPasswordReqBody;

    /**
     * Verifies a ResetPasswordReqBody message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResetPasswordReqBody message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResetPasswordReqBody
     */
    public static fromObject(object: { [k: string]: any }): ResetPasswordReqBody;

    /**
     * Creates a plain object from a ResetPasswordReqBody message. Also converts values to other types if specified.
     * @param message ResetPasswordReqBody
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResetPasswordReqBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResetPasswordReqBody to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResetPasswordReqBody
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an UpdateMeReqBody. */
export interface IUpdateMeReqBody {

    /** UpdateMeReqBody name */
    name?: (string|null);

    /** UpdateMeReqBody dateOfBirth */
    dateOfBirth?: (string|null);

    /** UpdateMeReqBody bio */
    bio?: (string|null);

    /** UpdateMeReqBody location */
    location?: (string|null);

    /** UpdateMeReqBody website */
    website?: (string|null);

    /** UpdateMeReqBody username */
    username?: (string|null);

    /** UpdateMeReqBody avatar */
    avatar?: (string|null);

    /** UpdateMeReqBody coverPhoto */
    coverPhoto?: (string|null);
}

/** Represents an UpdateMeReqBody. */
export class UpdateMeReqBody implements IUpdateMeReqBody {

    /**
     * Constructs a new UpdateMeReqBody.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUpdateMeReqBody);

    /** UpdateMeReqBody name. */
    public name: string;

    /** UpdateMeReqBody dateOfBirth. */
    public dateOfBirth: string;

    /** UpdateMeReqBody bio. */
    public bio: string;

    /** UpdateMeReqBody location. */
    public location: string;

    /** UpdateMeReqBody website. */
    public website: string;

    /** UpdateMeReqBody username. */
    public username: string;

    /** UpdateMeReqBody avatar. */
    public avatar: string;

    /** UpdateMeReqBody coverPhoto. */
    public coverPhoto: string;

    /**
     * Creates a new UpdateMeReqBody instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UpdateMeReqBody instance
     */
    public static create(properties?: IUpdateMeReqBody): UpdateMeReqBody;

    /**
     * Encodes the specified UpdateMeReqBody message. Does not implicitly {@link UpdateMeReqBody.verify|verify} messages.
     * @param message UpdateMeReqBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUpdateMeReqBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UpdateMeReqBody message, length delimited. Does not implicitly {@link UpdateMeReqBody.verify|verify} messages.
     * @param message UpdateMeReqBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUpdateMeReqBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UpdateMeReqBody message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UpdateMeReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UpdateMeReqBody;

    /**
     * Decodes an UpdateMeReqBody message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UpdateMeReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UpdateMeReqBody;

    /**
     * Verifies an UpdateMeReqBody message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an UpdateMeReqBody message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UpdateMeReqBody
     */
    public static fromObject(object: { [k: string]: any }): UpdateMeReqBody;

    /**
     * Creates a plain object from an UpdateMeReqBody message. Also converts values to other types if specified.
     * @param message UpdateMeReqBody
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UpdateMeReqBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UpdateMeReqBody to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for UpdateMeReqBody
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a GetProfileReqParams. */
export interface IGetProfileReqParams {

    /** GetProfileReqParams username */
    username?: (string|null);
}

/** Represents a GetProfileReqParams. */
export class GetProfileReqParams implements IGetProfileReqParams {

    /**
     * Constructs a new GetProfileReqParams.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetProfileReqParams);

    /** GetProfileReqParams username. */
    public username: string;

    /**
     * Creates a new GetProfileReqParams instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetProfileReqParams instance
     */
    public static create(properties?: IGetProfileReqParams): GetProfileReqParams;

    /**
     * Encodes the specified GetProfileReqParams message. Does not implicitly {@link GetProfileReqParams.verify|verify} messages.
     * @param message GetProfileReqParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetProfileReqParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetProfileReqParams message, length delimited. Does not implicitly {@link GetProfileReqParams.verify|verify} messages.
     * @param message GetProfileReqParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetProfileReqParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetProfileReqParams message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetProfileReqParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetProfileReqParams;

    /**
     * Decodes a GetProfileReqParams message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetProfileReqParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetProfileReqParams;

    /**
     * Verifies a GetProfileReqParams message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetProfileReqParams message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetProfileReqParams
     */
    public static fromObject(object: { [k: string]: any }): GetProfileReqParams;

    /**
     * Creates a plain object from a GetProfileReqParams message. Also converts values to other types if specified.
     * @param message GetProfileReqParams
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetProfileReqParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetProfileReqParams to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GetProfileReqParams
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a FollowReqBody. */
export interface IFollowReqBody {

    /** FollowReqBody followedUserId */
    followedUserId?: (string|null);
}

/** Represents a FollowReqBody. */
export class FollowReqBody implements IFollowReqBody {

    /**
     * Constructs a new FollowReqBody.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFollowReqBody);

    /** FollowReqBody followedUserId. */
    public followedUserId: string;

    /**
     * Creates a new FollowReqBody instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FollowReqBody instance
     */
    public static create(properties?: IFollowReqBody): FollowReqBody;

    /**
     * Encodes the specified FollowReqBody message. Does not implicitly {@link FollowReqBody.verify|verify} messages.
     * @param message FollowReqBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFollowReqBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FollowReqBody message, length delimited. Does not implicitly {@link FollowReqBody.verify|verify} messages.
     * @param message FollowReqBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFollowReqBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FollowReqBody message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FollowReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FollowReqBody;

    /**
     * Decodes a FollowReqBody message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FollowReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FollowReqBody;

    /**
     * Verifies a FollowReqBody message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FollowReqBody message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FollowReqBody
     */
    public static fromObject(object: { [k: string]: any }): FollowReqBody;

    /**
     * Creates a plain object from a FollowReqBody message. Also converts values to other types if specified.
     * @param message FollowReqBody
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FollowReqBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FollowReqBody to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for FollowReqBody
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an UnfollowReqParams. */
export interface IUnfollowReqParams {

    /** UnfollowReqParams userId */
    userId?: (string|null);
}

/** Represents an UnfollowReqParams. */
export class UnfollowReqParams implements IUnfollowReqParams {

    /**
     * Constructs a new UnfollowReqParams.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUnfollowReqParams);

    /** UnfollowReqParams userId. */
    public userId: string;

    /**
     * Creates a new UnfollowReqParams instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UnfollowReqParams instance
     */
    public static create(properties?: IUnfollowReqParams): UnfollowReqParams;

    /**
     * Encodes the specified UnfollowReqParams message. Does not implicitly {@link UnfollowReqParams.verify|verify} messages.
     * @param message UnfollowReqParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUnfollowReqParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UnfollowReqParams message, length delimited. Does not implicitly {@link UnfollowReqParams.verify|verify} messages.
     * @param message UnfollowReqParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUnfollowReqParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UnfollowReqParams message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UnfollowReqParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UnfollowReqParams;

    /**
     * Decodes an UnfollowReqParams message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UnfollowReqParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UnfollowReqParams;

    /**
     * Verifies an UnfollowReqParams message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an UnfollowReqParams message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UnfollowReqParams
     */
    public static fromObject(object: { [k: string]: any }): UnfollowReqParams;

    /**
     * Creates a plain object from an UnfollowReqParams message. Also converts values to other types if specified.
     * @param message UnfollowReqParams
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UnfollowReqParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UnfollowReqParams to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for UnfollowReqParams
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ChangePasswordReqBody. */
export interface IChangePasswordReqBody {

    /** ChangePasswordReqBody oldPassword */
    oldPassword?: (string|null);

    /** ChangePasswordReqBody password */
    password?: (string|null);

    /** ChangePasswordReqBody confirmPassword */
    confirmPassword?: (string|null);
}

/** Represents a ChangePasswordReqBody. */
export class ChangePasswordReqBody implements IChangePasswordReqBody {

    /**
     * Constructs a new ChangePasswordReqBody.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChangePasswordReqBody);

    /** ChangePasswordReqBody oldPassword. */
    public oldPassword: string;

    /** ChangePasswordReqBody password. */
    public password: string;

    /** ChangePasswordReqBody confirmPassword. */
    public confirmPassword: string;

    /**
     * Creates a new ChangePasswordReqBody instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChangePasswordReqBody instance
     */
    public static create(properties?: IChangePasswordReqBody): ChangePasswordReqBody;

    /**
     * Encodes the specified ChangePasswordReqBody message. Does not implicitly {@link ChangePasswordReqBody.verify|verify} messages.
     * @param message ChangePasswordReqBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChangePasswordReqBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChangePasswordReqBody message, length delimited. Does not implicitly {@link ChangePasswordReqBody.verify|verify} messages.
     * @param message ChangePasswordReqBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChangePasswordReqBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChangePasswordReqBody message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChangePasswordReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChangePasswordReqBody;

    /**
     * Decodes a ChangePasswordReqBody message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChangePasswordReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChangePasswordReqBody;

    /**
     * Verifies a ChangePasswordReqBody message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ChangePasswordReqBody message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChangePasswordReqBody
     */
    public static fromObject(object: { [k: string]: any }): ChangePasswordReqBody;

    /**
     * Creates a plain object from a ChangePasswordReqBody message. Also converts values to other types if specified.
     * @param message ChangePasswordReqBody
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ChangePasswordReqBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ChangePasswordReqBody to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ChangePasswordReqBody
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a RefreshTokenReqBody. */
export interface IRefreshTokenReqBody {

    /** RefreshTokenReqBody refreshToken */
    refreshToken?: (string|null);
}

/** Represents a RefreshTokenReqBody. */
export class RefreshTokenReqBody implements IRefreshTokenReqBody {

    /**
     * Constructs a new RefreshTokenReqBody.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRefreshTokenReqBody);

    /** RefreshTokenReqBody refreshToken. */
    public refreshToken: string;

    /**
     * Creates a new RefreshTokenReqBody instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RefreshTokenReqBody instance
     */
    public static create(properties?: IRefreshTokenReqBody): RefreshTokenReqBody;

    /**
     * Encodes the specified RefreshTokenReqBody message. Does not implicitly {@link RefreshTokenReqBody.verify|verify} messages.
     * @param message RefreshTokenReqBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRefreshTokenReqBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RefreshTokenReqBody message, length delimited. Does not implicitly {@link RefreshTokenReqBody.verify|verify} messages.
     * @param message RefreshTokenReqBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRefreshTokenReqBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RefreshTokenReqBody message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RefreshTokenReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RefreshTokenReqBody;

    /**
     * Decodes a RefreshTokenReqBody message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RefreshTokenReqBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RefreshTokenReqBody;

    /**
     * Verifies a RefreshTokenReqBody message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RefreshTokenReqBody message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RefreshTokenReqBody
     */
    public static fromObject(object: { [k: string]: any }): RefreshTokenReqBody;

    /**
     * Creates a plain object from a RefreshTokenReqBody message. Also converts values to other types if specified.
     * @param message RefreshTokenReqBody
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RefreshTokenReqBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RefreshTokenReqBody to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RefreshTokenReqBody
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a TestReqBody313131. */
export interface ITestReqBody313131 {

    /** TestReqBody313131 testString */
    testString?: (string|null);
}

/** Represents a TestReqBody313131. */
export class TestReqBody313131 implements ITestReqBody313131 {

    /**
     * Constructs a new TestReqBody313131.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITestReqBody313131);

    /** TestReqBody313131 testString. */
    public testString: string;

    /**
     * Creates a new TestReqBody313131 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TestReqBody313131 instance
     */
    public static create(properties?: ITestReqBody313131): TestReqBody313131;

    /**
     * Encodes the specified TestReqBody313131 message. Does not implicitly {@link TestReqBody313131.verify|verify} messages.
     * @param message TestReqBody313131 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITestReqBody313131, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TestReqBody313131 message, length delimited. Does not implicitly {@link TestReqBody313131.verify|verify} messages.
     * @param message TestReqBody313131 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITestReqBody313131, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TestReqBody313131 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TestReqBody313131
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TestReqBody313131;

    /**
     * Decodes a TestReqBody313131 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TestReqBody313131
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TestReqBody313131;

    /**
     * Verifies a TestReqBody313131 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TestReqBody313131 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TestReqBody313131
     */
    public static fromObject(object: { [k: string]: any }): TestReqBody313131;

    /**
     * Creates a plain object from a TestReqBody313131 message. Also converts values to other types if specified.
     * @param message TestReqBody313131
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TestReqBody313131, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TestReqBody313131 to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for TestReqBody313131
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a UserVerifyStatus. */
export interface IUserVerifyStatus {

    /** UserVerifyStatus Unverified */
    Unverified?: (number|null);

    /** UserVerifyStatus Verified */
    Verified?: (number|null);

    /** UserVerifyStatus Banned */
    Banned?: (number|null);
}

/** Represents a UserVerifyStatus. */
export class UserVerifyStatus implements IUserVerifyStatus {

    /**
     * Constructs a new UserVerifyStatus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserVerifyStatus);

    /** UserVerifyStatus Unverified. */
    public Unverified: number;

    /** UserVerifyStatus Verified. */
    public Verified: number;

    /** UserVerifyStatus Banned. */
    public Banned: number;

    /**
     * Creates a new UserVerifyStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserVerifyStatus instance
     */
    public static create(properties?: IUserVerifyStatus): UserVerifyStatus;

    /**
     * Encodes the specified UserVerifyStatus message. Does not implicitly {@link UserVerifyStatus.verify|verify} messages.
     * @param message UserVerifyStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserVerifyStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserVerifyStatus message, length delimited. Does not implicitly {@link UserVerifyStatus.verify|verify} messages.
     * @param message UserVerifyStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserVerifyStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserVerifyStatus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserVerifyStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserVerifyStatus;

    /**
     * Decodes a UserVerifyStatus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserVerifyStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserVerifyStatus;

    /**
     * Verifies a UserVerifyStatus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserVerifyStatus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserVerifyStatus
     */
    public static fromObject(object: { [k: string]: any }): UserVerifyStatus;

    /**
     * Creates a plain object from a UserVerifyStatus message. Also converts values to other types if specified.
     * @param message UserVerifyStatus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserVerifyStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserVerifyStatus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for UserVerifyStatus
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a TokenType. */
export interface ITokenType {

    /** TokenType AccessToken */
    AccessToken?: (number|null);

    /** TokenType RefreshToken */
    RefreshToken?: (number|null);

    /** TokenType ForgotPasswordToken */
    ForgotPasswordToken?: (number|null);

    /** TokenType EmailVerificationToken */
    EmailVerificationToken?: (number|null);
}

/** Represents a TokenType. */
export class TokenType implements ITokenType {

    /**
     * Constructs a new TokenType.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITokenType);

    /** TokenType AccessToken. */
    public AccessToken: number;

    /** TokenType RefreshToken. */
    public RefreshToken: number;

    /** TokenType ForgotPasswordToken. */
    public ForgotPasswordToken: number;

    /** TokenType EmailVerificationToken. */
    public EmailVerificationToken: number;

    /**
     * Creates a new TokenType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TokenType instance
     */
    public static create(properties?: ITokenType): TokenType;

    /**
     * Encodes the specified TokenType message. Does not implicitly {@link TokenType.verify|verify} messages.
     * @param message TokenType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITokenType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TokenType message, length delimited. Does not implicitly {@link TokenType.verify|verify} messages.
     * @param message TokenType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITokenType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TokenType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TokenType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TokenType;

    /**
     * Decodes a TokenType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TokenType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TokenType;

    /**
     * Verifies a TokenType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TokenType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TokenType
     */
    public static fromObject(object: { [k: string]: any }): TokenType;

    /**
     * Creates a plain object from a TokenType message. Also converts values to other types if specified.
     * @param message TokenType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TokenType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TokenType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for TokenType
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a MediaType. */
export interface IMediaType {

    /** MediaType Image */
    Image?: (number|null);

    /** MediaType Video */
    Video?: (number|null);
}

/** Represents a MediaType. */
export class MediaType implements IMediaType {

    /**
     * Constructs a new MediaType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMediaType);

    /** MediaType Image. */
    public Image: number;

    /** MediaType Video. */
    public Video: number;

    /**
     * Creates a new MediaType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MediaType instance
     */
    public static create(properties?: IMediaType): MediaType;

    /**
     * Encodes the specified MediaType message. Does not implicitly {@link MediaType.verify|verify} messages.
     * @param message MediaType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMediaType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MediaType message, length delimited. Does not implicitly {@link MediaType.verify|verify} messages.
     * @param message MediaType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMediaType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MediaType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MediaType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MediaType;

    /**
     * Decodes a MediaType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MediaType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MediaType;

    /**
     * Verifies a MediaType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MediaType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MediaType
     */
    public static fromObject(object: { [k: string]: any }): MediaType;

    /**
     * Creates a plain object from a MediaType message. Also converts values to other types if specified.
     * @param message MediaType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MediaType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MediaType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for MediaType
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
