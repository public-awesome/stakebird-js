/* eslint-disable */
import {
	LiquidityPool,
	LiquidityPoolMetadata,
	LiquidityPoolBatch,
	Params,
	BatchPoolDepositMsg,
	BatchPoolWithdrawMsg,
	BatchPoolSwapMsg,
} from '../liquidity/liquidity';
import { Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';

export const protobufPackage = 'tendermint.liquidity';

export interface LiquidityPoolRecord {
	liquidityPool?: LiquidityPool;
	liquidityPoolMetadata?: LiquidityPoolMetadata;
	liquidityPoolBatch?: LiquidityPoolBatch;
	batchPoolDepositMsgs: BatchPoolDepositMsg[];
	batchPoolWithdrawMsgs: BatchPoolWithdrawMsg[];
	batchPoolSwapMsgs: BatchPoolSwapMsg[];
}

/** GenesisState defines the liquidity module's genesis state. */
export interface GenesisState {
	/** params defines all the parameters of related to liquidity. */
	params?: Params;
	liquidityPoolRecords: LiquidityPoolRecord[];
}

const baseLiquidityPoolRecord: object = {};

export const LiquidityPoolRecord = {
	encode(
		message: LiquidityPoolRecord,
		writer: Writer = Writer.create()
	): Writer {
		if (message.liquidityPool !== undefined) {
			LiquidityPool.encode(
				message.liquidityPool,
				writer.uint32(10).fork()
			).ldelim();
		}
		if (message.liquidityPoolMetadata !== undefined) {
			LiquidityPoolMetadata.encode(
				message.liquidityPoolMetadata,
				writer.uint32(18).fork()
			).ldelim();
		}
		if (message.liquidityPoolBatch !== undefined) {
			LiquidityPoolBatch.encode(
				message.liquidityPoolBatch,
				writer.uint32(26).fork()
			).ldelim();
		}
		for (const v of message.batchPoolDepositMsgs) {
			BatchPoolDepositMsg.encode(v!, writer.uint32(34).fork()).ldelim();
		}
		for (const v of message.batchPoolWithdrawMsgs) {
			BatchPoolWithdrawMsg.encode(v!, writer.uint32(42).fork()).ldelim();
		}
		for (const v of message.batchPoolSwapMsgs) {
			BatchPoolSwapMsg.encode(v!, writer.uint32(50).fork()).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): LiquidityPoolRecord {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseLiquidityPoolRecord
		) as LiquidityPoolRecord;
		message.batchPoolDepositMsgs = [];
		message.batchPoolWithdrawMsgs = [];
		message.batchPoolSwapMsgs = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.liquidityPool = LiquidityPool.decode(
						reader,
						reader.uint32()
					);
					break;
				case 2:
					message.liquidityPoolMetadata = LiquidityPoolMetadata.decode(
						reader,
						reader.uint32()
					);
					break;
				case 3:
					message.liquidityPoolBatch = LiquidityPoolBatch.decode(
						reader,
						reader.uint32()
					);
					break;
				case 4:
					message.batchPoolDepositMsgs.push(
						BatchPoolDepositMsg.decode(reader, reader.uint32())
					);
					break;
				case 5:
					message.batchPoolWithdrawMsgs.push(
						BatchPoolWithdrawMsg.decode(reader, reader.uint32())
					);
					break;
				case 6:
					message.batchPoolSwapMsgs.push(
						BatchPoolSwapMsg.decode(reader, reader.uint32())
					);
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): LiquidityPoolRecord {
		const message = globalThis.Object.create(
			baseLiquidityPoolRecord
		) as LiquidityPoolRecord;
		message.batchPoolDepositMsgs = [];
		message.batchPoolWithdrawMsgs = [];
		message.batchPoolSwapMsgs = [];
		if (
			object.liquidityPool !== undefined &&
			object.liquidityPool !== null
		) {
			message.liquidityPool = LiquidityPool.fromJSON(
				object.liquidityPool
			);
		} else {
			message.liquidityPool = undefined;
		}
		if (
			object.liquidityPoolMetadata !== undefined &&
			object.liquidityPoolMetadata !== null
		) {
			message.liquidityPoolMetadata = LiquidityPoolMetadata.fromJSON(
				object.liquidityPoolMetadata
			);
		} else {
			message.liquidityPoolMetadata = undefined;
		}
		if (
			object.liquidityPoolBatch !== undefined &&
			object.liquidityPoolBatch !== null
		) {
			message.liquidityPoolBatch = LiquidityPoolBatch.fromJSON(
				object.liquidityPoolBatch
			);
		} else {
			message.liquidityPoolBatch = undefined;
		}
		if (
			object.batchPoolDepositMsgs !== undefined &&
			object.batchPoolDepositMsgs !== null
		) {
			for (const e of object.batchPoolDepositMsgs) {
				message.batchPoolDepositMsgs.push(
					BatchPoolDepositMsg.fromJSON(e)
				);
			}
		}
		if (
			object.batchPoolWithdrawMsgs !== undefined &&
			object.batchPoolWithdrawMsgs !== null
		) {
			for (const e of object.batchPoolWithdrawMsgs) {
				message.batchPoolWithdrawMsgs.push(
					BatchPoolWithdrawMsg.fromJSON(e)
				);
			}
		}
		if (
			object.batchPoolSwapMsgs !== undefined &&
			object.batchPoolSwapMsgs !== null
		) {
			for (const e of object.batchPoolSwapMsgs) {
				message.batchPoolSwapMsgs.push(BatchPoolSwapMsg.fromJSON(e));
			}
		}
		return message;
	},

	fromPartial(object: DeepPartial<LiquidityPoolRecord>): LiquidityPoolRecord {
		const message = { ...baseLiquidityPoolRecord } as LiquidityPoolRecord;
		message.batchPoolDepositMsgs = [];
		message.batchPoolWithdrawMsgs = [];
		message.batchPoolSwapMsgs = [];
		if (
			object.liquidityPool !== undefined &&
			object.liquidityPool !== null
		) {
			message.liquidityPool = LiquidityPool.fromPartial(
				object.liquidityPool
			);
		} else {
			message.liquidityPool = undefined;
		}
		if (
			object.liquidityPoolMetadata !== undefined &&
			object.liquidityPoolMetadata !== null
		) {
			message.liquidityPoolMetadata = LiquidityPoolMetadata.fromPartial(
				object.liquidityPoolMetadata
			);
		} else {
			message.liquidityPoolMetadata = undefined;
		}
		if (
			object.liquidityPoolBatch !== undefined &&
			object.liquidityPoolBatch !== null
		) {
			message.liquidityPoolBatch = LiquidityPoolBatch.fromPartial(
				object.liquidityPoolBatch
			);
		} else {
			message.liquidityPoolBatch = undefined;
		}
		if (
			object.batchPoolDepositMsgs !== undefined &&
			object.batchPoolDepositMsgs !== null
		) {
			for (const e of object.batchPoolDepositMsgs) {
				message.batchPoolDepositMsgs.push(
					BatchPoolDepositMsg.fromPartial(e)
				);
			}
		}
		if (
			object.batchPoolWithdrawMsgs !== undefined &&
			object.batchPoolWithdrawMsgs !== null
		) {
			for (const e of object.batchPoolWithdrawMsgs) {
				message.batchPoolWithdrawMsgs.push(
					BatchPoolWithdrawMsg.fromPartial(e)
				);
			}
		}
		if (
			object.batchPoolSwapMsgs !== undefined &&
			object.batchPoolSwapMsgs !== null
		) {
			for (const e of object.batchPoolSwapMsgs) {
				message.batchPoolSwapMsgs.push(BatchPoolSwapMsg.fromPartial(e));
			}
		}
		return message;
	},

	toJSON(message: LiquidityPoolRecord): unknown {
		const obj: any = {};
		message.liquidityPool !== undefined &&
			(obj.liquidityPool = message.liquidityPool
				? LiquidityPool.toJSON(message.liquidityPool)
				: undefined);
		message.liquidityPoolMetadata !== undefined &&
			(obj.liquidityPoolMetadata = message.liquidityPoolMetadata
				? LiquidityPoolMetadata.toJSON(message.liquidityPoolMetadata)
				: undefined);
		message.liquidityPoolBatch !== undefined &&
			(obj.liquidityPoolBatch = message.liquidityPoolBatch
				? LiquidityPoolBatch.toJSON(message.liquidityPoolBatch)
				: undefined);
		if (message.batchPoolDepositMsgs) {
			obj.batchPoolDepositMsgs = message.batchPoolDepositMsgs.map((e) =>
				e ? BatchPoolDepositMsg.toJSON(e) : undefined
			);
		} else {
			obj.batchPoolDepositMsgs = [];
		}
		if (message.batchPoolWithdrawMsgs) {
			obj.batchPoolWithdrawMsgs = message.batchPoolWithdrawMsgs.map((e) =>
				e ? BatchPoolWithdrawMsg.toJSON(e) : undefined
			);
		} else {
			obj.batchPoolWithdrawMsgs = [];
		}
		if (message.batchPoolSwapMsgs) {
			obj.batchPoolSwapMsgs = message.batchPoolSwapMsgs.map((e) =>
				e ? BatchPoolSwapMsg.toJSON(e) : undefined
			);
		} else {
			obj.batchPoolSwapMsgs = [];
		}
		return obj;
	},
};

const baseGenesisState: object = {};

export const GenesisState = {
	encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
		if (message.params !== undefined) {
			Params.encode(message.params, writer.uint32(10).fork()).ldelim();
		}
		for (const v of message.liquidityPoolRecords) {
			LiquidityPoolRecord.encode(v!, writer.uint32(18).fork()).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): GenesisState {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseGenesisState
		) as GenesisState;
		message.liquidityPoolRecords = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.params = Params.decode(reader, reader.uint32());
					break;
				case 2:
					message.liquidityPoolRecords.push(
						LiquidityPoolRecord.decode(reader, reader.uint32())
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
		message.liquidityPoolRecords = [];
		if (object.params !== undefined && object.params !== null) {
			message.params = Params.fromJSON(object.params);
		} else {
			message.params = undefined;
		}
		if (
			object.liquidityPoolRecords !== undefined &&
			object.liquidityPoolRecords !== null
		) {
			for (const e of object.liquidityPoolRecords) {
				message.liquidityPoolRecords.push(
					LiquidityPoolRecord.fromJSON(e)
				);
			}
		}
		return message;
	},

	fromPartial(object: DeepPartial<GenesisState>): GenesisState {
		const message = { ...baseGenesisState } as GenesisState;
		message.liquidityPoolRecords = [];
		if (object.params !== undefined && object.params !== null) {
			message.params = Params.fromPartial(object.params);
		} else {
			message.params = undefined;
		}
		if (
			object.liquidityPoolRecords !== undefined &&
			object.liquidityPoolRecords !== null
		) {
			for (const e of object.liquidityPoolRecords) {
				message.liquidityPoolRecords.push(
					LiquidityPoolRecord.fromPartial(e)
				);
			}
		}
		return message;
	},

	toJSON(message: GenesisState): unknown {
		const obj: any = {};
		message.params !== undefined &&
			(obj.params = message.params
				? Params.toJSON(message.params)
				: undefined);
		if (message.liquidityPoolRecords) {
			obj.liquidityPoolRecords = message.liquidityPoolRecords.map((e) =>
				e ? LiquidityPoolRecord.toJSON(e) : undefined
			);
		} else {
			obj.liquidityPoolRecords = [];
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
