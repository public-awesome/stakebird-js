/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';
import * as Long from 'long';

export const protobufPackage = 'stargaze.curating.v1beta1';

export interface MsgPostResponse {}

export interface MsgUpvoteResponse {}

export interface MsgPost {
	vendorId: number;
	postId: string;
	creator: string;
	rewardAccount: string;
	body: string;
	chainId: string;
	contractAddress: string;
	metadata: string;
	parentId: string;
}

export interface MsgUpvote {
	vendorId: number;
	postId: string;
	curator: string;
	rewardAccount: string;
	voteNum: number;
}

const baseMsgPostResponse: object = {};

export const MsgPostResponse = {
	encode(_: MsgPostResponse, writer: Writer = Writer.create()): Writer {
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): MsgPostResponse {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseMsgPostResponse
		) as MsgPostResponse;
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
		const message = globalThis.Object.create(
			baseMsgPostResponse
		) as MsgPostResponse;
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

const baseMsgUpvoteResponse: object = {};

export const MsgUpvoteResponse = {
	encode(_: MsgUpvoteResponse, writer: Writer = Writer.create()): Writer {
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): MsgUpvoteResponse {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseMsgUpvoteResponse
		) as MsgUpvoteResponse;
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
		const message = globalThis.Object.create(
			baseMsgUpvoteResponse
		) as MsgUpvoteResponse;
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

const baseMsgPost: object = {
	vendorId: 0,
	postId: '',
	creator: '',
	rewardAccount: '',
	body: '',
	chainId: '',
	contractAddress: '',
	metadata: '',
	parentId: '',
};

export const MsgPost = {
	encode(message: MsgPost, writer: Writer = Writer.create()): Writer {
		if (message.vendorId !== 0) {
			writer.uint32(8).uint32(message.vendorId);
		}
		if (message.postId !== '') {
			writer.uint32(18).string(message.postId);
		}
		if (message.creator !== '') {
			writer.uint32(26).string(message.creator);
		}
		if (message.rewardAccount !== '') {
			writer.uint32(34).string(message.rewardAccount);
		}
		if (message.body !== '') {
			writer.uint32(42).string(message.body);
		}
		if (message.chainId !== '') {
			writer.uint32(50).string(message.chainId);
		}
		if (message.contractAddress !== '') {
			writer.uint32(58).string(message.contractAddress);
		}
		if (message.metadata !== '') {
			writer.uint32(66).string(message.metadata);
		}
		if (message.parentId !== '') {
			writer.uint32(74).string(message.parentId);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): MsgPost {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(baseMsgPost) as MsgPost;
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
				case 6:
					message.chainId = reader.string();
					break;
				case 7:
					message.contractAddress = reader.string();
					break;
				case 8:
					message.metadata = reader.string();
					break;
				case 9:
					message.parentId = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgPost {
		const message = globalThis.Object.create(baseMsgPost) as MsgPost;
		if (object.vendorId !== undefined && object.vendorId !== null) {
			message.vendorId = Number(object.vendorId);
		} else {
			message.vendorId = 0;
		}
		if (object.postId !== undefined && object.postId !== null) {
			message.postId = String(object.postId);
		} else {
			message.postId = '';
		}
		if (object.creator !== undefined && object.creator !== null) {
			message.creator = String(object.creator);
		} else {
			message.creator = '';
		}
		if (
			object.rewardAccount !== undefined &&
			object.rewardAccount !== null
		) {
			message.rewardAccount = String(object.rewardAccount);
		} else {
			message.rewardAccount = '';
		}
		if (object.body !== undefined && object.body !== null) {
			message.body = String(object.body);
		} else {
			message.body = '';
		}
		if (object.chainId !== undefined && object.chainId !== null) {
			message.chainId = String(object.chainId);
		} else {
			message.chainId = '';
		}
		if (
			object.contractAddress !== undefined &&
			object.contractAddress !== null
		) {
			message.contractAddress = String(object.contractAddress);
		} else {
			message.contractAddress = '';
		}
		if (object.metadata !== undefined && object.metadata !== null) {
			message.metadata = String(object.metadata);
		} else {
			message.metadata = '';
		}
		if (object.parentId !== undefined && object.parentId !== null) {
			message.parentId = String(object.parentId);
		} else {
			message.parentId = '';
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
			message.postId = '';
		}
		if (object.creator !== undefined && object.creator !== null) {
			message.creator = object.creator;
		} else {
			message.creator = '';
		}
		if (
			object.rewardAccount !== undefined &&
			object.rewardAccount !== null
		) {
			message.rewardAccount = object.rewardAccount;
		} else {
			message.rewardAccount = '';
		}
		if (object.body !== undefined && object.body !== null) {
			message.body = object.body;
		} else {
			message.body = '';
		}
		if (object.chainId !== undefined && object.chainId !== null) {
			message.chainId = object.chainId;
		} else {
			message.chainId = '';
		}
		if (
			object.contractAddress !== undefined &&
			object.contractAddress !== null
		) {
			message.contractAddress = object.contractAddress;
		} else {
			message.contractAddress = '';
		}
		if (object.metadata !== undefined && object.metadata !== null) {
			message.metadata = object.metadata;
		} else {
			message.metadata = '';
		}
		if (object.parentId !== undefined && object.parentId !== null) {
			message.parentId = object.parentId;
		} else {
			message.parentId = '';
		}
		return message;
	},

	toJSON(message: MsgPost): unknown {
		const obj: any = {};
		message.vendorId !== undefined && (obj.vendorId = message.vendorId);
		message.postId !== undefined && (obj.postId = message.postId);
		message.creator !== undefined && (obj.creator = message.creator);
		message.rewardAccount !== undefined &&
			(obj.rewardAccount = message.rewardAccount);
		message.body !== undefined && (obj.body = message.body);
		message.chainId !== undefined && (obj.chainId = message.chainId);
		message.contractAddress !== undefined &&
			(obj.contractAddress = message.contractAddress);
		message.metadata !== undefined && (obj.metadata = message.metadata);
		message.parentId !== undefined && (obj.parentId = message.parentId);
		return obj;
	},
};

const baseMsgUpvote: object = {
	vendorId: 0,
	postId: '',
	curator: '',
	rewardAccount: '',
	voteNum: 0,
};

export const MsgUpvote = {
	encode(message: MsgUpvote, writer: Writer = Writer.create()): Writer {
		if (message.vendorId !== 0) {
			writer.uint32(8).uint32(message.vendorId);
		}
		if (message.postId !== '') {
			writer.uint32(18).string(message.postId);
		}
		if (message.curator !== '') {
			writer.uint32(26).string(message.curator);
		}
		if (message.rewardAccount !== '') {
			writer.uint32(34).string(message.rewardAccount);
		}
		if (message.voteNum !== 0) {
			writer.uint32(40).int32(message.voteNum);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): MsgUpvote {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(baseMsgUpvote) as MsgUpvote;
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
		const message = globalThis.Object.create(baseMsgUpvote) as MsgUpvote;
		if (object.vendorId !== undefined && object.vendorId !== null) {
			message.vendorId = Number(object.vendorId);
		} else {
			message.vendorId = 0;
		}
		if (object.postId !== undefined && object.postId !== null) {
			message.postId = String(object.postId);
		} else {
			message.postId = '';
		}
		if (object.curator !== undefined && object.curator !== null) {
			message.curator = String(object.curator);
		} else {
			message.curator = '';
		}
		if (
			object.rewardAccount !== undefined &&
			object.rewardAccount !== null
		) {
			message.rewardAccount = String(object.rewardAccount);
		} else {
			message.rewardAccount = '';
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
			message.postId = '';
		}
		if (object.curator !== undefined && object.curator !== null) {
			message.curator = object.curator;
		} else {
			message.curator = '';
		}
		if (
			object.rewardAccount !== undefined &&
			object.rewardAccount !== null
		) {
			message.rewardAccount = object.rewardAccount;
		} else {
			message.rewardAccount = '';
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
		message.rewardAccount !== undefined &&
			(obj.rewardAccount = message.rewardAccount);
		message.voteNum !== undefined && (obj.voteNum = message.voteNum);
		return obj;
	},
};

/** Msg defines the curating Msg service. */
export interface Msg {
	/** Post defines a method for sending a post */
	Post(request: MsgPost): Promise<MsgPostResponse>;
	/** Upvote defines a method for upvoting a post */
	Upvote(request: MsgUpvote): Promise<MsgUpvoteResponse>;
}

export class MsgClientImpl implements Msg {
	private readonly rpc: Rpc;
	constructor(rpc: Rpc) {
		this.rpc = rpc;
	}
	Post(request: MsgPost): Promise<MsgPostResponse> {
		const data = MsgPost.encode(request).finish();
		const promise = this.rpc.request(
			'stargaze.curating.v1beta1.Msg',
			'Post',
			data
		);
		return promise.then((data) => MsgPostResponse.decode(new Reader(data)));
	}

	Upvote(request: MsgUpvote): Promise<MsgUpvoteResponse> {
		const data = MsgUpvote.encode(request).finish();
		const promise = this.rpc.request(
			'stargaze.curating.v1beta1.Msg',
			'Upvote',
			data
		);
		return promise.then((data) =>
			MsgUpvoteResponse.decode(new Reader(data))
		);
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
