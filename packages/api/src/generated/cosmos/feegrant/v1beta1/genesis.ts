/* eslint-disable */
import { FeeAllowanceGrant } from '../../../cosmos/feegrant/v1beta1/feegrant';
import { Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';

export const protobufPackage = 'cosmos.feegrant.v1beta1';

/** GenesisState contains a set of fee allowances, persisted from the store */
export interface GenesisState {
	feeAllowances: FeeAllowanceGrant[];
}

const baseGenesisState: object = {};

export const GenesisState = {
	encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
		for (const v of message.feeAllowances) {
			FeeAllowanceGrant.encode(v!, writer.uint32(10).fork()).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): GenesisState {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseGenesisState
		) as GenesisState;
		message.feeAllowances = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.feeAllowances.push(
						FeeAllowanceGrant.decode(reader, reader.uint32())
					);
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): GenesisState {
		const message = globalThis.Object.create(
			baseGenesisState
		) as GenesisState;
		message.feeAllowances = [];
		if (
			object.feeAllowances !== undefined &&
			object.feeAllowances !== null
		) {
			for (const e of object.feeAllowances) {
				message.feeAllowances.push(FeeAllowanceGrant.fromJSON(e));
			}
		}
		return message;
	},

	fromPartial(object: DeepPartial<GenesisState>): GenesisState {
		const message = { ...baseGenesisState } as GenesisState;
		message.feeAllowances = [];
		if (
			object.feeAllowances !== undefined &&
			object.feeAllowances !== null
		) {
			for (const e of object.feeAllowances) {
				message.feeAllowances.push(FeeAllowanceGrant.fromPartial(e));
			}
		}
		return message;
	},

	toJSON(message: GenesisState): unknown {
		const obj: any = {};
		if (message.feeAllowances) {
			obj.feeAllowances = message.feeAllowances.map((e) =>
				e ? FeeAllowanceGrant.toJSON(e) : undefined
			);
		} else {
			obj.feeAllowances = [];
		}
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
