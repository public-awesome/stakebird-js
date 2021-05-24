/* eslint-disable */
import { Any } from '../../../google/protobuf/any';
import { Reader, Writer } from 'protobufjs/minimal';
import * as Long from 'long';

export const protobufPackage = 'cosmos.feegrant.v1beta1';

/**
 * MsgGrantFeeAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */
export interface MsgGrantFeeAllowance {
	granter: string;
	grantee: string;
	allowance?: Any;
}

/** MsgGrantFeeAllowanceResponse defines the Msg/GrantFeeAllowanceResponse response type. */
export interface MsgGrantFeeAllowanceResponse {}

/** MsgRevokeFeeAllowance removes any existing FeeAllowance from Granter to Grantee. */
export interface MsgRevokeFeeAllowance {
	granter: string;
	grantee: string;
}

/** MsgRevokeFeeAllowanceResponse defines the Msg/RevokeFeeAllowanceResponse response type. */
export interface MsgRevokeFeeAllowanceResponse {}

const baseMsgGrantFeeAllowance: object = { granter: '', grantee: '' };

export const MsgGrantFeeAllowance = {
	encode(
		message: MsgGrantFeeAllowance,
		writer: Writer = Writer.create()
	): Writer {
		if (message.granter !== '') {
			writer.uint32(10).string(message.granter);
		}
		if (message.grantee !== '') {
			writer.uint32(18).string(message.grantee);
		}
		if (message.allowance !== undefined) {
			Any.encode(message.allowance, writer.uint32(26).fork()).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): MsgGrantFeeAllowance {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseMsgGrantFeeAllowance
		) as MsgGrantFeeAllowance;
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
					message.allowance = Any.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgGrantFeeAllowance {
		const message = globalThis.Object.create(
			baseMsgGrantFeeAllowance
		) as MsgGrantFeeAllowance;
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
		if (object.allowance !== undefined && object.allowance !== null) {
			message.allowance = Any.fromJSON(object.allowance);
		} else {
			message.allowance = undefined;
		}
		return message;
	},

	fromPartial(
		object: DeepPartial<MsgGrantFeeAllowance>
	): MsgGrantFeeAllowance {
		const message = { ...baseMsgGrantFeeAllowance } as MsgGrantFeeAllowance;
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
		if (object.allowance !== undefined && object.allowance !== null) {
			message.allowance = Any.fromPartial(object.allowance);
		} else {
			message.allowance = undefined;
		}
		return message;
	},

	toJSON(message: MsgGrantFeeAllowance): unknown {
		const obj: any = {};
		message.granter !== undefined && (obj.granter = message.granter);
		message.grantee !== undefined && (obj.grantee = message.grantee);
		message.allowance !== undefined &&
			(obj.allowance = message.allowance
				? Any.toJSON(message.allowance)
				: undefined);
		return obj;
	},
};

const baseMsgGrantFeeAllowanceResponse: object = {};

export const MsgGrantFeeAllowanceResponse = {
	encode(
		_: MsgGrantFeeAllowanceResponse,
		writer: Writer = Writer.create()
	): Writer {
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): MsgGrantFeeAllowanceResponse {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseMsgGrantFeeAllowanceResponse
		) as MsgGrantFeeAllowanceResponse;
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

	fromJSON(_: any): MsgGrantFeeAllowanceResponse {
		const message = globalThis.Object.create(
			baseMsgGrantFeeAllowanceResponse
		) as MsgGrantFeeAllowanceResponse;
		return message;
	},

	fromPartial(
		_: DeepPartial<MsgGrantFeeAllowanceResponse>
	): MsgGrantFeeAllowanceResponse {
		const message = {
			...baseMsgGrantFeeAllowanceResponse,
		} as MsgGrantFeeAllowanceResponse;
		return message;
	},

	toJSON(_: MsgGrantFeeAllowanceResponse): unknown {
		const obj: any = {};
		return obj;
	},
};

const baseMsgRevokeFeeAllowance: object = { granter: '', grantee: '' };

export const MsgRevokeFeeAllowance = {
	encode(
		message: MsgRevokeFeeAllowance,
		writer: Writer = Writer.create()
	): Writer {
		if (message.granter !== '') {
			writer.uint32(10).string(message.granter);
		}
		if (message.grantee !== '') {
			writer.uint32(18).string(message.grantee);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): MsgRevokeFeeAllowance {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseMsgRevokeFeeAllowance
		) as MsgRevokeFeeAllowance;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.granter = reader.string();
					break;
				case 2:
					message.grantee = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgRevokeFeeAllowance {
		const message = globalThis.Object.create(
			baseMsgRevokeFeeAllowance
		) as MsgRevokeFeeAllowance;
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
		return message;
	},

	fromPartial(
		object: DeepPartial<MsgRevokeFeeAllowance>
	): MsgRevokeFeeAllowance {
		const message = {
			...baseMsgRevokeFeeAllowance,
		} as MsgRevokeFeeAllowance;
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
		return message;
	},

	toJSON(message: MsgRevokeFeeAllowance): unknown {
		const obj: any = {};
		message.granter !== undefined && (obj.granter = message.granter);
		message.grantee !== undefined && (obj.grantee = message.grantee);
		return obj;
	},
};

const baseMsgRevokeFeeAllowanceResponse: object = {};

export const MsgRevokeFeeAllowanceResponse = {
	encode(
		_: MsgRevokeFeeAllowanceResponse,
		writer: Writer = Writer.create()
	): Writer {
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): MsgRevokeFeeAllowanceResponse {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseMsgRevokeFeeAllowanceResponse
		) as MsgRevokeFeeAllowanceResponse;
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

	fromJSON(_: any): MsgRevokeFeeAllowanceResponse {
		const message = globalThis.Object.create(
			baseMsgRevokeFeeAllowanceResponse
		) as MsgRevokeFeeAllowanceResponse;
		return message;
	},

	fromPartial(
		_: DeepPartial<MsgRevokeFeeAllowanceResponse>
	): MsgRevokeFeeAllowanceResponse {
		const message = {
			...baseMsgRevokeFeeAllowanceResponse,
		} as MsgRevokeFeeAllowanceResponse;
		return message;
	},

	toJSON(_: MsgRevokeFeeAllowanceResponse): unknown {
		const obj: any = {};
		return obj;
	},
};

/** Msg defines the feegrant msg service. */
export interface Msg {
	/**
	 * GrantFeeAllowance grants fee allowance to the grantee on the granter's
	 * account with the provided expiration time.
	 */
	GrantFeeAllowance(
		request: MsgGrantFeeAllowance
	): Promise<MsgGrantFeeAllowanceResponse>;
	/**
	 * RevokeFeeAllowance revokes any fee allowance of granter's account that
	 * has been granted to the grantee.
	 */
	RevokeFeeAllowance(
		request: MsgRevokeFeeAllowance
	): Promise<MsgRevokeFeeAllowanceResponse>;
}

export class MsgClientImpl implements Msg {
	private readonly rpc: Rpc;
	constructor(rpc: Rpc) {
		this.rpc = rpc;
	}
	GrantFeeAllowance(
		request: MsgGrantFeeAllowance
	): Promise<MsgGrantFeeAllowanceResponse> {
		const data = MsgGrantFeeAllowance.encode(request).finish();
		const promise = this.rpc.request(
			'cosmos.feegrant.v1beta1.Msg',
			'GrantFeeAllowance',
			data
		);
		return promise.then((data) =>
			MsgGrantFeeAllowanceResponse.decode(new Reader(data))
		);
	}

	RevokeFeeAllowance(
		request: MsgRevokeFeeAllowance
	): Promise<MsgRevokeFeeAllowanceResponse> {
		const data = MsgRevokeFeeAllowance.encode(request).finish();
		const promise = this.rpc.request(
			'cosmos.feegrant.v1beta1.Msg',
			'RevokeFeeAllowance',
			data
		);
		return promise.then((data) =>
			MsgRevokeFeeAllowanceResponse.decode(new Reader(data))
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
