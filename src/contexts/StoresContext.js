import { createContext, useContext, useEffect, useState } from 'react';

import { API, graphqlOperation } from 'aws-amplify';
import { listStores } from '../graphql/queries';

const StoresContext = createContext({});

const StoresContextProvider = ({ children }) => {
	const [stores, setStores] = useState(null);

	useEffect(() => {
		fetchStores();
	}, []);

	const fetchStores = async () => {
		const res = await API.graphql(graphqlOperation(listStores));
		setStores(res.data.listStores.items);
	};

	return (
		<StoresContext.Provider value={{ stores }}>
			{children}
		</StoresContext.Provider>
	);
};

export default StoresContextProvider;

export const useStoresContext = () => useContext(StoresContext);
