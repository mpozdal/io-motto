import { createContext, useContext, useEffect, useState } from 'react';
import { useAuthContext } from './AuthContext';
import 'react-native-get-random-values';
const MenuContext = createContext({});
import { API, graphqlOperation } from 'aws-amplify';
import { listCategories } from '../graphql/queries';
const MenuContextProvider = ({ children }) => {
	const [drinksMenu, setDrinksMenu] = useState([]);

	useEffect(() => {
		fetchMenu();
	}, []);
	const fetchMenu = async () => {
		try {
			const response = await API.graphql(
				graphqlOperation(listCategories)
			);
			setDrinksMenu(response?.data?.listCategories?.items);
		} catch (e) {
			console.warn(e);
		}
	};

	return (
		<MenuContext.Provider value={{ drinksMenu }}>
			{children}
		</MenuContext.Provider>
	);
};

export default MenuContextProvider;

export const useMenuContext = () => useContext(MenuContext);
