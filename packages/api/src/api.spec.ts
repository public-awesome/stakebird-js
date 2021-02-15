import { StargazeApi } from './api';
import { QueryClientImpl } from './generated/cosmos/bank/v1beta1/query';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import {
	SigningStargateClient,
	assertIsBroadcastTxSuccess,
} from '@cosmjs/stargate';
import { MsgPost } from './generated/stargaze/curating/v1beta1/tx';
import { coins } from '@cosmjs/launchpad';

let api: StargazeApi;

describe('StargazeApi', () => {
	beforeAll(async () => {
		api = await StargazeApi.connect({
			connection: {
				type: 'tendermint',
				url: 'localhost:26657',
			},
		});
	});

	describe('Queries', () => {
		it('should fetch balances using tendermint client', async () => {
			const impl = new QueryClientImpl(api.connection.queryConnection);
			const res = await impl.AllBalances({
				address: 'stars1wsrvdmgfs0gugen4t4ak7hnudhy9mgnpcys5gn', // Shane's account
			});

			expect(res.balances).toHaveLength(4);
		});
	});

	describe('Txs', () => {
		it('should post a tx on chain', async () => {
			const mnemonic =
				'surround miss nominee dream gap cross assault thank captain prosper drop duty group candy wealth weather scale put';
			const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic);
			const [{ address }] = await wallet.getAccounts();
			const chainUrl = 'localhost:26657';
			const client = await SigningStargateClient.connectWithSigner(
				chainUrl,
				wallet,
				{ prefix: 'stars' }
			);

			const msg = MsgPost.fromPartial({
				vendorId: 1,
				postId: '123',
				creator: address,
				rewardAccount: address,
				body: 'This is a tweet',
			});

			const msgAny = {
				typeUrl: '/stargaze.curating.v1beta1.MsgPost',
				value: msg,
			};

			const fee = {
				amount: coins(10000000, 'ustarx'),
				gas: '180000', // 180k
			};
			const memo = 'Use your power wisely';
			const result = await client.signAndBroadcast(
				address,
				[msgAny],
				fee,
				memo
			);

			assertIsBroadcastTxSuccess(result);
		});
	});
});
