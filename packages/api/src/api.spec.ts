import { StargazeApi } from './api';
import { QueryClientImpl } from './generated/cosmos/bank/v1beta1/query';
import { DirectSecp256k1HdWallet, Registry } from '@cosmjs/proto-signing';
import {
	SigningStargateClient,
	assertIsBroadcastTxSuccess,
} from '@cosmjs/stargate';
import { MsgPost } from './generated/stargaze/curating/v1beta1/tx';
import { coins } from '@cosmjs/launchpad';

let api: StargazeApi;
const chainUrl = 'localhost:26657';

/***

NOTE: The first time running these test will fail without funding the test user. 

Fund with:
./bin/starsd tx bank send validator [address] 100000000ustarx --keyring-backend test --chain-id localnet-1

*/

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
				address: 'stars1wsrvdmgfs0gugen4t4ak7hnudhy9mgnpcys5gn', // Shane's account
			});

			expect(res.balances).toHaveLength(4);
		});
	});

	describe('Txs', () => {
		it('should post a tx on chain', async () => {
			const mnemonic =
				'surround miss nominee dream gap cross assault thank captain prosper drop duty group candy wealth weather scale put';
			const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
				mnemonic,
				undefined,
				'stars'
			);
			const [{ address }] = await wallet.getAccounts();

			const msgPostTypeUrl = '/stargaze.curating.v1beta1.MsgPost';
			const registry = new Registry();
			registry.register(msgPostTypeUrl, MsgPost);

			const client = await SigningStargateClient.connectWithSigner(
				chainUrl,
				wallet,
				{ registry: registry }
			);

			const msg = MsgPost.fromPartial({
				vendorId: 1,
				postId: '1',
				creator: address,
				rewardAccount: address,
				body: 'This is a tweet',
			});

			const msgAny = {
				typeUrl: msgPostTypeUrl,
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
