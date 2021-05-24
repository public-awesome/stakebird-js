/* eslint-disable */
import { FeeAllowanceGrant } from '../../../cosmos/feegrant/v1beta1/feegrant';
import {
	PageRequest,
	PageResponse,
} from '../../../cosmos/base/query/v1beta1/pagination';
import { Reader, Writer } from 'protobufjs/minimal';
import * as Long from 'long';

export const protobufPackage = 'cosmos.feegrant.v1beta1';

/** QueryFeeAllowanceRequest is the request type for the Query/FeeAllowance RPC method. */
export interface QueryFeeAllowanceRequest {
	granter: string;
	grantee: string;
}

/** QueryFeeAllowanceResponse is the response type for the Query/FeeAllowance RPC method. */
export interface QueryFeeAllowanceResponse {
	/** fee_allowance is a fee_allowance granted for grantee by granter. */
	feeAllowance?: FeeAllowanceGrant;
}

/** QueryFeeAllowancesRequest is the request type for the Query/FeeAllowances RPC method. */
export interface QueryFeeAllowancesRequest {
	grantee: string;
	/** pagination defines an pagination for the request. */
	pagination?: PageRequest;
}

/** QueryFeeAllowancesResponse is the response type for the Query/FeeAllowances RPC method. */
export interface QueryFeeAllowancesResponse {
	/** fee_allowances are fee_allowance's granted for grantee by granter. */
	feeAllowances: FeeAllowanceGrant[];
	/** pagination defines an pagination for the response. */
	pagination?: PageResponse;
}

const baseQueryFeeAllowanceRequest: object = { granter: '', grantee: '' };

export const QueryFeeAllowanceRequest = {
	encode(
		message: QueryFeeAllowanceRequest,
		writer: Writer = Writer.create()
	): Writer {
		if (message.granter !== '') {
			writer.uint32(10).string(message.granter);
		}
		if (message.grantee !== '') {
			writer.uint32(18).string(message.grantee);
		}
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): QueryFeeAllowanceRequest {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseQueryFeeAllowanceRequest
		) as QueryFeeAllowanceRequest;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.granter = reader.string();
					break;
				case 2:
					message.grantee = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): QueryFeeAllowanceRequest {
		const message = globalThis.Object.create(
			baseQueryFeeAllowanceRequest
		) as QueryFeeAllowanceRequest;
		if (object.granter !== undefined && object.granter !== null) {
			message.granter = String(object.granter);
		} else {
			message.granter = '';
		}
		if (object.grantee !== undefined && object.grantee !== null) {
			message.grantee = String(object.grantee);
		} else {
			message.grantee = '';
		}
		return message;
	},

	fromPartial(
		object: DeepPartial<QueryFeeAllowanceRequest>
	): QueryFeeAllowanceRequest {
		const message = {
			...baseQueryFeeAllowanceRequest,
		} as QueryFeeAllowanceRequest;
		if (object.granter !== undefined && object.granter !== null) {
			message.granter = object.granter;
		} else {
			message.granter = '';
		}
		if (object.grantee !== undefined && object.grantee !== null) {
			message.grantee = object.grantee;
		} else {
			message.grantee = '';
		}
		return message;
	},

	toJSON(message: QueryFeeAllowanceRequest): unknown {
		const obj: any = {};
		message.granter !== undefined && (obj.granter = message.granter);
		message.grantee !== undefined && (obj.grantee = message.grantee);
		return obj;
	},
};

const baseQueryFeeAllowanceResponse: object = {};

export const QueryFeeAllowanceResponse = {
	encode(
		message: QueryFeeAllowanceResponse,
		writer: Writer = Writer.create()
	): Writer {
		if (message.feeAllowance !== undefined) {
			FeeAllowanceGrant.encode(
				message.feeAllowance,
				writer.uint32(10).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): QueryFeeAllowanceResponse {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseQueryFeeAllowanceResponse
		) as QueryFeeAllowanceResponse;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.feeAllowance = FeeAllowanceGrant.decode(
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

	fromJSON(object: any): QueryFeeAllowanceResponse {
		const message = globalThis.Object.create(
			baseQueryFeeAllowanceResponse
		) as QueryFeeAllowanceResponse;
		if (object.feeAllowance !== undefined && object.feeAllowance !== null) {
			message.feeAllowance = FeeAllowanceGrant.fromJSON(
				object.feeAllowance
			);
		} else {
			message.feeAllowance = undefined;
		}
		return message;
	},

	fromPartial(
		object: DeepPartial<QueryFeeAllowanceResponse>
	): QueryFeeAllowanceResponse {
		const message = {
			...baseQueryFeeAllowanceResponse,
		} as QueryFeeAllowanceResponse;
		if (object.feeAllowance !== undefined && object.feeAllowance !== null) {
			message.feeAllowance = FeeAllowanceGrant.fromPartial(
				object.feeAllowance
			);
		} else {
			message.feeAllowance = undefined;
		}
		return message;
	},

	toJSON(message: QueryFeeAllowanceResponse): unknown {
		const obj: any = {};
		message.feeAllowance !== undefined &&
			(obj.feeAllowance = message.feeAllowance
				? FeeAllowanceGrant.toJSON(message.feeAllowance)
				: undefined);
		return obj;
	},
};

const baseQueryFeeAllowancesRequest: object = { grantee: '' };

export const QueryFeeAllowancesRequest = {
	encode(
		message: QueryFeeAllowancesRequest,
		writer: Writer = Writer.create()
	): Writer {
		if (message.grantee !== '') {
			writer.uint32(10).string(message.grantee);
		}
		if (message.pagination !== undefined) {
			PageRequest.encode(
				message.pagination,
				writer.uint32(18).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): QueryFeeAllowancesRequest {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseQueryFeeAllowancesRequest
		) as QueryFeeAllowancesRequest;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.grantee = reader.string();
					break;
				case 2:
					message.pagination = PageRequest.decode(
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

	fromJSON(object: any): QueryFeeAllowancesRequest {
		const message = globalThis.Object.create(
			baseQueryFeeAllowancesRequest
		) as QueryFeeAllowancesRequest;
		if (object.grantee !== undefined && object.grantee !== null) {
			message.grantee = String(object.grantee);
		} else {
			message.grantee = '';
		}
		if (object.pagination !== undefined && object.pagination !== null) {
			message.pagination = PageRequest.fromJSON(object.pagination);
		} else {
			message.pagination = undefined;
		}
		return message;
	},

	fromPartial(
		object: DeepPartial<QueryFeeAllowancesRequest>
	): QueryFeeAllowancesRequest {
		const message = {
			...baseQueryFeeAllowancesRequest,
		} as QueryFeeAllowancesRequest;
		if (object.grantee !== undefined && object.grantee !== null) {
			message.grantee = object.grantee;
		} else {
			message.grantee = '';
		}
		if (object.pagination !== undefined && object.pagination !== null) {
			message.pagination = PageRequest.fromPartial(object.pagination);
		} else {
			message.pagination = undefined;
		}
		return message;
	},

	toJSON(message: QueryFeeAllowancesRequest): unknown {
		const obj: any = {};
		message.grantee !== undefined && (obj.grantee = message.grantee);
		message.pagination !== undefined &&
			(obj.pagination = message.pagination
				? PageRequest.toJSON(message.pagination)
				: undefined);
		return obj;
	},
};

const baseQueryFeeAllowancesResponse: object = {};

export const QueryFeeAllowancesResponse = {
	encode(
		message: QueryFeeAllowancesResponse,
		writer: Writer = Writer.create()
	): Writer {
		for (const v of message.feeAllowances) {
			FeeAllowanceGrant.encode(v!, writer.uint32(10).fork()).ldelim();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(
				message.pagination,
				writer.uint32(18).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): QueryFeeAllowancesResponse {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseQueryFeeAllowancesResponse
		) as QueryFeeAllowancesResponse;
		message.feeAllowances = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.feeAllowances.push(
						FeeAllowanceGrant.decode(reader, reader.uint32())
					);
					break;
				case 2:
					message.pagination = PageResponse.decode(
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

	fromJSON(object: any): QueryFeeAllowancesResponse {
		const message = globalThis.Object.create(
			baseQueryFeeAllowancesResponse
		) as QueryFeeAllowancesResponse;
		message.feeAllowances = [];
		if (
			object.feeAllowances !== undefined &&
			object.feeAllowances !== null
		) {
			for (const e of object.feeAllowances) {
				message.feeAllowances.push(FeeAllowanceGrant.fromJSON(e));
			}
		}
		if (object.pagination !== undefined && object.pagination !== null) {
			message.pagination = PageResponse.fromJSON(object.pagination);
		} else {
			message.pagination = undefined;
		}
		return message;
	},

	fromPartial(
		object: DeepPartial<QueryFeeAllowancesResponse>
	): QueryFeeAllowancesResponse {
		const message = {
			...baseQueryFeeAllowancesResponse,
		} as QueryFeeAllowancesResponse;
		message.feeAllowances = [];
		if (
			object.feeAllowances !== undefined &&
			object.feeAllowances !== null
		) {
			for (const e of object.feeAllowances) {
				message.feeAllowances.push(FeeAllowanceGrant.fromPartial(e));
			}
		}
		if (object.pagination !== undefined && object.pagination !== null) {
			message.pagination = PageResponse.fromPartial(object.pagination);
		} else {
			message.pagination = undefined;
		}
		return message;
	},

	toJSON(message: QueryFeeAllowancesResponse): unknown {
		const obj: any = {};
		if (message.feeAllowances) {
			obj.feeAllowances = message.feeAllowances.map((e) =>
				e ? FeeAllowanceGrant.toJSON(e) : undefined
			);
		} else {
			obj.feeAllowances = [];
		}
		message.pagination !== undefined &&
			(obj.pagination = message.pagination
				? PageResponse.toJSON(message.pagination)
				: undefined);
		return obj;
	},
};

/** Query defines the gRPC querier service. */
export interface Query {
	/** FeeAllowance returns fee granted to the grantee by the granter. */
	FeeAllowance(
		request: QueryFeeAllowanceRequest
	): Promise<QueryFeeAllowanceResponse>;
	/** FeeAllowances returns all the grants for address. */
	FeeAllowances(
		request: QueryFeeAllowancesRequest
	): Promise<QueryFeeAllowancesResponse>;
}

export class QueryClientImpl implements Query {
	private readonly rpc: Rpc;
	constructor(rpc: Rpc) {
		this.rpc = rpc;
	}
	FeeAllowance(
		request: QueryFeeAllowanceRequest
	): Promise<QueryFeeAllowanceResponse> {
		const data = QueryFeeAllowanceRequest.encode(request).finish();
		const promise = this.rpc.request(
			'cosmos.feegrant.v1beta1.Query',
			'FeeAllowance',
			data
		);
		return promise.then((data) =>
			QueryFeeAllowanceResponse.decode(new Reader(data))
		);
	}

	FeeAllowances(
		request: QueryFeeAllowancesRequest
	): Promise<QueryFeeAllowancesResponse> {
		const data = QueryFeeAllowancesRequest.encode(request).finish();
		const promise = this.rpc.request(
			'cosmos.feegrant.v1beta1.Query',
			'FeeAllowances',
			data
		);
		return promise.then((data) =>
			QueryFeeAllowancesResponse.decode(new Reader(data))
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
