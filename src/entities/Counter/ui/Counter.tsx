import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../../shared/ui/Button/Button';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue';

interface CounterProps {
  className?: string;
}

export const Counter: FC<CounterProps> = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    const { t } = useTranslation();

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button onClick={increment} data-testid="increment-btn">{t('Увеличить')}</Button>
            <Button onClick={decrement} data-testid="decrement-btn">{t('Убавить')}</Button>
        </div>
    );
};
