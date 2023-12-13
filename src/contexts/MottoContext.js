import React, { createContext, useState } from 'react';

const MottoContext = createContext();

const MottoProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [stores, setStores] = useState([]);
	const [drinksMenu, setDrinksMenu] = useState({});
	const [foodMenu, setFoodMenu] = useState([]);
	return (
		<MottoContext.Provider value={{ user, setUser, stores, setStores }}>
			{children}
		</MottoContext.Provider>
	);
};

export { MottoContext, MottoProvider };
