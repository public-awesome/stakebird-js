/* eslint-disable */
import { Coin } from '../cosmos/base/v1beta1/coin';
import * as Long from 'long';
import { MsgDepositToLiquidityPool, MsgWithdrawFromLiquidityPool, MsgSwap } from '../liquidity/tx';
import { Writer, Reader } from 'protobufjs/minimal';


export interface LiquidityPoolType {
  /**
   *  index of target pool type, only 1 is allowed on this version.
   */
  poolTypeIndex: number;
  /**
   *  name of the pool type
   */
  name: string;
  /**
   *  min number of reserveCoins for LiquidityPoolType only 2 is allowed on this spec
   */
  minReserveCoinNum: number;
  /**
   *  max number of reserveCoins for LiquidityPoolType only 2 is allowed on this spec
   */
  maxReserveCoinNum: number;
  /**
   *  description of the pool type
   */
  description: string;
}

export interface Params {
  /**
   *  list of available pool types
   */
  liquidityPoolTypes: LiquidityPoolType[];
  /**
   *  Minimum number of coins to be deposited to the liquidity pool upon pool creation
   */
  minInitDepositToPool: string;
  /**
   *  Initial mint amount of pool coin upon pool creation
   */
  initPoolCoinMintAmount: string;
  /**
   *  Fee paid for new LiquidityPool creation to prevent spamming
   */
  liquidityPoolCreationFee: Coin[];
  /**
   *  Swap fee rate for every executed swap
   */
  swapFeeRate: Uint8Array;
  /**
   *  Reserve token withdrawal with less proportion by withdrawFeeRate
   */
  withdrawFeeRate: Uint8Array;
  /**
   *  Maximum ratio of reserve coins that can be ordered at a swap order
   */
  maxOrderAmountRatio: Uint8Array;
  /**
   *  The smallest unit batch size for every liquidity pool
   */
  unitBatchSize: number;
}

export interface LiquidityPool {
  /**
   *  id of the pool
   */
  poolId: Long;
  /**
   *  index of the pool type
   */
  poolTypeIndex: number;
  /**
   *  denoms of reserve coin pair of the pool
   */
  reserveCoinDenoms: string[];
  /**
   *  reserve account address of the pool
   */
  reserveAccountAddress: string;
  /**
   *  denom of pool coin of the pool
   */
  poolCoinDenom: string;
}

export interface LiquidityPoolMetadata {
  /**
   *  id of the pool
   */
  poolId: Long;
  /**
   *  pool coin issued at the pool
   */
  poolCoinTotalSupply?: Coin;
  /**
   *  reserve coins deposited in the pool
   */
  reserveCoins: Coin[];
}

export interface LiquidityPoolBatch {
  /**
   *  id of the pool
   */
  poolId: Long;
  /**
   *  index of this batch
   */
  batchIndex: Long;
  /**
   *  height where this batch is begun
   */
  beginHeight: Long;
  /**
   *  last index of BatchPoolDepositMsgs
   */
  depositMsgIndex: Long;
  /**
   *  last index of BatchPoolWithdrawMsgs
   */
  withdrawMsgIndex: Long;
  /**
   *  last index of BatchPoolSwapMsgs
   */
  swapMsgIndex: Long;
  /**
   *  true if executed, false if not executed yet
   */
  executed: boolean;
}

export interface BatchPoolDepositMsg {
  /**
   *  height where this message is appended to the batch
   */
  msgHeight: Long;
  /**
   *  index of this deposit message in this liquidity pool
   */
  msgIndex: Long;
  /**
   *  true if executed on this batch, false if not executed yet
   */
  executed: boolean;
  /**
   *  true if executed successfully on this batch, false if failed
   */
  succeeded: boolean;
  /**
   *  true if ready to be deleted on kvstore, false if not ready to be deleted
   */
  toBeDeleted: boolean;
  /**
   *  MsgDepositToLiquidityPool
   */
  msg?: MsgDepositToLiquidityPool;
}

export interface BatchPoolWithdrawMsg {
  /**
   *  height where this message is appended to the batch
   */
  msgHeight: Long;
  /**
   *  index of this withdraw message in this liquidity pool
   */
  msgIndex: Long;
  /**
   *  true if executed on this batch, false if not executed yet
   */
  executed: boolean;
  /**
   *  true if executed successfully on this batch, false if failed
   */
  succeeded: boolean;
  /**
   *  true if ready to be deleted on kvstore, false if not ready to be deleted
   */
  toBeDeleted: boolean;
  /**
   *  MsgWithdrawFromLiquidityPool
   */
  msg?: MsgWithdrawFromLiquidityPool;
}

export interface BatchPoolSwapMsg {
  /**
   *  height where this message is appended to the batch
   */
  msgHeight: Long;
  /**
   *  index of this swap message in this liquidity pool
   */
  msgIndex: Long;
  /**
   *  true if executed on this batch, false if not executed yet
   */
  executed: boolean;
  /**
   *  true if executed successfully on this batch, false if failed
   */
  succeeded: boolean;
  /**
   *  true if ready to be deleted on kvstore, false if not ready to be deleted
   */
  toBeDeleted: boolean;
  /**
   *  swap orders are cancelled when current height is equal or higher than ExpiryHeight
   */
  orderExpiryHeight: Long;
  /**
   *  offer coin exchanged until now
   */
  exchangedOfferCoin?: Coin;
  /**
   *  offer coin currently remaining to be exchanged
   */
  remainingOfferCoin?: Coin;
  /**
   *  reserve fee for pays fee in half offer coin
   */
  OfferCoinFeeReserve?: Coin;
  /**
   *  MsgSwap
   */
  Msg?: MsgSwap;
}

const baseLiquidityPoolType: object = {
  poolTypeIndex: 0,
  name: "",
  minReserveCoinNum: 0,
  maxReserveCoinNum: 0,
  description: "",
};

const baseParams: object = {
  minInitDepositToPool: "",
  initPoolCoinMintAmount: "",
  unitBatchSize: 0,
};

const baseLiquidityPool: object = {
  poolId: Long.UZERO,
  poolTypeIndex: 0,
  reserveCoinDenoms: "",
  reserveAccountAddress: "",
  poolCoinDenom: "",
};

const baseLiquidityPoolMetadata: object = {
  poolId: Long.UZERO,
};

const baseLiquidityPoolBatch: object = {
  poolId: Long.UZERO,
  batchIndex: Long.UZERO,
  beginHeight: Long.ZERO,
  depositMsgIndex: Long.UZERO,
  withdrawMsgIndex: Long.UZERO,
  swapMsgIndex: Long.UZERO,
  executed: false,
};

const baseBatchPoolDepositMsg: object = {
  msgHeight: Long.ZERO,
  msgIndex: Long.UZERO,
  executed: false,
  succeeded: false,
  toBeDeleted: false,
};

const baseBatchPoolWithdrawMsg: object = {
  msgHeight: Long.ZERO,
  msgIndex: Long.UZERO,
  executed: false,
  succeeded: false,
  toBeDeleted: false,
};

const baseBatchPoolSwapMsg: object = {
  msgHeight: Long.ZERO,
  msgIndex: Long.UZERO,
  executed: false,
  succeeded: false,
  toBeDeleted: false,
  orderExpiryHeight: Long.ZERO,
};

export const protobufPackage = 'tendermint.liquidity'

export const LiquidityPoolType = {
  encode(message: LiquidityPoolType, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint32(message.poolTypeIndex);
    writer.uint32(18).string(message.name);
    writer.uint32(24).uint32(message.minReserveCoinNum);
    writer.uint32(32).uint32(message.maxReserveCoinNum);
    writer.uint32(42).string(message.description);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): LiquidityPoolType {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLiquidityPoolType } as LiquidityPoolType;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolTypeIndex = reader.uint32();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.minReserveCoinNum = reader.uint32();
          break;
        case 4:
          message.maxReserveCoinNum = reader.uint32();
          break;
        case 5:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LiquidityPoolType {
    const message = { ...baseLiquidityPoolType } as LiquidityPoolType;
    if (object.poolTypeIndex !== undefined && object.poolTypeIndex !== null) {
      message.poolTypeIndex = Number(object.poolTypeIndex);
    } else {
      message.poolTypeIndex = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.minReserveCoinNum !== undefined && object.minReserveCoinNum !== null) {
      message.minReserveCoinNum = Number(object.minReserveCoinNum);
    } else {
      message.minReserveCoinNum = 0;
    }
    if (object.maxReserveCoinNum !== undefined && object.maxReserveCoinNum !== null) {
      message.maxReserveCoinNum = Number(object.maxReserveCoinNum);
    } else {
      message.maxReserveCoinNum = 0;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<LiquidityPoolType>): LiquidityPoolType {
    const message = { ...baseLiquidityPoolType } as LiquidityPoolType;
    if (object.poolTypeIndex !== undefined && object.poolTypeIndex !== null) {
      message.poolTypeIndex = object.poolTypeIndex;
    } else {
      message.poolTypeIndex = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.minReserveCoinNum !== undefined && object.minReserveCoinNum !== null) {
      message.minReserveCoinNum = object.minReserveCoinNum;
    } else {
      message.minReserveCoinNum = 0;
    }
    if (object.maxReserveCoinNum !== undefined && object.maxReserveCoinNum !== null) {
      message.maxReserveCoinNum = object.maxReserveCoinNum;
    } else {
      message.maxReserveCoinNum = 0;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    return message;
  },
  toJSON(message: LiquidityPoolType): unknown {
    const obj: any = {};
    message.poolTypeIndex !== undefined && (obj.poolTypeIndex = message.poolTypeIndex);
    message.name !== undefined && (obj.name = message.name);
    message.minReserveCoinNum !== undefined && (obj.minReserveCoinNum = message.minReserveCoinNum);
    message.maxReserveCoinNum !== undefined && (obj.maxReserveCoinNum = message.maxReserveCoinNum);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },
};

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
    for (const v of message.liquidityPoolTypes) {
      LiquidityPoolType.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).string(message.minInitDepositToPool);
    writer.uint32(26).string(message.initPoolCoinMintAmount);
    for (const v of message.liquidityPoolCreationFee) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(42).bytes(message.swapFeeRate);
    writer.uint32(50).bytes(message.withdrawFeeRate);
    writer.uint32(58).bytes(message.maxOrderAmountRatio);
    writer.uint32(64).uint32(message.unitBatchSize);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Params {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    message.liquidityPoolTypes = [];
    message.liquidityPoolCreationFee = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidityPoolTypes.push(LiquidityPoolType.decode(reader, reader.uint32()));
          break;
        case 2:
          message.minInitDepositToPool = reader.string();
          break;
        case 3:
          message.initPoolCoinMintAmount = reader.string();
          break;
        case 4:
          message.liquidityPoolCreationFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.swapFeeRate = reader.bytes();
          break;
        case 6:
          message.withdrawFeeRate = reader.bytes();
          break;
        case 7:
          message.maxOrderAmountRatio = reader.bytes();
          break;
        case 8:
          message.unitBatchSize = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    message.liquidityPoolTypes = [];
    message.liquidityPoolCreationFee = [];
    if (object.liquidityPoolTypes !== undefined && object.liquidityPoolTypes !== null) {
      for (const e of object.liquidityPoolTypes) {
        message.liquidityPoolTypes.push(LiquidityPoolType.fromJSON(e));
      }
    }
    if (object.minInitDepositToPool !== undefined && object.minInitDepositToPool !== null) {
      message.minInitDepositToPool = String(object.minInitDepositToPool);
    } else {
      message.minInitDepositToPool = "";
    }
    if (object.initPoolCoinMintAmount !== undefined && object.initPoolCoinMintAmount !== null) {
      message.initPoolCoinMintAmount = String(object.initPoolCoinMintAmount);
    } else {
      message.initPoolCoinMintAmount = "";
    }
    if (object.liquidityPoolCreationFee !== undefined && object.liquidityPoolCreationFee !== null) {
      for (const e of object.liquidityPoolCreationFee) {
        message.liquidityPoolCreationFee.push(Coin.fromJSON(e));
      }
    }
    if (object.swapFeeRate !== undefined && object.swapFeeRate !== null) {
      message.swapFeeRate = bytesFromBase64(object.swapFeeRate);
    }
    if (object.withdrawFeeRate !== undefined && object.withdrawFeeRate !== null) {
      message.withdrawFeeRate = bytesFromBase64(object.withdrawFeeRate);
    }
    if (object.maxOrderAmountRatio !== undefined && object.maxOrderAmountRatio !== null) {
      message.maxOrderAmountRatio = bytesFromBase64(object.maxOrderAmountRatio);
    }
    if (object.unitBatchSize !== undefined && object.unitBatchSize !== null) {
      message.unitBatchSize = Number(object.unitBatchSize);
    } else {
      message.unitBatchSize = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.liquidityPoolTypes = [];
    message.liquidityPoolCreationFee = [];
    if (object.liquidityPoolTypes !== undefined && object.liquidityPoolTypes !== null) {
      for (const e of object.liquidityPoolTypes) {
        message.liquidityPoolTypes.push(LiquidityPoolType.fromPartial(e));
      }
    }
    if (object.minInitDepositToPool !== undefined && object.minInitDepositToPool !== null) {
      message.minInitDepositToPool = object.minInitDepositToPool;
    } else {
      message.minInitDepositToPool = "";
    }
    if (object.initPoolCoinMintAmount !== undefined && object.initPoolCoinMintAmount !== null) {
      message.initPoolCoinMintAmount = object.initPoolCoinMintAmount;
    } else {
      message.initPoolCoinMintAmount = "";
    }
    if (object.liquidityPoolCreationFee !== undefined && object.liquidityPoolCreationFee !== null) {
      for (const e of object.liquidityPoolCreationFee) {
        message.liquidityPoolCreationFee.push(Coin.fromPartial(e));
      }
    }
    if (object.swapFeeRate !== undefined && object.swapFeeRate !== null) {
      message.swapFeeRate = object.swapFeeRate;
    } else {
      message.swapFeeRate = new Uint8Array();
    }
    if (object.withdrawFeeRate !== undefined && object.withdrawFeeRate !== null) {
      message.withdrawFeeRate = object.withdrawFeeRate;
    } else {
      message.withdrawFeeRate = new Uint8Array();
    }
    if (object.maxOrderAmountRatio !== undefined && object.maxOrderAmountRatio !== null) {
      message.maxOrderAmountRatio = object.maxOrderAmountRatio;
    } else {
      message.maxOrderAmountRatio = new Uint8Array();
    }
    if (object.unitBatchSize !== undefined && object.unitBatchSize !== null) {
      message.unitBatchSize = object.unitBatchSize;
    } else {
      message.unitBatchSize = 0;
    }
    return message;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.liquidityPoolTypes) {
      obj.liquidityPoolTypes = message.liquidityPoolTypes.map(e => e ? LiquidityPoolType.toJSON(e) : undefined);
    } else {
      obj.liquidityPoolTypes = [];
    }
    message.minInitDepositToPool !== undefined && (obj.minInitDepositToPool = message.minInitDepositToPool);
    message.initPoolCoinMintAmount !== undefined && (obj.initPoolCoinMintAmount = message.initPoolCoinMintAmount);
    if (message.liquidityPoolCreationFee) {
      obj.liquidityPoolCreationFee = message.liquidityPoolCreationFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.liquidityPoolCreationFee = [];
    }
    message.swapFeeRate !== undefined && (obj.swapFeeRate = base64FromBytes(message.swapFeeRate !== undefined ? message.swapFeeRate : new Uint8Array()));
    message.withdrawFeeRate !== undefined && (obj.withdrawFeeRate = base64FromBytes(message.withdrawFeeRate !== undefined ? message.withdrawFeeRate : new Uint8Array()));
    message.maxOrderAmountRatio !== undefined && (obj.maxOrderAmountRatio = base64FromBytes(message.maxOrderAmountRatio !== undefined ? message.maxOrderAmountRatio : new Uint8Array()));
    message.unitBatchSize !== undefined && (obj.unitBatchSize = message.unitBatchSize);
    return obj;
  },
};

export const LiquidityPool = {
  encode(message: LiquidityPool, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.poolId);
    writer.uint32(16).uint32(message.poolTypeIndex);
    for (const v of message.reserveCoinDenoms) {
      writer.uint32(26).string(v!);
    }
    writer.uint32(34).string(message.reserveAccountAddress);
    writer.uint32(42).string(message.poolCoinDenom);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): LiquidityPool {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLiquidityPool } as LiquidityPool;
    message.reserveCoinDenoms = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.poolTypeIndex = reader.uint32();
          break;
        case 3:
          message.reserveCoinDenoms.push(reader.string());
          break;
        case 4:
          message.reserveAccountAddress = reader.string();
          break;
        case 5:
          message.poolCoinDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LiquidityPool {
    const message = { ...baseLiquidityPool } as LiquidityPool;
    message.reserveCoinDenoms = [];
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = Long.fromString(object.poolId);
    } else {
      message.poolId = Long.UZERO;
    }
    if (object.poolTypeIndex !== undefined && object.poolTypeIndex !== null) {
      message.poolTypeIndex = Number(object.poolTypeIndex);
    } else {
      message.poolTypeIndex = 0;
    }
    if (object.reserveCoinDenoms !== undefined && object.reserveCoinDenoms !== null) {
      for (const e of object.reserveCoinDenoms) {
        message.reserveCoinDenoms.push(String(e));
      }
    }
    if (object.reserveAccountAddress !== undefined && object.reserveAccountAddress !== null) {
      message.reserveAccountAddress = String(object.reserveAccountAddress);
    } else {
      message.reserveAccountAddress = "";
    }
    if (object.poolCoinDenom !== undefined && object.poolCoinDenom !== null) {
      message.poolCoinDenom = String(object.poolCoinDenom);
    } else {
      message.poolCoinDenom = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<LiquidityPool>): LiquidityPool {
    const message = { ...baseLiquidityPool } as LiquidityPool;
    message.reserveCoinDenoms = [];
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId as Long;
    } else {
      message.poolId = Long.UZERO;
    }
    if (object.poolTypeIndex !== undefined && object.poolTypeIndex !== null) {
      message.poolTypeIndex = object.poolTypeIndex;
    } else {
      message.poolTypeIndex = 0;
    }
    if (object.reserveCoinDenoms !== undefined && object.reserveCoinDenoms !== null) {
      for (const e of object.reserveCoinDenoms) {
        message.reserveCoinDenoms.push(e);
      }
    }
    if (object.reserveAccountAddress !== undefined && object.reserveAccountAddress !== null) {
      message.reserveAccountAddress = object.reserveAccountAddress;
    } else {
      message.reserveAccountAddress = "";
    }
    if (object.poolCoinDenom !== undefined && object.poolCoinDenom !== null) {
      message.poolCoinDenom = object.poolCoinDenom;
    } else {
      message.poolCoinDenom = "";
    }
    return message;
  },
  toJSON(message: LiquidityPool): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.poolTypeIndex !== undefined && (obj.poolTypeIndex = message.poolTypeIndex);
    if (message.reserveCoinDenoms) {
      obj.reserveCoinDenoms = message.reserveCoinDenoms.map(e => e);
    } else {
      obj.reserveCoinDenoms = [];
    }
    message.reserveAccountAddress !== undefined && (obj.reserveAccountAddress = message.reserveAccountAddress);
    message.poolCoinDenom !== undefined && (obj.poolCoinDenom = message.poolCoinDenom);
    return obj;
  },
};

export const LiquidityPoolMetadata = {
  encode(message: LiquidityPoolMetadata, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.poolId);
    if (message.poolCoinTotalSupply !== undefined && message.poolCoinTotalSupply !== undefined) {
      Coin.encode(message.poolCoinTotalSupply, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.reserveCoins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): LiquidityPoolMetadata {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLiquidityPoolMetadata } as LiquidityPoolMetadata;
    message.reserveCoins = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.poolCoinTotalSupply = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.reserveCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LiquidityPoolMetadata {
    const message = { ...baseLiquidityPoolMetadata } as LiquidityPoolMetadata;
    message.reserveCoins = [];
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = Long.fromString(object.poolId);
    } else {
      message.poolId = Long.UZERO;
    }
    if (object.poolCoinTotalSupply !== undefined && object.poolCoinTotalSupply !== null) {
      message.poolCoinTotalSupply = Coin.fromJSON(object.poolCoinTotalSupply);
    } else {
      message.poolCoinTotalSupply = undefined;
    }
    if (object.reserveCoins !== undefined && object.reserveCoins !== null) {
      for (const e of object.reserveCoins) {
        message.reserveCoins.push(Coin.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<LiquidityPoolMetadata>): LiquidityPoolMetadata {
    const message = { ...baseLiquidityPoolMetadata } as LiquidityPoolMetadata;
    message.reserveCoins = [];
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId as Long;
    } else {
      message.poolId = Long.UZERO;
    }
    if (object.poolCoinTotalSupply !== undefined && object.poolCoinTotalSupply !== null) {
      message.poolCoinTotalSupply = Coin.fromPartial(object.poolCoinTotalSupply);
    } else {
      message.poolCoinTotalSupply = undefined;
    }
    if (object.reserveCoins !== undefined && object.reserveCoins !== null) {
      for (const e of object.reserveCoins) {
        message.reserveCoins.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: LiquidityPoolMetadata): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.poolCoinTotalSupply !== undefined && (obj.poolCoinTotalSupply = message.poolCoinTotalSupply ? Coin.toJSON(message.poolCoinTotalSupply) : undefined);
    if (message.reserveCoins) {
      obj.reserveCoins = message.reserveCoins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.reserveCoins = [];
    }
    return obj;
  },
};

export const LiquidityPoolBatch = {
  encode(message: LiquidityPoolBatch, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.poolId);
    writer.uint32(16).uint64(message.batchIndex);
    writer.uint32(24).int64(message.beginHeight);
    writer.uint32(32).uint64(message.depositMsgIndex);
    writer.uint32(40).uint64(message.withdrawMsgIndex);
    writer.uint32(48).uint64(message.swapMsgIndex);
    writer.uint32(56).bool(message.executed);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): LiquidityPoolBatch {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLiquidityPoolBatch } as LiquidityPoolBatch;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.batchIndex = reader.uint64() as Long;
          break;
        case 3:
          message.beginHeight = reader.int64() as Long;
          break;
        case 4:
          message.depositMsgIndex = reader.uint64() as Long;
          break;
        case 5:
          message.withdrawMsgIndex = reader.uint64() as Long;
          break;
        case 6:
          message.swapMsgIndex = reader.uint64() as Long;
          break;
        case 7:
          message.executed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LiquidityPoolBatch {
    const message = { ...baseLiquidityPoolBatch } as LiquidityPoolBatch;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = Long.fromString(object.poolId);
    } else {
      message.poolId = Long.UZERO;
    }
    if (object.batchIndex !== undefined && object.batchIndex !== null) {
      message.batchIndex = Long.fromString(object.batchIndex);
    } else {
      message.batchIndex = Long.UZERO;
    }
    if (object.beginHeight !== undefined && object.beginHeight !== null) {
      message.beginHeight = Long.fromString(object.beginHeight);
    } else {
      message.beginHeight = Long.ZERO;
    }
    if (object.depositMsgIndex !== undefined && object.depositMsgIndex !== null) {
      message.depositMsgIndex = Long.fromString(object.depositMsgIndex);
    } else {
      message.depositMsgIndex = Long.UZERO;
    }
    if (object.withdrawMsgIndex !== undefined && object.withdrawMsgIndex !== null) {
      message.withdrawMsgIndex = Long.fromString(object.withdrawMsgIndex);
    } else {
      message.withdrawMsgIndex = Long.UZERO;
    }
    if (object.swapMsgIndex !== undefined && object.swapMsgIndex !== null) {
      message.swapMsgIndex = Long.fromString(object.swapMsgIndex);
    } else {
      message.swapMsgIndex = Long.UZERO;
    }
    if (object.executed !== undefined && object.executed !== null) {
      message.executed = Boolean(object.executed);
    } else {
      message.executed = false;
    }
    return message;
  },
  fromPartial(object: DeepPartial<LiquidityPoolBatch>): LiquidityPoolBatch {
    const message = { ...baseLiquidityPoolBatch } as LiquidityPoolBatch;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId as Long;
    } else {
      message.poolId = Long.UZERO;
    }
    if (object.batchIndex !== undefined && object.batchIndex !== null) {
      message.batchIndex = object.batchIndex as Long;
    } else {
      message.batchIndex = Long.UZERO;
    }
    if (object.beginHeight !== undefined && object.beginHeight !== null) {
      message.beginHeight = object.beginHeight as Long;
    } else {
      message.beginHeight = Long.ZERO;
    }
    if (object.depositMsgIndex !== undefined && object.depositMsgIndex !== null) {
      message.depositMsgIndex = object.depositMsgIndex as Long;
    } else {
      message.depositMsgIndex = Long.UZERO;
    }
    if (object.withdrawMsgIndex !== undefined && object.withdrawMsgIndex !== null) {
      message.withdrawMsgIndex = object.withdrawMsgIndex as Long;
    } else {
      message.withdrawMsgIndex = Long.UZERO;
    }
    if (object.swapMsgIndex !== undefined && object.swapMsgIndex !== null) {
      message.swapMsgIndex = object.swapMsgIndex as Long;
    } else {
      message.swapMsgIndex = Long.UZERO;
    }
    if (object.executed !== undefined && object.executed !== null) {
      message.executed = object.executed;
    } else {
      message.executed = false;
    }
    return message;
  },
  toJSON(message: LiquidityPoolBatch): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.batchIndex !== undefined && (obj.batchIndex = (message.batchIndex || Long.UZERO).toString());
    message.beginHeight !== undefined && (obj.beginHeight = (message.beginHeight || Long.ZERO).toString());
    message.depositMsgIndex !== undefined && (obj.depositMsgIndex = (message.depositMsgIndex || Long.UZERO).toString());
    message.withdrawMsgIndex !== undefined && (obj.withdrawMsgIndex = (message.withdrawMsgIndex || Long.UZERO).toString());
    message.swapMsgIndex !== undefined && (obj.swapMsgIndex = (message.swapMsgIndex || Long.UZERO).toString());
    message.executed !== undefined && (obj.executed = message.executed);
    return obj;
  },
};

export const BatchPoolDepositMsg = {
  encode(message: BatchPoolDepositMsg, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int64(message.msgHeight);
    writer.uint32(16).uint64(message.msgIndex);
    writer.uint32(24).bool(message.executed);
    writer.uint32(32).bool(message.succeeded);
    writer.uint32(40).bool(message.toBeDeleted);
    if (message.msg !== undefined && message.msg !== undefined) {
      MsgDepositToLiquidityPool.encode(message.msg, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): BatchPoolDepositMsg {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBatchPoolDepositMsg } as BatchPoolDepositMsg;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgHeight = reader.int64() as Long;
          break;
        case 2:
          message.msgIndex = reader.uint64() as Long;
          break;
        case 3:
          message.executed = reader.bool();
          break;
        case 4:
          message.succeeded = reader.bool();
          break;
        case 5:
          message.toBeDeleted = reader.bool();
          break;
        case 6:
          message.msg = MsgDepositToLiquidityPool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BatchPoolDepositMsg {
    const message = { ...baseBatchPoolDepositMsg } as BatchPoolDepositMsg;
    if (object.msgHeight !== undefined && object.msgHeight !== null) {
      message.msgHeight = Long.fromString(object.msgHeight);
    } else {
      message.msgHeight = Long.ZERO;
    }
    if (object.msgIndex !== undefined && object.msgIndex !== null) {
      message.msgIndex = Long.fromString(object.msgIndex);
    } else {
      message.msgIndex = Long.UZERO;
    }
    if (object.executed !== undefined && object.executed !== null) {
      message.executed = Boolean(object.executed);
    } else {
      message.executed = false;
    }
    if (object.succeeded !== undefined && object.succeeded !== null) {
      message.succeeded = Boolean(object.succeeded);
    } else {
      message.succeeded = false;
    }
    if (object.toBeDeleted !== undefined && object.toBeDeleted !== null) {
      message.toBeDeleted = Boolean(object.toBeDeleted);
    } else {
      message.toBeDeleted = false;
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = MsgDepositToLiquidityPool.fromJSON(object.msg);
    } else {
      message.msg = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<BatchPoolDepositMsg>): BatchPoolDepositMsg {
    const message = { ...baseBatchPoolDepositMsg } as BatchPoolDepositMsg;
    if (object.msgHeight !== undefined && object.msgHeight !== null) {
      message.msgHeight = object.msgHeight as Long;
    } else {
      message.msgHeight = Long.ZERO;
    }
    if (object.msgIndex !== undefined && object.msgIndex !== null) {
      message.msgIndex = object.msgIndex as Long;
    } else {
      message.msgIndex = Long.UZERO;
    }
    if (object.executed !== undefined && object.executed !== null) {
      message.executed = object.executed;
    } else {
      message.executed = false;
    }
    if (object.succeeded !== undefined && object.succeeded !== null) {
      message.succeeded = object.succeeded;
    } else {
      message.succeeded = false;
    }
    if (object.toBeDeleted !== undefined && object.toBeDeleted !== null) {
      message.toBeDeleted = object.toBeDeleted;
    } else {
      message.toBeDeleted = false;
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = MsgDepositToLiquidityPool.fromPartial(object.msg);
    } else {
      message.msg = undefined;
    }
    return message;
  },
  toJSON(message: BatchPoolDepositMsg): unknown {
    const obj: any = {};
    message.msgHeight !== undefined && (obj.msgHeight = (message.msgHeight || Long.ZERO).toString());
    message.msgIndex !== undefined && (obj.msgIndex = (message.msgIndex || Long.UZERO).toString());
    message.executed !== undefined && (obj.executed = message.executed);
    message.succeeded !== undefined && (obj.succeeded = message.succeeded);
    message.toBeDeleted !== undefined && (obj.toBeDeleted = message.toBeDeleted);
    message.msg !== undefined && (obj.msg = message.msg ? MsgDepositToLiquidityPool.toJSON(message.msg) : undefined);
    return obj;
  },
};

export const BatchPoolWithdrawMsg = {
  encode(message: BatchPoolWithdrawMsg, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int64(message.msgHeight);
    writer.uint32(16).uint64(message.msgIndex);
    writer.uint32(24).bool(message.executed);
    writer.uint32(32).bool(message.succeeded);
    writer.uint32(40).bool(message.toBeDeleted);
    if (message.msg !== undefined && message.msg !== undefined) {
      MsgWithdrawFromLiquidityPool.encode(message.msg, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): BatchPoolWithdrawMsg {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBatchPoolWithdrawMsg } as BatchPoolWithdrawMsg;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgHeight = reader.int64() as Long;
          break;
        case 2:
          message.msgIndex = reader.uint64() as Long;
          break;
        case 3:
          message.executed = reader.bool();
          break;
        case 4:
          message.succeeded = reader.bool();
          break;
        case 5:
          message.toBeDeleted = reader.bool();
          break;
        case 6:
          message.msg = MsgWithdrawFromLiquidityPool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BatchPoolWithdrawMsg {
    const message = { ...baseBatchPoolWithdrawMsg } as BatchPoolWithdrawMsg;
    if (object.msgHeight !== undefined && object.msgHeight !== null) {
      message.msgHeight = Long.fromString(object.msgHeight);
    } else {
      message.msgHeight = Long.ZERO;
    }
    if (object.msgIndex !== undefined && object.msgIndex !== null) {
      message.msgIndex = Long.fromString(object.msgIndex);
    } else {
      message.msgIndex = Long.UZERO;
    }
    if (object.executed !== undefined && object.executed !== null) {
      message.executed = Boolean(object.executed);
    } else {
      message.executed = false;
    }
    if (object.succeeded !== undefined && object.succeeded !== null) {
      message.succeeded = Boolean(object.succeeded);
    } else {
      message.succeeded = false;
    }
    if (object.toBeDeleted !== undefined && object.toBeDeleted !== null) {
      message.toBeDeleted = Boolean(object.toBeDeleted);
    } else {
      message.toBeDeleted = false;
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = MsgWithdrawFromLiquidityPool.fromJSON(object.msg);
    } else {
      message.msg = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<BatchPoolWithdrawMsg>): BatchPoolWithdrawMsg {
    const message = { ...baseBatchPoolWithdrawMsg } as BatchPoolWithdrawMsg;
    if (object.msgHeight !== undefined && object.msgHeight !== null) {
      message.msgHeight = object.msgHeight as Long;
    } else {
      message.msgHeight = Long.ZERO;
    }
    if (object.msgIndex !== undefined && object.msgIndex !== null) {
      message.msgIndex = object.msgIndex as Long;
    } else {
      message.msgIndex = Long.UZERO;
    }
    if (object.executed !== undefined && object.executed !== null) {
      message.executed = object.executed;
    } else {
      message.executed = false;
    }
    if (object.succeeded !== undefined && object.succeeded !== null) {
      message.succeeded = object.succeeded;
    } else {
      message.succeeded = false;
    }
    if (object.toBeDeleted !== undefined && object.toBeDeleted !== null) {
      message.toBeDeleted = object.toBeDeleted;
    } else {
      message.toBeDeleted = false;
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = MsgWithdrawFromLiquidityPool.fromPartial(object.msg);
    } else {
      message.msg = undefined;
    }
    return message;
  },
  toJSON(message: BatchPoolWithdrawMsg): unknown {
    const obj: any = {};
    message.msgHeight !== undefined && (obj.msgHeight = (message.msgHeight || Long.ZERO).toString());
    message.msgIndex !== undefined && (obj.msgIndex = (message.msgIndex || Long.UZERO).toString());
    message.executed !== undefined && (obj.executed = message.executed);
    message.succeeded !== undefined && (obj.succeeded = message.succeeded);
    message.toBeDeleted !== undefined && (obj.toBeDeleted = message.toBeDeleted);
    message.msg !== undefined && (obj.msg = message.msg ? MsgWithdrawFromLiquidityPool.toJSON(message.msg) : undefined);
    return obj;
  },
};

export const BatchPoolSwapMsg = {
  encode(message: BatchPoolSwapMsg, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int64(message.msgHeight);
    writer.uint32(16).uint64(message.msgIndex);
    writer.uint32(24).bool(message.executed);
    writer.uint32(32).bool(message.succeeded);
    writer.uint32(40).bool(message.toBeDeleted);
    writer.uint32(48).int64(message.orderExpiryHeight);
    if (message.exchangedOfferCoin !== undefined && message.exchangedOfferCoin !== undefined) {
      Coin.encode(message.exchangedOfferCoin, writer.uint32(58).fork()).ldelim();
    }
    if (message.remainingOfferCoin !== undefined && message.remainingOfferCoin !== undefined) {
      Coin.encode(message.remainingOfferCoin, writer.uint32(66).fork()).ldelim();
    }
    if (message.OfferCoinFeeReserve !== undefined && message.OfferCoinFeeReserve !== undefined) {
      Coin.encode(message.OfferCoinFeeReserve, writer.uint32(74).fork()).ldelim();
    }
    if (message.Msg !== undefined && message.Msg !== undefined) {
      MsgSwap.encode(message.Msg, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): BatchPoolSwapMsg {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBatchPoolSwapMsg } as BatchPoolSwapMsg;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgHeight = reader.int64() as Long;
          break;
        case 2:
          message.msgIndex = reader.uint64() as Long;
          break;
        case 3:
          message.executed = reader.bool();
          break;
        case 4:
          message.succeeded = reader.bool();
          break;
        case 5:
          message.toBeDeleted = reader.bool();
          break;
        case 6:
          message.orderExpiryHeight = reader.int64() as Long;
          break;
        case 7:
          message.exchangedOfferCoin = Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.remainingOfferCoin = Coin.decode(reader, reader.uint32());
          break;
        case 9:
          message.OfferCoinFeeReserve = Coin.decode(reader, reader.uint32());
          break;
        case 10:
          message.Msg = MsgSwap.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BatchPoolSwapMsg {
    const message = { ...baseBatchPoolSwapMsg } as BatchPoolSwapMsg;
    if (object.msgHeight !== undefined && object.msgHeight !== null) {
      message.msgHeight = Long.fromString(object.msgHeight);
    } else {
      message.msgHeight = Long.ZERO;
    }
    if (object.msgIndex !== undefined && object.msgIndex !== null) {
      message.msgIndex = Long.fromString(object.msgIndex);
    } else {
      message.msgIndex = Long.UZERO;
    }
    if (object.executed !== undefined && object.executed !== null) {
      message.executed = Boolean(object.executed);
    } else {
      message.executed = false;
    }
    if (object.succeeded !== undefined && object.succeeded !== null) {
      message.succeeded = Boolean(object.succeeded);
    } else {
      message.succeeded = false;
    }
    if (object.toBeDeleted !== undefined && object.toBeDeleted !== null) {
      message.toBeDeleted = Boolean(object.toBeDeleted);
    } else {
      message.toBeDeleted = false;
    }
    if (object.orderExpiryHeight !== undefined && object.orderExpiryHeight !== null) {
      message.orderExpiryHeight = Long.fromString(object.orderExpiryHeight);
    } else {
      message.orderExpiryHeight = Long.ZERO;
    }
    if (object.exchangedOfferCoin !== undefined && object.exchangedOfferCoin !== null) {
      message.exchangedOfferCoin = Coin.fromJSON(object.exchangedOfferCoin);
    } else {
      message.exchangedOfferCoin = undefined;
    }
    if (object.remainingOfferCoin !== undefined && object.remainingOfferCoin !== null) {
      message.remainingOfferCoin = Coin.fromJSON(object.remainingOfferCoin);
    } else {
      message.remainingOfferCoin = undefined;
    }
    if (object.OfferCoinFeeReserve !== undefined && object.OfferCoinFeeReserve !== null) {
      message.OfferCoinFeeReserve = Coin.fromJSON(object.OfferCoinFeeReserve);
    } else {
      message.OfferCoinFeeReserve = undefined;
    }
    if (object.Msg !== undefined && object.Msg !== null) {
      message.Msg = MsgSwap.fromJSON(object.Msg);
    } else {
      message.Msg = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<BatchPoolSwapMsg>): BatchPoolSwapMsg {
    const message = { ...baseBatchPoolSwapMsg } as BatchPoolSwapMsg;
    if (object.msgHeight !== undefined && object.msgHeight !== null) {
      message.msgHeight = object.msgHeight as Long;
    } else {
      message.msgHeight = Long.ZERO;
    }
    if (object.msgIndex !== undefined && object.msgIndex !== null) {
      message.msgIndex = object.msgIndex as Long;
    } else {
      message.msgIndex = Long.UZERO;
    }
    if (object.executed !== undefined && object.executed !== null) {
      message.executed = object.executed;
    } else {
      message.executed = false;
    }
    if (object.succeeded !== undefined && object.succeeded !== null) {
      message.succeeded = object.succeeded;
    } else {
      message.succeeded = false;
    }
    if (object.toBeDeleted !== undefined && object.toBeDeleted !== null) {
      message.toBeDeleted = object.toBeDeleted;
    } else {
      message.toBeDeleted = false;
    }
    if (object.orderExpiryHeight !== undefined && object.orderExpiryHeight !== null) {
      message.orderExpiryHeight = object.orderExpiryHeight as Long;
    } else {
      message.orderExpiryHeight = Long.ZERO;
    }
    if (object.exchangedOfferCoin !== undefined && object.exchangedOfferCoin !== null) {
      message.exchangedOfferCoin = Coin.fromPartial(object.exchangedOfferCoin);
    } else {
      message.exchangedOfferCoin = undefined;
    }
    if (object.remainingOfferCoin !== undefined && object.remainingOfferCoin !== null) {
      message.remainingOfferCoin = Coin.fromPartial(object.remainingOfferCoin);
    } else {
      message.remainingOfferCoin = undefined;
    }
    if (object.OfferCoinFeeReserve !== undefined && object.OfferCoinFeeReserve !== null) {
      message.OfferCoinFeeReserve = Coin.fromPartial(object.OfferCoinFeeReserve);
    } else {
      message.OfferCoinFeeReserve = undefined;
    }
    if (object.Msg !== undefined && object.Msg !== null) {
      message.Msg = MsgSwap.fromPartial(object.Msg);
    } else {
      message.Msg = undefined;
    }
    return message;
  },
  toJSON(message: BatchPoolSwapMsg): unknown {
    const obj: any = {};
    message.msgHeight !== undefined && (obj.msgHeight = (message.msgHeight || Long.ZERO).toString());
    message.msgIndex !== undefined && (obj.msgIndex = (message.msgIndex || Long.UZERO).toString());
    message.executed !== undefined && (obj.executed = message.executed);
    message.succeeded !== undefined && (obj.succeeded = message.succeeded);
    message.toBeDeleted !== undefined && (obj.toBeDeleted = message.toBeDeleted);
    message.orderExpiryHeight !== undefined && (obj.orderExpiryHeight = (message.orderExpiryHeight || Long.ZERO).toString());
    message.exchangedOfferCoin !== undefined && (obj.exchangedOfferCoin = message.exchangedOfferCoin ? Coin.toJSON(message.exchangedOfferCoin) : undefined);
    message.remainingOfferCoin !== undefined && (obj.remainingOfferCoin = message.remainingOfferCoin ? Coin.toJSON(message.remainingOfferCoin) : undefined);
    message.OfferCoinFeeReserve !== undefined && (obj.OfferCoinFeeReserve = message.OfferCoinFeeReserve ? Coin.toJSON(message.OfferCoinFeeReserve) : undefined);
    message.Msg !== undefined && (obj.Msg = message.Msg ? MsgSwap.toJSON(message.Msg) : undefined);
    return obj;
  },
};

interface WindowBase64 {
  atob(b64: string): string;
  btoa(bin: string): string;
}

const windowBase64 = (globalThis as unknown as WindowBase64);
const atob = windowBase64.atob || ((b64: string) => Buffer.from(b64, 'base64').toString('binary'));
const btoa = windowBase64.btoa || ((bin: string) => Buffer.from(bin, 'binary').toString('base64'));

function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
  }
  return btoa(bin.join(''));
}
type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;