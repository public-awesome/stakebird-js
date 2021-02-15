import { StargazeApi } from '../src/api';
import { QueryClientImpl } from '../src/generated/cosmos/bank/v1beta1/query';

let api: StargazeApi;

describe('StargazeApi with tendermint connection', () => {
	beforeAll(async () => {
		api = await StargazeApi.connect({
			connection: {
				type: 'tendermint',
				url: 'https://rpc.devnet.stargaze.fi',
			},
		});
	});

	it('should fetch balances using tendermint client', async () => {
		const bankClient = new QueryClientImpl(api.connection.queryConnection);
		const res = await bankClient.AllBalances({
			address: 'stars1nnz4naa7f0z6pwga3xkvcn3ju0unclm7ecd6a4', // Shane's account.
		});

		expect(res.balances.length).toBeGreaterThanOrEqual(1);
	});
});
