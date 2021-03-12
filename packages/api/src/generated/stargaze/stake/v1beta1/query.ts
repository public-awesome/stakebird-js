/* eslint-disable */
import { Stake } from '../../../stargaze/stake/v1beta1/stake';
import { Reader, Writer } from 'protobufjs/minimal';
import * as Long from 'long';

export const protobufPackage = 'stargaze.stake.v1beta1';

export interface QueryStakesRequest {
	vendorId: number;
	postId: string;
}

export interface QueryStakeRequest {
	vendorId: number;
	postId: string;
	delegator: string;
}

export interface QueryStakesResponse {
	stakes: Stake[];
}

export interface QueryStakeResponse {
	stake?: Stake;
}

const baseQueryStakesRequest: object = { vendorId: 0, postId: '' };

export const QueryStakesRequest = {
	encode(
		message: QueryStakesRequest,
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

	decode(input: Reader | Uint8Array, length?: number): QueryStakesRequest {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseQueryStakesRequest
		) as QueryStakesRequest;
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

	fromJSON(object: any): QueryStakesRequest {
		const message = globalThis.Object.create(
			baseQueryStakesRequest
		) as QueryStakesRequest;
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

	fromPartial(object: DeepPartial<QueryStakesRequest>): QueryStakesRequest {
		const message = { ...baseQueryStakesRequest } as QueryStakesRequest;
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

	toJSON(message: QueryStakesRequest): unknown {
		const obj: any = {};
		message.vendorId !== undefined && (obj.vendorId = message.vendorId);
		message.postId !== undefined && (obj.postId = message.postId);
		return obj;
	},
};

const baseQueryStakeRequest: object = {
	vendorId: 0,
	postId: '',
	delegator: '',
};

export const QueryStakeRequest = {
	encode(
		message: QueryStakeRequest,
		writer: Writer = Writer.create()
	): Writer {
		if (message.vendorId !== 0) {
			writer.uint32(8).uint32(message.vendorId);
		}
		if (message.postId !== '') {
			writer.uint32(18).string(message.postId);
		}
		if (message.delegator !== '') {
			writer.uint32(26).string(message.delegator);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): QueryStakeRequest {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseQueryStakeRequest
		) as QueryStakeRequest;
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
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): QueryStakeRequest {
		const message = globalThis.Object.create(
			baseQueryStakeRequest
		) as QueryStakeRequest;
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
		if (object.delegator !== undefined && object.delegator !== null) {
			message.delegator = String(object.delegator);
		} else {
			message.delegator = '';
		}
		return message;
	},

	fromPartial(object: DeepPartial<QueryStakeRequest>): QueryStakeRequest {
		const message = { ...baseQueryStakeRequest } as QueryStakeRequest;
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
		if (object.delegator !== undefined && object.delegator !== null) {
			message.delegator = object.delegator;
		} else {
			message.delegator = '';
		}
		return message;
	},

	toJSON(message: QueryStakeRequest): unknown {
		const obj: any = {};
		message.vendorId !== undefined && (obj.vendorId = message.vendorId);
		message.postId !== undefined && (obj.postId = message.postId);
		message.delegator !== undefined && (obj.delegator = message.delegator);
		return obj;
	},
};

const baseQueryStakesResponse: object = {};

export const QueryStakesResponse = {
	encode(
		message: QueryStakesResponse,
		writer: Writer = Writer.create()
	): Writer {
		for (const v of message.stakes) {
			Stake.encode(v!, writer.uint32(10).fork()).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): QueryStakesResponse {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseQueryStakesResponse
		) as QueryStakesResponse;
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

	fromJSON(object: any): QueryStakesResponse {
		const message = globalThis.Object.create(
			baseQueryStakesResponse
		) as QueryStakesResponse;
		message.stakes = [];
		if (object.stakes !== undefined && object.stakes !== null) {
			for (const e of object.stakes) {
				message.stakes.push(Stake.fromJSON(e));
			}
		}
		return message;
	},

	fromPartial(object: DeepPartial<QueryStakesResponse>): QueryStakesResponse {
		const message = { ...baseQueryStakesResponse } as QueryStakesResponse;
		message.stakes = [];
		if (object.stakes !== undefined && object.stakes !== null) {
			for (const e of object.stakes) {
				message.stakes.push(Stake.fromPartial(e));
			}
		}
		return message;
	},

	toJSON(message: QueryStakesResponse): unknown {
		const obj: any = {};
		if (message.stakes) {
			obj.stakes = message.stakes.map((e) =>
				e ? Stake.toJSON(e) : undefined
			);
		} else {
			obj.stakes = [];
		}
		return obj;
	},
};

const baseQueryStakeResponse: object = {};

export const QueryStakeResponse = {
	encode(
		message: QueryStakeResponse,
		writer: Writer = Writer.create()
	): Writer {
		if (message.stake !== undefined) {
			Stake.encode(message.stake, writer.uint32(10).fork()).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): QueryStakeResponse {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseQueryStakeResponse
		) as QueryStakeResponse;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.stake = Stake.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): QueryStakeResponse {
		const message = globalThis.Object.create(
			baseQueryStakeResponse
		) as QueryStakeResponse;
		if (object.stake !== undefined && object.stake !== null) {
			message.stake = Stake.fromJSON(object.stake);
		} else {
			message.stake = undefined;
		}
		return message;
	},

	fromPartial(object: DeepPartial<QueryStakeResponse>): QueryStakeResponse {
		const message = { ...baseQueryStakeResponse } as QueryStakeResponse;
		if (object.stake !== undefined && object.stake !== null) {
			message.stake = Stake.fromPartial(object.stake);
		} else {
			message.stake = undefined;
		}
		return message;
	},

	toJSON(message: QueryStakeResponse): unknown {
		const obj: any = {};
		message.stake !== undefined &&
			(obj.stake = message.stake
				? Stake.toJSON(message.stake)
				: undefined);
		return obj;
	},
};

/** Query defines the gRPC querier service. */
export interface Query {
	Stakes(request: QueryStakesRequest): Promise<QueryStakesResponse>;
	Stake(request: QueryStakeRequest): Promise<QueryStakeResponse>;
}

export class QueryClientImpl implements Query {
	private readonly rpc: Rpc;
	constructor(rpc: Rpc) {
		this.rpc = rpc;
	}
	Stakes(request: QueryStakesRequest): Promise<QueryStakesResponse> {
		const data = QueryStakesRequest.encode(request).finish();
		const promise = this.rpc.request(
			'stargaze.stake.v1beta1.Query',
			'Stakes',
			data
		);
		return promise.then((data) =>
			QueryStakesResponse.decode(new Reader(data))
		);
	}

	Stake(request: QueryStakeRequest): Promise<QueryStakeResponse> {
		const data = QueryStakeRequest.encode(request).finish();
		const promise = this.rpc.request(
			'stargaze.stake.v1beta1.Query',
			'Stake',
			data
		);
		return promise.then((data) =>
			QueryStakeResponse.decode(new Reader(data))
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
