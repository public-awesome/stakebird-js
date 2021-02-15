/* eslint-disable */
import * as Long from 'long';
import { Coin } from '../../../cosmos/base/v1beta1/coin';
import { Duration } from '../../../google/protobuf/duration';
import { Timestamp } from '../../../google/protobuf/timestamp';
import { Writer, Reader, util, configure } from 'protobufjs/minimal';


export interface Post {
  vendorId: number;
  postId: string;
  creator: string;
  rewardAccount: string;
  bodyHash: string;
  curatingEndTime?: Date;
  totalVotes: Long;
  totalVoters: Long;
  totalAmount?: Coin;
}

export interface Upvote {
  vendorId: number;
  postId: string;
  curator: string;
  rewardAccount: string;
  voteAmount?: Coin;
  curatedTime?: Date;
}

/**
 *  VPPair is struct that just has a vendor_id, post_id pair with no other data.
 *  It is intended to be used as a marshalable pointer. For example, a VPPair can
 *  be used to construct the key to getting an Upvote from state.
 */
export interface VPPair {
  vendorId: number;
  postId: string;
}

/**
 *  VPPairs defines an array of VPPair objects.
 */
export interface VPPairs {
  pairs: VPPair[];
}

export interface Params {
  curationWindow?: Duration;
  voteAmount?: Coin;
  maxNumVotes: number;
  maxVendors: number;
  rewardPoolAllocation: string;
  rewardPoolCurationMaxAlloc: string;
  initialRewardPool?: Coin;
  stakeDenom: string;
}

const basePost: object = {
  vendorId: 0,
  postId: "",
  creator: "",
  rewardAccount: "",
  bodyHash: "",
  totalVotes: Long.UZERO,
  totalVoters: Long.UZERO,
};

const baseUpvote: object = {
  vendorId: 0,
  postId: "",
  curator: "",
  rewardAccount: "",
};

const baseVPPair: object = {
  vendorId: 0,
  postId: "",
};

const baseVPPairs: object = {
};

const baseParams: object = {
  maxNumVotes: 0,
  maxVendors: 0,
  rewardPoolAllocation: "",
  rewardPoolCurationMaxAlloc: "",
  stakeDenom: "",
};

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

export const protobufPackage = 'stargaze.curating.v1beta1'

export const Post = {
  encode(message: Post, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint32(message.vendorId);
    writer.uint32(18).string(message.postId);
    writer.uint32(26).string(message.creator);
    writer.uint32(34).string(message.rewardAccount);
    writer.uint32(42).string(message.bodyHash);
    if (message.curatingEndTime !== undefined && message.curatingEndTime !== undefined) {
      Timestamp.encode(toTimestamp(message.curatingEndTime), writer.uint32(58).fork()).ldelim();
    }
    writer.uint32(64).uint64(message.totalVotes);
    writer.uint32(72).uint64(message.totalVoters);
    if (message.totalAmount !== undefined && message.totalAmount !== undefined) {
      Coin.encode(message.totalAmount, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Post {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePost } as Post;
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
          message.creator = reader.string();
          break;
        case 4:
          message.rewardAccount = reader.string();
          break;
        case 5:
          message.bodyHash = reader.string();
          break;
        case 7:
          message.curatingEndTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 8:
          message.totalVotes = reader.uint64() as Long;
          break;
        case 9:
          message.totalVoters = reader.uint64() as Long;
          break;
        case 10:
          message.totalAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Post {
    const message = { ...basePost } as Post;
    if (object.vendorId !== undefined && object.vendorId !== null) {
      message.vendorId = Number(object.vendorId);
    } else {
      message.vendorId = 0;
    }
    if (object.postId !== undefined && object.postId !== null) {
      message.postId = String(object.postId);
    } else {
      message.postId = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.rewardAccount !== undefined && object.rewardAccount !== null) {
      message.rewardAccount = String(object.rewardAccount);
    } else {
      message.rewardAccount = "";
    }
    if (object.bodyHash !== undefined && object.bodyHash !== null) {
      message.bodyHash = String(object.bodyHash);
    } else {
      message.bodyHash = "";
    }
    if (object.curatingEndTime !== undefined && object.curatingEndTime !== null) {
      message.curatingEndTime = fromJsonTimestamp(object.curatingEndTime);
    } else {
      message.curatingEndTime = undefined;
    }
    if (object.totalVotes !== undefined && object.totalVotes !== null) {
      message.totalVotes = Long.fromString(object.totalVotes);
    } else {
      message.totalVotes = Long.UZERO;
    }
    if (object.totalVoters !== undefined && object.totalVoters !== null) {
      message.totalVoters = Long.fromString(object.totalVoters);
    } else {
      message.totalVoters = Long.UZERO;
    }
    if (object.totalAmount !== undefined && object.totalAmount !== null) {
      message.totalAmount = Coin.fromJSON(object.totalAmount);
    } else {
      message.totalAmount = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Post>): Post {
    const message = { ...basePost } as Post;
    if (object.vendorId !== undefined && object.vendorId !== null) {
      message.vendorId = object.vendorId;
    } else {
      message.vendorId = 0;
    }
    if (object.postId !== undefined && object.postId !== null) {
      message.postId = object.postId;
    } else {
      message.postId = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.rewardAccount !== undefined && object.rewardAccount !== null) {
      message.rewardAccount = object.rewardAccount;
    } else {
      message.rewardAccount = "";
    }
    if (object.bodyHash !== undefined && object.bodyHash !== null) {
      message.bodyHash = object.bodyHash;
    } else {
      message.bodyHash = "";
    }
    if (object.curatingEndTime !== undefined && object.curatingEndTime !== null) {
      message.curatingEndTime = object.curatingEndTime;
    } else {
      message.curatingEndTime = undefined;
    }
    if (object.totalVotes !== undefined && object.totalVotes !== null) {
      message.totalVotes = object.totalVotes as Long;
    } else {
      message.totalVotes = Long.UZERO;
    }
    if (object.totalVoters !== undefined && object.totalVoters !== null) {
      message.totalVoters = object.totalVoters as Long;
    } else {
      message.totalVoters = Long.UZERO;
    }
    if (object.totalAmount !== undefined && object.totalAmount !== null) {
      message.totalAmount = Coin.fromPartial(object.totalAmount);
    } else {
      message.totalAmount = undefined;
    }
    return message;
  },
  toJSON(message: Post): unknown {
    const obj: any = {};
    message.vendorId !== undefined && (obj.vendorId = message.vendorId);
    message.postId !== undefined && (obj.postId = message.postId);
    message.creator !== undefined && (obj.creator = message.creator);
    message.rewardAccount !== undefined && (obj.rewardAccount = message.rewardAccount);
    message.bodyHash !== undefined && (obj.bodyHash = message.bodyHash);
    message.curatingEndTime !== undefined && (obj.curatingEndTime = message.curatingEndTime !== undefined ? message.curatingEndTime.toISOString() : null);
    message.totalVotes !== undefined && (obj.totalVotes = (message.totalVotes || Long.UZERO).toString());
    message.totalVoters !== undefined && (obj.totalVoters = (message.totalVoters || Long.UZERO).toString());
    message.totalAmount !== undefined && (obj.totalAmount = message.totalAmount ? Coin.toJSON(message.totalAmount) : undefined);
    return obj;
  },
};

export const Upvote = {
  encode(message: Upvote, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint32(message.vendorId);
    writer.uint32(18).string(message.postId);
    writer.uint32(26).string(message.curator);
    writer.uint32(34).string(message.rewardAccount);
    if (message.voteAmount !== undefined && message.voteAmount !== undefined) {
      Coin.encode(message.voteAmount, writer.uint32(42).fork()).ldelim();
    }
    if (message.curatedTime !== undefined && message.curatedTime !== undefined) {
      Timestamp.encode(toTimestamp(message.curatedTime), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Upvote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpvote } as Upvote;
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
          message.curator = reader.string();
          break;
        case 4:
          message.rewardAccount = reader.string();
          break;
        case 5:
          message.voteAmount = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.curatedTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Upvote {
    const message = { ...baseUpvote } as Upvote;
    if (object.vendorId !== undefined && object.vendorId !== null) {
      message.vendorId = Number(object.vendorId);
    } else {
      message.vendorId = 0;
    }
    if (object.postId !== undefined && object.postId !== null) {
      message.postId = String(object.postId);
    } else {
      message.postId = "";
    }
    if (object.curator !== undefined && object.curator !== null) {
      message.curator = String(object.curator);
    } else {
      message.curator = "";
    }
    if (object.rewardAccount !== undefined && object.rewardAccount !== null) {
      message.rewardAccount = String(object.rewardAccount);
    } else {
      message.rewardAccount = "";
    }
    if (object.voteAmount !== undefined && object.voteAmount !== null) {
      message.voteAmount = Coin.fromJSON(object.voteAmount);
    } else {
      message.voteAmount = undefined;
    }
    if (object.curatedTime !== undefined && object.curatedTime !== null) {
      message.curatedTime = fromJsonTimestamp(object.curatedTime);
    } else {
      message.curatedTime = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Upvote>): Upvote {
    const message = { ...baseUpvote } as Upvote;
    if (object.vendorId !== undefined && object.vendorId !== null) {
      message.vendorId = object.vendorId;
    } else {
      message.vendorId = 0;
    }
    if (object.postId !== undefined && object.postId !== null) {
      message.postId = object.postId;
    } else {
      message.postId = "";
    }
    if (object.curator !== undefined && object.curator !== null) {
      message.curator = object.curator;
    } else {
      message.curator = "";
    }
    if (object.rewardAccount !== undefined && object.rewardAccount !== null) {
      message.rewardAccount = object.rewardAccount;
    } else {
      message.rewardAccount = "";
    }
    if (object.voteAmount !== undefined && object.voteAmount !== null) {
      message.voteAmount = Coin.fromPartial(object.voteAmount);
    } else {
      message.voteAmount = undefined;
    }
    if (object.curatedTime !== undefined && object.curatedTime !== null) {
      message.curatedTime = object.curatedTime;
    } else {
      message.curatedTime = undefined;
    }
    return message;
  },
  toJSON(message: Upvote): unknown {
    const obj: any = {};
    message.vendorId !== undefined && (obj.vendorId = message.vendorId);
    message.postId !== undefined && (obj.postId = message.postId);
    message.curator !== undefined && (obj.curator = message.curator);
    message.rewardAccount !== undefined && (obj.rewardAccount = message.rewardAccount);
    message.voteAmount !== undefined && (obj.voteAmount = message.voteAmount ? Coin.toJSON(message.voteAmount) : undefined);
    message.curatedTime !== undefined && (obj.curatedTime = message.curatedTime !== undefined ? message.curatedTime.toISOString() : null);
    return obj;
  },
};

export const VPPair = {
  encode(message: VPPair, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint32(message.vendorId);
    writer.uint32(18).string(message.postId);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): VPPair {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVPPair } as VPPair;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vendorId = reader.uint32();
          break;
        case 2:
          message.postId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VPPair {
    const message = { ...baseVPPair } as VPPair;
    if (object.vendorId !== undefined && object.vendorId !== null) {
      message.vendorId = Number(object.vendorId);
    } else {
      message.vendorId = 0;
    }
    if (object.postId !== undefined && object.postId !== null) {
      message.postId = String(object.postId);
    } else {
      message.postId = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<VPPair>): VPPair {
    const message = { ...baseVPPair } as VPPair;
    if (object.vendorId !== undefined && object.vendorId !== null) {
      message.vendorId = object.vendorId;
    } else {
      message.vendorId = 0;
    }
    if (object.postId !== undefined && object.postId !== null) {
      message.postId = object.postId;
    } else {
      message.postId = "";
    }
    return message;
  },
  toJSON(message: VPPair): unknown {
    const obj: any = {};
    message.vendorId !== undefined && (obj.vendorId = message.vendorId);
    message.postId !== undefined && (obj.postId = message.postId);
    return obj;
  },
};

export const VPPairs = {
  encode(message: VPPairs, writer: Writer = Writer.create()): Writer {
    for (const v of message.pairs) {
      VPPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): VPPairs {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVPPairs } as VPPairs;
    message.pairs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairs.push(VPPair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VPPairs {
    const message = { ...baseVPPairs } as VPPairs;
    message.pairs = [];
    if (object.pairs !== undefined && object.pairs !== null) {
      for (const e of object.pairs) {
        message.pairs.push(VPPair.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<VPPairs>): VPPairs {
    const message = { ...baseVPPairs } as VPPairs;
    message.pairs = [];
    if (object.pairs !== undefined && object.pairs !== null) {
      for (const e of object.pairs) {
        message.pairs.push(VPPair.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: VPPairs): unknown {
    const obj: any = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? VPPair.toJSON(e) : undefined);
    } else {
      obj.pairs = [];
    }
    return obj;
  },
};

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
    if (message.curationWindow !== undefined && message.curationWindow !== undefined) {
      Duration.encode(message.curationWindow, writer.uint32(10).fork()).ldelim();
    }
    if (message.voteAmount !== undefined && message.voteAmount !== undefined) {
      Coin.encode(message.voteAmount, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(24).uint32(message.maxNumVotes);
    writer.uint32(32).uint32(message.maxVendors);
    writer.uint32(42).string(message.rewardPoolAllocation);
    writer.uint32(66).string(message.rewardPoolCurationMaxAlloc);
    if (message.initialRewardPool !== undefined && message.initialRewardPool !== undefined) {
      Coin.encode(message.initialRewardPool, writer.uint32(74).fork()).ldelim();
    }
    writer.uint32(82).string(message.stakeDenom);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Params {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.curationWindow = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.voteAmount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.maxNumVotes = reader.uint32();
          break;
        case 4:
          message.maxVendors = reader.uint32();
          break;
        case 5:
          message.rewardPoolAllocation = reader.string();
          break;
        case 8:
          message.rewardPoolCurationMaxAlloc = reader.string();
          break;
        case 9:
          message.initialRewardPool = Coin.decode(reader, reader.uint32());
          break;
        case 10:
          message.stakeDenom = reader.string();
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
    if (object.curationWindow !== undefined && object.curationWindow !== null) {
      message.curationWindow = Duration.fromJSON(object.curationWindow);
    } else {
      message.curationWindow = undefined;
    }
    if (object.voteAmount !== undefined && object.voteAmount !== null) {
      message.voteAmount = Coin.fromJSON(object.voteAmount);
    } else {
      message.voteAmount = undefined;
    }
    if (object.maxNumVotes !== undefined && object.maxNumVotes !== null) {
      message.maxNumVotes = Number(object.maxNumVotes);
    } else {
      message.maxNumVotes = 0;
    }
    if (object.maxVendors !== undefined && object.maxVendors !== null) {
      message.maxVendors = Number(object.maxVendors);
    } else {
      message.maxVendors = 0;
    }
    if (object.rewardPoolAllocation !== undefined && object.rewardPoolAllocation !== null) {
      message.rewardPoolAllocation = String(object.rewardPoolAllocation);
    } else {
      message.rewardPoolAllocation = "";
    }
    if (object.rewardPoolCurationMaxAlloc !== undefined && object.rewardPoolCurationMaxAlloc !== null) {
      message.rewardPoolCurationMaxAlloc = String(object.rewardPoolCurationMaxAlloc);
    } else {
      message.rewardPoolCurationMaxAlloc = "";
    }
    if (object.initialRewardPool !== undefined && object.initialRewardPool !== null) {
      message.initialRewardPool = Coin.fromJSON(object.initialRewardPool);
    } else {
      message.initialRewardPool = undefined;
    }
    if (object.stakeDenom !== undefined && object.stakeDenom !== null) {
      message.stakeDenom = String(object.stakeDenom);
    } else {
      message.stakeDenom = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (object.curationWindow !== undefined && object.curationWindow !== null) {
      message.curationWindow = Duration.fromPartial(object.curationWindow);
    } else {
      message.curationWindow = undefined;
    }
    if (object.voteAmount !== undefined && object.voteAmount !== null) {
      message.voteAmount = Coin.fromPartial(object.voteAmount);
    } else {
      message.voteAmount = undefined;
    }
    if (object.maxNumVotes !== undefined && object.maxNumVotes !== null) {
      message.maxNumVotes = object.maxNumVotes;
    } else {
      message.maxNumVotes = 0;
    }
    if (object.maxVendors !== undefined && object.maxVendors !== null) {
      message.maxVendors = object.maxVendors;
    } else {
      message.maxVendors = 0;
    }
    if (object.rewardPoolAllocation !== undefined && object.rewardPoolAllocation !== null) {
      message.rewardPoolAllocation = object.rewardPoolAllocation;
    } else {
      message.rewardPoolAllocation = "";
    }
    if (object.rewardPoolCurationMaxAlloc !== undefined && object.rewardPoolCurationMaxAlloc !== null) {
      message.rewardPoolCurationMaxAlloc = object.rewardPoolCurationMaxAlloc;
    } else {
      message.rewardPoolCurationMaxAlloc = "";
    }
    if (object.initialRewardPool !== undefined && object.initialRewardPool !== null) {
      message.initialRewardPool = Coin.fromPartial(object.initialRewardPool);
    } else {
      message.initialRewardPool = undefined;
    }
    if (object.stakeDenom !== undefined && object.stakeDenom !== null) {
      message.stakeDenom = object.stakeDenom;
    } else {
      message.stakeDenom = "";
    }
    return message;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.curationWindow !== undefined && (obj.curationWindow = message.curationWindow ? Duration.toJSON(message.curationWindow) : undefined);
    message.voteAmount !== undefined && (obj.voteAmount = message.voteAmount ? Coin.toJSON(message.voteAmount) : undefined);
    message.maxNumVotes !== undefined && (obj.maxNumVotes = message.maxNumVotes);
    message.maxVendors !== undefined && (obj.maxVendors = message.maxVendors);
    message.rewardPoolAllocation !== undefined && (obj.rewardPoolAllocation = message.rewardPoolAllocation);
    message.rewardPoolCurationMaxAlloc !== undefined && (obj.rewardPoolCurationMaxAlloc = message.rewardPoolCurationMaxAlloc);
    message.initialRewardPool !== undefined && (obj.initialRewardPool = message.initialRewardPool ? Coin.toJSON(message.initialRewardPool) : undefined);
    message.stakeDenom !== undefined && (obj.stakeDenom = message.stakeDenom);
    return obj;
  },
};

if (util.Long !== Long as any) {
  util.Long = Long as any;
  configure();
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