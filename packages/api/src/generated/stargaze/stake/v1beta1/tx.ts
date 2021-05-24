/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';
import * as Long from 'long';

export const protobufPackage = 'stargaze.stake.v1beta1';

export interface MsgStakeResponse {}

export interface MsgUnstakeResponse {}

export interface MsgBuyCreatorCoinResponse {}

export interface MsgSellCreatorCoinResponse {}

export interface MsgStake {
	vendorId: number;
	postId: string;
	delegator: string;
	validator: string;
	amount: string;
}

export interface MsgUnstake {
	vendorId: number;
	postId: string;
	delegator: string;
	amount: string;
}

export interface MsgBuyCreatorCoin {
	username: string;
	creator: string;
	buyer: string;
	validator: string;
	amount: string;
}

export interface MsgSellCreatorCoin {
	username: string;
	creator: string;
	seller: string;
	validator: string;
	amount: string;
}

const baseMsgStakeResponse: object = {};

export const MsgStakeResponse = {
	encode(_: MsgStakeResponse, writer: Writer = Writer.create()): Writer {
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): MsgStakeResponse {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseMsgStakeResponse
		) as MsgStakeResponse;
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

	fromJSON(_: any): MsgStakeResponse {
		const message = globalThis.Object.create(
			baseMsgStakeResponse
		) as MsgStakeResponse;
		return message;
	},

	fromPartial(_: DeepPartial<MsgStakeResponse>): MsgStakeResponse {
		const message = { ...baseMsgStakeResponse } as MsgStakeResponse;
		return message;
	},

	toJSON(_: MsgStakeResponse): unknown {
		const obj: any = {};
		return obj;
	},
};

const baseMsgUnstakeResponse: object = {};

export const MsgUnstakeResponse = {
	encode(_: MsgUnstakeResponse, writer: Writer = Writer.create()): Writer {
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): MsgUnstakeResponse {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseMsgUnstakeResponse
		) as MsgUnstakeResponse;
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

	fromJSON(_: any): MsgUnstakeResponse {
		const message = globalThis.Object.create(
			baseMsgUnstakeResponse
		) as MsgUnstakeResponse;
		return message;
	},

	fromPartial(_: DeepPartial<MsgUnstakeResponse>): MsgUnstakeResponse {
		const message = { ...baseMsgUnstakeResponse } as MsgUnstakeResponse;
		return message;
	},

	toJSON(_: MsgUnstakeResponse): unknown {
		const obj: any = {};
		return obj;
	},
};

const baseMsgBuyCreatorCoinResponse: object = {};

export const MsgBuyCreatorCoinResponse = {
	encode(
		_: MsgBuyCreatorCoinResponse,
		writer: Writer = Writer.create()
	): Writer {
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): MsgBuyCreatorCoinResponse {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseMsgBuyCreatorCoinResponse
		) as MsgBuyCreatorCoinResponse;
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

	fromJSON(_: any): MsgBuyCreatorCoinResponse {
		const message = globalThis.Object.create(
			baseMsgBuyCreatorCoinResponse
		) as MsgBuyCreatorCoinResponse;
		return message;
	},

	fromPartial(
		_: DeepPartial<MsgBuyCreatorCoinResponse>
	): MsgBuyCreatorCoinResponse {
		const message = {
			...baseMsgBuyCreatorCoinResponse,
		} as MsgBuyCreatorCoinResponse;
		return message;
	},

	toJSON(_: MsgBuyCreatorCoinResponse): unknown {
		const obj: any = {};
		return obj;
	},
};

const baseMsgSellCreatorCoinResponse: object = {};

export const MsgSellCreatorCoinResponse = {
	encode(
		_: MsgSellCreatorCoinResponse,
		writer: Writer = Writer.create()
	): Writer {
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): MsgSellCreatorCoinResponse {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseMsgSellCreatorCoinResponse
		) as MsgSellCreatorCoinResponse;
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

	fromJSON(_: any): MsgSellCreatorCoinResponse {
		const message = globalThis.Object.create(
			baseMsgSellCreatorCoinResponse
		) as MsgSellCreatorCoinResponse;
		return message;
	},

	fromPartial(
		_: DeepPartial<MsgSellCreatorCoinResponse>
	): MsgSellCreatorCoinResponse {
		const message = {
			...baseMsgSellCreatorCoinResponse,
		} as MsgSellCreatorCoinResponse;
		return message;
	},

	toJSON(_: MsgSellCreatorCoinResponse): unknown {
		const obj: any = {};
		return obj;
	},
};

const baseMsgStake: object = {
	vendorId: 0,
	postId: '',
	delegator: '',
	validator: '',
	amount: '',
};

export const MsgStake = {
	encode(message: MsgStake, writer: Writer = Writer.create()): Writer {
		if (message.vendorId !== 0) {
			writer.uint32(8).uint32(message.vendorId);
		}
		if (message.postId !== '') {
			writer.uint32(18).string(message.postId);
		}
		if (message.delegator !== '') {
			writer.uint32(26).string(message.delegator);
		}
		if (message.validator !== '') {
			writer.uint32(34).string(message.validator);
		}
		if (message.amount !== '') {
			writer.uint32(42).string(message.amount);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): MsgStake {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(baseMsgStake) as MsgStake;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.vendorId = reader.uint32();
					break;
				case 2:
					message.postId = reader.string();
					break;
				case 3:
					message.delegator = reader.string();
					break;
				case 4:
					message.validator = reader.string();
					break;
				case 5:
					message.amount = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgStake {
		const message = globalThis.Object.create(baseMsgStake) as MsgStake;
		if (object.vendorId !== undefined && object.vendorId !== null) {
			message.vendorId = Number(object.vendorId);
		} else {
			message.vendorId = 0;
		}
		if (object.postId !== undefined && object.postId !== null) {
			message.postId = String(object.postId);
		} else {
			message.postId = '';
		}
		if (object.delegator !== undefined && object.delegator !== null) {
			message.delegator = String(object.delegator);
		} else {
			message.delegator = '';
		}
		if (object.validator !== undefined && object.validator !== null) {
			message.validator = String(object.validator);
		} else {
			message.validator = '';
		}
		if (object.amount !== undefined && object.amount !== null) {
			message.amount = String(object.amount);
		} else {
			message.amount = '';
		}
		return message;
	},

	fromPartial(object: DeepPartial<MsgStake>): MsgStake {
		const message = { ...baseMsgStake } as MsgStake;
		if (object.vendorId !== undefined && object.vendorId !== null) {
			message.vendorId = object.vendorId;
		} else {
			message.vendorId = 0;
		}
		if (object.postId !== undefined && object.postId !== null) {
			message.postId = object.postId;
		} else {
			message.postId = '';
		}
		if (object.delegator !== undefined && object.delegator !== null) {
			message.delegator = object.delegator;
		} else {
			message.delegator = '';
		}
		if (object.validator !== undefined && object.validator !== null) {
			message.validator = object.validator;
		} else {
			message.validator = '';
		}
		if (object.amount !== undefined && object.amount !== null) {
			message.amount = object.amount;
		} else {
			message.amount = '';
		}
		return message;
	},

	toJSON(message: MsgStake): unknown {
		const obj: any = {};
		message.vendorId !== undefined && (obj.vendorId = message.vendorId);
		message.postId !== undefined && (obj.postId = message.postId);
		message.delegator !== undefined && (obj.delegator = message.delegator);
		message.validator !== undefined && (obj.validator = message.validator);
		message.amount !== undefined && (obj.amount = message.amount);
		return obj;
	},
};

const baseMsgUnstake: object = {
	vendorId: 0,
	postId: '',
	delegator: '',
	amount: '',
};

export const MsgUnstake = {
	encode(message: MsgUnstake, writer: Writer = Writer.create()): Writer {
		if (message.vendorId !== 0) {
			writer.uint32(8).uint32(message.vendorId);
		}
		if (message.postId !== '') {
			writer.uint32(18).string(message.postId);
		}
		if (message.delegator !== '') {
			writer.uint32(26).string(message.delegator);
		}
		if (message.amount !== '') {
			writer.uint32(34).string(message.amount);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): MsgUnstake {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(baseMsgUnstake) as MsgUnstake;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.vendorId = reader.uint32();
					break;
				case 2:
					message.postId = reader.string();
					break;
				case 3:
					message.delegator = reader.string();
					break;
				case 4:
					message.amount = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgUnstake {
		const message = globalThis.Object.create(baseMsgUnstake) as MsgUnstake;
		if (object.vendorId !== undefined && object.vendorId !== null) {
			message.vendorId = Number(object.vendorId);
		} else {
			message.vendorId = 0;
		}
		if (object.postId !== undefined && object.postId !== null) {
			message.postId = String(object.postId);
		} else {
			message.postId = '';
		}
		if (object.delegator !== undefined && object.delegator !== null) {
			message.delegator = String(object.delegator);
		} else {
			message.delegator = '';
		}
		if (object.amount !== undefined && object.amount !== null) {
			message.amount = String(object.amount);
		} else {
			message.amount = '';
		}
		return message;
	},

	fromPartial(object: DeepPartial<MsgUnstake>): MsgUnstake {
		const message = { ...baseMsgUnstake } as MsgUnstake;
		if (object.vendorId !== undefined && object.vendorId !== null) {
			message.vendorId = object.vendorId;
		} else {
			message.vendorId = 0;
		}
		if (object.postId !== undefined && object.postId !== null) {
			message.postId = object.postId;
		} else {
			message.postId = '';
		}
		if (object.delegator !== undefined && object.delegator !== null) {
			message.delegator = object.delegator;
		} else {
			message.delegator = '';
		}
		if (object.amount !== undefined && object.amount !== null) {
			message.amount = object.amount;
		} else {
			message.amount = '';
		}
		return message;
	},

	toJSON(message: MsgUnstake): unknown {
		const obj: any = {};
		message.vendorId !== undefined && (obj.vendorId = message.vendorId);
		message.postId !== undefined && (obj.postId = message.postId);
		message.delegator !== undefined && (obj.delegator = message.delegator);
		message.amount !== undefined && (obj.amount = message.amount);
		return obj;
	},
};

const baseMsgBuyCreatorCoin: object = {
	username: '',
	creator: '',
	buyer: '',
	validator: '',
	amount: '',
};

export const MsgBuyCreatorCoin = {
	encode(
		message: MsgBuyCreatorCoin,
		writer: Writer = Writer.create()
	): Writer {
		if (message.username !== '') {
			writer.uint32(10).string(message.username);
		}
		if (message.creator !== '') {
			writer.uint32(18).string(message.creator);
		}
		if (message.buyer !== '') {
			writer.uint32(26).string(message.buyer);
		}
		if (message.validator !== '') {
			writer.uint32(34).string(message.validator);
		}
		if (message.amount !== '') {
			writer.uint32(42).string(message.amount);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): MsgBuyCreatorCoin {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseMsgBuyCreatorCoin
		) as MsgBuyCreatorCoin;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.username = reader.string();
					break;
				case 2:
					message.creator = reader.string();
					break;
				case 3:
					message.buyer = reader.string();
					break;
				case 4:
					message.validator = reader.string();
					break;
				case 5:
					message.amount = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgBuyCreatorCoin {
		const message = globalThis.Object.create(
			baseMsgBuyCreatorCoin
		) as MsgBuyCreatorCoin;
		if (object.username !== undefined && object.username !== null) {
			message.username = String(object.username);
		} else {
			message.username = '';
		}
		if (object.creator !== undefined && object.creator !== null) {
			message.creator = String(object.creator);
		} else {
			message.creator = '';
		}
		if (object.buyer !== undefined && object.buyer !== null) {
			message.buyer = String(object.buyer);
		} else {
			message.buyer = '';
		}
		if (object.validator !== undefined && object.validator !== null) {
			message.validator = String(object.validator);
		} else {
			message.validator = '';
		}
		if (object.amount !== undefined && object.amount !== null) {
			message.amount = String(object.amount);
		} else {
			message.amount = '';
		}
		return message;
	},

	fromPartial(object: DeepPartial<MsgBuyCreatorCoin>): MsgBuyCreatorCoin {
		const message = { ...baseMsgBuyCreatorCoin } as MsgBuyCreatorCoin;
		if (object.username !== undefined && object.username !== null) {
			message.username = object.username;
		} else {
			message.username = '';
		}
		if (object.creator !== undefined && object.creator !== null) {
			message.creator = object.creator;
		} else {
			message.creator = '';
		}
		if (object.buyer !== undefined && object.buyer !== null) {
			message.buyer = object.buyer;
		} else {
			message.buyer = '';
		}
		if (object.validator !== undefined && object.validator !== null) {
			message.validator = object.validator;
		} else {
			message.validator = '';
		}
		if (object.amount !== undefined && object.amount !== null) {
			message.amount = object.amount;
		} else {
			message.amount = '';
		}
		return message;
	},

	toJSON(message: MsgBuyCreatorCoin): unknown {
		const obj: any = {};
		message.username !== undefined && (obj.username = message.username);
		message.creator !== undefined && (obj.creator = message.creator);
		message.buyer !== undefined && (obj.buyer = message.buyer);
		message.validator !== undefined && (obj.validator = message.validator);
		message.amount !== undefined && (obj.amount = message.amount);
		return obj;
	},
};

const baseMsgSellCreatorCoin: object = {
	username: '',
	creator: '',
	seller: '',
	validator: '',
	amount: '',
};

export const MsgSellCreatorCoin = {
	encode(
		message: MsgSellCreatorCoin,
		writer: Writer = Writer.create()
	): Writer {
		if (message.username !== '') {
			writer.uint32(10).string(message.username);
		}
		if (message.creator !== '') {
			writer.uint32(18).string(message.creator);
		}
		if (message.seller !== '') {
			writer.uint32(26).string(message.seller);
		}
		if (message.validator !== '') {
			writer.uint32(34).string(message.validator);
		}
		if (message.amount !== '') {
			writer.uint32(42).string(message.amount);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): MsgSellCreatorCoin {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseMsgSellCreatorCoin
		) as MsgSellCreatorCoin;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.username = reader.string();
					break;
				case 2:
					message.creator = reader.string();
					break;
				case 3:
					message.seller = reader.string();
					break;
				case 4:
					message.validator = reader.string();
					break;
				case 5:
					message.amount = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgSellCreatorCoin {
		const message = globalThis.Object.create(
			baseMsgSellCreatorCoin
		) as MsgSellCreatorCoin;
		if (object.username !== undefined && object.username !== null) {
			message.username = String(object.username);
		} else {
			message.username = '';
		}
		if (object.creator !== undefined && object.creator !== null) {
			message.creator = String(object.creator);
		} else {
			message.creator = '';
		}
		if (object.seller !== undefined && object.seller !== null) {
			message.seller = String(object.seller);
		} else {
			message.seller = '';
		}
		if (object.validator !== undefined && object.validator !== null) {
			message.validator = String(object.validator);
		} else {
			message.validator = '';
		}
		if (object.amount !== undefined && object.amount !== null) {
			message.amount = String(object.amount);
		} else {
			message.amount = '';
		}
		return message;
	},

	fromPartial(object: DeepPartial<MsgSellCreatorCoin>): MsgSellCreatorCoin {
		const message = { ...baseMsgSellCreatorCoin } as MsgSellCreatorCoin;
		if (object.username !== undefined && object.username !== null) {
			message.username = object.username;
		} else {
			message.username = '';
		}
		if (object.creator !== undefined && object.creator !== null) {
			message.creator = object.creator;
		} else {
			message.creator = '';
		}
		if (object.seller !== undefined && object.seller !== null) {
			message.seller = object.seller;
		} else {
			message.seller = '';
		}
		if (object.validator !== undefined && object.validator !== null) {
			message.validator = object.validator;
		} else {
			message.validator = '';
		}
		if (object.amount !== undefined && object.amount !== null) {
			message.amount = object.amount;
		} else {
			message.amount = '';
		}
		return message;
	},

	toJSON(message: MsgSellCreatorCoin): unknown {
		const obj: any = {};
		message.username !== undefined && (obj.username = message.username);
		message.creator !== undefined && (obj.creator = message.creator);
		message.seller !== undefined && (obj.seller = message.seller);
		message.validator !== undefined && (obj.validator = message.validator);
		message.amount !== undefined && (obj.amount = message.amount);
		return obj;
	},
};

/** Msg defines the stake Msg service. */
export interface Msg {
	Stake(request: MsgStake): Promise<MsgStakeResponse>;
	Unstake(request: MsgUnstake): Promise<MsgUnstakeResponse>;
	BuyCreatorCoin(
		request: MsgBuyCreatorCoin
	): Promise<MsgBuyCreatorCoinResponse>;
	SellCreatorCoin(
		request: MsgSellCreatorCoin
	): Promise<MsgSellCreatorCoinResponse>;
}

export class MsgClientImpl implements Msg {
	private readonly rpc: Rpc;
	constructor(rpc: Rpc) {
		this.rpc = rpc;
	}
	Stake(request: MsgStake): Promise<MsgStakeResponse> {
		const data = MsgStake.encode(request).finish();
		const promise = this.rpc.request(
			'stargaze.stake.v1beta1.Msg',
			'Stake',
			data
		);
		return promise.then((data) =>
			MsgStakeResponse.decode(new Reader(data))
		);
	}

	Unstake(request: MsgUnstake): Promise<MsgUnstakeResponse> {
		const data = MsgUnstake.encode(request).finish();
		const promise = this.rpc.request(
			'stargaze.stake.v1beta1.Msg',
			'Unstake',
			data
		);
		return promise.then((data) =>
			MsgUnstakeResponse.decode(new Reader(data))
		);
	}

	BuyCreatorCoin(
		request: MsgBuyCreatorCoin
	): Promise<MsgBuyCreatorCoinResponse> {
		const data = MsgBuyCreatorCoin.encode(request).finish();
		const promise = this.rpc.request(
			'stargaze.stake.v1beta1.Msg',
			'BuyCreatorCoin',
			data
		);
		return promise.then((data) =>
			MsgBuyCreatorCoinResponse.decode(new Reader(data))
		);
	}

	SellCreatorCoin(
		request: MsgSellCreatorCoin
	): Promise<MsgSellCreatorCoinResponse> {
		const data = MsgSellCreatorCoin.encode(request).finish();
		const promise = this.rpc.request(
			'stargaze.stake.v1beta1.Msg',
			'SellCreatorCoin',
			data
		);
		return promise.then((data) =>
			MsgSellCreatorCoinResponse.decode(new Reader(data))
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
