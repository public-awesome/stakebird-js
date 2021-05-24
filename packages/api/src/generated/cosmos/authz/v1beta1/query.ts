/* eslint-disable */
import { AuthorizationGrant } from '../../../cosmos/authz/v1beta1/authz';
import {
	PageRequest,
	PageResponse,
} from '../../../cosmos/base/query/v1beta1/pagination';
import { Reader, Writer } from 'protobufjs/minimal';
import * as Long from 'long';

export const protobufPackage = 'cosmos.authz.v1beta1';

/** QueryAuthorizationRequest is the request type for the Query/Authorization RPC method. */
export interface QueryAuthorizationRequest {
	granter: string;
	grantee: string;
	methodName: string;
}

/** QueryAuthorizationResponse is the response type for the Query/Authorization RPC method. */
export interface QueryAuthorizationResponse {
	/** authorization is a authorization granted for grantee by granter. */
	authorization?: AuthorizationGrant;
}

/** QueryAuthorizationsRequest is the request type for the Query/Authorizations RPC method. */
export interface QueryAuthorizationsRequest {
	granter: string;
	grantee: string;
	/** pagination defines an pagination for the request. */
	pagination?: PageRequest;
}

/** QueryAuthorizationsResponse is the response type for the Query/Authorizations RPC method. */
export interface QueryAuthorizationsResponse {
	/** authorizations is a list of grants granted for grantee by granter. */
	authorizations: AuthorizationGrant[];
	/** pagination defines an pagination for the response. */
	pagination?: PageResponse;
}

const baseQueryAuthorizationRequest: object = {
	granter: '',
	grantee: '',
	methodName: '',
};

export const QueryAuthorizationRequest = {
	encode(
		message: QueryAuthorizationRequest,
		writer: Writer = Writer.create()
	): Writer {
		if (message.granter !== '') {
			writer.uint32(10).string(message.granter);
		}
		if (message.grantee !== '') {
			writer.uint32(18).string(message.grantee);
		}
		if (message.methodName !== '') {
			writer.uint32(26).string(message.methodName);
		}
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): QueryAuthorizationRequest {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseQueryAuthorizationRequest
		) as QueryAuthorizationRequest;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.granter = reader.string();
					break;
				case 2:
					message.grantee = reader.string();
					break;
				case 3:
					message.methodName = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): QueryAuthorizationRequest {
		const message = globalThis.Object.create(
			baseQueryAuthorizationRequest
		) as QueryAuthorizationRequest;
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
		if (object.methodName !== undefined && object.methodName !== null) {
			message.methodName = String(object.methodName);
		} else {
			message.methodName = '';
		}
		return message;
	},

	fromPartial(
		object: DeepPartial<QueryAuthorizationRequest>
	): QueryAuthorizationRequest {
		const message = {
			...baseQueryAuthorizationRequest,
		} as QueryAuthorizationRequest;
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
		if (object.methodName !== undefined && object.methodName !== null) {
			message.methodName = object.methodName;
		} else {
			message.methodName = '';
		}
		return message;
	},

	toJSON(message: QueryAuthorizationRequest): unknown {
		const obj: any = {};
		message.granter !== undefined && (obj.granter = message.granter);
		message.grantee !== undefined && (obj.grantee = message.grantee);
		message.methodName !== undefined &&
			(obj.methodName = message.methodName);
		return obj;
	},
};

const baseQueryAuthorizationResponse: object = {};

export const QueryAuthorizationResponse = {
	encode(
		message: QueryAuthorizationResponse,
		writer: Writer = Writer.create()
	): Writer {
		if (message.authorization !== undefined) {
			AuthorizationGrant.encode(
				message.authorization,
				writer.uint32(10).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): QueryAuthorizationResponse {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseQueryAuthorizationResponse
		) as QueryAuthorizationResponse;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.authorization = AuthorizationGrant.decode(
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

	fromJSON(object: any): QueryAuthorizationResponse {
		const message = globalThis.Object.create(
			baseQueryAuthorizationResponse
		) as QueryAuthorizationResponse;
		if (
			object.authorization !== undefined &&
			object.authorization !== null
		) {
			message.authorization = AuthorizationGrant.fromJSON(
				object.authorization
			);
		} else {
			message.authorization = undefined;
		}
		return message;
	},

	fromPartial(
		object: DeepPartial<QueryAuthorizationResponse>
	): QueryAuthorizationResponse {
		const message = {
			...baseQueryAuthorizationResponse,
		} as QueryAuthorizationResponse;
		if (
			object.authorization !== undefined &&
			object.authorization !== null
		) {
			message.authorization = AuthorizationGrant.fromPartial(
				object.authorization
			);
		} else {
			message.authorization = undefined;
		}
		return message;
	},

	toJSON(message: QueryAuthorizationResponse): unknown {
		const obj: any = {};
		message.authorization !== undefined &&
			(obj.authorization = message.authorization
				? AuthorizationGrant.toJSON(message.authorization)
				: undefined);
		return obj;
	},
};

const baseQueryAuthorizationsRequest: object = { granter: '', grantee: '' };

export const QueryAuthorizationsRequest = {
	encode(
		message: QueryAuthorizationsRequest,
		writer: Writer = Writer.create()
	): Writer {
		if (message.granter !== '') {
			writer.uint32(10).string(message.granter);
		}
		if (message.grantee !== '') {
			writer.uint32(18).string(message.grantee);
		}
		if (message.pagination !== undefined) {
			PageRequest.encode(
				message.pagination,
				writer.uint32(26).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): QueryAuthorizationsRequest {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseQueryAuthorizationsRequest
		) as QueryAuthorizationsRequest;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.granter = reader.string();
					break;
				case 2:
					message.grantee = reader.string();
					break;
				case 3:
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

	fromJSON(object: any): QueryAuthorizationsRequest {
		const message = globalThis.Object.create(
			baseQueryAuthorizationsRequest
		) as QueryAuthorizationsRequest;
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
		if (object.pagination !== undefined && object.pagination !== null) {
			message.pagination = PageRequest.fromJSON(object.pagination);
		} else {
			message.pagination = undefined;
		}
		return message;
	},

	fromPartial(
		object: DeepPartial<QueryAuthorizationsRequest>
	): QueryAuthorizationsRequest {
		const message = {
			...baseQueryAuthorizationsRequest,
		} as QueryAuthorizationsRequest;
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
		if (object.pagination !== undefined && object.pagination !== null) {
			message.pagination = PageRequest.fromPartial(object.pagination);
		} else {
			message.pagination = undefined;
		}
		return message;
	},

	toJSON(message: QueryAuthorizationsRequest): unknown {
		const obj: any = {};
		message.granter !== undefined && (obj.granter = message.granter);
		message.grantee !== undefined && (obj.grantee = message.grantee);
		message.pagination !== undefined &&
			(obj.pagination = message.pagination
				? PageRequest.toJSON(message.pagination)
				: undefined);
		return obj;
	},
};

const baseQueryAuthorizationsResponse: object = {};

export const QueryAuthorizationsResponse = {
	encode(
		message: QueryAuthorizationsResponse,
		writer: Writer = Writer.create()
	): Writer {
		for (const v of message.authorizations) {
			AuthorizationGrant.encode(v!, writer.uint32(10).fork()).ldelim();
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
	): QueryAuthorizationsResponse {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseQueryAuthorizationsResponse
		) as QueryAuthorizationsResponse;
		message.authorizations = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.authorizations.push(
						AuthorizationGrant.decode(reader, reader.uint32())
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

	fromJSON(object: any): QueryAuthorizationsResponse {
		const message = globalThis.Object.create(
			baseQueryAuthorizationsResponse
		) as QueryAuthorizationsResponse;
		message.authorizations = [];
		if (
			object.authorizations !== undefined &&
			object.authorizations !== null
		) {
			for (const e of object.authorizations) {
				message.authorizations.push(AuthorizationGrant.fromJSON(e));
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
		object: DeepPartial<QueryAuthorizationsResponse>
	): QueryAuthorizationsResponse {
		const message = {
			...baseQueryAuthorizationsResponse,
		} as QueryAuthorizationsResponse;
		message.authorizations = [];
		if (
			object.authorizations !== undefined &&
			object.authorizations !== null
		) {
			for (const e of object.authorizations) {
				message.authorizations.push(AuthorizationGrant.fromPartial(e));
			}
		}
		if (object.pagination !== undefined && object.pagination !== null) {
			message.pagination = PageResponse.fromPartial(object.pagination);
		} else {
			message.pagination = undefined;
		}
		return message;
	},

	toJSON(message: QueryAuthorizationsResponse): unknown {
		const obj: any = {};
		if (message.authorizations) {
			obj.authorizations = message.authorizations.map((e) =>
				e ? AuthorizationGrant.toJSON(e) : undefined
			);
		} else {
			obj.authorizations = [];
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
	/**
	 * Returns any `Authorization` (or `nil`), with the expiration time, granted to the grantee by the granter for the
	 * provided msg type.
	 */
	Authorization(
		request: QueryAuthorizationRequest
	): Promise<QueryAuthorizationResponse>;
	/** Returns list of `Authorization`, granted to the grantee by the granter. */
	Authorizations(
		request: QueryAuthorizationsRequest
	): Promise<QueryAuthorizationsResponse>;
}

export class QueryClientImpl implements Query {
	private readonly rpc: Rpc;
	constructor(rpc: Rpc) {
		this.rpc = rpc;
	}
	Authorization(
		request: QueryAuthorizationRequest
	): Promise<QueryAuthorizationResponse> {
		const data = QueryAuthorizationRequest.encode(request).finish();
		const promise = this.rpc.request(
			'cosmos.authz.v1beta1.Query',
			'Authorization',
			data
		);
		return promise.then((data) =>
			QueryAuthorizationResponse.decode(new Reader(data))
		);
	}

	Authorizations(
		request: QueryAuthorizationsRequest
	): Promise<QueryAuthorizationsResponse> {
		const data = QueryAuthorizationsRequest.encode(request).finish();
		const promise = this.rpc.request(
			'cosmos.authz.v1beta1.Query',
			'Authorizations',
			data
		);
		return promise.then((data) =>
			QueryAuthorizationsResponse.decode(new Reader(data))
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
