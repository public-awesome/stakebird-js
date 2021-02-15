/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';


export interface MsgStakeResponse {
}

export interface MsgUnstakeResponse {
}

export interface MsgStake {
  vendorId: number;
  postId: string;
  delegator: string;
  validator: string;
  amount: string;
}

export interface MsgUnstake {
  vendorId: number;
  postId: string;
  delegator: string;
  amount: string;
}

const baseMsgStakeResponse: object = {
};

const baseMsgUnstakeResponse: object = {
};

const baseMsgStake: object = {
  vendorId: 0,
  postId: "",
  delegator: "",
  validator: "",
  amount: "",
};

const baseMsgUnstake: object = {
  vendorId: 0,
  postId: "",
  delegator: "",
  amount: "",
};

/**
 *  Msg defines the stake Msg service.
 */
export interface Msg {

  Stake(request: MsgStake): Promise<MsgStakeResponse>;

  Unstake(request: MsgUnstake): Promise<MsgUnstakeResponse>;

}

export class MsgClientImpl implements Msg {

  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  Stake(request: MsgStake): Promise<MsgStakeResponse> {
    const data = MsgStake.encode(request).finish();
    const promise = this.rpc.request("stargaze.stake.v1beta1.Msg", "Stake", data);
    return promise.then(data => MsgStakeResponse.decode(new Reader(data)));
  }

  Unstake(request: MsgUnstake): Promise<MsgUnstakeResponse> {
    const data = MsgUnstake.encode(request).finish();
    const promise = this.rpc.request("stargaze.stake.v1beta1.Msg", "Unstake", data);
    return promise.then(data => MsgUnstakeResponse.decode(new Reader(data)));
  }

}

interface Rpc {

  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;

}

export const protobufPackage = 'stargaze.stake.v1beta1'

export const MsgStakeResponse = {
  encode(_: MsgStakeResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgStakeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgStakeResponse } as MsgStakeResponse;
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
  fromJSON(_: any): MsgStakeResponse {
    const message = { ...baseMsgStakeResponse } as MsgStakeResponse;
    return message;
  },
  fromPartial(_: DeepPartial<MsgStakeResponse>): MsgStakeResponse {
    const message = { ...baseMsgStakeResponse } as MsgStakeResponse;
    return message;
  },
  toJSON(_: MsgStakeResponse): unknown {
    const obj: any = {};
    return obj;
  },
};

export const MsgUnstakeResponse = {
  encode(_: MsgUnstakeResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgUnstakeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUnstakeResponse } as MsgUnstakeResponse;
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
  fromJSON(_: any): MsgUnstakeResponse {
    const message = { ...baseMsgUnstakeResponse } as MsgUnstakeResponse;
    return message;
  },
  fromPartial(_: DeepPartial<MsgUnstakeResponse>): MsgUnstakeResponse {
    const message = { ...baseMsgUnstakeResponse } as MsgUnstakeResponse;
    return message;
  },
  toJSON(_: MsgUnstakeResponse): unknown {
    const obj: any = {};
    return obj;
  },
};

export const MsgStake = {
  encode(message: MsgStake, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint32(message.vendorId);
    writer.uint32(18).string(message.postId);
    writer.uint32(26).string(message.delegator);
    writer.uint32(34).string(message.validator);
    writer.uint32(42).string(message.amount);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgStake {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgStake } as MsgStake;
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
  fromJSON(object: any): MsgStake {
    const message = { ...baseMsgStake } as MsgStake;
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
  fromPartial(object: DeepPartial<MsgStake>): MsgStake {
    const message = { ...baseMsgStake } as MsgStake;
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
  toJSON(message: MsgStake): unknown {
    const obj: any = {};
    message.vendorId !== undefined && (obj.vendorId = message.vendorId);
    message.postId !== undefined && (obj.postId = message.postId);
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.validator !== undefined && (obj.validator = message.validator);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
};

export const MsgUnstake = {
  encode(message: MsgUnstake, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint32(message.vendorId);
    writer.uint32(18).string(message.postId);
    writer.uint32(26).string(message.delegator);
    writer.uint32(34).string(message.amount);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgUnstake {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUnstake } as MsgUnstake;
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
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnstake {
    const message = { ...baseMsgUnstake } as MsgUnstake;
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
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUnstake>): MsgUnstake {
    const message = { ...baseMsgUnstake } as MsgUnstake;
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
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    return message;
  },
  toJSON(message: MsgUnstake): unknown {
    const obj: any = {};
    message.vendorId !== undefined && (obj.vendorId = message.vendorId);
    message.postId !== undefined && (obj.postId = message.postId);
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.amount !== undefined && (obj.amount = message.amount);
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