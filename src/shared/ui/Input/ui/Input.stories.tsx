import { StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,

};

const Template:StoryFn<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    value: 'texttext',
    placeholder: 'Type text',
};

export const Dark = Template.bind({});
Dark.args = {
    value: 'texttext',
    placeholder: 'Type text',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];