/* eslint-disable */
import {
	Params,
	Post,
	Upvote,
	VPPair,
} from '../../../stargaze/curating/v1beta1/curating';
import { Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';

export const protobufPackage = 'stargaze.curating.v1beta1';

export interface GenesisState {
	params?: Params;
	posts: Post[];
	upvotes: Upvote[];
	curatingQueue: VPPair[];
}

const baseGenesisState: object = {};

export const GenesisState = {
	encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
		if (message.params !== undefined) {
			Params.encode(message.params, writer.uint32(10).fork()).ldelim();
		}
		for (const v of message.posts) {
			Post.encode(v!, writer.uint32(26).fork()).ldelim();
		}
		for (const v of message.upvotes) {
			Upvote.encode(v!, writer.uint32(34).fork()).ldelim();
		}
		for (const v of message.curatingQueue) {
			VPPair.encode(v!, writer.uint32(42).fork()).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): GenesisState {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseGenesisState
		) as GenesisState;
		message.posts = [];
		message.upvotes = [];
		message.curatingQueue = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.params = Params.decode(reader, reader.uint32());
					break;
				case 3:
					message.posts.push(Post.decode(reader, reader.uint32()));
					break;
				case 4:
					message.upvotes.push(
						Upvote.decode(reader, reader.uint32())
					);
					break;
				case 5:
					message.curatingQueue.push(
						VPPair.decode(reader, reader.uint32())
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
		message.posts = [];
		message.upvotes = [];
		message.curatingQueue = [];
		if (object.params !== undefined && object.params !== null) {
			message.params = Params.fromJSON(object.params);
		} else {
			message.params = undefined;
		}
		if (object.posts !== undefined && object.posts !== null) {
			for (const e of object.posts) {
				message.posts.push(Post.fromJSON(e));
			}
		}
		if (object.upvotes !== undefined && object.upvotes !== null) {
			for (const e of object.upvotes) {
				message.upvotes.push(Upvote.fromJSON(e));
			}
		}
		if (
			object.curatingQueue !== undefined &&
			object.curatingQueue !== null
		) {
			for (const e of object.curatingQueue) {
				message.curatingQueue.push(VPPair.fromJSON(e));
			}
		}
		return message;
	},

	fromPartial(object: DeepPartial<GenesisState>): GenesisState {
		const message = { ...baseGenesisState } as GenesisState;
		message.posts = [];
		message.upvotes = [];
		message.curatingQueue = [];
		if (object.params !== undefined && object.params !== null) {
			message.params = Params.fromPartial(object.params);
		} else {
			message.params = undefined;
		}
		if (object.posts !== undefined && object.posts !== null) {
			for (const e of object.posts) {
				message.posts.push(Post.fromPartial(e));
			}
		}
		if (object.upvotes !== undefined && object.upvotes !== null) {
			for (const e of object.upvotes) {
				message.upvotes.push(Upvote.fromPartial(e));
			}
		}
		if (
			object.curatingQueue !== undefined &&
			object.curatingQueue !== null
		) {
			for (const e of object.curatingQueue) {
				message.curatingQueue.push(VPPair.fromPartial(e));
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
		if (message.posts) {
			obj.posts = message.posts.map((e) =>
				e ? Post.toJSON(e) : undefined
			);
		} else {
			obj.posts = [];
		}
		if (message.upvotes) {
			obj.upvotes = message.upvotes.map((e) =>
				e ? Upvote.toJSON(e) : undefined
			);
		} else {
			obj.upvotes = [];
		}
		if (message.curatingQueue) {
			obj.curatingQueue = message.curatingQueue.map((e) =>
				e ? VPPair.toJSON(e) : undefined
			);
		} else {
			obj.curatingQueue = [];
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
