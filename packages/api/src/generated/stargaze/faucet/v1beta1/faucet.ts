/* eslint-disable */
import * as Long from 'long';
import { Coin } from '../../../cosmos/base/v1beta1/coin';
import { Writer, Reader } from 'protobufjs/minimal';

export const protobufPackage = 'stargaze.faucet.v1beta1';

export interface Mining {
	minter: string;
	lastTime: Long;
	total?: Coin;
}

export interface FaucetKey {
	armor: string;
}

const baseMining: object = { minter: '', lastTime: Long.ZERO };

export const Mining = {
	encode(message: Mining, writer: Writer = Writer.create()): Writer {
		if (message.minter !== '') {
			writer.uint32(10).string(message.minter);
		}
		if (!message.lastTime.isZero()) {
			writer.uint32(16).int64(message.lastTime);
		}
		if (message.total !== undefined) {
			Coin.encode(message.total, writer.uint32(26).fork()).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): Mining {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(baseMining) as Mining;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.minter = reader.string();
					break;
				case 2:
					message.lastTime = reader.int64() as Long;
					break;
				case 3:
					message.total = Coin.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): Mining {
		const message = globalThis.Object.create(baseMining) as Mining;
		if (object.minter !== undefined && object.minter !== null) {
			message.minter = String(object.minter);
		} else {
			message.minter = '';
		}
		if (object.lastTime !== undefined && object.lastTime !== null) {
			message.lastTime = Long.fromString(object.lastTime);
		} else {
			message.lastTime = Long.ZERO;
		}
		if (object.total !== undefined && object.total !== null) {
			message.total = Coin.fromJSON(object.total);
		} else {
			message.total = undefined;
		}
		return message;
	},

	fromPartial(object: DeepPartial<Mining>): Mining {
		const message = { ...baseMining } as Mining;
		if (object.minter !== undefined && object.minter !== null) {
			message.minter = object.minter;
		} else {
			message.minter = '';
		}
		if (object.lastTime !== undefined && object.lastTime !== null) {
			message.lastTime = object.lastTime as Long;
		} else {
			message.lastTime = Long.ZERO;
		}
		if (object.total !== undefined && object.total !== null) {
			message.total = Coin.fromPartial(object.total);
		} else {
			message.total = undefined;
		}
		return message;
	},

	toJSON(message: Mining): unknown {
		const obj: any = {};
		message.minter !== undefined && (obj.minter = message.minter);
		message.lastTime !== undefined &&
			(obj.lastTime = (message.lastTime || Long.ZERO).toString());
		message.total !== undefined &&
			(obj.total = message.total
				? Coin.toJSON(message.total)
				: undefined);
		return obj;
	},
};

const baseFaucetKey: object = { armor: '' };

export const FaucetKey = {
	encode(message: FaucetKey, writer: Writer = Writer.create()): Writer {
		if (message.armor !== '') {
			writer.uint32(10).string(message.armor);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): FaucetKey {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(baseFaucetKey) as FaucetKey;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.armor = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): FaucetKey {
		const message = globalThis.Object.create(baseFaucetKey) as FaucetKey;
		if (object.armor !== undefined && object.armor !== null) {
			message.armor = String(object.armor);
		} else {
			message.armor = '';
		}
		return message;
	},

	fromPartial(object: DeepPartial<FaucetKey>): FaucetKey {
		const message = { ...baseFaucetKey } as FaucetKey;
		if (object.armor !== undefined && object.armor !== null) {
			message.armor = object.armor;
		} else {
			message.armor = '';
		}
		return message;
	},

	toJSON(message: FaucetKey): unknown {
		const obj: any = {};
		message.armor !== undefined && (obj.armor = message.armor);
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
