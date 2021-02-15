/* eslint-disable */
import { Stake } from '../../../stargaze/stake/v1beta1/stake';
import { Writer, Reader } from 'protobufjs/minimal';


export interface GenesisState {
  stakes: Stake[];
}

const baseGenesisState: object = {
};

export const protobufPackage = 'stargaze.stake.v1beta1'

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.stakes) {
      Stake.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.stakes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakes.push(Stake.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.stakes = [];
    if (object.stakes !== undefined && object.stakes !== null) {
      for (const e of object.stakes) {
        message.stakes.push(Stake.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.stakes = [];
    if (object.stakes !== undefined && object.stakes !== null) {
      for (const e of object.stakes) {
        message.stakes.push(Stake.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.stakes) {
      obj.stakes = message.stakes.map(e => e ? Stake.toJSON(e) : undefined);
    } else {
      obj.stakes = [];
    }
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