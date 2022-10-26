import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface HeadingProps {
	children: ReactNode;
	size?: 'sm' | 'md' | 'lg';
	bold?: boolean;
	asChild?: boolean;
}

export const Heading: React.FC<HeadingProps> = ({ children, size = 'md', bold = true, asChild }) => {
	const ComponentType = asChild ? Slot : 'h2';

	return (
		<ComponentType
			className={clsx(
				'text-gray-100 font-sans',
				{
					'text-lg': size === 'sm',
					'text-xl': size === 'md',
					'text-2xl': size === 'lg',
				},
				{
					'font-bold': bold,
				}
			)}
		>
			{children}
		</ComponentType>
	);
};
