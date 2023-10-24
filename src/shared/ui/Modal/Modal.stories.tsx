import { StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
};

const Template:StoryFn<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'Text',
    isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
