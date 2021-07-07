import { coins } from '@cosmjs/launchpad';
import { DirectSecp256k1HdWallet, Registry } from '@cosmjs/proto-signing';
import {
	assertIsBroadcastTxSuccess,
	SigningStargateClient,
} from '@cosmjs/stargate';

import { StargazeApi } from './api';
import { QueryClientImpl } from './generated/cosmos/bank/v1beta1/query';
import { MsgPost } from './generated/stargaze/curating/v1beta1/tx';

let api: StargazeApi;
const chainUrl = 'localhost:26657';

describe('StargazeApi', () => {
	beforeAll(async () => {
		api = await StargazeApi.connect({
			connection: {
				type: 'tendermint',
				url: chainUrl,
			},
		});
	});

	describe('Queries', () => {
		it('should fetch balances using tendermint client', async () => {
			const impl = new QueryClientImpl(api.connection.queryConnection);
			const res = await impl.AllBalances({
				address: 'stars13nh557xzyfdm6csyp0xslu939l753sdlgdc2q0',
			});

			expect(res.balances).toHaveLength(3);
		});
	});

	// describe('Txs', () => {
	// 	it('should post a tx on chain', async () => {
	// 		const mnemonic =
	// 			'jacket powder menu denial capital setup result vintage melody mouse innocent start elephant umbrella second monkey saddle matter avoid frost sentence mask matrix anxiety';
	// 		const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
	// 			mnemonic,
	// 			{ prefix: 'stars' }
	// 		);
	// 		const [{ address }] = await wallet.getAccounts();

	// 		const msgPostTypeUrl = '/stargaze.curating.v1beta1.MsgPost';
	// 		const registry = new Registry();
	// 		registry.register(msgPostTypeUrl, MsgPost);

	// 		const client = await SigningStargateClient.connectWithSigner(
	// 			chainUrl,
	// 			wallet,
	// 			{ registry: registry }
	// 		);

	// 		const msg = MsgPost.fromPartial({
	// 			vendorId: 1,
	// 			postId: '1',
	// 			creator: address,
	// 			rewardAccount: address,
	// 			body: 'This is a tweet',
	// 		});

	// 		const msgAny = {
	// 			typeUrl: msgPostTypeUrl,
	// 			value: msg,
	// 		};

	// 		const fee = {
	// 			amount: coins(10000000, 'ustarx'),
	// 			gas: '180000', // 180k
	// 		};
	// 		const memo = 'Use your power wisely';
	// 		const result = await client.signAndBroadcast(
	// 			address,
	// 			[msgAny],
	// 			fee,
	// 			memo
	// 		);

	// 		assertIsBroadcastTxSuccess(result);
	// 	});
	// });
});
