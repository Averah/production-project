import React, { FC, memo } from 'react';
import classNames from 'classnames';
import './Loader.scss';

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = memo(({ className }:LoaderProps) => (
    <div className={classNames('lds-default', className)}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>

));
