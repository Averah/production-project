import { StoryFn } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme = Theme.LIGHT) => (StoryComponent: StoryFn) => (
    <div className={`app ${theme}`}>
        <ThemeProvider defaultThemeFromProps={theme}>
            <StoryComponent />
        </ThemeProvider>
    </div>
);
