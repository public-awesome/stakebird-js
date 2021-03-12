/* eslint-disable */
import {
	Params,
	Post,
	Upvote,
} from '../../../stargaze/curating/v1beta1/curating';
import { Reader, Writer } from 'protobufjs/minimal';
import * as Long from 'long';

export const protobufPackage = 'stargaze.curating.v1beta1';

export interface QueryParamsRequest {}

export interface QueryParamsResponse {
	params?: Params;
}

export interface QueryPostsRequest {
	vendorId: number;
}

export interface QueryPostRequest {
	vendorId: number;
	postId: string;
}

export interface QueryPostsResponse {
	posts: Post[];
}

export interface QueryPostResponse {
	post?: Post;
}

export interface QueryUpvotesRequest {
	vendorId: number;
	postId: string;
}

export interface QueryUpvotesResponse {
	upvotes: Upvote[];
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
	encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseQueryParamsRequest
		) as QueryParamsRequest;
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

	fromJSON(_: any): QueryParamsRequest {
		const message = globalThis.Object.create(
			baseQueryParamsRequest
		) as QueryParamsRequest;
		return message;
	},

	fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
		const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
		return message;
	},

	toJSON(_: QueryParamsRequest): unknown {
		const obj: any = {};
		return obj;
	},
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
	encode(
		message: QueryParamsResponse,
		writer: Writer = Writer.create()
	): Writer {
		if (message.params !== undefined) {
			Params.encode(message.params, writer.uint32(10).fork()).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseQueryParamsResponse
		) as QueryParamsResponse;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.params = Params.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): QueryParamsResponse {
		const message = globalThis.Object.create(
			baseQueryParamsResponse
		) as QueryParamsResponse;
		if (object.params !== undefined && object.params !== null) {
			message.params = Params.fromJSON(object.params);
		} else {
			message.params = undefined;
		}
		return message;
	},

	fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
		const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
		if (object.params !== undefined && object.params !== null) {
			message.params = Params.fromPartial(object.params);
		} else {
			message.params = undefined;
		}
		return message;
	},

	toJSON(message: QueryParamsResponse): unknown {
		const obj: any = {};
		message.params !== undefined &&
			(obj.params = message.params
				? Params.toJSON(message.params)
				: undefined);
		return obj;
	},
};

const baseQueryPostsRequest: object = { vendorId: 0 };

export const QueryPostsRequest = {
	encode(
		message: QueryPostsRequest,
		writer: Writer = Writer.create()
	): Writer {
		if (message.vendorId !== 0) {
			writer.uint32(8).uint32(message.vendorId);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): QueryPostsRequest {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseQueryPostsRequest
		) as QueryPostsRequest;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.vendorId = reader.uint32();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): QueryPostsRequest {
		const message = globalThis.Object.create(
			baseQueryPostsRequest
		) as QueryPostsRequest;
		if (object.vendorId !== undefined && object.vendorId !== null) {
			message.vendorId = Number(object.vendorId);
		} else {
			message.vendorId = 0;
		}
		return message;
	},

	fromPartial(object: DeepPartial<QueryPostsRequest>): QueryPostsRequest {
		const message = { ...baseQueryPostsRequest } as QueryPostsRequest;
		if (object.vendorId !== undefined && object.vendorId !== null) {
			message.vendorId = object.vendorId;
		} else {
			message.vendorId = 0;
		}
		return message;
	},

	toJSON(message: QueryPostsRequest): unknown {
		const obj: any = {};
		message.vendorId !== undefined && (obj.vendorId = message.vendorId);
		return obj;
	},
};

const baseQueryPostRequest: object = { vendorId: 0, postId: '' };

export const QueryPostRequest = {
	encode(
		message: QueryPostRequest,
		writer: Writer = Writer.create()
	): Writer {
		if (message.vendorId !== 0) {
			writer.uint32(8).uint32(message.vendorId);
		}
		if (message.postId !== '') {
			writer.uint32(18).string(message.postId);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): QueryPostRequest {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseQueryPostRequest
		) as QueryPostRequest;
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

	fromJSON(object: any): QueryPostRequest {
		const message = globalThis.Object.create(
			baseQueryPostRequest
		) as QueryPostRequest;
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
		return message;
	},

	fromPartial(object: DeepPartial<QueryPostRequest>): QueryPostRequest {
		const message = { ...baseQueryPostRequest } as QueryPostRequest;
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
		return message;
	},

	toJSON(message: QueryPostRequest): unknown {
		const obj: any = {};
		message.vendorId !== undefined && (obj.vendorId = message.vendorId);
		message.postId !== undefined && (obj.postId = message.postId);
		return obj;
	},
};

const baseQueryPostsResponse: object = {};

export const QueryPostsResponse = {
	encode(
		message: QueryPostsResponse,
		writer: Writer = Writer.create()
	): Writer {
		for (const v of message.posts) {
			Post.encode(v!, writer.uint32(10).fork()).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): QueryPostsResponse {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseQueryPostsResponse
		) as QueryPostsResponse;
		message.posts = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.posts.push(Post.decode(reader, reader.uint32()));
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): QueryPostsResponse {
		const message = globalThis.Object.create(
			baseQueryPostsResponse
		) as QueryPostsResponse;
		message.posts = [];
		if (object.posts !== undefined && object.posts !== null) {
			for (const e of object.posts) {
				message.posts.push(Post.fromJSON(e));
			}
		}
		return message;
	},

	fromPartial(object: DeepPartial<QueryPostsResponse>): QueryPostsResponse {
		const message = { ...baseQueryPostsResponse } as QueryPostsResponse;
		message.posts = [];
		if (object.posts !== undefined && object.posts !== null) {
			for (const e of object.posts) {
				message.posts.push(Post.fromPartial(e));
			}
		}
		return message;
	},

	toJSON(message: QueryPostsResponse): unknown {
		const obj: any = {};
		if (message.posts) {
			obj.posts = message.posts.map((e) =>
				e ? Post.toJSON(e) : undefined
			);
		} else {
			obj.posts = [];
		}
		return obj;
	},
};

const baseQueryPostResponse: object = {};

export const QueryPostResponse = {
	encode(
		message: QueryPostResponse,
		writer: Writer = Writer.create()
	): Writer {
		if (message.post !== undefined) {
			Post.encode(message.post, writer.uint32(10).fork()).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): QueryPostResponse {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseQueryPostResponse
		) as QueryPostResponse;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.post = Post.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): QueryPostResponse {
		const message = globalThis.Object.create(
			baseQueryPostResponse
		) as QueryPostResponse;
		if (object.post !== undefined && object.post !== null) {
			message.post = Post.fromJSON(object.post);
		} else {
			message.post = undefined;
		}
		return message;
	},

	fromPartial(object: DeepPartial<QueryPostResponse>): QueryPostResponse {
		const message = { ...baseQueryPostResponse } as QueryPostResponse;
		if (object.post !== undefined && object.post !== null) {
			message.post = Post.fromPartial(object.post);
		} else {
			message.post = undefined;
		}
		return message;
	},

	toJSON(message: QueryPostResponse): unknown {
		const obj: any = {};
		message.post !== undefined &&
			(obj.post = message.post ? Post.toJSON(message.post) : undefined);
		return obj;
	},
};

const baseQueryUpvotesRequest: object = { vendorId: 0, postId: '' };

export const QueryUpvotesRequest = {
	encode(
		message: QueryUpvotesRequest,
		writer: Writer = Writer.create()
	): Writer {
		if (message.vendorId !== 0) {
			writer.uint32(8).uint32(message.vendorId);
		}
		if (message.postId !== '') {
			writer.uint32(18).string(message.postId);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): QueryUpvotesRequest {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseQueryUpvotesRequest
		) as QueryUpvotesRequest;
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

	fromJSON(object: any): QueryUpvotesRequest {
		const message = globalThis.Object.create(
			baseQueryUpvotesRequest
		) as QueryUpvotesRequest;
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
		return message;
	},

	fromPartial(object: DeepPartial<QueryUpvotesRequest>): QueryUpvotesRequest {
		const message = { ...baseQueryUpvotesRequest } as QueryUpvotesRequest;
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
		return message;
	},

	toJSON(message: QueryUpvotesRequest): unknown {
		const obj: any = {};
		message.vendorId !== undefined && (obj.vendorId = message.vendorId);
		message.postId !== undefined && (obj.postId = message.postId);
		return obj;
	},
};

const baseQueryUpvotesResponse: object = {};

export const QueryUpvotesResponse = {
	encode(
		message: QueryUpvotesResponse,
		writer: Writer = Writer.create()
	): Writer {
		for (const v of message.upvotes) {
			Upvote.encode(v!, writer.uint32(10).fork()).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): QueryUpvotesResponse {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseQueryUpvotesResponse
		) as QueryUpvotesResponse;
		message.upvotes = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.upvotes.push(
						Upvote.decode(reader, reader.uint32())
					);
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): QueryUpvotesResponse {
		const message = globalThis.Object.create(
			baseQueryUpvotesResponse
		) as QueryUpvotesResponse;
		message.upvotes = [];
		if (object.upvotes !== undefined && object.upvotes !== null) {
			for (const e of object.upvotes) {
				message.upvotes.push(Upvote.fromJSON(e));
			}
		}
		return message;
	},

	fromPartial(
		object: DeepPartial<QueryUpvotesResponse>
	): QueryUpvotesResponse {
		const message = { ...baseQueryUpvotesResponse } as QueryUpvotesResponse;
		message.upvotes = [];
		if (object.upvotes !== undefined && object.upvotes !== null) {
			for (const e of object.upvotes) {
				message.upvotes.push(Upvote.fromPartial(e));
			}
		}
		return message;
	},

	toJSON(message: QueryUpvotesResponse): unknown {
		const obj: any = {};
		if (message.upvotes) {
			obj.upvotes = message.upvotes.map((e) =>
				e ? Upvote.toJSON(e) : undefined
			);
		} else {
			obj.upvotes = [];
		}
		return obj;
	},
};

/** Query defines the gRPC querier service. */
export interface Query {
	Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
	Posts(request: QueryPostsRequest): Promise<QueryPostsResponse>;
	Post(request: QueryPostRequest): Promise<QueryPostResponse>;
	Upvotes(request: QueryUpvotesRequest): Promise<QueryUpvotesResponse>;
}

export class QueryClientImpl implements Query {
	private readonly rpc: Rpc;
	constructor(rpc: Rpc) {
		this.rpc = rpc;
	}
	Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
		const data = QueryParamsRequest.encode(request).finish();
		const promise = this.rpc.request(
			'stargaze.curating.v1beta1.Query',
			'Params',
			data
		);
		return promise.then((data) =>
			QueryParamsResponse.decode(new Reader(data))
		);
	}

	Posts(request: QueryPostsRequest): Promise<QueryPostsResponse> {
		const data = QueryPostsRequest.encode(request).finish();
		const promise = this.rpc.request(
			'stargaze.curating.v1beta1.Query',
			'Posts',
			data
		);
		return promise.then((data) =>
			QueryPostsResponse.decode(new Reader(data))
		);
	}

	Post(request: QueryPostRequest): Promise<QueryPostResponse> {
		const data = QueryPostRequest.encode(request).finish();
		const promise = this.rpc.request(
			'stargaze.curating.v1beta1.Query',
			'Post',
			data
		);
		return promise.then((data) =>
			QueryPostResponse.decode(new Reader(data))
		);
	}

	Upvotes(request: QueryUpvotesRequest): Promise<QueryUpvotesResponse> {
		const data = QueryUpvotesRequest.encode(request).finish();
		const promise = this.rpc.request(
			'stargaze.curating.v1beta1.Query',
			'Upvotes',
			data
		);
		return promise.then((data) =>
			QueryUpvotesResponse.decode(new Reader(data))
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
