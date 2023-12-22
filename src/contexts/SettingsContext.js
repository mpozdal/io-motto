import { createContext, useContext, useEffect, useState } from 'react';

import { Auth } from 'aws-amplify';
const SettingsContext = createContext({});

const SettingsContextProvider = ({ children }) => {
	const handleLogout = () => {
		Auth.signOut();
	};

	const handleShowOrders = (navigation) => {
		navigation.navigate('Orders');
	};

	return (
		<SettingsContext.Provider value={{ handleLogout, handleShowOrders }}>
			{children}
		</SettingsContext.Provider>
	);
};

export default SettingsContextProvider;

export const useSettingsContext = () => useContext(SettingsContext);
