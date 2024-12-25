import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { useCallback, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

export const useDynamicModuleLoader = (reducers: ReducersList, removeAfterUnmount: boolean = true) => {
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    const addReducers = useCallback(() => {
        Object.entries(reducers)
            .forEach(([keyName, reducer]) => {
                store.reducerManager.add(keyName as StateSchemaKey, reducer);
                dispatch({ type: `@init ${keyName}` });
            });
    }, [dispatch, reducers, store.reducerManager]);

    const removeReducers = useCallback(() => {
        Object.entries(reducers).forEach(([keyName]) => {
            store.reducerManager.remove(keyName as StateSchemaKey);
            dispatch({ type: `@destroy ${keyName}` });
        });
    }, [dispatch, reducers, store.reducerManager]);

    useEffect(() => {
        addReducers();
        return () => {
            if (removeAfterUnmount) {
                removeReducers();
            }
        };
    }, [addReducers, removeAfterUnmount, removeReducers]);
};
