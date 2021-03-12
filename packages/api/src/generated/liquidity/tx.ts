/* eslint-disable */
import * as Long from 'long';
import { Coin, DecCoin } from '../cosmos/base/v1beta1/coin';
import { Reader, Writer } from 'protobufjs/minimal';

export const protobufPackage = 'tendermint.liquidity';

/** MsgCreateLiquidityPool defines an sdk.Msg type that supports submitting create liquidity pool */
export interface MsgCreateLiquidityPool {
	poolCreatorAddress: string;
	/** index of target pool type, only 1 is allowed on this version, Must match the value in the pool. */
	poolTypeIndex: number;
	/** reserve coin pair of the pool to deposit */
	depositCoins: Coin[];
}

/** MsgCreateLiquidityPoolRequest is the request type for the Msg/MsgCreateLiquidityPoolRequest RPC method. */
export interface MsgCreateLiquidityPoolRequest {
	baseReq?: BaseReq;
	/** MsgCreateLiquidityPool */
	msg?: MsgCreateLiquidityPool;
}

/** MsgCreateLiquidityPoolResponse defines the Msg/CreateLiquidityPool response type. */
export interface MsgCreateLiquidityPoolResponse {
	stdTx?: StdTx;
}

/**
 * `MsgDepositToLiquidityPool defines` an `sdk.Msg` type that supports submitting deposit request to the batch of the liquidity pool
 * Deposit submit to the batch of the Liquidity pool with the specified `pool_id`, deposit coins for reserve
 * this requests are stacked in the batch of the liquidity pool, not immediately processed and
 * processed in the `endblock` at once with other requests.
 *
 * See: https://github.com/tendermint/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgDepositToLiquidityPool {
	/**
	 * The publisher in which to create the book.
	 *
	 * Format: `publishers/{publisher}`
	 *
	 * Example: `publishers/1257894000000000000`
	 */
	depositorAddress: string;
	/** id of the target pool */
	poolId: Long;
	/** reserve coin pair of the pool to deposit */
	depositCoins: Coin[];
}

/** MsgDepositToLiquidityPoolRequest is the request type for the Msg/DepositToLiquidityPool RPC method. */
export interface MsgDepositToLiquidityPoolRequest {
	baseReq?: BaseReq;
	/** id of the target pool */
	poolId: Long;
	/** MsgDepositToLiquidityPool */
	msg?: MsgDepositToLiquidityPool;
}

/** MsgDepositToLiquidityPoolResponse defines the Msg/DepositToLiquidityPool response type. */
export interface MsgDepositToLiquidityPoolResponse {
	stdTx?: StdTx;
}

/**
 * `MsgWithdrawFromLiquidityPool` defines an `sdk.Msg` type that supports submitting withdraw request to the batch of the liquidity pool
 * Withdraw submit to the batch from the Liquidity pool with the specified `pool_id`, `pool_coin` of the pool
 * this requests are stacked in the batch of the liquidity pool, not immediately processed and
 * processed in the `endblock` at once with other requests.
 *
 * See: https://github.com/tendermint/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgWithdrawFromLiquidityPool {
	withdrawerAddress: string;
	/** id of the target pool */
	poolId: Long;
	poolCoin?: Coin;
}

/** MsgWithdrawFromLiquidityPoolRequest is the request type for the Query/WithdrawFromLiquidityPool RPC method. */
export interface MsgWithdrawFromLiquidityPoolRequest {
	baseReq?: BaseReq;
	/** id of the target pool */
	poolId: Long;
	/** MsgWithdrawFromLiquidityPool */
	msg?: MsgWithdrawFromLiquidityPool;
}

/** MsgWithdrawFromLiquidityPoolResponse defines the Msg/WithdrawFromLiquidityPool response type. */
export interface MsgWithdrawFromLiquidityPoolResponse {
	stdTx?: StdTx;
}

/**
 * `MsgSwap` defines an sdk.Msg type that supports submitting swap offer request to the batch of the liquidity pool
 * Swap offer to the Liquidity pool with the specified `pool_id`, `pool_type_index`, `swap_type`,
 * `demand_coin_denom` with the coin and the price you're offering
 * this requests are stacked in the batch of the liquidity pool, not immediately processed and
 * processed in the `endblock` at once with other requests
 * You should request the same each field as the pool
 * Currently, only the default `swap_type`1 is available on this version
 * The detailed swap algorithm can be found here.
 *
 * See: https://github.com/tendermint/liquidity/tree/develop/doc
 * https://github.com/tendermint/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgSwap {
	/** address of swap requester */
	swapRequesterAddress: string;
	/** id of the target pool */
	poolId: Long;
	/** id of swap type type, only 1 is allowed on this version, Must match the value in the pool. */
	swapType: number;
	/** offer sdk.coin for the swap request, Must match the denom in the pool. */
	offerCoin?: Coin;
	/** denom of demand coin to be exchanged on the swap request, Must match the denom in the pool. */
	demandCoinDenom: string;
	/** offer coin fee for pay fees in half offer coin */
	offerCoinFee?: Coin;
	/** limit order price for this offer */
	orderPrice: Uint8Array;
}

/** MsgSwapRequest is the request type for the Query/Swap RPC method. */
export interface MsgSwapRequest {
	baseReq?: BaseReq;
	/** id of the target pool */
	poolId: Long;
	/** MsgSwap */
	msg?: MsgSwap;
}

/** MsgSwapResponse defines the Msg/Swap response type. */
export interface MsgSwapResponse {
	stdTx?: StdTx;
}

/** Base Request struct for Post Tx, standard of tendermint/cosmos-sdk */
export interface BaseReq {
	/** Sender address or Keybase name to generate a transaction */
	from: string;
	/** Memo to send along with transaction */
	memo: string;
	/** Name or address of private key with which to sign */
	chainId: string;
	/** The account number of the signing account (offline mode only) */
	accountNumber: Long;
	/** The sequence number of the signing account (offline mode only) */
	sequence: Long;
	/** Set a block timeout height to prevent the tx from being committed past a certain height */
	timeoutHeight: Long;
	/** Fees to pay along with transaction */
	fees: Coin[];
	/** Gas prices in decimal format to determine the transaction fee */
	gasPrices: DecCoin[];
	/** Gas amount to determine the transaction fee */
	gas: Long;
	/** adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored */
	gasAdjustment: string;
	/** Estimate gas for a transaction (cannot be used in conjunction with generate_only) */
	simulate: boolean;
}

/** Fee struct of cosmos-sdk */
export interface Fee {
	gas: Long;
	/** amount is the amount of coins to be paid as a fee */
	amount: Coin[];
}

/** PubKey struct of tendermint/cosmos-sdk */
export interface PubKey {
	/** type of pubkey algorithm */
	type: string;
	/** value of pubkey */
	value: string;
}

/** signature struct of tendermint/cosmos-sdk */
export interface Signature {
	/** signature base64 */
	signature: string;
	/** PubKey */
	pubKey?: PubKey;
	/** The account number of the signing account (offline mode only) */
	accountNumber: Long;
	/** The sequence number of the signing account (offline mode only) */
	sequence: Long;
}

/** Base response struct of result of the requested Tx, standard of tendermint/cosmos-sdk */
export interface StdTx {
	/** Msgs */
	msg: string[];
	/** Fee */
	fee?: Fee;
	/** Memo of the transaction */
	memo: string;
	/** Signature */
	signature?: Signature;
}

const baseMsgCreateLiquidityPool: object = {
	poolCreatorAddress: '',
	poolTypeIndex: 0,
};

export const MsgCreateLiquidityPool = {
	encode(
		message: MsgCreateLiquidityPool,
		writer: Writer = Writer.create()
	): Writer {
		if (message.poolCreatorAddress !== '') {
			writer.uint32(10).string(message.poolCreatorAddress);
		}
		if (message.poolTypeIndex !== 0) {
			writer.uint32(16).uint32(message.poolTypeIndex);
		}
		for (const v of message.depositCoins) {
			Coin.encode(v!, writer.uint32(34).fork()).ldelim();
		}
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): MsgCreateLiquidityPool {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseMsgCreateLiquidityPool
		) as MsgCreateLiquidityPool;
		message.depositCoins = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.poolCreatorAddress = reader.string();
					break;
				case 2:
					message.poolTypeIndex = reader.uint32();
					break;
				case 4:
					message.depositCoins.push(
						Coin.decode(reader, reader.uint32())
					);
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgCreateLiquidityPool {
		const message = globalThis.Object.create(
			baseMsgCreateLiquidityPool
		) as MsgCreateLiquidityPool;
		message.depositCoins = [];
		if (
			object.poolCreatorAddress !== undefined &&
			object.poolCreatorAddress !== null
		) {
			message.poolCreatorAddress = String(object.poolCreatorAddress);
		} else {
			message.poolCreatorAddress = '';
		}
		if (
			object.poolTypeIndex !== undefined &&
			object.poolTypeIndex !== null
		) {
			message.poolTypeIndex = Number(object.poolTypeIndex);
		} else {
			message.poolTypeIndex = 0;
		}
		if (object.depositCoins !== undefined && object.depositCoins !== null) {
			for (const e of object.depositCoins) {
				message.depositCoins.push(Coin.fromJSON(e));
			}
		}
		return message;
	},

	fromPartial(
		object: DeepPartial<MsgCreateLiquidityPool>
	): MsgCreateLiquidityPool {
		const message = {
			...baseMsgCreateLiquidityPool,
		} as MsgCreateLiquidityPool;
		message.depositCoins = [];
		if (
			object.poolCreatorAddress !== undefined &&
			object.poolCreatorAddress !== null
		) {
			message.poolCreatorAddress = object.poolCreatorAddress;
		} else {
			message.poolCreatorAddress = '';
		}
		if (
			object.poolTypeIndex !== undefined &&
			object.poolTypeIndex !== null
		) {
			message.poolTypeIndex = object.poolTypeIndex;
		} else {
			message.poolTypeIndex = 0;
		}
		if (object.depositCoins !== undefined && object.depositCoins !== null) {
			for (const e of object.depositCoins) {
				message.depositCoins.push(Coin.fromPartial(e));
			}
		}
		return message;
	},

	toJSON(message: MsgCreateLiquidityPool): unknown {
		const obj: any = {};
		message.poolCreatorAddress !== undefined &&
			(obj.poolCreatorAddress = message.poolCreatorAddress);
		message.poolTypeIndex !== undefined &&
			(obj.poolTypeIndex = message.poolTypeIndex);
		if (message.depositCoins) {
			obj.depositCoins = message.depositCoins.map((e) =>
				e ? Coin.toJSON(e) : undefined
			);
		} else {
			obj.depositCoins = [];
		}
		return obj;
	},
};

const baseMsgCreateLiquidityPoolRequest: object = {};

export const MsgCreateLiquidityPoolRequest = {
	encode(
		message: MsgCreateLiquidityPoolRequest,
		writer: Writer = Writer.create()
	): Writer {
		if (message.baseReq !== undefined) {
			BaseReq.encode(message.baseReq, writer.uint32(10).fork()).ldelim();
		}
		if (message.msg !== undefined) {
			MsgCreateLiquidityPool.encode(
				message.msg,
				writer.uint32(18).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): MsgCreateLiquidityPoolRequest {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseMsgCreateLiquidityPoolRequest
		) as MsgCreateLiquidityPoolRequest;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.baseReq = BaseReq.decode(reader, reader.uint32());
					break;
				case 2:
					message.msg = MsgCreateLiquidityPool.decode(
						reader,
						reader.uint32()
					);
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgCreateLiquidityPoolRequest {
		const message = globalThis.Object.create(
			baseMsgCreateLiquidityPoolRequest
		) as MsgCreateLiquidityPoolRequest;
		if (object.baseReq !== undefined && object.baseReq !== null) {
			message.baseReq = BaseReq.fromJSON(object.baseReq);
		} else {
			message.baseReq = undefined;
		}
		if (object.msg !== undefined && object.msg !== null) {
			message.msg = MsgCreateLiquidityPool.fromJSON(object.msg);
		} else {
			message.msg = undefined;
		}
		return message;
	},

	fromPartial(
		object: DeepPartial<MsgCreateLiquidityPoolRequest>
	): MsgCreateLiquidityPoolRequest {
		const message = {
			...baseMsgCreateLiquidityPoolRequest,
		} as MsgCreateLiquidityPoolRequest;
		if (object.baseReq !== undefined && object.baseReq !== null) {
			message.baseReq = BaseReq.fromPartial(object.baseReq);
		} else {
			message.baseReq = undefined;
		}
		if (object.msg !== undefined && object.msg !== null) {
			message.msg = MsgCreateLiquidityPool.fromPartial(object.msg);
		} else {
			message.msg = undefined;
		}
		return message;
	},

	toJSON(message: MsgCreateLiquidityPoolRequest): unknown {
		const obj: any = {};
		message.baseReq !== undefined &&
			(obj.baseReq = message.baseReq
				? BaseReq.toJSON(message.baseReq)
				: undefined);
		message.msg !== undefined &&
			(obj.msg = message.msg
				? MsgCreateLiquidityPool.toJSON(message.msg)
				: undefined);
		return obj;
	},
};

const baseMsgCreateLiquidityPoolResponse: object = {};

export const MsgCreateLiquidityPoolResponse = {
	encode(
		message: MsgCreateLiquidityPoolResponse,
		writer: Writer = Writer.create()
	): Writer {
		if (message.stdTx !== undefined) {
			StdTx.encode(message.stdTx, writer.uint32(10).fork()).ldelim();
		}
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): MsgCreateLiquidityPoolResponse {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseMsgCreateLiquidityPoolResponse
		) as MsgCreateLiquidityPoolResponse;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.stdTx = StdTx.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgCreateLiquidityPoolResponse {
		const message = globalThis.Object.create(
			baseMsgCreateLiquidityPoolResponse
		) as MsgCreateLiquidityPoolResponse;
		if (object.stdTx !== undefined && object.stdTx !== null) {
			message.stdTx = StdTx.fromJSON(object.stdTx);
		} else {
			message.stdTx = undefined;
		}
		return message;
	},

	fromPartial(
		object: DeepPartial<MsgCreateLiquidityPoolResponse>
	): MsgCreateLiquidityPoolResponse {
		const message = {
			...baseMsgCreateLiquidityPoolResponse,
		} as MsgCreateLiquidityPoolResponse;
		if (object.stdTx !== undefined && object.stdTx !== null) {
			message.stdTx = StdTx.fromPartial(object.stdTx);
		} else {
			message.stdTx = undefined;
		}
		return message;
	},

	toJSON(message: MsgCreateLiquidityPoolResponse): unknown {
		const obj: any = {};
		message.stdTx !== undefined &&
			(obj.stdTx = message.stdTx
				? StdTx.toJSON(message.stdTx)
				: undefined);
		return obj;
	},
};

const baseMsgDepositToLiquidityPool: object = {
	depositorAddress: '',
	poolId: Long.UZERO,
};

export const MsgDepositToLiquidityPool = {
	encode(
		message: MsgDepositToLiquidityPool,
		writer: Writer = Writer.create()
	): Writer {
		if (message.depositorAddress !== '') {
			writer.uint32(10).string(message.depositorAddress);
		}
		if (!message.poolId.isZero()) {
			writer.uint32(16).uint64(message.poolId);
		}
		for (const v of message.depositCoins) {
			Coin.encode(v!, writer.uint32(26).fork()).ldelim();
		}
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): MsgDepositToLiquidityPool {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseMsgDepositToLiquidityPool
		) as MsgDepositToLiquidityPool;
		message.depositCoins = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.depositorAddress = reader.string();
					break;
				case 2:
					message.poolId = reader.uint64() as Long;
					break;
				case 3:
					message.depositCoins.push(
						Coin.decode(reader, reader.uint32())
					);
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgDepositToLiquidityPool {
		const message = globalThis.Object.create(
			baseMsgDepositToLiquidityPool
		) as MsgDepositToLiquidityPool;
		message.depositCoins = [];
		if (
			object.depositorAddress !== undefined &&
			object.depositorAddress !== null
		) {
			message.depositorAddress = String(object.depositorAddress);
		} else {
			message.depositorAddress = '';
		}
		if (object.poolId !== undefined && object.poolId !== null) {
			message.poolId = Long.fromString(object.poolId);
		} else {
			message.poolId = Long.UZERO;
		}
		if (object.depositCoins !== undefined && object.depositCoins !== null) {
			for (const e of object.depositCoins) {
				message.depositCoins.push(Coin.fromJSON(e));
			}
		}
		return message;
	},

	fromPartial(
		object: DeepPartial<MsgDepositToLiquidityPool>
	): MsgDepositToLiquidityPool {
		const message = {
			...baseMsgDepositToLiquidityPool,
		} as MsgDepositToLiquidityPool;
		message.depositCoins = [];
		if (
			object.depositorAddress !== undefined &&
			object.depositorAddress !== null
		) {
			message.depositorAddress = object.depositorAddress;
		} else {
			message.depositorAddress = '';
		}
		if (object.poolId !== undefined && object.poolId !== null) {
			message.poolId = object.poolId as Long;
		} else {
			message.poolId = Long.UZERO;
		}
		if (object.depositCoins !== undefined && object.depositCoins !== null) {
			for (const e of object.depositCoins) {
				message.depositCoins.push(Coin.fromPartial(e));
			}
		}
		return message;
	},

	toJSON(message: MsgDepositToLiquidityPool): unknown {
		const obj: any = {};
		message.depositorAddress !== undefined &&
			(obj.depositorAddress = message.depositorAddress);
		message.poolId !== undefined &&
			(obj.poolId = (message.poolId || Long.UZERO).toString());
		if (message.depositCoins) {
			obj.depositCoins = message.depositCoins.map((e) =>
				e ? Coin.toJSON(e) : undefined
			);
		} else {
			obj.depositCoins = [];
		}
		return obj;
	},
};

const baseMsgDepositToLiquidityPoolRequest: object = { poolId: Long.UZERO };

export const MsgDepositToLiquidityPoolRequest = {
	encode(
		message: MsgDepositToLiquidityPoolRequest,
		writer: Writer = Writer.create()
	): Writer {
		if (message.baseReq !== undefined) {
			BaseReq.encode(message.baseReq, writer.uint32(10).fork()).ldelim();
		}
		if (!message.poolId.isZero()) {
			writer.uint32(16).uint64(message.poolId);
		}
		if (message.msg !== undefined) {
			MsgDepositToLiquidityPool.encode(
				message.msg,
				writer.uint32(26).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): MsgDepositToLiquidityPoolRequest {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseMsgDepositToLiquidityPoolRequest
		) as MsgDepositToLiquidityPoolRequest;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.baseReq = BaseReq.decode(reader, reader.uint32());
					break;
				case 2:
					message.poolId = reader.uint64() as Long;
					break;
				case 3:
					message.msg = MsgDepositToLiquidityPool.decode(
						reader,
						reader.uint32()
					);
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgDepositToLiquidityPoolRequest {
		const message = globalThis.Object.create(
			baseMsgDepositToLiquidityPoolRequest
		) as MsgDepositToLiquidityPoolRequest;
		if (object.baseReq !== undefined && object.baseReq !== null) {
			message.baseReq = BaseReq.fromJSON(object.baseReq);
		} else {
			message.baseReq = undefined;
		}
		if (object.poolId !== undefined && object.poolId !== null) {
			message.poolId = Long.fromString(object.poolId);
		} else {
			message.poolId = Long.UZERO;
		}
		if (object.msg !== undefined && object.msg !== null) {
			message.msg = MsgDepositToLiquidityPool.fromJSON(object.msg);
		} else {
			message.msg = undefined;
		}
		return message;
	},

	fromPartial(
		object: DeepPartial<MsgDepositToLiquidityPoolRequest>
	): MsgDepositToLiquidityPoolRequest {
		const message = {
			...baseMsgDepositToLiquidityPoolRequest,
		} as MsgDepositToLiquidityPoolRequest;
		if (object.baseReq !== undefined && object.baseReq !== null) {
			message.baseReq = BaseReq.fromPartial(object.baseReq);
		} else {
			message.baseReq = undefined;
		}
		if (object.poolId !== undefined && object.poolId !== null) {
			message.poolId = object.poolId as Long;
		} else {
			message.poolId = Long.UZERO;
		}
		if (object.msg !== undefined && object.msg !== null) {
			message.msg = MsgDepositToLiquidityPool.fromPartial(object.msg);
		} else {
			message.msg = undefined;
		}
		return message;
	},

	toJSON(message: MsgDepositToLiquidityPoolRequest): unknown {
		const obj: any = {};
		message.baseReq !== undefined &&
			(obj.baseReq = message.baseReq
				? BaseReq.toJSON(message.baseReq)
				: undefined);
		message.poolId !== undefined &&
			(obj.poolId = (message.poolId || Long.UZERO).toString());
		message.msg !== undefined &&
			(obj.msg = message.msg
				? MsgDepositToLiquidityPool.toJSON(message.msg)
				: undefined);
		return obj;
	},
};

const baseMsgDepositToLiquidityPoolResponse: object = {};

export const MsgDepositToLiquidityPoolResponse = {
	encode(
		message: MsgDepositToLiquidityPoolResponse,
		writer: Writer = Writer.create()
	): Writer {
		if (message.stdTx !== undefined) {
			StdTx.encode(message.stdTx, writer.uint32(10).fork()).ldelim();
		}
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): MsgDepositToLiquidityPoolResponse {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseMsgDepositToLiquidityPoolResponse
		) as MsgDepositToLiquidityPoolResponse;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.stdTx = StdTx.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgDepositToLiquidityPoolResponse {
		const message = globalThis.Object.create(
			baseMsgDepositToLiquidityPoolResponse
		) as MsgDepositToLiquidityPoolResponse;
		if (object.stdTx !== undefined && object.stdTx !== null) {
			message.stdTx = StdTx.fromJSON(object.stdTx);
		} else {
			message.stdTx = undefined;
		}
		return message;
	},

	fromPartial(
		object: DeepPartial<MsgDepositToLiquidityPoolResponse>
	): MsgDepositToLiquidityPoolResponse {
		const message = {
			...baseMsgDepositToLiquidityPoolResponse,
		} as MsgDepositToLiquidityPoolResponse;
		if (object.stdTx !== undefined && object.stdTx !== null) {
			message.stdTx = StdTx.fromPartial(object.stdTx);
		} else {
			message.stdTx = undefined;
		}
		return message;
	},

	toJSON(message: MsgDepositToLiquidityPoolResponse): unknown {
		const obj: any = {};
		message.stdTx !== undefined &&
			(obj.stdTx = message.stdTx
				? StdTx.toJSON(message.stdTx)
				: undefined);
		return obj;
	},
};

const baseMsgWithdrawFromLiquidityPool: object = {
	withdrawerAddress: '',
	poolId: Long.UZERO,
};

export const MsgWithdrawFromLiquidityPool = {
	encode(
		message: MsgWithdrawFromLiquidityPool,
		writer: Writer = Writer.create()
	): Writer {
		if (message.withdrawerAddress !== '') {
			writer.uint32(10).string(message.withdrawerAddress);
		}
		if (!message.poolId.isZero()) {
			writer.uint32(16).uint64(message.poolId);
		}
		if (message.poolCoin !== undefined) {
			Coin.encode(message.poolCoin, writer.uint32(26).fork()).ldelim();
		}
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): MsgWithdrawFromLiquidityPool {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseMsgWithdrawFromLiquidityPool
		) as MsgWithdrawFromLiquidityPool;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.withdrawerAddress = reader.string();
					break;
				case 2:
					message.poolId = reader.uint64() as Long;
					break;
				case 3:
					message.poolCoin = Coin.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgWithdrawFromLiquidityPool {
		const message = globalThis.Object.create(
			baseMsgWithdrawFromLiquidityPool
		) as MsgWithdrawFromLiquidityPool;
		if (
			object.withdrawerAddress !== undefined &&
			object.withdrawerAddress !== null
		) {
			message.withdrawerAddress = String(object.withdrawerAddress);
		} else {
			message.withdrawerAddress = '';
		}
		if (object.poolId !== undefined && object.poolId !== null) {
			message.poolId = Long.fromString(object.poolId);
		} else {
			message.poolId = Long.UZERO;
		}
		if (object.poolCoin !== undefined && object.poolCoin !== null) {
			message.poolCoin = Coin.fromJSON(object.poolCoin);
		} else {
			message.poolCoin = undefined;
		}
		return message;
	},

	fromPartial(
		object: DeepPartial<MsgWithdrawFromLiquidityPool>
	): MsgWithdrawFromLiquidityPool {
		const message = {
			...baseMsgWithdrawFromLiquidityPool,
		} as MsgWithdrawFromLiquidityPool;
		if (
			object.withdrawerAddress !== undefined &&
			object.withdrawerAddress !== null
		) {
			message.withdrawerAddress = object.withdrawerAddress;
		} else {
			message.withdrawerAddress = '';
		}
		if (object.poolId !== undefined && object.poolId !== null) {
			message.poolId = object.poolId as Long;
		} else {
			message.poolId = Long.UZERO;
		}
		if (object.poolCoin !== undefined && object.poolCoin !== null) {
			message.poolCoin = Coin.fromPartial(object.poolCoin);
		} else {
			message.poolCoin = undefined;
		}
		return message;
	},

	toJSON(message: MsgWithdrawFromLiquidityPool): unknown {
		const obj: any = {};
		message.withdrawerAddress !== undefined &&
			(obj.withdrawerAddress = message.withdrawerAddress);
		message.poolId !== undefined &&
			(obj.poolId = (message.poolId || Long.UZERO).toString());
		message.poolCoin !== undefined &&
			(obj.poolCoin = message.poolCoin
				? Coin.toJSON(message.poolCoin)
				: undefined);
		return obj;
	},
};

const baseMsgWithdrawFromLiquidityPoolRequest: object = { poolId: Long.UZERO };

export const MsgWithdrawFromLiquidityPoolRequest = {
	encode(
		message: MsgWithdrawFromLiquidityPoolRequest,
		writer: Writer = Writer.create()
	): Writer {
		if (message.baseReq !== undefined) {
			BaseReq.encode(message.baseReq, writer.uint32(10).fork()).ldelim();
		}
		if (!message.poolId.isZero()) {
			writer.uint32(16).uint64(message.poolId);
		}
		if (message.msg !== undefined) {
			MsgWithdrawFromLiquidityPool.encode(
				message.msg,
				writer.uint32(26).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): MsgWithdrawFromLiquidityPoolRequest {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseMsgWithdrawFromLiquidityPoolRequest
		) as MsgWithdrawFromLiquidityPoolRequest;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.baseReq = BaseReq.decode(reader, reader.uint32());
					break;
				case 2:
					message.poolId = reader.uint64() as Long;
					break;
				case 3:
					message.msg = MsgWithdrawFromLiquidityPool.decode(
						reader,
						reader.uint32()
					);
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgWithdrawFromLiquidityPoolRequest {
		const message = globalThis.Object.create(
			baseMsgWithdrawFromLiquidityPoolRequest
		) as MsgWithdrawFromLiquidityPoolRequest;
		if (object.baseReq !== undefined && object.baseReq !== null) {
			message.baseReq = BaseReq.fromJSON(object.baseReq);
		} else {
			message.baseReq = undefined;
		}
		if (object.poolId !== undefined && object.poolId !== null) {
			message.poolId = Long.fromString(object.poolId);
		} else {
			message.poolId = Long.UZERO;
		}
		if (object.msg !== undefined && object.msg !== null) {
			message.msg = MsgWithdrawFromLiquidityPool.fromJSON(object.msg);
		} else {
			message.msg = undefined;
		}
		return message;
	},

	fromPartial(
		object: DeepPartial<MsgWithdrawFromLiquidityPoolRequest>
	): MsgWithdrawFromLiquidityPoolRequest {
		const message = {
			...baseMsgWithdrawFromLiquidityPoolRequest,
		} as MsgWithdrawFromLiquidityPoolRequest;
		if (object.baseReq !== undefined && object.baseReq !== null) {
			message.baseReq = BaseReq.fromPartial(object.baseReq);
		} else {
			message.baseReq = undefined;
		}
		if (object.poolId !== undefined && object.poolId !== null) {
			message.poolId = object.poolId as Long;
		} else {
			message.poolId = Long.UZERO;
		}
		if (object.msg !== undefined && object.msg !== null) {
			message.msg = MsgWithdrawFromLiquidityPool.fromPartial(object.msg);
		} else {
			message.msg = undefined;
		}
		return message;
	},

	toJSON(message: MsgWithdrawFromLiquidityPoolRequest): unknown {
		const obj: any = {};
		message.baseReq !== undefined &&
			(obj.baseReq = message.baseReq
				? BaseReq.toJSON(message.baseReq)
				: undefined);
		message.poolId !== undefined &&
			(obj.poolId = (message.poolId || Long.UZERO).toString());
		message.msg !== undefined &&
			(obj.msg = message.msg
				? MsgWithdrawFromLiquidityPool.toJSON(message.msg)
				: undefined);
		return obj;
	},
};

const baseMsgWithdrawFromLiquidityPoolResponse: object = {};

export const MsgWithdrawFromLiquidityPoolResponse = {
	encode(
		message: MsgWithdrawFromLiquidityPoolResponse,
		writer: Writer = Writer.create()
	): Writer {
		if (message.stdTx !== undefined) {
			StdTx.encode(message.stdTx, writer.uint32(10).fork()).ldelim();
		}
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): MsgWithdrawFromLiquidityPoolResponse {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseMsgWithdrawFromLiquidityPoolResponse
		) as MsgWithdrawFromLiquidityPoolResponse;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.stdTx = StdTx.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgWithdrawFromLiquidityPoolResponse {
		const message = globalThis.Object.create(
			baseMsgWithdrawFromLiquidityPoolResponse
		) as MsgWithdrawFromLiquidityPoolResponse;
		if (object.stdTx !== undefined && object.stdTx !== null) {
			message.stdTx = StdTx.fromJSON(object.stdTx);
		} else {
			message.stdTx = undefined;
		}
		return message;
	},

	fromPartial(
		object: DeepPartial<MsgWithdrawFromLiquidityPoolResponse>
	): MsgWithdrawFromLiquidityPoolResponse {
		const message = {
			...baseMsgWithdrawFromLiquidityPoolResponse,
		} as MsgWithdrawFromLiquidityPoolResponse;
		if (object.stdTx !== undefined && object.stdTx !== null) {
			message.stdTx = StdTx.fromPartial(object.stdTx);
		} else {
			message.stdTx = undefined;
		}
		return message;
	},

	toJSON(message: MsgWithdrawFromLiquidityPoolResponse): unknown {
		const obj: any = {};
		message.stdTx !== undefined &&
			(obj.stdTx = message.stdTx
				? StdTx.toJSON(message.stdTx)
				: undefined);
		return obj;
	},
};

const baseMsgSwap: object = {
	swapRequesterAddress: '',
	poolId: Long.UZERO,
	swapType: 0,
	demandCoinDenom: '',
};

export const MsgSwap = {
	encode(message: MsgSwap, writer: Writer = Writer.create()): Writer {
		if (message.swapRequesterAddress !== '') {
			writer.uint32(10).string(message.swapRequesterAddress);
		}
		if (!message.poolId.isZero()) {
			writer.uint32(16).uint64(message.poolId);
		}
		if (message.swapType !== 0) {
			writer.uint32(24).uint32(message.swapType);
		}
		if (message.offerCoin !== undefined) {
			Coin.encode(message.offerCoin, writer.uint32(34).fork()).ldelim();
		}
		if (message.demandCoinDenom !== '') {
			writer.uint32(42).string(message.demandCoinDenom);
		}
		if (message.offerCoinFee !== undefined) {
			Coin.encode(
				message.offerCoinFee,
				writer.uint32(50).fork()
			).ldelim();
		}
		if (message.orderPrice.length !== 0) {
			writer.uint32(58).bytes(message.orderPrice);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): MsgSwap {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(baseMsgSwap) as MsgSwap;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.swapRequesterAddress = reader.string();
					break;
				case 2:
					message.poolId = reader.uint64() as Long;
					break;
				case 3:
					message.swapType = reader.uint32();
					break;
				case 4:
					message.offerCoin = Coin.decode(reader, reader.uint32());
					break;
				case 5:
					message.demandCoinDenom = reader.string();
					break;
				case 6:
					message.offerCoinFee = Coin.decode(reader, reader.uint32());
					break;
				case 7:
					message.orderPrice = reader.bytes();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgSwap {
		const message = globalThis.Object.create(baseMsgSwap) as MsgSwap;
		if (
			object.swapRequesterAddress !== undefined &&
			object.swapRequesterAddress !== null
		) {
			message.swapRequesterAddress = String(object.swapRequesterAddress);
		} else {
			message.swapRequesterAddress = '';
		}
		if (object.poolId !== undefined && object.poolId !== null) {
			message.poolId = Long.fromString(object.poolId);
		} else {
			message.poolId = Long.UZERO;
		}
		if (object.swapType !== undefined && object.swapType !== null) {
			message.swapType = Number(object.swapType);
		} else {
			message.swapType = 0;
		}
		if (object.offerCoin !== undefined && object.offerCoin !== null) {
			message.offerCoin = Coin.fromJSON(object.offerCoin);
		} else {
			message.offerCoin = undefined;
		}
		if (
			object.demandCoinDenom !== undefined &&
			object.demandCoinDenom !== null
		) {
			message.demandCoinDenom = String(object.demandCoinDenom);
		} else {
			message.demandCoinDenom = '';
		}
		if (object.offerCoinFee !== undefined && object.offerCoinFee !== null) {
			message.offerCoinFee = Coin.fromJSON(object.offerCoinFee);
		} else {
			message.offerCoinFee = undefined;
		}
		if (object.orderPrice !== undefined && object.orderPrice !== null) {
			message.orderPrice = bytesFromBase64(object.orderPrice);
		}
		return message;
	},

	fromPartial(object: DeepPartial<MsgSwap>): MsgSwap {
		const message = { ...baseMsgSwap } as MsgSwap;
		if (
			object.swapRequesterAddress !== undefined &&
			object.swapRequesterAddress !== null
		) {
			message.swapRequesterAddress = object.swapRequesterAddress;
		} else {
			message.swapRequesterAddress = '';
		}
		if (object.poolId !== undefined && object.poolId !== null) {
			message.poolId = object.poolId as Long;
		} else {
			message.poolId = Long.UZERO;
		}
		if (object.swapType !== undefined && object.swapType !== null) {
			message.swapType = object.swapType;
		} else {
			message.swapType = 0;
		}
		if (object.offerCoin !== undefined && object.offerCoin !== null) {
			message.offerCoin = Coin.fromPartial(object.offerCoin);
		} else {
			message.offerCoin = undefined;
		}
		if (
			object.demandCoinDenom !== undefined &&
			object.demandCoinDenom !== null
		) {
			message.demandCoinDenom = object.demandCoinDenom;
		} else {
			message.demandCoinDenom = '';
		}
		if (object.offerCoinFee !== undefined && object.offerCoinFee !== null) {
			message.offerCoinFee = Coin.fromPartial(object.offerCoinFee);
		} else {
			message.offerCoinFee = undefined;
		}
		if (object.orderPrice !== undefined && object.orderPrice !== null) {
			message.orderPrice = object.orderPrice;
		} else {
			message.orderPrice = new Uint8Array();
		}
		return message;
	},

	toJSON(message: MsgSwap): unknown {
		const obj: any = {};
		message.swapRequesterAddress !== undefined &&
			(obj.swapRequesterAddress = message.swapRequesterAddress);
		message.poolId !== undefined &&
			(obj.poolId = (message.poolId || Long.UZERO).toString());
		message.swapType !== undefined && (obj.swapType = message.swapType);
		message.offerCoin !== undefined &&
			(obj.offerCoin = message.offerCoin
				? Coin.toJSON(message.offerCoin)
				: undefined);
		message.demandCoinDenom !== undefined &&
			(obj.demandCoinDenom = message.demandCoinDenom);
		message.offerCoinFee !== undefined &&
			(obj.offerCoinFee = message.offerCoinFee
				? Coin.toJSON(message.offerCoinFee)
				: undefined);
		message.orderPrice !== undefined &&
			(obj.orderPrice = base64FromBytes(
				message.orderPrice !== undefined
					? message.orderPrice
					: new Uint8Array()
			));
		return obj;
	},
};

const baseMsgSwapRequest: object = { poolId: Long.UZERO };

export const MsgSwapRequest = {
	encode(message: MsgSwapRequest, writer: Writer = Writer.create()): Writer {
		if (message.baseReq !== undefined) {
			BaseReq.encode(message.baseReq, writer.uint32(10).fork()).ldelim();
		}
		if (!message.poolId.isZero()) {
			writer.uint32(16).uint64(message.poolId);
		}
		if (message.msg !== undefined) {
			MsgSwap.encode(message.msg, writer.uint32(26).fork()).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): MsgSwapRequest {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseMsgSwapRequest
		) as MsgSwapRequest;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.baseReq = BaseReq.decode(reader, reader.uint32());
					break;
				case 2:
					message.poolId = reader.uint64() as Long;
					break;
				case 3:
					message.msg = MsgSwap.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgSwapRequest {
		const message = globalThis.Object.create(
			baseMsgSwapRequest
		) as MsgSwapRequest;
		if (object.baseReq !== undefined && object.baseReq !== null) {
			message.baseReq = BaseReq.fromJSON(object.baseReq);
		} else {
			message.baseReq = undefined;
		}
		if (object.poolId !== undefined && object.poolId !== null) {
			message.poolId = Long.fromString(object.poolId);
		} else {
			message.poolId = Long.UZERO;
		}
		if (object.msg !== undefined && object.msg !== null) {
			message.msg = MsgSwap.fromJSON(object.msg);
		} else {
			message.msg = undefined;
		}
		return message;
	},

	fromPartial(object: DeepPartial<MsgSwapRequest>): MsgSwapRequest {
		const message = { ...baseMsgSwapRequest } as MsgSwapRequest;
		if (object.baseReq !== undefined && object.baseReq !== null) {
			message.baseReq = BaseReq.fromPartial(object.baseReq);
		} else {
			message.baseReq = undefined;
		}
		if (object.poolId !== undefined && object.poolId !== null) {
			message.poolId = object.poolId as Long;
		} else {
			message.poolId = Long.UZERO;
		}
		if (object.msg !== undefined && object.msg !== null) {
			message.msg = MsgSwap.fromPartial(object.msg);
		} else {
			message.msg = undefined;
		}
		return message;
	},

	toJSON(message: MsgSwapRequest): unknown {
		const obj: any = {};
		message.baseReq !== undefined &&
			(obj.baseReq = message.baseReq
				? BaseReq.toJSON(message.baseReq)
				: undefined);
		message.poolId !== undefined &&
			(obj.poolId = (message.poolId || Long.UZERO).toString());
		message.msg !== undefined &&
			(obj.msg = message.msg ? MsgSwap.toJSON(message.msg) : undefined);
		return obj;
	},
};

const baseMsgSwapResponse: object = {};

export const MsgSwapResponse = {
	encode(message: MsgSwapResponse, writer: Writer = Writer.create()): Writer {
		if (message.stdTx !== undefined) {
			StdTx.encode(message.stdTx, writer.uint32(10).fork()).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): MsgSwapResponse {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseMsgSwapResponse
		) as MsgSwapResponse;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.stdTx = StdTx.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgSwapResponse {
		const message = globalThis.Object.create(
			baseMsgSwapResponse
		) as MsgSwapResponse;
		if (object.stdTx !== undefined && object.stdTx !== null) {
			message.stdTx = StdTx.fromJSON(object.stdTx);
		} else {
			message.stdTx = undefined;
		}
		return message;
	},

	fromPartial(object: DeepPartial<MsgSwapResponse>): MsgSwapResponse {
		const message = { ...baseMsgSwapResponse } as MsgSwapResponse;
		if (object.stdTx !== undefined && object.stdTx !== null) {
			message.stdTx = StdTx.fromPartial(object.stdTx);
		} else {
			message.stdTx = undefined;
		}
		return message;
	},

	toJSON(message: MsgSwapResponse): unknown {
		const obj: any = {};
		message.stdTx !== undefined &&
			(obj.stdTx = message.stdTx
				? StdTx.toJSON(message.stdTx)
				: undefined);
		return obj;
	},
};

const baseBaseReq: object = {
	from: '',
	memo: '',
	chainId: '',
	accountNumber: Long.UZERO,
	sequence: Long.UZERO,
	timeoutHeight: Long.UZERO,
	gas: Long.UZERO,
	gasAdjustment: '',
	simulate: false,
};

export const BaseReq = {
	encode(message: BaseReq, writer: Writer = Writer.create()): Writer {
		if (message.from !== '') {
			writer.uint32(10).string(message.from);
		}
		if (message.memo !== '') {
			writer.uint32(18).string(message.memo);
		}
		if (message.chainId !== '') {
			writer.uint32(26).string(message.chainId);
		}
		if (!message.accountNumber.isZero()) {
			writer.uint32(32).uint64(message.accountNumber);
		}
		if (!message.sequence.isZero()) {
			writer.uint32(40).uint64(message.sequence);
		}
		if (!message.timeoutHeight.isZero()) {
			writer.uint32(48).uint64(message.timeoutHeight);
		}
		for (const v of message.fees) {
			Coin.encode(v!, writer.uint32(58).fork()).ldelim();
		}
		for (const v of message.gasPrices) {
			DecCoin.encode(v!, writer.uint32(66).fork()).ldelim();
		}
		if (!message.gas.isZero()) {
			writer.uint32(72).uint64(message.gas);
		}
		if (message.gasAdjustment !== '') {
			writer.uint32(82).string(message.gasAdjustment);
		}
		if (message.simulate === true) {
			writer.uint32(88).bool(message.simulate);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): BaseReq {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(baseBaseReq) as BaseReq;
		message.fees = [];
		message.gasPrices = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.from = reader.string();
					break;
				case 2:
					message.memo = reader.string();
					break;
				case 3:
					message.chainId = reader.string();
					break;
				case 4:
					message.accountNumber = reader.uint64() as Long;
					break;
				case 5:
					message.sequence = reader.uint64() as Long;
					break;
				case 6:
					message.timeoutHeight = reader.uint64() as Long;
					break;
				case 7:
					message.fees.push(Coin.decode(reader, reader.uint32()));
					break;
				case 8:
					message.gasPrices.push(
						DecCoin.decode(reader, reader.uint32())
					);
					break;
				case 9:
					message.gas = reader.uint64() as Long;
					break;
				case 10:
					message.gasAdjustment = reader.string();
					break;
				case 11:
					message.simulate = reader.bool();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): BaseReq {
		const message = globalThis.Object.create(baseBaseReq) as BaseReq;
		message.fees = [];
		message.gasPrices = [];
		if (object.from !== undefined && object.from !== null) {
			message.from = String(object.from);
		} else {
			message.from = '';
		}
		if (object.memo !== undefined && object.memo !== null) {
			message.memo = String(object.memo);
		} else {
			message.memo = '';
		}
		if (object.chainId !== undefined && object.chainId !== null) {
			message.chainId = String(object.chainId);
		} else {
			message.chainId = '';
		}
		if (
			object.accountNumber !== undefined &&
			object.accountNumber !== null
		) {
			message.accountNumber = Long.fromString(object.accountNumber);
		} else {
			message.accountNumber = Long.UZERO;
		}
		if (object.sequence !== undefined && object.sequence !== null) {
			message.sequence = Long.fromString(object.sequence);
		} else {
			message.sequence = Long.UZERO;
		}
		if (
			object.timeoutHeight !== undefined &&
			object.timeoutHeight !== null
		) {
			message.timeoutHeight = Long.fromString(object.timeoutHeight);
		} else {
			message.timeoutHeight = Long.UZERO;
		}
		if (object.fees !== undefined && object.fees !== null) {
			for (const e of object.fees) {
				message.fees.push(Coin.fromJSON(e));
			}
		}
		if (object.gasPrices !== undefined && object.gasPrices !== null) {
			for (const e of object.gasPrices) {
				message.gasPrices.push(DecCoin.fromJSON(e));
			}
		}
		if (object.gas !== undefined && object.gas !== null) {
			message.gas = Long.fromString(object.gas);
		} else {
			message.gas = Long.UZERO;
		}
		if (
			object.gasAdjustment !== undefined &&
			object.gasAdjustment !== null
		) {
			message.gasAdjustment = String(object.gasAdjustment);
		} else {
			message.gasAdjustment = '';
		}
		if (object.simulate !== undefined && object.simulate !== null) {
			message.simulate = Boolean(object.simulate);
		} else {
			message.simulate = false;
		}
		return message;
	},

	fromPartial(object: DeepPartial<BaseReq>): BaseReq {
		const message = { ...baseBaseReq } as BaseReq;
		message.fees = [];
		message.gasPrices = [];
		if (object.from !== undefined && object.from !== null) {
			message.from = object.from;
		} else {
			message.from = '';
		}
		if (object.memo !== undefined && object.memo !== null) {
			message.memo = object.memo;
		} else {
			message.memo = '';
		}
		if (object.chainId !== undefined && object.chainId !== null) {
			message.chainId = object.chainId;
		} else {
			message.chainId = '';
		}
		if (
			object.accountNumber !== undefined &&
			object.accountNumber !== null
		) {
			message.accountNumber = object.accountNumber as Long;
		} else {
			message.accountNumber = Long.UZERO;
		}
		if (object.sequence !== undefined && object.sequence !== null) {
			message.sequence = object.sequence as Long;
		} else {
			message.sequence = Long.UZERO;
		}
		if (
			object.timeoutHeight !== undefined &&
			object.timeoutHeight !== null
		) {
			message.timeoutHeight = object.timeoutHeight as Long;
		} else {
			message.timeoutHeight = Long.UZERO;
		}
		if (object.fees !== undefined && object.fees !== null) {
			for (const e of object.fees) {
				message.fees.push(Coin.fromPartial(e));
			}
		}
		if (object.gasPrices !== undefined && object.gasPrices !== null) {
			for (const e of object.gasPrices) {
				message.gasPrices.push(DecCoin.fromPartial(e));
			}
		}
		if (object.gas !== undefined && object.gas !== null) {
			message.gas = object.gas as Long;
		} else {
			message.gas = Long.UZERO;
		}
		if (
			object.gasAdjustment !== undefined &&
			object.gasAdjustment !== null
		) {
			message.gasAdjustment = object.gasAdjustment;
		} else {
			message.gasAdjustment = '';
		}
		if (object.simulate !== undefined && object.simulate !== null) {
			message.simulate = object.simulate;
		} else {
			message.simulate = false;
		}
		return message;
	},

	toJSON(message: BaseReq): unknown {
		const obj: any = {};
		message.from !== undefined && (obj.from = message.from);
		message.memo !== undefined && (obj.memo = message.memo);
		message.chainId !== undefined && (obj.chainId = message.chainId);
		message.accountNumber !== undefined &&
			(obj.accountNumber = (
				message.accountNumber || Long.UZERO
			).toString());
		message.sequence !== undefined &&
			(obj.sequence = (message.sequence || Long.UZERO).toString());
		message.timeoutHeight !== undefined &&
			(obj.timeoutHeight = (
				message.timeoutHeight || Long.UZERO
			).toString());
		if (message.fees) {
			obj.fees = message.fees.map((e) =>
				e ? Coin.toJSON(e) : undefined
			);
		} else {
			obj.fees = [];
		}
		if (message.gasPrices) {
			obj.gasPrices = message.gasPrices.map((e) =>
				e ? DecCoin.toJSON(e) : undefined
			);
		} else {
			obj.gasPrices = [];
		}
		message.gas !== undefined &&
			(obj.gas = (message.gas || Long.UZERO).toString());
		message.gasAdjustment !== undefined &&
			(obj.gasAdjustment = message.gasAdjustment);
		message.simulate !== undefined && (obj.simulate = message.simulate);
		return obj;
	},
};

const baseFee: object = { gas: Long.UZERO };

export const Fee = {
	encode(message: Fee, writer: Writer = Writer.create()): Writer {
		if (!message.gas.isZero()) {
			writer.uint32(8).uint64(message.gas);
		}
		for (const v of message.amount) {
			Coin.encode(v!, writer.uint32(18).fork()).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): Fee {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(baseFee) as Fee;
		message.amount = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.gas = reader.uint64() as Long;
					break;
				case 2:
					message.amount.push(Coin.decode(reader, reader.uint32()));
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): Fee {
		const message = globalThis.Object.create(baseFee) as Fee;
		message.amount = [];
		if (object.gas !== undefined && object.gas !== null) {
			message.gas = Long.fromString(object.gas);
		} else {
			message.gas = Long.UZERO;
		}
		if (object.amount !== undefined && object.amount !== null) {
			for (const e of object.amount) {
				message.amount.push(Coin.fromJSON(e));
			}
		}
		return message;
	},

	fromPartial(object: DeepPartial<Fee>): Fee {
		const message = { ...baseFee } as Fee;
		message.amount = [];
		if (object.gas !== undefined && object.gas !== null) {
			message.gas = object.gas as Long;
		} else {
			message.gas = Long.UZERO;
		}
		if (object.amount !== undefined && object.amount !== null) {
			for (const e of object.amount) {
				message.amount.push(Coin.fromPartial(e));
			}
		}
		return message;
	},

	toJSON(message: Fee): unknown {
		const obj: any = {};
		message.gas !== undefined &&
			(obj.gas = (message.gas || Long.UZERO).toString());
		if (message.amount) {
			obj.amount = message.amount.map((e) =>
				e ? Coin.toJSON(e) : undefined
			);
		} else {
			obj.amount = [];
		}
		return obj;
	},
};

const basePubKey: object = { type: '', value: '' };

export const PubKey = {
	encode(message: PubKey, writer: Writer = Writer.create()): Writer {
		if (message.type !== '') {
			writer.uint32(10).string(message.type);
		}
		if (message.value !== '') {
			writer.uint32(18).string(message.value);
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
					message.type = reader.string();
					break;
				case 2:
					message.value = reader.string();
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
		if (object.type !== undefined && object.type !== null) {
			message.type = String(object.type);
		} else {
			message.type = '';
		}
		if (object.value !== undefined && object.value !== null) {
			message.value = String(object.value);
		} else {
			message.value = '';
		}
		return message;
	},

	fromPartial(object: DeepPartial<PubKey>): PubKey {
		const message = { ...basePubKey } as PubKey;
		if (object.type !== undefined && object.type !== null) {
			message.type = object.type;
		} else {
			message.type = '';
		}
		if (object.value !== undefined && object.value !== null) {
			message.value = object.value;
		} else {
			message.value = '';
		}
		return message;
	},

	toJSON(message: PubKey): unknown {
		const obj: any = {};
		message.type !== undefined && (obj.type = message.type);
		message.value !== undefined && (obj.value = message.value);
		return obj;
	},
};

const baseSignature: object = {
	signature: '',
	accountNumber: Long.UZERO,
	sequence: Long.UZERO,
};

export const Signature = {
	encode(message: Signature, writer: Writer = Writer.create()): Writer {
		if (message.signature !== '') {
			writer.uint32(10).string(message.signature);
		}
		if (message.pubKey !== undefined) {
			PubKey.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
		}
		if (!message.accountNumber.isZero()) {
			writer.uint32(24).uint64(message.accountNumber);
		}
		if (!message.sequence.isZero()) {
			writer.uint32(32).uint64(message.sequence);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): Signature {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(baseSignature) as Signature;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.signature = reader.string();
					break;
				case 2:
					message.pubKey = PubKey.decode(reader, reader.uint32());
					break;
				case 3:
					message.accountNumber = reader.uint64() as Long;
					break;
				case 4:
					message.sequence = reader.uint64() as Long;
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): Signature {
		const message = globalThis.Object.create(baseSignature) as Signature;
		if (object.signature !== undefined && object.signature !== null) {
			message.signature = String(object.signature);
		} else {
			message.signature = '';
		}
		if (object.pubKey !== undefined && object.pubKey !== null) {
			message.pubKey = PubKey.fromJSON(object.pubKey);
		} else {
			message.pubKey = undefined;
		}
		if (
			object.accountNumber !== undefined &&
			object.accountNumber !== null
		) {
			message.accountNumber = Long.fromString(object.accountNumber);
		} else {
			message.accountNumber = Long.UZERO;
		}
		if (object.sequence !== undefined && object.sequence !== null) {
			message.sequence = Long.fromString(object.sequence);
		} else {
			message.sequence = Long.UZERO;
		}
		return message;
	},

	fromPartial(object: DeepPartial<Signature>): Signature {
		const message = { ...baseSignature } as Signature;
		if (object.signature !== undefined && object.signature !== null) {
			message.signature = object.signature;
		} else {
			message.signature = '';
		}
		if (object.pubKey !== undefined && object.pubKey !== null) {
			message.pubKey = PubKey.fromPartial(object.pubKey);
		} else {
			message.pubKey = undefined;
		}
		if (
			object.accountNumber !== undefined &&
			object.accountNumber !== null
		) {
			message.accountNumber = object.accountNumber as Long;
		} else {
			message.accountNumber = Long.UZERO;
		}
		if (object.sequence !== undefined && object.sequence !== null) {
			message.sequence = object.sequence as Long;
		} else {
			message.sequence = Long.UZERO;
		}
		return message;
	},

	toJSON(message: Signature): unknown {
		const obj: any = {};
		message.signature !== undefined && (obj.signature = message.signature);
		message.pubKey !== undefined &&
			(obj.pubKey = message.pubKey
				? PubKey.toJSON(message.pubKey)
				: undefined);
		message.accountNumber !== undefined &&
			(obj.accountNumber = (
				message.accountNumber || Long.UZERO
			).toString());
		message.sequence !== undefined &&
			(obj.sequence = (message.sequence || Long.UZERO).toString());
		return obj;
	},
};

const baseStdTx: object = { msg: '', memo: '' };

export const StdTx = {
	encode(message: StdTx, writer: Writer = Writer.create()): Writer {
		for (const v of message.msg) {
			writer.uint32(10).string(v!);
		}
		if (message.fee !== undefined) {
			Fee.encode(message.fee, writer.uint32(18).fork()).ldelim();
		}
		if (message.memo !== '') {
			writer.uint32(26).string(message.memo);
		}
		if (message.signature !== undefined) {
			Signature.encode(
				message.signature,
				writer.uint32(34).fork()
			).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): StdTx {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(baseStdTx) as StdTx;
		message.msg = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.msg.push(reader.string());
					break;
				case 2:
					message.fee = Fee.decode(reader, reader.uint32());
					break;
				case 3:
					message.memo = reader.string();
					break;
				case 4:
					message.signature = Signature.decode(
						reader,
						reader.uint32()
					);
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): StdTx {
		const message = globalThis.Object.create(baseStdTx) as StdTx;
		message.msg = [];
		if (object.msg !== undefined && object.msg !== null) {
			for (const e of object.msg) {
				message.msg.push(String(e));
			}
		}
		if (object.fee !== undefined && object.fee !== null) {
			message.fee = Fee.fromJSON(object.fee);
		} else {
			message.fee = undefined;
		}
		if (object.memo !== undefined && object.memo !== null) {
			message.memo = String(object.memo);
		} else {
			message.memo = '';
		}
		if (object.signature !== undefined && object.signature !== null) {
			message.signature = Signature.fromJSON(object.signature);
		} else {
			message.signature = undefined;
		}
		return message;
	},

	fromPartial(object: DeepPartial<StdTx>): StdTx {
		const message = { ...baseStdTx } as StdTx;
		message.msg = [];
		if (object.msg !== undefined && object.msg !== null) {
			for (const e of object.msg) {
				message.msg.push(e);
			}
		}
		if (object.fee !== undefined && object.fee !== null) {
			message.fee = Fee.fromPartial(object.fee);
		} else {
			message.fee = undefined;
		}
		if (object.memo !== undefined && object.memo !== null) {
			message.memo = object.memo;
		} else {
			message.memo = '';
		}
		if (object.signature !== undefined && object.signature !== null) {
			message.signature = Signature.fromPartial(object.signature);
		} else {
			message.signature = undefined;
		}
		return message;
	},

	toJSON(message: StdTx): unknown {
		const obj: any = {};
		if (message.msg) {
			obj.msg = message.msg.map((e) => e);
		} else {
			obj.msg = [];
		}
		message.fee !== undefined &&
			(obj.fee = message.fee ? Fee.toJSON(message.fee) : undefined);
		message.memo !== undefined && (obj.memo = message.memo);
		message.signature !== undefined &&
			(obj.signature = message.signature
				? Signature.toJSON(message.signature)
				: undefined);
		return obj;
	},
};

/** Msg defines the liquidity Msg service. */
export interface Msg {
	/** Submit create liquidity pool message. */
	CreateLiquidityPool(
		request: MsgCreateLiquidityPool
	): Promise<MsgCreateLiquidityPoolResponse>;
	/** Submit deposit to the liquidity pool batch. */
	DepositToLiquidityPool(
		request: MsgDepositToLiquidityPool
	): Promise<MsgDepositToLiquidityPoolResponse>;
	/** Submit withdraw from to the liquidity pool batch. */
	WithdrawFromLiquidityPool(
		request: MsgWithdrawFromLiquidityPool
	): Promise<MsgWithdrawFromLiquidityPoolResponse>;
	/** Submit swap to the liquidity pool batch. */
	Swap(request: MsgSwap): Promise<MsgSwapResponse>;
}

export class MsgClientImpl implements Msg {
	private readonly rpc: Rpc;
	constructor(rpc: Rpc) {
		this.rpc = rpc;
	}
	CreateLiquidityPool(
		request: MsgCreateLiquidityPool
	): Promise<MsgCreateLiquidityPoolResponse> {
		const data = MsgCreateLiquidityPool.encode(request).finish();
		const promise = this.rpc.request(
			'tendermint.liquidity.Msg',
			'CreateLiquidityPool',
			data
		);
		return promise.then((data) =>
			MsgCreateLiquidityPoolResponse.decode(new Reader(data))
		);
	}

	DepositToLiquidityPool(
		request: MsgDepositToLiquidityPool
	): Promise<MsgDepositToLiquidityPoolResponse> {
		const data = MsgDepositToLiquidityPool.encode(request).finish();
		const promise = this.rpc.request(
			'tendermint.liquidity.Msg',
			'DepositToLiquidityPool',
			data
		);
		return promise.then((data) =>
			MsgDepositToLiquidityPoolResponse.decode(new Reader(data))
		);
	}

	WithdrawFromLiquidityPool(
		request: MsgWithdrawFromLiquidityPool
	): Promise<MsgWithdrawFromLiquidityPoolResponse> {
		const data = MsgWithdrawFromLiquidityPool.encode(request).finish();
		const promise = this.rpc.request(
			'tendermint.liquidity.Msg',
			'WithdrawFromLiquidityPool',
			data
		);
		return promise.then((data) =>
			MsgWithdrawFromLiquidityPoolResponse.decode(new Reader(data))
		);
	}

	Swap(request: MsgSwap): Promise<MsgSwapResponse> {
		const data = MsgSwap.encode(request).finish();
		const promise = this.rpc.request(
			'tendermint.liquidity.Msg',
			'Swap',
			data
		);
		return promise.then((data) => MsgSwapResponse.decode(new Reader(data)));
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
