/* eslint-disable */
import { FaucetKey } from '../../../stargaze/faucet/v1beta1/faucet';
import { Reader, Writer } from 'protobufjs/minimal';
import * as Long from 'long';

export const protobufPackage = 'stargaze.faucet.v1beta1';

export interface QueryFaucetKeyRequest {}

export interface QueryFaucetKeyResponse {
	faucetKey?: FaucetKey;
}

const baseQueryFaucetKeyRequest: object = {};

export const QueryFaucetKeyRequest = {
	encode(_: QueryFaucetKeyRequest, writer: Writer = Writer.create()): Writer {
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): QueryFaucetKeyRequest {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseQueryFaucetKeyRequest
		) as QueryFaucetKeyRequest;
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

	fromJSON(_: any): QueryFaucetKeyRequest {
		const message = globalThis.Object.create(
			baseQueryFaucetKeyRequest
		) as QueryFaucetKeyRequest;
		return message;
	},

	fromPartial(_: DeepPartial<QueryFaucetKeyRequest>): QueryFaucetKeyRequest {
		const message = {
			...baseQueryFaucetKeyRequest,
		} as QueryFaucetKeyRequest;
		return message;
	},

	toJSON(_: QueryFaucetKeyRequest): unknown {
		const obj: any = {};
		return obj;
	},
};

const baseQueryFaucetKeyResponse: object = {};

export const QueryFaucetKeyResponse = {
	encode(
		message: QueryFaucetKeyResponse,
		writer: Writer = Writer.create()
	): Writer {
		if (message.faucetKey !== undefined) {
			FaucetKey.encode(
				message.faucetKey,
				writer.uint32(10).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): QueryFaucetKeyResponse {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseQueryFaucetKeyResponse
		) as QueryFaucetKeyResponse;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.faucetKey = FaucetKey.decode(
						reader,
						reader.uint32()
					);
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): QueryFaucetKeyResponse {
		const message = globalThis.Object.create(
			baseQueryFaucetKeyResponse
		) as QueryFaucetKeyResponse;
		if (object.faucetKey !== undefined && object.faucetKey !== null) {
			message.faucetKey = FaucetKey.fromJSON(object.faucetKey);
		} else {
			message.faucetKey = undefined;
		}
		return message;
	},

	fromPartial(
		object: DeepPartial<QueryFaucetKeyResponse>
	): QueryFaucetKeyResponse {
		const message = {
			...baseQueryFaucetKeyResponse,
		} as QueryFaucetKeyResponse;
		if (object.faucetKey !== undefined && object.faucetKey !== null) {
			message.faucetKey = FaucetKey.fromPartial(object.faucetKey);
		} else {
			message.faucetKey = undefined;
		}
		return message;
	},

	toJSON(message: QueryFaucetKeyResponse): unknown {
		const obj: any = {};
		message.faucetKey !== undefined &&
			(obj.faucetKey = message.faucetKey
				? FaucetKey.toJSON(message.faucetKey)
				: undefined);
		return obj;
	},
};

/** Query defines the gRPC querier service. */
export interface Query {
	FaucetKey(request: QueryFaucetKeyRequest): Promise<QueryFaucetKeyResponse>;
}

export class QueryClientImpl implements Query {
	private readonly rpc: Rpc;
	constructor(rpc: Rpc) {
		this.rpc = rpc;
	}
	FaucetKey(request: QueryFaucetKeyRequest): Promise<QueryFaucetKeyResponse> {
		const data = QueryFaucetKeyRequest.encode(request).finish();
		const promise = this.rpc.request(
			'stargaze.faucet.v1beta1.Query',
			'FaucetKey',
			data
		);
		return promise.then((data) =>
			QueryFaucetKeyResponse.decode(new Reader(data))
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
