/* eslint-disable */
import { Any } from '../../../google/protobuf/any';
import { Result } from '../../../cosmos/base/abci/v1beta1/abci';
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import { Timestamp } from '../../../google/protobuf/timestamp';
import * as Long from 'long';

export const protobufPackage = 'cosmos.authz.v1beta1';

/**
 * MsgGrantAuthorizationRequest grants the provided authorization to the grantee on the granter's
 * account with the provided expiration time.
 */
export interface MsgGrantAuthorizationRequest {
	granter: string;
	grantee: string;
	authorization?: Any;
	expiration?: Date;
}

/** MsgExecAuthorizedResponse defines the Msg/MsgExecAuthorizedResponse response type. */
export interface MsgExecAuthorizedResponse {
	result?: Result;
}

/**
 * MsgExecAuthorizedRequest attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 */
export interface MsgExecAuthorizedRequest {
	grantee: string;
	msgs: Any[];
}

/** MsgGrantAuthorizationResponse defines the Msg/MsgGrantAuthorization response type. */
export interface MsgGrantAuthorizationResponse {}

/**
 * MsgRevokeAuthorizationRequest revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 */
export interface MsgRevokeAuthorizationRequest {
	granter: string;
	grantee: string;
	methodName: string;
}

/** MsgRevokeAuthorizationResponse defines the Msg/MsgRevokeAuthorizationResponse response type. */
export interface MsgRevokeAuthorizationResponse {}

const baseMsgGrantAuthorizationRequest: object = { granter: '', grantee: '' };

export const MsgGrantAuthorizationRequest = {
	encode(
		message: MsgGrantAuthorizationRequest,
		writer: Writer = Writer.create()
	): Writer {
		if (message.granter !== '') {
			writer.uint32(10).string(message.granter);
		}
		if (message.grantee !== '') {
			writer.uint32(18).string(message.grantee);
		}
		if (message.authorization !== undefined) {
			Any.encode(
				message.authorization,
				writer.uint32(26).fork()
			).ldelim();
		}
		if (message.expiration !== undefined) {
			Timestamp.encode(
				toTimestamp(message.expiration),
				writer.uint32(34).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): MsgGrantAuthorizationRequest {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseMsgGrantAuthorizationRequest
		) as MsgGrantAuthorizationRequest;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.granter = reader.string();
					break;
				case 2:
					message.grantee = reader.string();
					break;
				case 3:
					message.authorization = Any.decode(reader, reader.uint32());
					break;
				case 4:
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

	fromJSON(object: any): MsgGrantAuthorizationRequest {
		const message = globalThis.Object.create(
			baseMsgGrantAuthorizationRequest
		) as MsgGrantAuthorizationRequest;
		if (object.granter !== undefined && object.granter !== null) {
			message.granter = String(object.granter);
		} else {
			message.granter = '';
		}
		if (object.grantee !== undefined && object.grantee !== null) {
			message.grantee = String(object.grantee);
		} else {
			message.grantee = '';
		}
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

	fromPartial(
		object: DeepPartial<MsgGrantAuthorizationRequest>
	): MsgGrantAuthorizationRequest {
		const message = {
			...baseMsgGrantAuthorizationRequest,
		} as MsgGrantAuthorizationRequest;
		if (object.granter !== undefined && object.granter !== null) {
			message.granter = object.granter;
		} else {
			message.granter = '';
		}
		if (object.grantee !== undefined && object.grantee !== null) {
			message.grantee = object.grantee;
		} else {
			message.grantee = '';
		}
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

	toJSON(message: MsgGrantAuthorizationRequest): unknown {
		const obj: any = {};
		message.granter !== undefined && (obj.granter = message.granter);
		message.grantee !== undefined && (obj.grantee = message.grantee);
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

const baseMsgExecAuthorizedResponse: object = {};

export const MsgExecAuthorizedResponse = {
	encode(
		message: MsgExecAuthorizedResponse,
		writer: Writer = Writer.create()
	): Writer {
		if (message.result !== undefined) {
			Result.encode(message.result, writer.uint32(10).fork()).ldelim();
		}
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): MsgExecAuthorizedResponse {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseMsgExecAuthorizedResponse
		) as MsgExecAuthorizedResponse;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.result = Result.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgExecAuthorizedResponse {
		const message = globalThis.Object.create(
			baseMsgExecAuthorizedResponse
		) as MsgExecAuthorizedResponse;
		if (object.result !== undefined && object.result !== null) {
			message.result = Result.fromJSON(object.result);
		} else {
			message.result = undefined;
		}
		return message;
	},

	fromPartial(
		object: DeepPartial<MsgExecAuthorizedResponse>
	): MsgExecAuthorizedResponse {
		const message = {
			...baseMsgExecAuthorizedResponse,
		} as MsgExecAuthorizedResponse;
		if (object.result !== undefined && object.result !== null) {
			message.result = Result.fromPartial(object.result);
		} else {
			message.result = undefined;
		}
		return message;
	},

	toJSON(message: MsgExecAuthorizedResponse): unknown {
		const obj: any = {};
		message.result !== undefined &&
			(obj.result = message.result
				? Result.toJSON(message.result)
				: undefined);
		return obj;
	},
};

const baseMsgExecAuthorizedRequest: object = { grantee: '' };

export const MsgExecAuthorizedRequest = {
	encode(
		message: MsgExecAuthorizedRequest,
		writer: Writer = Writer.create()
	): Writer {
		if (message.grantee !== '') {
			writer.uint32(10).string(message.grantee);
		}
		for (const v of message.msgs) {
			Any.encode(v!, writer.uint32(18).fork()).ldelim();
		}
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): MsgExecAuthorizedRequest {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseMsgExecAuthorizedRequest
		) as MsgExecAuthorizedRequest;
		message.msgs = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.grantee = reader.string();
					break;
				case 2:
					message.msgs.push(Any.decode(reader, reader.uint32()));
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgExecAuthorizedRequest {
		const message = globalThis.Object.create(
			baseMsgExecAuthorizedRequest
		) as MsgExecAuthorizedRequest;
		message.msgs = [];
		if (object.grantee !== undefined && object.grantee !== null) {
			message.grantee = String(object.grantee);
		} else {
			message.grantee = '';
		}
		if (object.msgs !== undefined && object.msgs !== null) {
			for (const e of object.msgs) {
				message.msgs.push(Any.fromJSON(e));
			}
		}
		return message;
	},

	fromPartial(
		object: DeepPartial<MsgExecAuthorizedRequest>
	): MsgExecAuthorizedRequest {
		const message = {
			...baseMsgExecAuthorizedRequest,
		} as MsgExecAuthorizedRequest;
		message.msgs = [];
		if (object.grantee !== undefined && object.grantee !== null) {
			message.grantee = object.grantee;
		} else {
			message.grantee = '';
		}
		if (object.msgs !== undefined && object.msgs !== null) {
			for (const e of object.msgs) {
				message.msgs.push(Any.fromPartial(e));
			}
		}
		return message;
	},

	toJSON(message: MsgExecAuthorizedRequest): unknown {
		const obj: any = {};
		message.grantee !== undefined && (obj.grantee = message.grantee);
		if (message.msgs) {
			obj.msgs = message.msgs.map((e) => (e ? Any.toJSON(e) : undefined));
		} else {
			obj.msgs = [];
		}
		return obj;
	},
};

const baseMsgGrantAuthorizationResponse: object = {};

export const MsgGrantAuthorizationResponse = {
	encode(
		_: MsgGrantAuthorizationResponse,
		writer: Writer = Writer.create()
	): Writer {
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): MsgGrantAuthorizationResponse {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseMsgGrantAuthorizationResponse
		) as MsgGrantAuthorizationResponse;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(_: any): MsgGrantAuthorizationResponse {
		const message = globalThis.Object.create(
			baseMsgGrantAuthorizationResponse
		) as MsgGrantAuthorizationResponse;
		return message;
	},

	fromPartial(
		_: DeepPartial<MsgGrantAuthorizationResponse>
	): MsgGrantAuthorizationResponse {
		const message = {
			...baseMsgGrantAuthorizationResponse,
		} as MsgGrantAuthorizationResponse;
		return message;
	},

	toJSON(_: MsgGrantAuthorizationResponse): unknown {
		const obj: any = {};
		return obj;
	},
};

const baseMsgRevokeAuthorizationRequest: object = {
	granter: '',
	grantee: '',
	methodName: '',
};

export const MsgRevokeAuthorizationRequest = {
	encode(
		message: MsgRevokeAuthorizationRequest,
		writer: Writer = Writer.create()
	): Writer {
		if (message.granter !== '') {
			writer.uint32(10).string(message.granter);
		}
		if (message.grantee !== '') {
			writer.uint32(18).string(message.grantee);
		}
		if (message.methodName !== '') {
			writer.uint32(26).string(message.methodName);
		}
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): MsgRevokeAuthorizationRequest {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseMsgRevokeAuthorizationRequest
		) as MsgRevokeAuthorizationRequest;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.granter = reader.string();
					break;
				case 2:
					message.grantee = reader.string();
					break;
				case 3:
					message.methodName = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgRevokeAuthorizationRequest {
		const message = globalThis.Object.create(
			baseMsgRevokeAuthorizationRequest
		) as MsgRevokeAuthorizationRequest;
		if (object.granter !== undefined && object.granter !== null) {
			message.granter = String(object.granter);
		} else {
			message.granter = '';
		}
		if (object.grantee !== undefined && object.grantee !== null) {
			message.grantee = String(object.grantee);
		} else {
			message.grantee = '';
		}
		if (object.methodName !== undefined && object.methodName !== null) {
			message.methodName = String(object.methodName);
		} else {
			message.methodName = '';
		}
		return message;
	},

	fromPartial(
		object: DeepPartial<MsgRevokeAuthorizationRequest>
	): MsgRevokeAuthorizationRequest {
		const message = {
			...baseMsgRevokeAuthorizationRequest,
		} as MsgRevokeAuthorizationRequest;
		if (object.granter !== undefined && object.granter !== null) {
			message.granter = object.granter;
		} else {
			message.granter = '';
		}
		if (object.grantee !== undefined && object.grantee !== null) {
			message.grantee = object.grantee;
		} else {
			message.grantee = '';
		}
		if (object.methodName !== undefined && object.methodName !== null) {
			message.methodName = object.methodName;
		} else {
			message.methodName = '';
		}
		return message;
	},

	toJSON(message: MsgRevokeAuthorizationRequest): unknown {
		const obj: any = {};
		message.granter !== undefined && (obj.granter = message.granter);
		message.grantee !== undefined && (obj.grantee = message.grantee);
		message.methodName !== undefined &&
			(obj.methodName = message.methodName);
		return obj;
	},
};

const baseMsgRevokeAuthorizationResponse: object = {};

export const MsgRevokeAuthorizationResponse = {
	encode(
		_: MsgRevokeAuthorizationResponse,
		writer: Writer = Writer.create()
	): Writer {
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): MsgRevokeAuthorizationResponse {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseMsgRevokeAuthorizationResponse
		) as MsgRevokeAuthorizationResponse;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(_: any): MsgRevokeAuthorizationResponse {
		const message = globalThis.Object.create(
			baseMsgRevokeAuthorizationResponse
		) as MsgRevokeAuthorizationResponse;
		return message;
	},

	fromPartial(
		_: DeepPartial<MsgRevokeAuthorizationResponse>
	): MsgRevokeAuthorizationResponse {
		const message = {
			...baseMsgRevokeAuthorizationResponse,
		} as MsgRevokeAuthorizationResponse;
		return message;
	},

	toJSON(_: MsgRevokeAuthorizationResponse): unknown {
		const obj: any = {};
		return obj;
	},
};

/** Msg defines the authz Msg service. */
export interface Msg {
	/**
	 * GrantAuthorization grants the provided authorization to the grantee on the granter's
	 * account with the provided expiration time.
	 */
	GrantAuthorization(
		request: MsgGrantAuthorizationRequest
	): Promise<MsgGrantAuthorizationResponse>;
	/**
	 * ExecAuthorized attempts to execute the provided messages using
	 * authorizations granted to the grantee. Each message should have only
	 * one signer corresponding to the granter of the authorization.
	 */
	ExecAuthorized(
		request: MsgExecAuthorizedRequest
	): Promise<MsgExecAuthorizedResponse>;
	/**
	 * RevokeAuthorization revokes any authorization corresponding to the provided method name on the
	 * granter's account that has been granted to the grantee.
	 */
	RevokeAuthorization(
		request: MsgRevokeAuthorizationRequest
	): Promise<MsgRevokeAuthorizationResponse>;
}

export class MsgClientImpl implements Msg {
	private readonly rpc: Rpc;
	constructor(rpc: Rpc) {
		this.rpc = rpc;
	}
	GrantAuthorization(
		request: MsgGrantAuthorizationRequest
	): Promise<MsgGrantAuthorizationResponse> {
		const data = MsgGrantAuthorizationRequest.encode(request).finish();
		const promise = this.rpc.request(
			'cosmos.authz.v1beta1.Msg',
			'GrantAuthorization',
			data
		);
		return promise.then((data) =>
			MsgGrantAuthorizationResponse.decode(new Reader(data))
		);
	}

	ExecAuthorized(
		request: MsgExecAuthorizedRequest
	): Promise<MsgExecAuthorizedResponse> {
		const data = MsgExecAuthorizedRequest.encode(request).finish();
		const promise = this.rpc.request(
			'cosmos.authz.v1beta1.Msg',
			'ExecAuthorized',
			data
		);
		return promise.then((data) =>
			MsgExecAuthorizedResponse.decode(new Reader(data))
		);
	}

	RevokeAuthorization(
		request: MsgRevokeAuthorizationRequest
	): Promise<MsgRevokeAuthorizationResponse> {
		const data = MsgRevokeAuthorizationRequest.encode(request).finish();
		const promise = this.rpc.request(
			'cosmos.authz.v1beta1.Msg',
			'RevokeAuthorization',
			data
		);
		return promise.then((data) =>
			MsgRevokeAuthorizationResponse.decode(new Reader(data))
		);
	}
}

interface Rpc {
	request(
		service: string,
		method: string,
		data: Uint8Array
	): Promise<Uint8Array>;
}

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
