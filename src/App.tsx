import { Logo, Heading, Text, TextInput, Checkbox, Button } from './components';
import { Envelope, Lock } from 'phosphor-react';
import './styles/global.css';

export function App() {
	return (
		<div className="w-screen h-screen flex-col bg-gray-900 flex items-center justify-center text-gray-100">
			<header className="flex flex-col items-center">
				<Logo />
				<Heading className="mt-4" size="lg" children={'Figma Lab'} />
				<Text className="text-gray-400 mt-1" size="lg" children={'Login and Start Exploring'} />
			</header>

			<form className="flex flex-col items-stretch w-full max-w-[400px] mt-10">
				<label htmlFor="email" className="flex flex-col gap-1">
					<Text className="font-semibold mb-2">E-mail</Text>
					<TextInput.Root>
						<TextInput.Icon>
							<Envelope />
						</TextInput.Icon>
						<TextInput.Input type="email" id="email" placeholder="E-mail" />
					</TextInput.Root>
				</label>

				<label htmlFor="password" className="flex flex-col gap-1 mt-6">
					<Text className="font-semibold mb-2">Password</Text>
					<TextInput.Root>
						<TextInput.Icon>
							<Lock />
						</TextInput.Icon>
						<TextInput.Input type="password" id="password" placeholder="**********" />
					</TextInput.Root>
				</label>

				<label htmlFor="remember" className="flex items-center gap-2 mt-8">
					<Checkbox id="remember" />
					<Text
						size="sm"
						className="text-gray-200 hover:cursor-pointer"
						children={'Remember me for 30 days'}
					/>
				</label>

				<Button className="mt-8" type="submit" children={'Login'} />

				<footer className="flex flex-col items-center gap-4 mt-8">
					<Text asChild size="sm">
						<a href="" className="text-gray-400 underline hover:text-gray-200">
							Forgot your password?
						</a>
					</Text>
					<Text asChild size="sm">
						<a href="" className="text-gray-400 underline hover:text-gray-200">
							New to the Lab? Join now
						</a>
					</Text>
				</footer>
			</form>
		</div>
	);
}
