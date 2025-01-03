import { getLoginUsername } from './getLoginUsername';
import { StateSchema } from '../../../../app/providers/StoreProvider/config/StateSchema';

describe('getLoginUsername.test', () => {
    test('should return login', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '123',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('123');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
