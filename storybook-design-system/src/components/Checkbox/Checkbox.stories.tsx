import { Meta, StoryObj } from '@storybook/react';
import { Text } from '../Text';
import { Checkbox, CheckBoxProps } from './Checkbox';

export default {
	title: 'Components/Checkbox',
	component: Checkbox,
	args: {
		children: 'Create account',
	},
	argTypes: {},
	decorators: [
		(Story) => {
			return (
				<div className="flex items-center gap-2">
					{Story()}
					<Text size="sm">Remind me for the next 30 days</Text>
				</div>
			);
		},
	],
} as Meta<CheckBoxProps>;

export const Default: StoryObj<CheckBoxProps> = {};
