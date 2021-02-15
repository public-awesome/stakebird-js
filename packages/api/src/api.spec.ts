import { StargazeApi } from './api';
import { QueryClientImpl } from './generated/cosmos/bank/v1beta1/query';

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
				address: 'stars1wsrvdmgfs0gugen4t4ak7hnudhy9mgnpcys5gn', // Shane's account.
			});

			// TODO So ideally, the two lines would be combined into one:
			// ```
			// api.query.cosmos.bank.v1beta1.AllBalances({});`
			// ```

			expect(res.balances).toHaveLength(4);
		});
	});

	describe('Txs', () => {
		it('should post a tx on chain', async () => {
            
        });
	});
});
