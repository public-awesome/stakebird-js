/* eslint-disable */
import * as Long from 'long';
import { LiquidityPool, LiquidityPoolMetadata, LiquidityPoolBatch, Params, BatchPoolSwapMsg, BatchPoolDepositMsg, BatchPoolWithdrawMsg } from '../liquidity/liquidity';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Reader, Writer } from 'protobufjs/minimal';


/**
 *  the request type for the QueryLiquidityPool RPC method. requestable specified pool_id.
 */
export interface QueryLiquidityPoolRequest {
  poolId: Long;
}

/**
 *  the response type for the QueryLiquidityPoolResponse RPC method. It returns the liquidity pool with batch and metadata containing total pool coin supply and reserved coins corresponding to the requested pool_id.
 */
export interface QueryLiquidityPoolResponse {
  liquidityPool?: LiquidityPool;
  liquidityPoolMetadata?: LiquidityPoolMetadata;
  liquidityPoolBatch?: LiquidityPoolBatch;
}

/**
 *  the request type for the QueryLiquidityPoolBatch RPC method. requestable including specified pool_id.
 */
export interface QueryLiquidityPoolBatchRequest {
  /**
   *  id of the target pool for query
   */
  poolId: Long;
}

/**
 *  the response type for the QueryLiquidityPoolBatchResponse RPC method. It returns the liquidity pool batch corresponding to the requested pool_id.
 */
export interface QueryLiquidityPoolBatchResponse {
  batch?: LiquidityPoolBatch;
}

/**
 *  the request type for the QueryLiquidityPools RPC method. requestable including pagination offset, limit, key.
 */
export interface QueryLiquidityPoolsRequest {
  /**
   *  pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}

/**
 *  the response type for the QueryLiquidityPoolsResponse RPC method. This includes list of all liquidity pools currently existed and paging results containing next_key and total count.
 */
export interface QueryLiquidityPoolsResponse {
  pools: QueryLiquidityPoolResponse[];
  /**
   *  pagination defines the pagination in the response. not working on this version.
   */
  pagination?: PageResponse;
}

/**
 *  the request type for the QueryLiquidityPoolsBatch RPC method, requestable including pagination offset, limit, key.
 */
export interface QueryLiquidityPoolsBatchRequest {
  /**
   *  pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}

/**
 *  the response type for the QueryLiquidityPoolsBatchResponse RPC method. This includes list of all batches that all currently existing pools and paging results containing next_key and total count.
 */
export interface QueryLiquidityPoolsBatchResponse {
  poolsBatch: QueryLiquidityPoolBatchResponse[];
  /**
   *  pagination defines the pagination in the response. not working on this version.
   */
  pagination?: PageResponse;
}

/**
 *  QueryParamsRequest is request type for the QueryParams RPC method.
 */
export interface QueryParamsRequest {
}

/**
 *  the response type for the QueryParamsResponse RPC method. This includes current parameter of the liquidity module.
 */
export interface QueryParamsResponse {
  /**
   *  params holds all the parameters of this module.
   */
  params?: Params;
}

/**
 *  the request type for the QueryPoolBatchSwapMsgs RPC method. requestable including specified pool_id and pagination offset, limit, key.
 */
export interface QueryPoolBatchSwapMsgsRequest {
  /**
   *  id of the target pool for query
   */
  poolId: Long;
  /**
   *  pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}

/**
 *  the request type for the QueryPoolBatchSwap RPC method. requestable including specified pool_id and msg_index
 */
export interface QueryPoolBatchSwapMsgRequest {
  /**
   *  id of the target pool for query
   */
  poolId: Long;
  /**
   *  target msg_index of the pool
   */
  msgIndex: Long;
}

/**
 *  the response type for the QueryPoolBatchSwapMsgs RPC method. This includes list of all currently existing swap messages of the batch and paging results containing next_key and total count.
 */
export interface QueryPoolBatchSwapMsgsResponse {
  swaps: BatchPoolSwapMsg[];
  /**
   *  pagination defines the pagination in the response. not working on this version.
   */
  pagination?: PageResponse;
}

/**
 *  the response type for the QueryPoolBatchSwapMsg RPC method. This includes a batch swap message of the batch
 */
export interface QueryPoolBatchSwapMsgResponse {
  swaps?: BatchPoolSwapMsg;
}

/**
 *  the request type for the QueryPoolBatchDeposit RPC method. requestable including specified pool_id and pagination offset, limit, key.
 */
export interface QueryPoolBatchDepositMsgsRequest {
  /**
   *  id of the target pool for query
   */
  poolId: Long;
  /**
   *  pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}

/**
 *  the request type for the QueryPoolBatchDeposit RPC method. requestable including specified pool_id and msg_index
 */
export interface QueryPoolBatchDepositMsgRequest {
  /**
   *  id of the target pool for query
   */
  poolId: Long;
  /**
   *  target msg_index of the pool
   */
  msgIndex: Long;
}

/**
 *  the response type for the QueryPoolBatchDeposit RPC method. This includes a list of all currently existing deposit messages of the batch and paging results containing next_key and total count.
 */
export interface QueryPoolBatchDepositMsgsResponse {
  deposits: BatchPoolDepositMsg[];
  /**
   *  pagination defines the pagination in the response. not working on this version.
   */
  pagination?: PageResponse;
}

/**
 *  the response type for the QueryPoolBatchDepositMsg RPC method. This includes a batch swap message of the batch
 */
export interface QueryPoolBatchDepositMsgResponse {
  deposits?: BatchPoolDepositMsg;
}

/**
 *  the request type for the QueryPoolBatchWithdraw RPC method. requestable including specified pool_id and pagination offset, limit, key.
 */
export interface QueryPoolBatchWithdrawMsgsRequest {
  /**
   *  id of the target pool for query
   */
  poolId: Long;
  /**
   *  pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}

/**
 *  the request type for the QueryPoolBatchWithdraw RPC method. requestable including specified pool_id and msg_index
 */
export interface QueryPoolBatchWithdrawMsgRequest {
  /**
   *  id of the target pool for query
   */
  poolId: Long;
  /**
   *  target msg_index of the pool
   */
  msgIndex: Long;
}

/**
 *  the response type for the QueryPoolBatchWithdraw RPC method. This includes a list of all currently existing withdraw messages of the batch and paging results containing next_key and total count.
 */
export interface QueryPoolBatchWithdrawMsgsResponse {
  withdraws: BatchPoolWithdrawMsg[];
  /**
   *  pagination defines the pagination in the response. not working on this version.
   */
  pagination?: PageResponse;
}

/**
 *  the response type for the QueryPoolBatchWithdrawMsg RPC method. This includes a batch swap message of the batch
 */
export interface QueryPoolBatchWithdrawMsgResponse {
  withdraws?: BatchPoolWithdrawMsg;
}

const baseQueryLiquidityPoolRequest: object = {
  poolId: Long.UZERO,
};

const baseQueryLiquidityPoolResponse: object = {
};

const baseQueryLiquidityPoolBatchRequest: object = {
  poolId: Long.UZERO,
};

const baseQueryLiquidityPoolBatchResponse: object = {
};

const baseQueryLiquidityPoolsRequest: object = {
};

const baseQueryLiquidityPoolsResponse: object = {
};

const baseQueryLiquidityPoolsBatchRequest: object = {
};

const baseQueryLiquidityPoolsBatchResponse: object = {
};

const baseQueryParamsRequest: object = {
};

const baseQueryParamsResponse: object = {
};

const baseQueryPoolBatchSwapMsgsRequest: object = {
  poolId: Long.UZERO,
};

const baseQueryPoolBatchSwapMsgRequest: object = {
  poolId: Long.UZERO,
  msgIndex: Long.UZERO,
};

const baseQueryPoolBatchSwapMsgsResponse: object = {
};

const baseQueryPoolBatchSwapMsgResponse: object = {
};

const baseQueryPoolBatchDepositMsgsRequest: object = {
  poolId: Long.UZERO,
};

const baseQueryPoolBatchDepositMsgRequest: object = {
  poolId: Long.UZERO,
  msgIndex: Long.UZERO,
};

const baseQueryPoolBatchDepositMsgsResponse: object = {
};

const baseQueryPoolBatchDepositMsgResponse: object = {
};

const baseQueryPoolBatchWithdrawMsgsRequest: object = {
  poolId: Long.UZERO,
};

const baseQueryPoolBatchWithdrawMsgRequest: object = {
  poolId: Long.UZERO,
  msgIndex: Long.UZERO,
};

const baseQueryPoolBatchWithdrawMsgsResponse: object = {
};

const baseQueryPoolBatchWithdrawMsgResponse: object = {
};

/**
 *  Query defines the gRPC querier service for liquidity module.
 */
export interface Query {

  /**
   *  Get all liquidity pools currently existed with each liquidity pool with batch and metadata
   */
  LiquidityPools(request: QueryLiquidityPoolsRequest): Promise<QueryLiquidityPoolsResponse>;

  /**
   *  Get all liquidity pools batch
   */
  LiquidityPoolsBatch(request: QueryLiquidityPoolsBatchRequest): Promise<QueryLiquidityPoolsBatchResponse>;

  /**
   *  Get a liquidity pool with liquidity pool batch by pool_id
   */
  LiquidityPool(request: QueryLiquidityPoolRequest): Promise<QueryLiquidityPoolResponse>;

  /**
   *  Get a liquidity pool batch by pool_id
   */
  LiquidityPoolBatch(request: QueryLiquidityPoolBatchRequest): Promise<QueryLiquidityPoolBatchResponse>;

  /**
   *  Get all pool batch swap messages of the liquidity pool
   */
  PoolBatchSwapMsgs(request: QueryPoolBatchSwapMsgsRequest): Promise<QueryPoolBatchSwapMsgsResponse>;

  /**
   *  Get the pool batch swap message with msg_index of the liquidity pool
   */
  PoolBatchSwapMsg(request: QueryPoolBatchSwapMsgRequest): Promise<QueryPoolBatchSwapMsgResponse>;

  /**
   *  Get all pool batch deposit messages of the liquidity pool
   */
  PoolBatchDepositMsgs(request: QueryPoolBatchDepositMsgsRequest): Promise<QueryPoolBatchDepositMsgsResponse>;

  /**
   *  Get the pool batch deposit message with msg_index of the liquidity pool
   */
  PoolBatchDepositMsg(request: QueryPoolBatchDepositMsgRequest): Promise<QueryPoolBatchDepositMsgResponse>;

  /**
   *  Get all pool batch withdraw messages of the liquidity pool
   */
  PoolBatchWithdrawMsgs(request: QueryPoolBatchWithdrawMsgsRequest): Promise<QueryPoolBatchWithdrawMsgsResponse>;

  /**
   *  Get the pool batch withdraw message with msg_index of the liquidity pool
   */
  PoolBatchWithdrawMsg(request: QueryPoolBatchWithdrawMsgRequest): Promise<QueryPoolBatchWithdrawMsgResponse>;

  /**
   *  Parameters queries the liquidity parameters.
   */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;

}

export class QueryClientImpl implements Query {

  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  LiquidityPools(request: QueryLiquidityPoolsRequest): Promise<QueryLiquidityPoolsResponse> {
    const data = QueryLiquidityPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("tendermint.liquidity.Query", "LiquidityPools", data);
    return promise.then(data => QueryLiquidityPoolsResponse.decode(new Reader(data)));
  }

  LiquidityPoolsBatch(request: QueryLiquidityPoolsBatchRequest): Promise<QueryLiquidityPoolsBatchResponse> {
    const data = QueryLiquidityPoolsBatchRequest.encode(request).finish();
    const promise = this.rpc.request("tendermint.liquidity.Query", "LiquidityPoolsBatch", data);
    return promise.then(data => QueryLiquidityPoolsBatchResponse.decode(new Reader(data)));
  }

  LiquidityPool(request: QueryLiquidityPoolRequest): Promise<QueryLiquidityPoolResponse> {
    const data = QueryLiquidityPoolRequest.encode(request).finish();
    const promise = this.rpc.request("tendermint.liquidity.Query", "LiquidityPool", data);
    return promise.then(data => QueryLiquidityPoolResponse.decode(new Reader(data)));
  }

  LiquidityPoolBatch(request: QueryLiquidityPoolBatchRequest): Promise<QueryLiquidityPoolBatchResponse> {
    const data = QueryLiquidityPoolBatchRequest.encode(request).finish();
    const promise = this.rpc.request("tendermint.liquidity.Query", "LiquidityPoolBatch", data);
    return promise.then(data => QueryLiquidityPoolBatchResponse.decode(new Reader(data)));
  }

  PoolBatchSwapMsgs(request: QueryPoolBatchSwapMsgsRequest): Promise<QueryPoolBatchSwapMsgsResponse> {
    const data = QueryPoolBatchSwapMsgsRequest.encode(request).finish();
    const promise = this.rpc.request("tendermint.liquidity.Query", "PoolBatchSwapMsgs", data);
    return promise.then(data => QueryPoolBatchSwapMsgsResponse.decode(new Reader(data)));
  }

  PoolBatchSwapMsg(request: QueryPoolBatchSwapMsgRequest): Promise<QueryPoolBatchSwapMsgResponse> {
    const data = QueryPoolBatchSwapMsgRequest.encode(request).finish();
    const promise = this.rpc.request("tendermint.liquidity.Query", "PoolBatchSwapMsg", data);
    return promise.then(data => QueryPoolBatchSwapMsgResponse.decode(new Reader(data)));
  }

  PoolBatchDepositMsgs(request: QueryPoolBatchDepositMsgsRequest): Promise<QueryPoolBatchDepositMsgsResponse> {
    const data = QueryPoolBatchDepositMsgsRequest.encode(request).finish();
    const promise = this.rpc.request("tendermint.liquidity.Query", "PoolBatchDepositMsgs", data);
    return promise.then(data => QueryPoolBatchDepositMsgsResponse.decode(new Reader(data)));
  }

  PoolBatchDepositMsg(request: QueryPoolBatchDepositMsgRequest): Promise<QueryPoolBatchDepositMsgResponse> {
    const data = QueryPoolBatchDepositMsgRequest.encode(request).finish();
    const promise = this.rpc.request("tendermint.liquidity.Query", "PoolBatchDepositMsg", data);
    return promise.then(data => QueryPoolBatchDepositMsgResponse.decode(new Reader(data)));
  }

  PoolBatchWithdrawMsgs(request: QueryPoolBatchWithdrawMsgsRequest): Promise<QueryPoolBatchWithdrawMsgsResponse> {
    const data = QueryPoolBatchWithdrawMsgsRequest.encode(request).finish();
    const promise = this.rpc.request("tendermint.liquidity.Query", "PoolBatchWithdrawMsgs", data);
    return promise.then(data => QueryPoolBatchWithdrawMsgsResponse.decode(new Reader(data)));
  }

  PoolBatchWithdrawMsg(request: QueryPoolBatchWithdrawMsgRequest): Promise<QueryPoolBatchWithdrawMsgResponse> {
    const data = QueryPoolBatchWithdrawMsgRequest.encode(request).finish();
    const promise = this.rpc.request("tendermint.liquidity.Query", "PoolBatchWithdrawMsg", data);
    return promise.then(data => QueryPoolBatchWithdrawMsgResponse.decode(new Reader(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("tendermint.liquidity.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new Reader(data)));
  }

}

interface Rpc {

  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;

}

export const protobufPackage = 'tendermint.liquidity'

export const QueryLiquidityPoolRequest = {
  encode(message: QueryLiquidityPoolRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.poolId);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryLiquidityPoolRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryLiquidityPoolRequest } as QueryLiquidityPoolRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLiquidityPoolRequest {
    const message = { ...baseQueryLiquidityPoolRequest } as QueryLiquidityPoolRequest;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = Long.fromString(object.poolId);
    } else {
      message.poolId = Long.UZERO;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryLiquidityPoolRequest>): QueryLiquidityPoolRequest {
    const message = { ...baseQueryLiquidityPoolRequest } as QueryLiquidityPoolRequest;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId as Long;
    } else {
      message.poolId = Long.UZERO;
    }
    return message;
  },
  toJSON(message: QueryLiquidityPoolRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },
};

export const QueryLiquidityPoolResponse = {
  encode(message: QueryLiquidityPoolResponse, writer: Writer = Writer.create()): Writer {
    if (message.liquidityPool !== undefined && message.liquidityPool !== undefined) {
      LiquidityPool.encode(message.liquidityPool, writer.uint32(10).fork()).ldelim();
    }
    if (message.liquidityPoolMetadata !== undefined && message.liquidityPoolMetadata !== undefined) {
      LiquidityPoolMetadata.encode(message.liquidityPoolMetadata, writer.uint32(18).fork()).ldelim();
    }
    if (message.liquidityPoolBatch !== undefined && message.liquidityPoolBatch !== undefined) {
      LiquidityPoolBatch.encode(message.liquidityPoolBatch, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryLiquidityPoolResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryLiquidityPoolResponse } as QueryLiquidityPoolResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidityPool = LiquidityPool.decode(reader, reader.uint32());
          break;
        case 2:
          message.liquidityPoolMetadata = LiquidityPoolMetadata.decode(reader, reader.uint32());
          break;
        case 3:
          message.liquidityPoolBatch = LiquidityPoolBatch.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLiquidityPoolResponse {
    const message = { ...baseQueryLiquidityPoolResponse } as QueryLiquidityPoolResponse;
    if (object.liquidityPool !== undefined && object.liquidityPool !== null) {
      message.liquidityPool = LiquidityPool.fromJSON(object.liquidityPool);
    } else {
      message.liquidityPool = undefined;
    }
    if (object.liquidityPoolMetadata !== undefined && object.liquidityPoolMetadata !== null) {
      message.liquidityPoolMetadata = LiquidityPoolMetadata.fromJSON(object.liquidityPoolMetadata);
    } else {
      message.liquidityPoolMetadata = undefined;
    }
    if (object.liquidityPoolBatch !== undefined && object.liquidityPoolBatch !== null) {
      message.liquidityPoolBatch = LiquidityPoolBatch.fromJSON(object.liquidityPoolBatch);
    } else {
      message.liquidityPoolBatch = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryLiquidityPoolResponse>): QueryLiquidityPoolResponse {
    const message = { ...baseQueryLiquidityPoolResponse } as QueryLiquidityPoolResponse;
    if (object.liquidityPool !== undefined && object.liquidityPool !== null) {
      message.liquidityPool = LiquidityPool.fromPartial(object.liquidityPool);
    } else {
      message.liquidityPool = undefined;
    }
    if (object.liquidityPoolMetadata !== undefined && object.liquidityPoolMetadata !== null) {
      message.liquidityPoolMetadata = LiquidityPoolMetadata.fromPartial(object.liquidityPoolMetadata);
    } else {
      message.liquidityPoolMetadata = undefined;
    }
    if (object.liquidityPoolBatch !== undefined && object.liquidityPoolBatch !== null) {
      message.liquidityPoolBatch = LiquidityPoolBatch.fromPartial(object.liquidityPoolBatch);
    } else {
      message.liquidityPoolBatch = undefined;
    }
    return message;
  },
  toJSON(message: QueryLiquidityPoolResponse): unknown {
    const obj: any = {};
    message.liquidityPool !== undefined && (obj.liquidityPool = message.liquidityPool ? LiquidityPool.toJSON(message.liquidityPool) : undefined);
    message.liquidityPoolMetadata !== undefined && (obj.liquidityPoolMetadata = message.liquidityPoolMetadata ? LiquidityPoolMetadata.toJSON(message.liquidityPoolMetadata) : undefined);
    message.liquidityPoolBatch !== undefined && (obj.liquidityPoolBatch = message.liquidityPoolBatch ? LiquidityPoolBatch.toJSON(message.liquidityPoolBatch) : undefined);
    return obj;
  },
};

export const QueryLiquidityPoolBatchRequest = {
  encode(message: QueryLiquidityPoolBatchRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.poolId);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryLiquidityPoolBatchRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryLiquidityPoolBatchRequest } as QueryLiquidityPoolBatchRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLiquidityPoolBatchRequest {
    const message = { ...baseQueryLiquidityPoolBatchRequest } as QueryLiquidityPoolBatchRequest;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = Long.fromString(object.poolId);
    } else {
      message.poolId = Long.UZERO;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryLiquidityPoolBatchRequest>): QueryLiquidityPoolBatchRequest {
    const message = { ...baseQueryLiquidityPoolBatchRequest } as QueryLiquidityPoolBatchRequest;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId as Long;
    } else {
      message.poolId = Long.UZERO;
    }
    return message;
  },
  toJSON(message: QueryLiquidityPoolBatchRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    return obj;
  },
};

export const QueryLiquidityPoolBatchResponse = {
  encode(message: QueryLiquidityPoolBatchResponse, writer: Writer = Writer.create()): Writer {
    if (message.batch !== undefined && message.batch !== undefined) {
      LiquidityPoolBatch.encode(message.batch, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryLiquidityPoolBatchResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryLiquidityPoolBatchResponse } as QueryLiquidityPoolBatchResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batch = LiquidityPoolBatch.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLiquidityPoolBatchResponse {
    const message = { ...baseQueryLiquidityPoolBatchResponse } as QueryLiquidityPoolBatchResponse;
    if (object.batch !== undefined && object.batch !== null) {
      message.batch = LiquidityPoolBatch.fromJSON(object.batch);
    } else {
      message.batch = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryLiquidityPoolBatchResponse>): QueryLiquidityPoolBatchResponse {
    const message = { ...baseQueryLiquidityPoolBatchResponse } as QueryLiquidityPoolBatchResponse;
    if (object.batch !== undefined && object.batch !== null) {
      message.batch = LiquidityPoolBatch.fromPartial(object.batch);
    } else {
      message.batch = undefined;
    }
    return message;
  },
  toJSON(message: QueryLiquidityPoolBatchResponse): unknown {
    const obj: any = {};
    message.batch !== undefined && (obj.batch = message.batch ? LiquidityPoolBatch.toJSON(message.batch) : undefined);
    return obj;
  },
};

export const QueryLiquidityPoolsRequest = {
  encode(message: QueryLiquidityPoolsRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined && message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryLiquidityPoolsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryLiquidityPoolsRequest } as QueryLiquidityPoolsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLiquidityPoolsRequest {
    const message = { ...baseQueryLiquidityPoolsRequest } as QueryLiquidityPoolsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryLiquidityPoolsRequest>): QueryLiquidityPoolsRequest {
    const message = { ...baseQueryLiquidityPoolsRequest } as QueryLiquidityPoolsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message: QueryLiquidityPoolsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
};

export const QueryLiquidityPoolsResponse = {
  encode(message: QueryLiquidityPoolsResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.pools) {
      QueryLiquidityPoolResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined && message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryLiquidityPoolsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryLiquidityPoolsResponse } as QueryLiquidityPoolsResponse;
    message.pools = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(QueryLiquidityPoolResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLiquidityPoolsResponse {
    const message = { ...baseQueryLiquidityPoolsResponse } as QueryLiquidityPoolsResponse;
    message.pools = [];
    if (object.pools !== undefined && object.pools !== null) {
      for (const e of object.pools) {
        message.pools.push(QueryLiquidityPoolResponse.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryLiquidityPoolsResponse>): QueryLiquidityPoolsResponse {
    const message = { ...baseQueryLiquidityPoolsResponse } as QueryLiquidityPoolsResponse;
    message.pools = [];
    if (object.pools !== undefined && object.pools !== null) {
      for (const e of object.pools) {
        message.pools.push(QueryLiquidityPoolResponse.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message: QueryLiquidityPoolsResponse): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? QueryLiquidityPoolResponse.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
};

export const QueryLiquidityPoolsBatchRequest = {
  encode(message: QueryLiquidityPoolsBatchRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined && message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryLiquidityPoolsBatchRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryLiquidityPoolsBatchRequest } as QueryLiquidityPoolsBatchRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLiquidityPoolsBatchRequest {
    const message = { ...baseQueryLiquidityPoolsBatchRequest } as QueryLiquidityPoolsBatchRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryLiquidityPoolsBatchRequest>): QueryLiquidityPoolsBatchRequest {
    const message = { ...baseQueryLiquidityPoolsBatchRequest } as QueryLiquidityPoolsBatchRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message: QueryLiquidityPoolsBatchRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
};

export const QueryLiquidityPoolsBatchResponse = {
  encode(message: QueryLiquidityPoolsBatchResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.poolsBatch) {
      QueryLiquidityPoolBatchResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined && message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryLiquidityPoolsBatchResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryLiquidityPoolsBatchResponse } as QueryLiquidityPoolsBatchResponse;
    message.poolsBatch = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolsBatch.push(QueryLiquidityPoolBatchResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLiquidityPoolsBatchResponse {
    const message = { ...baseQueryLiquidityPoolsBatchResponse } as QueryLiquidityPoolsBatchResponse;
    message.poolsBatch = [];
    if (object.poolsBatch !== undefined && object.poolsBatch !== null) {
      for (const e of object.poolsBatch) {
        message.poolsBatch.push(QueryLiquidityPoolBatchResponse.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryLiquidityPoolsBatchResponse>): QueryLiquidityPoolsBatchResponse {
    const message = { ...baseQueryLiquidityPoolsBatchResponse } as QueryLiquidityPoolsBatchResponse;
    message.poolsBatch = [];
    if (object.poolsBatch !== undefined && object.poolsBatch !== null) {
      for (const e of object.poolsBatch) {
        message.poolsBatch.push(QueryLiquidityPoolBatchResponse.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message: QueryLiquidityPoolsBatchResponse): unknown {
    const obj: any = {};
    if (message.poolsBatch) {
      obj.poolsBatch = message.poolsBatch.map(e => e ? QueryLiquidityPoolBatchResponse.toJSON(e) : undefined);
    } else {
      obj.poolsBatch = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined && message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
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
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
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
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
};

export const QueryPoolBatchSwapMsgsRequest = {
  encode(message: QueryPoolBatchSwapMsgsRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.poolId);
    if (message.pagination !== undefined && message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryPoolBatchSwapMsgsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPoolBatchSwapMsgsRequest } as QueryPoolBatchSwapMsgsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolBatchSwapMsgsRequest {
    const message = { ...baseQueryPoolBatchSwapMsgsRequest } as QueryPoolBatchSwapMsgsRequest;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = Long.fromString(object.poolId);
    } else {
      message.poolId = Long.UZERO;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPoolBatchSwapMsgsRequest>): QueryPoolBatchSwapMsgsRequest {
    const message = { ...baseQueryPoolBatchSwapMsgsRequest } as QueryPoolBatchSwapMsgsRequest;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId as Long;
    } else {
      message.poolId = Long.UZERO;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message: QueryPoolBatchSwapMsgsRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
};

export const QueryPoolBatchSwapMsgRequest = {
  encode(message: QueryPoolBatchSwapMsgRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.poolId);
    writer.uint32(16).uint64(message.msgIndex);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryPoolBatchSwapMsgRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPoolBatchSwapMsgRequest } as QueryPoolBatchSwapMsgRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.msgIndex = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolBatchSwapMsgRequest {
    const message = { ...baseQueryPoolBatchSwapMsgRequest } as QueryPoolBatchSwapMsgRequest;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = Long.fromString(object.poolId);
    } else {
      message.poolId = Long.UZERO;
    }
    if (object.msgIndex !== undefined && object.msgIndex !== null) {
      message.msgIndex = Long.fromString(object.msgIndex);
    } else {
      message.msgIndex = Long.UZERO;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPoolBatchSwapMsgRequest>): QueryPoolBatchSwapMsgRequest {
    const message = { ...baseQueryPoolBatchSwapMsgRequest } as QueryPoolBatchSwapMsgRequest;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId as Long;
    } else {
      message.poolId = Long.UZERO;
    }
    if (object.msgIndex !== undefined && object.msgIndex !== null) {
      message.msgIndex = object.msgIndex as Long;
    } else {
      message.msgIndex = Long.UZERO;
    }
    return message;
  },
  toJSON(message: QueryPoolBatchSwapMsgRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.msgIndex !== undefined && (obj.msgIndex = (message.msgIndex || Long.UZERO).toString());
    return obj;
  },
};

export const QueryPoolBatchSwapMsgsResponse = {
  encode(message: QueryPoolBatchSwapMsgsResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.swaps) {
      BatchPoolSwapMsg.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined && message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryPoolBatchSwapMsgsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPoolBatchSwapMsgsResponse } as QueryPoolBatchSwapMsgsResponse;
    message.swaps = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swaps.push(BatchPoolSwapMsg.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolBatchSwapMsgsResponse {
    const message = { ...baseQueryPoolBatchSwapMsgsResponse } as QueryPoolBatchSwapMsgsResponse;
    message.swaps = [];
    if (object.swaps !== undefined && object.swaps !== null) {
      for (const e of object.swaps) {
        message.swaps.push(BatchPoolSwapMsg.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPoolBatchSwapMsgsResponse>): QueryPoolBatchSwapMsgsResponse {
    const message = { ...baseQueryPoolBatchSwapMsgsResponse } as QueryPoolBatchSwapMsgsResponse;
    message.swaps = [];
    if (object.swaps !== undefined && object.swaps !== null) {
      for (const e of object.swaps) {
        message.swaps.push(BatchPoolSwapMsg.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message: QueryPoolBatchSwapMsgsResponse): unknown {
    const obj: any = {};
    if (message.swaps) {
      obj.swaps = message.swaps.map(e => e ? BatchPoolSwapMsg.toJSON(e) : undefined);
    } else {
      obj.swaps = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
};

export const QueryPoolBatchSwapMsgResponse = {
  encode(message: QueryPoolBatchSwapMsgResponse, writer: Writer = Writer.create()): Writer {
    if (message.swaps !== undefined && message.swaps !== undefined) {
      BatchPoolSwapMsg.encode(message.swaps, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryPoolBatchSwapMsgResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPoolBatchSwapMsgResponse } as QueryPoolBatchSwapMsgResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swaps = BatchPoolSwapMsg.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolBatchSwapMsgResponse {
    const message = { ...baseQueryPoolBatchSwapMsgResponse } as QueryPoolBatchSwapMsgResponse;
    if (object.swaps !== undefined && object.swaps !== null) {
      message.swaps = BatchPoolSwapMsg.fromJSON(object.swaps);
    } else {
      message.swaps = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPoolBatchSwapMsgResponse>): QueryPoolBatchSwapMsgResponse {
    const message = { ...baseQueryPoolBatchSwapMsgResponse } as QueryPoolBatchSwapMsgResponse;
    if (object.swaps !== undefined && object.swaps !== null) {
      message.swaps = BatchPoolSwapMsg.fromPartial(object.swaps);
    } else {
      message.swaps = undefined;
    }
    return message;
  },
  toJSON(message: QueryPoolBatchSwapMsgResponse): unknown {
    const obj: any = {};
    message.swaps !== undefined && (obj.swaps = message.swaps ? BatchPoolSwapMsg.toJSON(message.swaps) : undefined);
    return obj;
  },
};

export const QueryPoolBatchDepositMsgsRequest = {
  encode(message: QueryPoolBatchDepositMsgsRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.poolId);
    if (message.pagination !== undefined && message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryPoolBatchDepositMsgsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPoolBatchDepositMsgsRequest } as QueryPoolBatchDepositMsgsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolBatchDepositMsgsRequest {
    const message = { ...baseQueryPoolBatchDepositMsgsRequest } as QueryPoolBatchDepositMsgsRequest;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = Long.fromString(object.poolId);
    } else {
      message.poolId = Long.UZERO;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPoolBatchDepositMsgsRequest>): QueryPoolBatchDepositMsgsRequest {
    const message = { ...baseQueryPoolBatchDepositMsgsRequest } as QueryPoolBatchDepositMsgsRequest;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId as Long;
    } else {
      message.poolId = Long.UZERO;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message: QueryPoolBatchDepositMsgsRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
};

export const QueryPoolBatchDepositMsgRequest = {
  encode(message: QueryPoolBatchDepositMsgRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.poolId);
    writer.uint32(16).uint64(message.msgIndex);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryPoolBatchDepositMsgRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPoolBatchDepositMsgRequest } as QueryPoolBatchDepositMsgRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.msgIndex = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolBatchDepositMsgRequest {
    const message = { ...baseQueryPoolBatchDepositMsgRequest } as QueryPoolBatchDepositMsgRequest;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = Long.fromString(object.poolId);
    } else {
      message.poolId = Long.UZERO;
    }
    if (object.msgIndex !== undefined && object.msgIndex !== null) {
      message.msgIndex = Long.fromString(object.msgIndex);
    } else {
      message.msgIndex = Long.UZERO;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPoolBatchDepositMsgRequest>): QueryPoolBatchDepositMsgRequest {
    const message = { ...baseQueryPoolBatchDepositMsgRequest } as QueryPoolBatchDepositMsgRequest;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId as Long;
    } else {
      message.poolId = Long.UZERO;
    }
    if (object.msgIndex !== undefined && object.msgIndex !== null) {
      message.msgIndex = object.msgIndex as Long;
    } else {
      message.msgIndex = Long.UZERO;
    }
    return message;
  },
  toJSON(message: QueryPoolBatchDepositMsgRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.msgIndex !== undefined && (obj.msgIndex = (message.msgIndex || Long.UZERO).toString());
    return obj;
  },
};

export const QueryPoolBatchDepositMsgsResponse = {
  encode(message: QueryPoolBatchDepositMsgsResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.deposits) {
      BatchPoolDepositMsg.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined && message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryPoolBatchDepositMsgsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPoolBatchDepositMsgsResponse } as QueryPoolBatchDepositMsgsResponse;
    message.deposits = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposits.push(BatchPoolDepositMsg.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolBatchDepositMsgsResponse {
    const message = { ...baseQueryPoolBatchDepositMsgsResponse } as QueryPoolBatchDepositMsgsResponse;
    message.deposits = [];
    if (object.deposits !== undefined && object.deposits !== null) {
      for (const e of object.deposits) {
        message.deposits.push(BatchPoolDepositMsg.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPoolBatchDepositMsgsResponse>): QueryPoolBatchDepositMsgsResponse {
    const message = { ...baseQueryPoolBatchDepositMsgsResponse } as QueryPoolBatchDepositMsgsResponse;
    message.deposits = [];
    if (object.deposits !== undefined && object.deposits !== null) {
      for (const e of object.deposits) {
        message.deposits.push(BatchPoolDepositMsg.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message: QueryPoolBatchDepositMsgsResponse): unknown {
    const obj: any = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? BatchPoolDepositMsg.toJSON(e) : undefined);
    } else {
      obj.deposits = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
};

export const QueryPoolBatchDepositMsgResponse = {
  encode(message: QueryPoolBatchDepositMsgResponse, writer: Writer = Writer.create()): Writer {
    if (message.deposits !== undefined && message.deposits !== undefined) {
      BatchPoolDepositMsg.encode(message.deposits, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryPoolBatchDepositMsgResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPoolBatchDepositMsgResponse } as QueryPoolBatchDepositMsgResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposits = BatchPoolDepositMsg.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolBatchDepositMsgResponse {
    const message = { ...baseQueryPoolBatchDepositMsgResponse } as QueryPoolBatchDepositMsgResponse;
    if (object.deposits !== undefined && object.deposits !== null) {
      message.deposits = BatchPoolDepositMsg.fromJSON(object.deposits);
    } else {
      message.deposits = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPoolBatchDepositMsgResponse>): QueryPoolBatchDepositMsgResponse {
    const message = { ...baseQueryPoolBatchDepositMsgResponse } as QueryPoolBatchDepositMsgResponse;
    if (object.deposits !== undefined && object.deposits !== null) {
      message.deposits = BatchPoolDepositMsg.fromPartial(object.deposits);
    } else {
      message.deposits = undefined;
    }
    return message;
  },
  toJSON(message: QueryPoolBatchDepositMsgResponse): unknown {
    const obj: any = {};
    message.deposits !== undefined && (obj.deposits = message.deposits ? BatchPoolDepositMsg.toJSON(message.deposits) : undefined);
    return obj;
  },
};

export const QueryPoolBatchWithdrawMsgsRequest = {
  encode(message: QueryPoolBatchWithdrawMsgsRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.poolId);
    if (message.pagination !== undefined && message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryPoolBatchWithdrawMsgsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPoolBatchWithdrawMsgsRequest } as QueryPoolBatchWithdrawMsgsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolBatchWithdrawMsgsRequest {
    const message = { ...baseQueryPoolBatchWithdrawMsgsRequest } as QueryPoolBatchWithdrawMsgsRequest;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = Long.fromString(object.poolId);
    } else {
      message.poolId = Long.UZERO;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPoolBatchWithdrawMsgsRequest>): QueryPoolBatchWithdrawMsgsRequest {
    const message = { ...baseQueryPoolBatchWithdrawMsgsRequest } as QueryPoolBatchWithdrawMsgsRequest;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId as Long;
    } else {
      message.poolId = Long.UZERO;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message: QueryPoolBatchWithdrawMsgsRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
};

export const QueryPoolBatchWithdrawMsgRequest = {
  encode(message: QueryPoolBatchWithdrawMsgRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.poolId);
    writer.uint32(16).uint64(message.msgIndex);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryPoolBatchWithdrawMsgRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPoolBatchWithdrawMsgRequest } as QueryPoolBatchWithdrawMsgRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.msgIndex = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolBatchWithdrawMsgRequest {
    const message = { ...baseQueryPoolBatchWithdrawMsgRequest } as QueryPoolBatchWithdrawMsgRequest;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = Long.fromString(object.poolId);
    } else {
      message.poolId = Long.UZERO;
    }
    if (object.msgIndex !== undefined && object.msgIndex !== null) {
      message.msgIndex = Long.fromString(object.msgIndex);
    } else {
      message.msgIndex = Long.UZERO;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPoolBatchWithdrawMsgRequest>): QueryPoolBatchWithdrawMsgRequest {
    const message = { ...baseQueryPoolBatchWithdrawMsgRequest } as QueryPoolBatchWithdrawMsgRequest;
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId as Long;
    } else {
      message.poolId = Long.UZERO;
    }
    if (object.msgIndex !== undefined && object.msgIndex !== null) {
      message.msgIndex = object.msgIndex as Long;
    } else {
      message.msgIndex = Long.UZERO;
    }
    return message;
  },
  toJSON(message: QueryPoolBatchWithdrawMsgRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.msgIndex !== undefined && (obj.msgIndex = (message.msgIndex || Long.UZERO).toString());
    return obj;
  },
};

export const QueryPoolBatchWithdrawMsgsResponse = {
  encode(message: QueryPoolBatchWithdrawMsgsResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.withdraws) {
      BatchPoolWithdrawMsg.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined && message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryPoolBatchWithdrawMsgsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPoolBatchWithdrawMsgsResponse } as QueryPoolBatchWithdrawMsgsResponse;
    message.withdraws = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdraws.push(BatchPoolWithdrawMsg.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolBatchWithdrawMsgsResponse {
    const message = { ...baseQueryPoolBatchWithdrawMsgsResponse } as QueryPoolBatchWithdrawMsgsResponse;
    message.withdraws = [];
    if (object.withdraws !== undefined && object.withdraws !== null) {
      for (const e of object.withdraws) {
        message.withdraws.push(BatchPoolWithdrawMsg.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPoolBatchWithdrawMsgsResponse>): QueryPoolBatchWithdrawMsgsResponse {
    const message = { ...baseQueryPoolBatchWithdrawMsgsResponse } as QueryPoolBatchWithdrawMsgsResponse;
    message.withdraws = [];
    if (object.withdraws !== undefined && object.withdraws !== null) {
      for (const e of object.withdraws) {
        message.withdraws.push(BatchPoolWithdrawMsg.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message: QueryPoolBatchWithdrawMsgsResponse): unknown {
    const obj: any = {};
    if (message.withdraws) {
      obj.withdraws = message.withdraws.map(e => e ? BatchPoolWithdrawMsg.toJSON(e) : undefined);
    } else {
      obj.withdraws = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
};

export const QueryPoolBatchWithdrawMsgResponse = {
  encode(message: QueryPoolBatchWithdrawMsgResponse, writer: Writer = Writer.create()): Writer {
    if (message.withdraws !== undefined && message.withdraws !== undefined) {
      BatchPoolWithdrawMsg.encode(message.withdraws, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryPoolBatchWithdrawMsgResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPoolBatchWithdrawMsgResponse } as QueryPoolBatchWithdrawMsgResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdraws = BatchPoolWithdrawMsg.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolBatchWithdrawMsgResponse {
    const message = { ...baseQueryPoolBatchWithdrawMsgResponse } as QueryPoolBatchWithdrawMsgResponse;
    if (object.withdraws !== undefined && object.withdraws !== null) {
      message.withdraws = BatchPoolWithdrawMsg.fromJSON(object.withdraws);
    } else {
      message.withdraws = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPoolBatchWithdrawMsgResponse>): QueryPoolBatchWithdrawMsgResponse {
    const message = { ...baseQueryPoolBatchWithdrawMsgResponse } as QueryPoolBatchWithdrawMsgResponse;
    if (object.withdraws !== undefined && object.withdraws !== null) {
      message.withdraws = BatchPoolWithdrawMsg.fromPartial(object.withdraws);
    } else {
      message.withdraws = undefined;
    }
    return message;
  },
  toJSON(message: QueryPoolBatchWithdrawMsgResponse): unknown {
    const obj: any = {};
    message.withdraws !== undefined && (obj.withdraws = message.withdraws ? BatchPoolWithdrawMsg.toJSON(message.withdraws) : undefined);
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