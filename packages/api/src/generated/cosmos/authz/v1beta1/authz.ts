/* eslint-disable */
import { Any } from '../../../google/protobuf/any';
import { Timestamp } from '../../../google/protobuf/timestamp';
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';

export const protobufPackage = 'cosmos.authz.v1beta1';

/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */
export interface GenericAuthorization {
	/**
	 * method name to grant unrestricted permissions to execute
	 * Note: MethodName() is already a method on `GenericAuthorization` type,
	 * we need some custom naming here so using `MessageName`
	 */
	methodName: string;
}

/**
 * AuthorizationGrant gives permissions to execute
 * the provide method with expiration time.
 */
export interface AuthorizationGrant {
	authorization?: Any;
	expiration?: Date;
}

const baseGenericAuthorization: object = { methodName: '' };

export const GenericAuthorization = {
	encode(
		message: GenericAuthorization,
		writer: Writer = Writer.create()
	): Writer {
		if (message.methodName !== '') {
			writer.uint32(10).string(message.methodName);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): GenericAuthorization {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseGenericAuthorization
		) as GenericAuthorization;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.methodName = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): GenericAuthorization {
		const message = globalThis.Object.create(
			baseGenericAuthorization
		) as GenericAuthorization;
		if (object.methodName !== undefined && object.methodName !== null) {
			message.methodName = String(object.methodName);
		} else {
			message.methodName = '';
		}
		return message;
	},

	fromPartial(
		object: DeepPartial<GenericAuthorization>
	): GenericAuthorization {
		const message = { ...baseGenericAuthorization } as GenericAuthorization;
		if (object.methodName !== undefined && object.methodName !== null) {
			message.methodName = object.methodName;
		} else {
			message.methodName = '';
		}
		return message;
	},

	toJSON(message: GenericAuthorization): unknown {
		const obj: any = {};
		message.methodName !== undefined &&
			(obj.methodName = message.methodName);
		return obj;
	},
};

const baseAuthorizationGrant: object = {};

export const AuthorizationGrant = {
	encode(
		message: AuthorizationGrant,
		writer: Writer = Writer.create()
	): Writer {
		if (message.authorization !== undefined) {
			Any.encode(
				message.authorization,
				writer.uint32(10).fork()
			).ldelim();
		}
		if (message.expiration !== undefined) {
			Timestamp.encode(
				toTimestamp(message.expiration),
				writer.uint32(18).fork()
			).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): AuthorizationGrant {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseAuthorizationGrant
		) as AuthorizationGrant;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.authorization = Any.decode(reader, reader.uint32());
					break;
				case 2:
					message.expiration = fromTimestamp(
						Timestamp.decode(reader, reader.uint32())
					);
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): AuthorizationGrant {
		const message = globalThis.Object.create(
			baseAuthorizationGrant
		) as AuthorizationGrant;
		if (
			object.authorization !== undefined &&
			object.authorization !== null
		) {
			message.authorization = Any.fromJSON(object.authorization);
		} else {
			message.authorization = undefined;
		}
		if (object.expiration !== undefined && object.expiration !== null) {
			message.expiration = fromJsonTimestamp(object.expiration);
		} else {
			message.expiration = undefined;
		}
		return message;
	},

	fromPartial(object: DeepPartial<AuthorizationGrant>): AuthorizationGrant {
		const message = { ...baseAuthorizationGrant } as AuthorizationGrant;
		if (
			object.authorization !== undefined &&
			object.authorization !== null
		) {
			message.authorization = Any.fromPartial(object.authorization);
		} else {
			message.authorization = undefined;
		}
		if (object.expiration !== undefined && object.expiration !== null) {
			message.expiration = object.expiration;
		} else {
			message.expiration = undefined;
		}
		return message;
	},

	toJSON(message: AuthorizationGrant): unknown {
		const obj: any = {};
		message.authorization !== undefined &&
			(obj.authorization = message.authorization
				? Any.toJSON(message.authorization)
				: undefined);
		message.expiration !== undefined &&
			(obj.expiration =
				message.expiration !== undefined
					? message.expiration.toISOString()
					: null);
		return obj;
	},
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
	if (typeof globalThis !== 'undefined') return globalThis;
	if (typeof self !== 'undefined') return self;
	if (typeof window !== 'undefined') return window;
	if (typeof global !== 'undefined') return global;
	throw 'Unable to locate global object';
})();

type Builtin =
	| Date
	| Function
	| Uint8Array
	| string
	| number
	| undefined
	| Long;
export type DeepPartial<T> = T extends Builtin
	? T
	: T extends Array<infer U>
	? Array<DeepPartial<U>>
	: T extends ReadonlyArray<infer U>
	? ReadonlyArray<DeepPartial<U>>
	: T extends {}
	? { [K in keyof T]?: DeepPartial<T[K]> }
	: Partial<T>;

function toTimestamp(date: Date): Timestamp {
	const seconds = numberToLong(date.getTime() / 1_000);
	const nanos = (date.getTime() % 1_000) * 1_000_000;
	return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
	let millis = t.seconds.toNumber() * 1_000;
	millis += t.nanos / 1_000_000;
	return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
	if (o instanceof Date) {
		return o;
	} else if (typeof o === 'string') {
		return new Date(o);
	} else {
		return fromTimestamp(Timestamp.fromJSON(o));
	}
}

function numberToLong(number: number) {
	return Long.fromNumber(number);
}

if (util.Long !== Long) {
	util.Long = Long as any;
	configure();
}
