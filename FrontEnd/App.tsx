import { StatusBar } from 'expo-status-bar';
import { LoginScreen } from './src/screens/home/index';

export default function App() {
	return (
		<>
			<StatusBar style="auto" />
			<LoginScreen />
		</>
	);
}
