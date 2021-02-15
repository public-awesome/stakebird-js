/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal';


export interface Stake {
  vendorId: number;
  postId: string;
  delegator: string;
  validator: string;
  amount: string;
}

export interface Params {
}

const baseStake: object = {
  vendorId: 0,
  postId: "",
  delegator: "",
  validator: "",
  amount: "",
};

const baseParams: object = {
};

export const protobufPackage = 'stargaze.stake.v1beta1'

export const Stake = {
  encode(message: Stake, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint32(message.vendorId);
    writer.uint32(18).string(message.postId);
    writer.uint32(26).string(message.delegator);
    writer.uint32(34).string(message.validator);
    writer.uint32(42).string(message.amount);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Stake {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStake } as Stake;
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
          message.delegator = reader.string();
          break;
        case 4:
          message.validator = reader.string();
          break;
        case 5:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Stake {
    const message = { ...baseStake } as Stake;
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
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = String(object.delegator);
    } else {
      message.delegator = "";
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = String(object.validator);
    } else {
      message.validator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<Stake>): Stake {
    const message = { ...baseStake } as Stake;
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
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    } else {
      message.delegator = "";
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    } else {
      message.validator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    return message;
  },
  toJSON(message: Stake): unknown {
    const obj: any = {};
    message.vendorId !== undefined && (obj.vendorId = message.vendorId);
    message.postId !== undefined && (obj.postId = message.postId);
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.validator !== undefined && (obj.validator = message.validator);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
};

export const Params = {
  encode(_: Params, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Params {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
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
  fromJSON(_: any): Params {
    const message = { ...baseParams } as Params;
    return message;
  },
  fromPartial(_: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    return message;
  },
  toJSON(_: Params): unknown {
    const obj: any = {};
    return obj;
  },
};

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