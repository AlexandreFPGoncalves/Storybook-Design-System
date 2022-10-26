import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export interface CheckBoxProps {}

export const Checkbox: React.FC<CheckBoxProps> = ({}) => {
	return (
		<CheckboxPrimitive.Root className={'w-6 h-6 p-[2px] bg-gray-800 rounded'}>
			<CheckboxPrimitive.CheckboxIndicator asChild>
				<Check weight="bold" className="w-5 h-5 text-cyan-500" />
			</CheckboxPrimitive.CheckboxIndicator>
		</CheckboxPrimitive.Root>
	);
};
