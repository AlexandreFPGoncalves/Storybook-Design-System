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
