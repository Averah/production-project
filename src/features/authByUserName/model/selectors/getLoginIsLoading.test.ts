import { getLoginIsLoading } from './getLoginIsLoading';
import { StateSchema } from '../../../../app/providers/StoreProvider/config/StateSchema';

describe('getLoginIsLoading.test', () => {
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
