/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';


export interface MsgVouch {
  voucher: string;
  vouched: string;
  comment: string;
}

export interface MsgVouchResponse {
}

const baseMsgVouch: object = {
  voucher: "",
  vouched: "",
  comment: "",
};

const baseMsgVouchResponse: object = {
};

/**
 *  Msg defines the faucet Msg service.
 */
export interface Msg {

  /**
   *  Vouch defines a method for vouching for a user.
   */
  Vouch(request: MsgVouch): Promise<MsgVouchResponse>;

}

export class MsgClientImpl implements Msg {

  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  Vouch(request: MsgVouch): Promise<MsgVouchResponse> {
    const data = MsgVouch.encode(request).finish();
    const promise = this.rpc.request("stargaze.user.v1beta1.Msg", "Vouch", data);
    return promise.then(data => MsgVouchResponse.decode(new Reader(data)));
  }

}

interface Rpc {

  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;

}

export const protobufPackage = 'stargaze.user.v1beta1'

export const MsgVouch = {
  encode(message: MsgVouch, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.voucher);
    writer.uint32(18).string(message.vouched);
    writer.uint32(26).string(message.comment);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgVouch {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgVouch } as MsgVouch;
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
  fromJSON(object: any): MsgVouch {
    const message = { ...baseMsgVouch } as MsgVouch;
    if (object.voucher !== undefined && object.voucher !== null) {
      message.voucher = String(object.voucher);
    } else {
      message.voucher = "";
    }
    if (object.vouched !== undefined && object.vouched !== null) {
      message.vouched = String(object.vouched);
    } else {
      message.vouched = "";
    }
    if (object.comment !== undefined && object.comment !== null) {
      message.comment = String(object.comment);
    } else {
      message.comment = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgVouch>): MsgVouch {
    const message = { ...baseMsgVouch } as MsgVouch;
    if (object.voucher !== undefined && object.voucher !== null) {
      message.voucher = object.voucher;
    } else {
      message.voucher = "";
    }
    if (object.vouched !== undefined && object.vouched !== null) {
      message.vouched = object.vouched;
    } else {
      message.vouched = "";
    }
    if (object.comment !== undefined && object.comment !== null) {
      message.comment = object.comment;
    } else {
      message.comment = "";
    }
    return message;
  },
  toJSON(message: MsgVouch): unknown {
    const obj: any = {};
    message.voucher !== undefined && (obj.voucher = message.voucher);
    message.vouched !== undefined && (obj.vouched = message.vouched);
    message.comment !== undefined && (obj.comment = message.comment);
    return obj;
  },
};

export const MsgVouchResponse = {
  encode(_: MsgVouchResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgVouchResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgVouchResponse } as MsgVouchResponse;
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
  fromJSON(_: any): MsgVouchResponse {
    const message = { ...baseMsgVouchResponse } as MsgVouchResponse;
    return message;
  },
  fromPartial(_: DeepPartial<MsgVouchResponse>): MsgVouchResponse {
    const message = { ...baseMsgVouchResponse } as MsgVouchResponse;
    return message;
  },
  toJSON(_: MsgVouchResponse): unknown {
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