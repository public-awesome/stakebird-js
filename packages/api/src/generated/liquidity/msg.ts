/* eslint-disable */
import { Reader } from 'protobufjs/minimal';
import {
	MsgCreateLiquidityPoolResponse,
	MsgDepositToLiquidityPoolResponse,
	MsgWithdrawFromLiquidityPoolResponse,
	MsgSwapResponse,
	MsgCreateLiquidityPoolRequest,
	MsgDepositToLiquidityPoolRequest,
	MsgWithdrawFromLiquidityPoolRequest,
	MsgSwapRequest,
} from '../liquidity/tx';

export const protobufPackage = 'tendermint.liquidity';

/** Msg defines the staking Msg service. */
export interface MsgApi {
	/** Submit create liquidity pool message. */
	CreateLiquidityPoolApi(
		request: MsgCreateLiquidityPoolRequest
	): Promise<MsgCreateLiquidityPoolResponse>;
	/** Submit deposit to the liquidity pool batch */
	DepositToLiquidityPoolApi(
		request: MsgDepositToLiquidityPoolRequest
	): Promise<MsgDepositToLiquidityPoolResponse>;
	/** Submit withdraw from to the liquidity pool batch */
	WithdrawFromLiquidityPoolApi(
		request: MsgWithdrawFromLiquidityPoolRequest
	): Promise<MsgWithdrawFromLiquidityPoolResponse>;
	/** Submit swap to the liquidity pool batch */
	SwapApi(request: MsgSwapRequest): Promise<MsgSwapResponse>;
}

export class MsgApiClientImpl implements MsgApi {
	private readonly rpc: Rpc;
	constructor(rpc: Rpc) {
		this.rpc = rpc;
	}
	CreateLiquidityPoolApi(
		request: MsgCreateLiquidityPoolRequest
	): Promise<MsgCreateLiquidityPoolResponse> {
		const data = MsgCreateLiquidityPoolRequest.encode(request).finish();
		const promise = this.rpc.request(
			'tendermint.liquidity.MsgApi',
			'CreateLiquidityPoolApi',
			data
		);
		return promise.then((data) =>
			MsgCreateLiquidityPoolResponse.decode(new Reader(data))
		);
	}

	DepositToLiquidityPoolApi(
		request: MsgDepositToLiquidityPoolRequest
	): Promise<MsgDepositToLiquidityPoolResponse> {
		const data = MsgDepositToLiquidityPoolRequest.encode(request).finish();
		const promise = this.rpc.request(
			'tendermint.liquidity.MsgApi',
			'DepositToLiquidityPoolApi',
			data
		);
		return promise.then((data) =>
			MsgDepositToLiquidityPoolResponse.decode(new Reader(data))
		);
	}

	WithdrawFromLiquidityPoolApi(
		request: MsgWithdrawFromLiquidityPoolRequest
	): Promise<MsgWithdrawFromLiquidityPoolResponse> {
		const data = MsgWithdrawFromLiquidityPoolRequest.encode(
			request
		).finish();
		const promise = this.rpc.request(
			'tendermint.liquidity.MsgApi',
			'WithdrawFromLiquidityPoolApi',
			data
		);
		return promise.then((data) =>
			MsgWithdrawFromLiquidityPoolResponse.decode(new Reader(data))
		);
	}

	SwapApi(request: MsgSwapRequest): Promise<MsgSwapResponse> {
		const data = MsgSwapRequest.encode(request).finish();
		const promise = this.rpc.request(
			'tendermint.liquidity.MsgApi',
			'SwapApi',
			data
		);
		return promise.then((data) => MsgSwapResponse.decode(new Reader(data)));
	}
}

interface Rpc {
	request(
		service: string,
		method: string,
		data: Uint8Array
	): Promise<Uint8Array>;
}
