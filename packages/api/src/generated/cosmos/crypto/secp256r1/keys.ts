/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';

export const protobufPackage = 'cosmos.crypto.secp256r1';

/** PubKey defines a secp256r1 ECDSA public key. */
export interface PubKey {
	/**
	 * Point on secp256r1 curve in a compressed representation as specified in section
	 * 4.3.6 of ANSI X9.62: https://webstore.ansi.org/standards/ascx9/ansix9621998
	 */
	key: Uint8Array;
}

/** PrivKey defines a secp256r1 ECDSA private key. */
export interface PrivKey {
	/** secret number serialized using big-endian encoding */
	secret: Uint8Array;
}

const basePubKey: object = {};

export const PubKey = {
	encode(message: PubKey, writer: Writer = Writer.create()): Writer {
		if (message.key.length !== 0) {
			writer.uint32(10).bytes(message.key);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): PubKey {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(basePubKey) as PubKey;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.key = reader.bytes();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): PubKey {
		const message = globalThis.Object.create(basePubKey) as PubKey;
		if (object.key !== undefined && object.key !== null) {
			message.key = bytesFromBase64(object.key);
		}
		return message;
	},

	fromPartial(object: DeepPartial<PubKey>): PubKey {
		const message = { ...basePubKey } as PubKey;
		if (object.key !== undefined && object.key !== null) {
			message.key = object.key;
		} else {
			message.key = new Uint8Array();
		}
		return message;
	},

	toJSON(message: PubKey): unknown {
		const obj: any = {};
		message.key !== undefined &&
			(obj.key = base64FromBytes(
				message.key !== undefined ? message.key : new Uint8Array()
			));
		return obj;
	},
};

const basePrivKey: object = {};

export const PrivKey = {
	encode(message: PrivKey, writer: Writer = Writer.create()): Writer {
		if (message.secret.length !== 0) {
			writer.uint32(10).bytes(message.secret);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): PrivKey {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(basePrivKey) as PrivKey;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.secret = reader.bytes();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): PrivKey {
		const message = globalThis.Object.create(basePrivKey) as PrivKey;
		if (object.secret !== undefined && object.secret !== null) {
			message.secret = bytesFromBase64(object.secret);
		}
		return message;
	},

	fromPartial(object: DeepPartial<PrivKey>): PrivKey {
		const message = { ...basePrivKey } as PrivKey;
		if (object.secret !== undefined && object.secret !== null) {
			message.secret = object.secret;
		} else {
			message.secret = new Uint8Array();
		}
		return message;
	},

	toJSON(message: PrivKey): unknown {
		const obj: any = {};
		message.secret !== undefined &&
			(obj.secret = base64FromBytes(
				message.secret !== undefined ? message.secret : new Uint8Array()
			));
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
