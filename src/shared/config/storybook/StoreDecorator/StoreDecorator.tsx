import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (StoryComponent: StoryFn) => (
    <StoreProvider>
        <StoryComponent />
    </StoreProvider>
);
