/* eslint-disable */
import { Coin } from '../../../cosmos/base/v1beta1/coin';
import { Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';

export const protobufPackage = 'stargaze.user.v1beta1';

export interface Vouch {
	voucher: string;
	vouched: string;
	comment: string;
}

export interface Params {
	thresholdAmount: Coin[];
	vouchCount: number;
}

const baseVouch: object = { voucher: '', vouched: '', comment: '' };

export const Vouch = {
	encode(message: Vouch, writer: Writer = Writer.create()): Writer {
		if (message.voucher !== '') {
			writer.uint32(10).string(message.voucher);
		}
		if (message.vouched !== '') {
			writer.uint32(18).string(message.vouched);
		}
		if (message.comment !== '') {
			writer.uint32(26).string(message.comment);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): Vouch {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(baseVouch) as Vouch;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.voucher = reader.string();
					break;
				case 2:
					message.vouched = reader.string();
					break;
				case 3:
					message.comment = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): Vouch {
		const message = globalThis.Object.create(baseVouch) as Vouch;
		if (object.voucher !== undefined && object.voucher !== null) {
			message.voucher = String(object.voucher);
		} else {
			message.voucher = '';
		}
		if (object.vouched !== undefined && object.vouched !== null) {
			message.vouched = String(object.vouched);
		} else {
			message.vouched = '';
		}
		if (object.comment !== undefined && object.comment !== null) {
			message.comment = String(object.comment);
		} else {
			message.comment = '';
		}
		return message;
	},

	fromPartial(object: DeepPartial<Vouch>): Vouch {
		const message = { ...baseVouch } as Vouch;
		if (object.voucher !== undefined && object.voucher !== null) {
			message.voucher = object.voucher;
		} else {
			message.voucher = '';
		}
		if (object.vouched !== undefined && object.vouched !== null) {
			message.vouched = object.vouched;
		} else {
			message.vouched = '';
		}
		if (object.comment !== undefined && object.comment !== null) {
			message.comment = object.comment;
		} else {
			message.comment = '';
		}
		return message;
	},

	toJSON(message: Vouch): unknown {
		const obj: any = {};
		message.voucher !== undefined && (obj.voucher = message.voucher);
		message.vouched !== undefined && (obj.vouched = message.vouched);
		message.comment !== undefined && (obj.comment = message.comment);
		return obj;
	},
};

const baseParams: object = { vouchCount: 0 };

export const Params = {
	encode(message: Params, writer: Writer = Writer.create()): Writer {
		for (const v of message.thresholdAmount) {
			Coin.encode(v!, writer.uint32(10).fork()).ldelim();
		}
		if (message.vouchCount !== 0) {
			writer.uint32(16).uint32(message.vouchCount);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): Params {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(baseParams) as Params;
		message.thresholdAmount = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.thresholdAmount.push(
						Coin.decode(reader, reader.uint32())
					);
					break;
				case 2:
					message.vouchCount = reader.uint32();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): Params {
		const message = globalThis.Object.create(baseParams) as Params;
		message.thresholdAmount = [];
		if (
			object.thresholdAmount !== undefined &&
			object.thresholdAmount !== null
		) {
			for (const e of object.thresholdAmount) {
				message.thresholdAmount.push(Coin.fromJSON(e));
			}
		}
		if (object.vouchCount !== undefined && object.vouchCount !== null) {
			message.vouchCount = Number(object.vouchCount);
		} else {
			message.vouchCount = 0;
		}
		return message;
	},

	fromPartial(object: DeepPartial<Params>): Params {
		const message = { ...baseParams } as Params;
		message.thresholdAmount = [];
		if (
			object.thresholdAmount !== undefined &&
			object.thresholdAmount !== null
		) {
			for (const e of object.thresholdAmount) {
				message.thresholdAmount.push(Coin.fromPartial(e));
			}
		}
		if (object.vouchCount !== undefined && object.vouchCount !== null) {
			message.vouchCount = object.vouchCount;
		} else {
			message.vouchCount = 0;
		}
		return message;
	},

	toJSON(message: Params): unknown {
		const obj: any = {};
		if (message.thresholdAmount) {
			obj.thresholdAmount = message.thresholdAmount.map((e) =>
				e ? Coin.toJSON(e) : undefined
			);
		} else {
			obj.thresholdAmount = [];
		}
		message.vouchCount !== undefined &&
			(obj.vouchCount = message.vouchCount);
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
