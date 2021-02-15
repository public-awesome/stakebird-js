/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';


export interface MsgPostResponse {
}

export interface MsgUpvoteResponse {
}

export interface MsgPost {
  vendorId: number;
  postId: string;
  creator: string;
  rewardAccount: string;
  body: string;
}

export interface MsgUpvote {
  vendorId: number;
  postId: string;
  curator: string;
  rewardAccount: string;
  voteNum: number;
}

const baseMsgPostResponse: object = {
};

const baseMsgUpvoteResponse: object = {
};

const baseMsgPost: object = {
  vendorId: 0,
  postId: "",
  creator: "",
  rewardAccount: "",
  body: "",
};

const baseMsgUpvote: object = {
  vendorId: 0,
  postId: "",
  curator: "",
  rewardAccount: "",
  voteNum: 0,
};

/**
 *  Msg defines the curating Msg service.
 */
export interface Msg {

  /**
   *  Post defines a method for sending a post
   */
  Post(request: MsgPost): Promise<MsgPostResponse>;

  /**
   *  Upvote defines a method for upvoting a post
   */
  Upvote(request: MsgUpvote): Promise<MsgUpvoteResponse>;

}

export class MsgClientImpl implements Msg {

  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  Post(request: MsgPost): Promise<MsgPostResponse> {
    const data = MsgPost.encode(request).finish();
    const promise = this.rpc.request("stargaze.curating.v1beta1.Msg", "Post", data);
    return promise.then(data => MsgPostResponse.decode(new Reader(data)));
  }

  Upvote(request: MsgUpvote): Promise<MsgUpvoteResponse> {
    const data = MsgUpvote.encode(request).finish();
    const promise = this.rpc.request("stargaze.curating.v1beta1.Msg", "Upvote", data);
    return promise.then(data => MsgUpvoteResponse.decode(new Reader(data)));
  }

}

interface Rpc {

  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;

}

export const protobufPackage = 'stargaze.curating.v1beta1'

export const MsgPostResponse = {
  encode(_: MsgPostResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgPostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgPostResponse } as MsgPostResponse;
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
  fromJSON(_: any): MsgPostResponse {
    const message = { ...baseMsgPostResponse } as MsgPostResponse;
    return message;
  },
  fromPartial(_: DeepPartial<MsgPostResponse>): MsgPostResponse {
    const message = { ...baseMsgPostResponse } as MsgPostResponse;
    return message;
  },
  toJSON(_: MsgPostResponse): unknown {
    const obj: any = {};
    return obj;
  },
};

export const MsgUpvoteResponse = {
  encode(_: MsgUpvoteResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgUpvoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpvoteResponse } as MsgUpvoteResponse;
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
  fromJSON(_: any): MsgUpvoteResponse {
    const message = { ...baseMsgUpvoteResponse } as MsgUpvoteResponse;
    return message;
  },
  fromPartial(_: DeepPartial<MsgUpvoteResponse>): MsgUpvoteResponse {
    const message = { ...baseMsgUpvoteResponse } as MsgUpvoteResponse;
    return message;
  },
  toJSON(_: MsgUpvoteResponse): unknown {
    const obj: any = {};
    return obj;
  },
};

export const MsgPost = {
  encode(message: MsgPost, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint32(message.vendorId);
    writer.uint32(18).string(message.postId);
    writer.uint32(26).string(message.creator);
    writer.uint32(34).string(message.rewardAccount);
    writer.uint32(42).string(message.body);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgPost {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgPost } as MsgPost;
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
          message.body = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgPost {
    const message = { ...baseMsgPost } as MsgPost;
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
    if (object.body !== undefined && object.body !== null) {
      message.body = String(object.body);
    } else {
      message.body = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgPost>): MsgPost {
    const message = { ...baseMsgPost } as MsgPost;
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
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    } else {
      message.body = "";
    }
    return message;
  },
  toJSON(message: MsgPost): unknown {
    const obj: any = {};
    message.vendorId !== undefined && (obj.vendorId = message.vendorId);
    message.postId !== undefined && (obj.postId = message.postId);
    message.creator !== undefined && (obj.creator = message.creator);
    message.rewardAccount !== undefined && (obj.rewardAccount = message.rewardAccount);
    message.body !== undefined && (obj.body = message.body);
    return obj;
  },
};

export const MsgUpvote = {
  encode(message: MsgUpvote, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint32(message.vendorId);
    writer.uint32(18).string(message.postId);
    writer.uint32(26).string(message.curator);
    writer.uint32(34).string(message.rewardAccount);
    writer.uint32(40).int32(message.voteNum);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgUpvote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpvote } as MsgUpvote;
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
          message.voteNum = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpvote {
    const message = { ...baseMsgUpvote } as MsgUpvote;
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
    if (object.voteNum !== undefined && object.voteNum !== null) {
      message.voteNum = Number(object.voteNum);
    } else {
      message.voteNum = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpvote>): MsgUpvote {
    const message = { ...baseMsgUpvote } as MsgUpvote;
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
    if (object.voteNum !== undefined && object.voteNum !== null) {
      message.voteNum = object.voteNum;
    } else {
      message.voteNum = 0;
    }
    return message;
  },
  toJSON(message: MsgUpvote): unknown {
    const obj: any = {};
    message.vendorId !== undefined && (obj.vendorId = message.vendorId);
    message.postId !== undefined && (obj.postId = message.postId);
    message.curator !== undefined && (obj.curator = message.curator);
    message.rewardAccount !== undefined && (obj.rewardAccount = message.rewardAccount);
    message.voteNum !== undefined && (obj.voteNum = message.voteNum);
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