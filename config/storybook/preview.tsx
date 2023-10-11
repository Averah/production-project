import { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';

export const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        // decorators: [
        //     (Story) => (
        //         <StyleDecorator>
        //             <Story />
        //         </StyleDecorator>
        //     ),
        //     ThemeDecorator(),
        // ],
    },
};

export const decorators = [
    StyleDecorator,
    ThemeDecorator(),
    RouterDecorator,
];
