import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Amplify } from 'aws-amplify';
import amplifyconfig from './src/aws-exports';
import RootNavigation from './src/navigation/RootNavigation';
import AuthContextProvider from './src/contexts/AuthContext';
import StoresContextProvider from './src/contexts/StoresContext';
import BasketContextProvider from './src/contexts/BasketContext';
import OrderContextProvider from './src/contexts/OrderContext';
import SettingsContextProvider from './src/contexts/SettingsContext';
import MenuContextProvider from './src/contexts/MenuContext';
import DetailsOrderContext from './src/contexts/DetailsOrderContext';
import HomeContext from './src/contexts/HomeContext';

Amplify.configure(amplifyconfig);
SplashScreen.preventAutoHideAsync();

const App = () => {
	const [appIsReady, setAppIsReady] = useState(false);
	const [fontsLoaded] = useFonts({
		Montserrat: require('./src/assets/fonts/ttf/Montserrat-Bold.ttf'),
		Montserrat2: require('./src/assets/fonts/ttf/Montserrat-Medium.ttf'),
	});

	useEffect(() => {
		if (fontsLoaded) {
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded, appIsReady]);

	if (!fontsLoaded) {
		return null;
	}
	return (
		<AuthContextProvider>
			<SettingsContextProvider>
				<DetailsOrderContext>
					<BasketContextProvider>
						<OrderContextProvider>
							<HomeContext>
								<MenuContextProvider>
									<StoresContextProvider>
										<RootNavigation />
									</StoresContextProvider>
								</MenuContextProvider>
							</HomeContext>
						</OrderContextProvider>
					</BasketContextProvider>
				</DetailsOrderContext>
			</SettingsContextProvider>
		</AuthContextProvider>
	);
};

export default App;
