# Storybook-Design-System

A design System using story book, Figma and other tools.

## Initial setup

Create repository

run the command npm create vite@latest

select your frame work, in this case, React

select your variant, in this case, Typescript

Once this is done, run npm i to install dependencies

Clear all the useless files

Run the command npm i -D tailwindcss postcss autoprefixer

once this is done run the command npx tailwindcss init -p

The postcss.config.cjs file will detect tailwind automatically

Go to the file tailwind.config.cjs and add to the content array, the path that you want your tailwind to apply the style classes

Run the command npx sb init --builder @storybook/builder-vite --use-npm, to configure the storybook inside a project without webpack

## Bug fixing

prettier was not formatting my application, after a little google search I came across this guide:
https://stackoverflow.com/questions/71184604/prettier-fails-when-declaring-type-module-in-package-json
and after reading the docs https://prettier.io/docs/en/configuration.html I changed my .prettierrc file extension from .js to json and it worked !

## Tailwind notes

Tailwind needs to have its imported css files (import './styles/global.css') on both the App.tsx and preview.cjs
This happens is so that storybook has access to the styles provided by tailwind

## Packages used

ClSX
https://www.npmjs.com/package/clsx
Creates classes variations, helps create conditional classes inside a component

Radix-ui/React-slot
https://www.radix-ui.com/docs/primitives/utilities/slot
When you use a slot, you send all the props that are inside the slot to the first components who comes inside the children.º

phosphor-react
https://www.npmjs.com/package/phosphor-react
Various icons made for react projects

Radix-ui/Radix-Checkbox
https://www.radix-ui.com/docs/primitives/components/checkbox
Checkbox from Radix, no styles works as a default checkbox
```js
export interface ExampleProps {
    children: ReactNode;
	asChild?: boolean;
}

export const Example: React.FC<ExampleProps> = ({ children, asChild }) => {
	const ComponentType = asChild ? Slot : 'span';

	return (
		<ComponentType className={'text-gray-100 font-sans'}>
			{children}
		</ComponentType>
	);
};
```

If we call `<Example asChild={true} children={<h3>Test</h3>}/>` now the component will act as an `<h3>` tag but still inherit the fathers props and styles.