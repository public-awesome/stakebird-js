/* eslint-disable */
import * as Long from 'long';
import { Reader, Writer } from 'protobufjs/minimal';

export const protobufPackage = 'stargaze.faucet.v1beta1';

export interface MsgMintResponse {}

export interface MsgFaucetKeyResponse {}

export interface MsgMint {
	sender: string;
	minter: string;
	time: Long;
	denom: string;
}

export interface MsgFaucetKey {
	sender: string;
	armor: string;
}

const baseMsgMintResponse: object = {};

export const MsgMintResponse = {
	encode(_: MsgMintResponse, writer: Writer = Writer.create()): Writer {
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): MsgMintResponse {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseMsgMintResponse
		) as MsgMintResponse;
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

	fromJSON(_: any): MsgMintResponse {
		const message = globalThis.Object.create(
			baseMsgMintResponse
		) as MsgMintResponse;
		return message;
	},

	fromPartial(_: DeepPartial<MsgMintResponse>): MsgMintResponse {
		const message = { ...baseMsgMintResponse } as MsgMintResponse;
		return message;
	},

	toJSON(_: MsgMintResponse): unknown {
		const obj: any = {};
		return obj;
	},
};

const baseMsgFaucetKeyResponse: object = {};

export const MsgFaucetKeyResponse = {
	encode(_: MsgFaucetKeyResponse, writer: Writer = Writer.create()): Writer {
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): MsgFaucetKeyResponse {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseMsgFaucetKeyResponse
		) as MsgFaucetKeyResponse;
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

	fromJSON(_: any): MsgFaucetKeyResponse {
		const message = globalThis.Object.create(
			baseMsgFaucetKeyResponse
		) as MsgFaucetKeyResponse;
		return message;
	},

	fromPartial(_: DeepPartial<MsgFaucetKeyResponse>): MsgFaucetKeyResponse {
		const message = { ...baseMsgFaucetKeyResponse } as MsgFaucetKeyResponse;
		return message;
	},

	toJSON(_: MsgFaucetKeyResponse): unknown {
		const obj: any = {};
		return obj;
	},
};

const baseMsgMint: object = {
	sender: '',
	minter: '',
	time: Long.ZERO,
	denom: '',
};

export const MsgMint = {
	encode(message: MsgMint, writer: Writer = Writer.create()): Writer {
		if (message.sender !== '') {
			writer.uint32(10).string(message.sender);
		}
		if (message.minter !== '') {
			writer.uint32(18).string(message.minter);
		}
		if (!message.time.isZero()) {
			writer.uint32(24).int64(message.time);
		}
		if (message.denom !== '') {
			writer.uint32(34).string(message.denom);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): MsgMint {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(baseMsgMint) as MsgMint;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.sender = reader.string();
					break;
				case 2:
					message.minter = reader.string();
					break;
				case 3:
					message.time = reader.int64() as Long;
					break;
				case 4:
					message.denom = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgMint {
		const message = globalThis.Object.create(baseMsgMint) as MsgMint;
		if (object.sender !== undefined && object.sender !== null) {
			message.sender = String(object.sender);
		} else {
			message.sender = '';
		}
		if (object.minter !== undefined && object.minter !== null) {
			message.minter = String(object.minter);
		} else {
			message.minter = '';
		}
		if (object.time !== undefined && object.time !== null) {
			message.time = Long.fromString(object.time);
		} else {
			message.time = Long.ZERO;
		}
		if (object.denom !== undefined && object.denom !== null) {
			message.denom = String(object.denom);
		} else {
			message.denom = '';
		}
		return message;
	},

	fromPartial(object: DeepPartial<MsgMint>): MsgMint {
		const message = { ...baseMsgMint } as MsgMint;
		if (object.sender !== undefined && object.sender !== null) {
			message.sender = object.sender;
		} else {
			message.sender = '';
		}
		if (object.minter !== undefined && object.minter !== null) {
			message.minter = object.minter;
		} else {
			message.minter = '';
		}
		if (object.time !== undefined && object.time !== null) {
			message.time = object.time as Long;
		} else {
			message.time = Long.ZERO;
		}
		if (object.denom !== undefined && object.denom !== null) {
			message.denom = object.denom;
		} else {
			message.denom = '';
		}
		return message;
	},

	toJSON(message: MsgMint): unknown {
		const obj: any = {};
		message.sender !== undefined && (obj.sender = message.sender);
		message.minter !== undefined && (obj.minter = message.minter);
		message.time !== undefined &&
			(obj.time = (message.time || Long.ZERO).toString());
		message.denom !== undefined && (obj.denom = message.denom);
		return obj;
	},
};

const baseMsgFaucetKey: object = { sender: '', armor: '' };

export const MsgFaucetKey = {
	encode(message: MsgFaucetKey, writer: Writer = Writer.create()): Writer {
		if (message.sender !== '') {
			writer.uint32(10).string(message.sender);
		}
		if (message.armor !== '') {
			writer.uint32(18).string(message.armor);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): MsgFaucetKey {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseMsgFaucetKey
		) as MsgFaucetKey;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.sender = reader.string();
					break;
				case 2:
					message.armor = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgFaucetKey {
		const message = globalThis.Object.create(
			baseMsgFaucetKey
		) as MsgFaucetKey;
		if (object.sender !== undefined && object.sender !== null) {
			message.sender = String(object.sender);
		} else {
			message.sender = '';
		}
		if (object.armor !== undefined && object.armor !== null) {
			message.armor = String(object.armor);
		} else {
			message.armor = '';
		}
		return message;
	},

	fromPartial(object: DeepPartial<MsgFaucetKey>): MsgFaucetKey {
		const message = { ...baseMsgFaucetKey } as MsgFaucetKey;
		if (object.sender !== undefined && object.sender !== null) {
			message.sender = object.sender;
		} else {
			message.sender = '';
		}
		if (object.armor !== undefined && object.armor !== null) {
			message.armor = object.armor;
		} else {
			message.armor = '';
		}
		return message;
	},

	toJSON(message: MsgFaucetKey): unknown {
		const obj: any = {};
		message.sender !== undefined && (obj.sender = message.sender);
		message.armor !== undefined && (obj.armor = message.armor);
		return obj;
	},
};

/** Msg defines the faucet Msg service. */
export interface Msg {
	/** Mint defines a method for minting coins */
	Mint(request: MsgMint): Promise<MsgMintResponse>;
	/** FaucetKey defines a method for publishing a faucet key */
	FaucetKey(request: MsgFaucetKey): Promise<MsgFaucetKeyResponse>;
}

export class MsgClientImpl implements Msg {
	private readonly rpc: Rpc;
	constructor(rpc: Rpc) {
		this.rpc = rpc;
	}
	Mint(request: MsgMint): Promise<MsgMintResponse> {
		const data = MsgMint.encode(request).finish();
		const promise = this.rpc.request(
			'stargaze.faucet.v1beta1.Msg',
			'Mint',
			data
		);
		return promise.then((data) => MsgMintResponse.decode(new Reader(data)));
	}

	FaucetKey(request: MsgFaucetKey): Promise<MsgFaucetKeyResponse> {
		const data = MsgFaucetKey.encode(request).finish();
		const promise = this.rpc.request(
			'stargaze.faucet.v1beta1.Msg',
			'FaucetKey',
			data
		);
		return promise.then((data) =>
			MsgFaucetKeyResponse.decode(new Reader(data))
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
