import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { useCallback, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

export const useDynamicModuleLoader = (reducers: ReducersList, removeAfterUnmount: boolean = true) => {
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    const addReducers = useCallback(() => {
        Object.entries(reducers)
            .forEach(([keyName, reducer]: ReducersListEntry) => {
                store.reducerManager.add(keyName, reducer);
                dispatch({ type: `@init ${keyName}` });
            });
    }, [dispatch, reducers, store.reducerManager]);

    const removeReducers = useCallback(() => {
        Object.entries(reducers).forEach(([keyName]: ReducersListEntry) => {
            store.reducerManager.remove(keyName);
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
