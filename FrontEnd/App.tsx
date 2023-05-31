import { Routes } from "./src/routes";
import { LoginProvider } from './src/context/UserContext';

export default function App() {
	return (
		<LoginProvider>
			<Routes />
		</LoginProvider>
	);
}
