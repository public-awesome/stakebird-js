/* eslint-disable */
import * as Long from 'long';
import { Writer, Reader } from 'protobufjs/minimal';

export const protobufPackage = 'cosmwasm.wasm.v1beta1';

/** MsgIBCSend */
export interface MsgIBCSend {
	/** the channel by which the packet will be sent */
	channel: string;
	/**
	 * Timeout height relative to the current block height.
	 * The timeout is disabled when set to 0.
	 */
	timeoutHeight: Long;
	/**
	 * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
	 * The timeout is disabled when set to 0.
	 */
	timeoutTimestamp: Long;
	/** data is the payload to transfer */
	data: Uint8Array;
}

/** MsgIBCCloseChannel port and channel need to be owned by the contract */
export interface MsgIBCCloseChannel {
	channel: string;
}

const baseMsgIBCSend: object = {
	channel: '',
	timeoutHeight: Long.UZERO,
	timeoutTimestamp: Long.UZERO,
};

export const MsgIBCSend = {
	encode(message: MsgIBCSend, writer: Writer = Writer.create()): Writer {
		if (message.channel !== '') {
			writer.uint32(18).string(message.channel);
		}
		if (!message.timeoutHeight.isZero()) {
			writer.uint32(32).uint64(message.timeoutHeight);
		}
		if (!message.timeoutTimestamp.isZero()) {
			writer.uint32(40).uint64(message.timeoutTimestamp);
		}
		if (message.data.length !== 0) {
			writer.uint32(50).bytes(message.data);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): MsgIBCSend {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(baseMsgIBCSend) as MsgIBCSend;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 2:
					message.channel = reader.string();
					break;
				case 4:
					message.timeoutHeight = reader.uint64() as Long;
					break;
				case 5:
					message.timeoutTimestamp = reader.uint64() as Long;
					break;
				case 6:
					message.data = reader.bytes();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgIBCSend {
		const message = globalThis.Object.create(baseMsgIBCSend) as MsgIBCSend;
		if (object.channel !== undefined && object.channel !== null) {
			message.channel = String(object.channel);
		} else {
			message.channel = '';
		}
		if (
			object.timeoutHeight !== undefined &&
			object.timeoutHeight !== null
		) {
			message.timeoutHeight = Long.fromString(object.timeoutHeight);
		} else {
			message.timeoutHeight = Long.UZERO;
		}
		if (
			object.timeoutTimestamp !== undefined &&
			object.timeoutTimestamp !== null
		) {
			message.timeoutTimestamp = Long.fromString(object.timeoutTimestamp);
		} else {
			message.timeoutTimestamp = Long.UZERO;
		}
		if (object.data !== undefined && object.data !== null) {
			message.data = bytesFromBase64(object.data);
		}
		return message;
	},

	fromPartial(object: DeepPartial<MsgIBCSend>): MsgIBCSend {
		const message = { ...baseMsgIBCSend } as MsgIBCSend;
		if (object.channel !== undefined && object.channel !== null) {
			message.channel = object.channel;
		} else {
			message.channel = '';
		}
		if (
			object.timeoutHeight !== undefined &&
			object.timeoutHeight !== null
		) {
			message.timeoutHeight = object.timeoutHeight as Long;
		} else {
			message.timeoutHeight = Long.UZERO;
		}
		if (
			object.timeoutTimestamp !== undefined &&
			object.timeoutTimestamp !== null
		) {
			message.timeoutTimestamp = object.timeoutTimestamp as Long;
		} else {
			message.timeoutTimestamp = Long.UZERO;
		}
		if (object.data !== undefined && object.data !== null) {
			message.data = object.data;
		} else {
			message.data = new Uint8Array();
		}
		return message;
	},

	toJSON(message: MsgIBCSend): unknown {
		const obj: any = {};
		message.channel !== undefined && (obj.channel = message.channel);
		message.timeoutHeight !== undefined &&
			(obj.timeoutHeight = (
				message.timeoutHeight || Long.UZERO
			).toString());
		message.timeoutTimestamp !== undefined &&
			(obj.timeoutTimestamp = (
				message.timeoutTimestamp || Long.UZERO
			).toString());
		message.data !== undefined &&
			(obj.data = base64FromBytes(
				message.data !== undefined ? message.data : new Uint8Array()
			));
		return obj;
	},
};

const baseMsgIBCCloseChannel: object = { channel: '' };

export const MsgIBCCloseChannel = {
	encode(
		message: MsgIBCCloseChannel,
		writer: Writer = Writer.create()
	): Writer {
		if (message.channel !== '') {
			writer.uint32(18).string(message.channel);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): MsgIBCCloseChannel {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseMsgIBCCloseChannel
		) as MsgIBCCloseChannel;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 2:
					message.channel = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgIBCCloseChannel {
		const message = globalThis.Object.create(
			baseMsgIBCCloseChannel
		) as MsgIBCCloseChannel;
		if (object.channel !== undefined && object.channel !== null) {
			message.channel = String(object.channel);
		} else {
			message.channel = '';
		}
		return message;
	},

	fromPartial(object: DeepPartial<MsgIBCCloseChannel>): MsgIBCCloseChannel {
		const message = { ...baseMsgIBCCloseChannel } as MsgIBCCloseChannel;
		if (object.channel !== undefined && object.channel !== null) {
			message.channel = object.channel;
		} else {
			message.channel = '';
		}
		return message;
	},

	toJSON(message: MsgIBCCloseChannel): unknown {
		const obj: any = {};
		message.channel !== undefined && (obj.channel = message.channel);
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

const atob: (b64: string) => string =
	globalThis.atob ||
	((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64: string): Uint8Array {
	const bin = atob(b64);
	const arr = new Uint8Array(bin.length);
	for (let i = 0; i < bin.length; ++i) {
		arr[i] = bin.charCodeAt(i);
	}
	return arr;
}

const btoa: (bin: string) => string =
	globalThis.btoa ||
	((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr: Uint8Array): string {
	const bin: string[] = [];
	for (let i = 0; i < arr.byteLength; ++i) {
		bin.push(String.fromCharCode(arr[i]));
	}
	return btoa(bin.join(''));
}

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
