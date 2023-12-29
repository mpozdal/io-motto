/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBasketItem = /* GraphQL */ `
	query GetBasketItem($id: ID!) {
		getBasketItem(id: $id) {
			id
			Drink {
				id
				name
				description
				price
				sizes {
					items {
						id
						drinkId
						sizeId
						drink {
							id
							name
							description
							price
							createdAt
							updatedAt
							categoryDrinksId
							__typename
						}
						size {
							id
							value
							extraCost
							createdAt
							updatedAt
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					nextToken
					__typename
				}
				flavorShots {
					items {
						id
						drinkId
						flavorShotId
						drink {
							id
							name
							description
							price
							createdAt
							updatedAt
							categoryDrinksId
							__typename
						}
						flavorShot {
							id
							name
							extraCost
							basketitemID
							createdAt
							updatedAt
							orderItemFlavorShotsId
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					nextToken
					__typename
				}
				milks {
					items {
						id
						drinkId
						milkId
						drink {
							id
							name
							description
							price
							createdAt
							updatedAt
							categoryDrinksId
							__typename
						}
						milk {
							id
							name
							createdAt
							updatedAt
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					nextToken
					__typename
				}
				createdAt
				updatedAt
				categoryDrinksId
				__typename
			}
			basketID
			Milk {
				id
				name
				drinks {
					items {
						id
						drinkId
						milkId
						drink {
							id
							name
							description
							price
							createdAt
							updatedAt
							categoryDrinksId
							__typename
						}
						milk {
							id
							name
							createdAt
							updatedAt
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					nextToken
					__typename
				}
				createdAt
				updatedAt
				__typename
			}
			Size {
				id
				value
				extraCost
				drinks {
					items {
						id
						drinkId
						sizeId
						drink {
							id
							name
							description
							price
							createdAt
							updatedAt
							categoryDrinksId
							__typename
						}
						size {
							id
							value
							extraCost
							createdAt
							updatedAt
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					nextToken
					__typename
				}
				createdAt
				updatedAt
				__typename
			}
			FlavorShots {
				items {
					id
					name
					extraCost
					basketitemID
					drinks {
						items {
							id
							drinkId
							flavorShotId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					createdAt
					updatedAt
					orderItemFlavorShotsId
					__typename
				}
				nextToken
				__typename
			}
			price
			createdAt
			updatedAt
			basketItemDrinkId
			basketItemMilkId
			basketItemSizeId
			__typename
		}
	}
`;
export const listBasketItems = /* GraphQL */ `
	query ListBasketItems(
		$filter: ModelBasketItemFilterInput
		$limit: Int
		$nextToken: String
	) {
		listBasketItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				Drink {
					id
					name
					description
					price
					sizes {
						items {
							id
							drinkId
							sizeId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					flavorShots {
						items {
							id
							drinkId
							flavorShotId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					milks {
						items {
							id
							drinkId
							milkId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					createdAt
					updatedAt
					categoryDrinksId
					__typename
				}
				basketID
				Milk {
					id
					name
					drinks {
						items {
							id
							drinkId
							milkId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					createdAt
					updatedAt
					__typename
				}
				Size {
					id
					value
					extraCost
					drinks {
						items {
							id
							drinkId
							sizeId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					createdAt
					updatedAt
					__typename
				}
				FlavorShots {
					items {
						id
						name
						extraCost
						basketitemID
						drinks {
							nextToken
							__typename
						}
						createdAt
						updatedAt
						orderItemFlavorShotsId
						__typename
					}
					nextToken
					__typename
				}
				price
				createdAt
				updatedAt
				basketItemDrinkId
				basketItemMilkId
				basketItemSizeId
				__typename
			}
			nextToken
			__typename
		}
	}
`;
export const basketItemsByBasketID = /* GraphQL */ `
	query BasketItemsByBasketID(
		$basketID: ID!
		$sortDirection: ModelSortDirection
		$filter: ModelBasketItemFilterInput
		$limit: Int
		$nextToken: String
	) {
		basketItemsByBasketID(
			basketID: $basketID
			sortDirection: $sortDirection
			filter: $filter
			limit: $limit
			nextToken: $nextToken
		) {
			items {
				id
				Drink {
					id
					name
					description
					price
					sizes {
						items {
							id
							drinkId
							sizeId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					flavorShots {
						items {
							id
							drinkId
							flavorShotId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					milks {
						items {
							id
							drinkId
							milkId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					createdAt
					updatedAt
					categoryDrinksId
					__typename
				}
				basketID
				Milk {
					id
					name
					drinks {
						items {
							id
							drinkId
							milkId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					createdAt
					updatedAt
					__typename
				}
				Size {
					id
					value
					extraCost
					drinks {
						items {
							id
							drinkId
							sizeId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					createdAt
					updatedAt
					__typename
				}
				FlavorShots {
					items {
						id
						name
						extraCost
						basketitemID
						drinks {
							nextToken
							__typename
						}
						createdAt
						updatedAt
						orderItemFlavorShotsId
						__typename
					}
					nextToken
					__typename
				}
				price
				createdAt
				updatedAt
				basketItemDrinkId
				basketItemMilkId
				basketItemSizeId
				__typename
			}
			nextToken
			__typename
		}
	}
`;
export const getBasket = /* GraphQL */ `
	query GetBasket($id: ID!) {
		getBasket(id: $id) {
			id
			User {
				id
				name
				email
				orders {
					items {
						id
						items {
							nextToken
							__typename
						}
						store {
							id
							address
							latitude
							longtitude
							openingHour
							closingHour
							createdAt
							updatedAt
							__typename
						}
						total
						status
						User {
							id
							name
							email
							createdAt
							updatedAt
							userDefaultStoreId
							userRoleId
							__typename
						}
						userID
						createdAt
						updatedAt
						userOrdersId
						orderStoreId
						__typename
					}
					nextToken
					__typename
				}
				defaultStore {
					id
					address
					latitude
					longtitude
					openingHour
					closingHour
					createdAt
					updatedAt
					__typename
				}
				role {
					id
					name
					createdAt
					updatedAt
					__typename
				}
				createdAt
				updatedAt
				userDefaultStoreId
				userRoleId
				__typename
			}
			Store {
				id
				address
				latitude
				longtitude
				openingHour
				closingHour
				createdAt
				updatedAt
				__typename
			}
			BasketItems {
				items {
					id
					Drink {
						id
						name
						description
						price
						sizes {
							nextToken
							__typename
						}
						flavorShots {
							nextToken
							__typename
						}
						milks {
							nextToken
							__typename
						}
						createdAt
						updatedAt
						categoryDrinksId
						__typename
					}
					basketID
					Milk {
						id
						name
						drinks {
							nextToken
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					Size {
						id
						value
						extraCost
						drinks {
							nextToken
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					FlavorShots {
						items {
							id
							name
							extraCost
							basketitemID
							createdAt
							updatedAt
							orderItemFlavorShotsId
							__typename
						}
						nextToken
						__typename
					}
					price
					createdAt
					updatedAt
					basketItemDrinkId
					basketItemMilkId
					basketItemSizeId
					__typename
				}
				nextToken
				__typename
			}
			createdAt
			updatedAt
			basketUserId
			basketStoreId
			__typename
		}
	}
`;
export const listBaskets = /* GraphQL */ `
	query ListBaskets(
		$filter: ModelBasketFilterInput
		$limit: Int
		$nextToken: String
	) {
		listBaskets(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				User {
					id
					name
					email
					orders {
						items {
							id
							total
							status
							userID
							createdAt
							updatedAt
							userOrdersId
							orderStoreId
							__typename
						}
						nextToken
						__typename
					}
					defaultStore {
						id
						address
						latitude
						longtitude
						openingHour
						closingHour
						createdAt
						updatedAt
						__typename
					}
					role {
						id
						name
						createdAt
						updatedAt
						__typename
					}
					createdAt
					updatedAt
					userDefaultStoreId
					userRoleId
					__typename
				}
				Store {
					id
					address
					latitude
					longtitude
					openingHour
					closingHour
					createdAt
					updatedAt
					__typename
				}
				BasketItems {
					items {
						id
						Drink {
							id
							name
							description
							price
							createdAt
							updatedAt
							categoryDrinksId
							__typename
						}
						basketID
						Milk {
							id
							name
							createdAt
							updatedAt
							__typename
						}
						Size {
							id
							value
							extraCost
							createdAt
							updatedAt
							__typename
						}
						FlavorShots {
							nextToken
							__typename
						}
						price
						createdAt
						updatedAt
						basketItemDrinkId
						basketItemMilkId
						basketItemSizeId
						__typename
					}
					nextToken
					__typename
				}
				createdAt
				updatedAt
				basketUserId
				basketStoreId
				__typename
			}
			nextToken
			__typename
		}
	}
`;
export const getUser = /* GraphQL */ `
	query GetUser($id: ID!) {
		getUser(id: $id) {
			id
			name
			email
			orders {
				items {
					id
					items {
						items {
							id
							price
							orderID
							createdAt
							updatedAt
							orderItemDrinkId
							orderItemMilkId
							orderItemSizeId
							__typename
						}
						nextToken
						__typename
					}
					store {
						id
						address
						latitude
						longtitude
						openingHour
						closingHour
						createdAt
						updatedAt
						__typename
					}
					total
					status
					User {
						id
						name
						email
						orders {
							nextToken
							__typename
						}
						defaultStore {
							id
							address
							latitude
							longtitude
							openingHour
							closingHour
							createdAt
							updatedAt
							__typename
						}
						role {
							id
							name
							createdAt
							updatedAt
							__typename
						}
						createdAt
						updatedAt
						userDefaultStoreId
						userRoleId
						__typename
					}
					userID
					createdAt
					updatedAt
					userOrdersId
					orderStoreId
					__typename
				}
				nextToken
				__typename
			}
			defaultStore {
				id
				address
				latitude
				longtitude
				openingHour
				closingHour
				createdAt
				updatedAt
				__typename
			}
			role {
				id
				name
				createdAt
				updatedAt
				__typename
			}
			createdAt
			updatedAt
			userDefaultStoreId
			userRoleId
			__typename
		}
	}
`;
export const listUsers = /* GraphQL */ `
	query ListUsers(
		$filter: ModelUserFilterInput
		$limit: Int
		$nextToken: String
	) {
		listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				name
				email
				orders {
					items {
						id
						items {
							nextToken
							__typename
						}
						store {
							id
							address
							latitude
							longtitude
							openingHour
							closingHour
							createdAt
							updatedAt
							__typename
						}
						total
						status
						User {
							id
							name
							email
							createdAt
							updatedAt
							userDefaultStoreId
							userRoleId
							__typename
						}
						userID
						createdAt
						updatedAt
						userOrdersId
						orderStoreId
						__typename
					}
					nextToken
					__typename
				}
				defaultStore {
					id
					address
					latitude
					longtitude
					openingHour
					closingHour
					createdAt
					updatedAt
					__typename
				}
				role {
					id
					name
					createdAt
					updatedAt
					__typename
				}
				createdAt
				updatedAt
				userDefaultStoreId
				userRoleId
				__typename
			}
			nextToken
			__typename
		}
	}
`;
export const getRole = /* GraphQL */ `
	query GetRole($id: ID!) {
		getRole(id: $id) {
			id
			name
			createdAt
			updatedAt
			__typename
		}
	}
`;
export const listRoles = /* GraphQL */ `
	query ListRoles(
		$filter: ModelRoleFilterInput
		$limit: Int
		$nextToken: String
	) {
		listRoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				name
				createdAt
				updatedAt
				__typename
			}
			nextToken
			__typename
		}
	}
`;
export const getStore = /* GraphQL */ `
	query GetStore($id: ID!) {
		getStore(id: $id) {
			id
			address
			latitude
			longtitude
			openingHour
			closingHour
			createdAt
			updatedAt
			__typename
		}
	}
`;
export const listStores = /* GraphQL */ `
	query ListStores(
		$filter: ModelStoreFilterInput
		$limit: Int
		$nextToken: String
	) {
		listStores(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				address
				latitude
				longtitude
				openingHour
				closingHour
				createdAt
				updatedAt
				__typename
			}
			nextToken
			__typename
		}
	}
`;
export const getCategory = /* GraphQL */ `
	query GetCategory($id: ID!) {
		getCategory(id: $id) {
			id
			name
			drinks {
				items {
					id
					name
					description
					price
					sizes {
						items {
							id
							drinkId
							sizeId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					flavorShots {
						items {
							id
							drinkId
							flavorShotId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					milks {
						items {
							id
							drinkId
							milkId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					createdAt
					updatedAt
					categoryDrinksId
					__typename
				}
				nextToken
				__typename
			}
			createdAt
			updatedAt
			__typename
		}
	}
`;

export const getOrderItem = /* GraphQL */ `
	query GetOrderItem($id: ID!) {
		getOrderItem(id: $id) {
			id
			drink {
				id
				name
				description
				price
				sizes {
					items {
						id
						drinkId
						sizeId
						drink {
							id
							name
							description
							price
							createdAt
							updatedAt
							categoryDrinksId
							__typename
						}
						size {
							id
							value
							extraCost
							createdAt
							updatedAt
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					nextToken
					__typename
				}
				flavorShots {
					items {
						id
						drinkId
						flavorShotId
						drink {
							id
							name
							description
							price
							createdAt
							updatedAt
							categoryDrinksId
							__typename
						}
						flavorShot {
							id
							name
							extraCost
							basketitemID
							createdAt
							updatedAt
							orderItemFlavorShotsId
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					nextToken
					__typename
				}
				milks {
					items {
						id
						drinkId
						milkId
						drink {
							id
							name
							description
							price
							createdAt
							updatedAt
							categoryDrinksId
							__typename
						}
						milk {
							id
							name
							createdAt
							updatedAt
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					nextToken
					__typename
				}
				createdAt
				updatedAt
				categoryDrinksId
				__typename
			}
			milk {
				id
				name
				drinks {
					items {
						id
						drinkId
						milkId
						drink {
							id
							name
							description
							price
							createdAt
							updatedAt
							categoryDrinksId
							__typename
						}
						milk {
							id
							name
							createdAt
							updatedAt
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					nextToken
					__typename
				}
				createdAt
				updatedAt
				__typename
			}
			size {
				id
				value
				extraCost
				drinks {
					items {
						id
						drinkId
						sizeId
						drink {
							id
							name
							description
							price
							createdAt
							updatedAt
							categoryDrinksId
							__typename
						}
						size {
							id
							value
							extraCost
							createdAt
							updatedAt
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					nextToken
					__typename
				}
				createdAt
				updatedAt
				__typename
			}
			flavorShots {
				items {
					id
					name
					extraCost
					basketitemID
					drinks {
						items {
							id
							drinkId
							flavorShotId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					createdAt
					updatedAt
					orderItemFlavorShotsId
					__typename
				}
				nextToken
				__typename
			}
			price
			orderID
			createdAt
			updatedAt
			orderItemDrinkId
			orderItemMilkId
			orderItemSizeId
			__typename
		}
	}
`;
export const listOrderItems = /* GraphQL */ `
	query ListOrderItems(
		$filter: ModelOrderItemFilterInput
		$limit: Int
		$nextToken: String
	) {
		listOrderItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				drink {
					id
					name
					description
					price
					sizes {
						items {
							id
							drinkId
							sizeId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					flavorShots {
						items {
							id
							drinkId
							flavorShotId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					milks {
						items {
							id
							drinkId
							milkId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					createdAt
					updatedAt
					categoryDrinksId
					__typename
				}
				milk {
					id
					name
					drinks {
						items {
							id
							drinkId
							milkId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					createdAt
					updatedAt
					__typename
				}
				size {
					id
					value
					extraCost
					drinks {
						items {
							id
							drinkId
							sizeId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					createdAt
					updatedAt
					__typename
				}
				flavorShots {
					items {
						id
						name
						extraCost
						basketitemID
						drinks {
							nextToken
							__typename
						}
						createdAt
						updatedAt
						orderItemFlavorShotsId
						__typename
					}
					nextToken
					__typename
				}
				price
				orderID
				createdAt
				updatedAt
				orderItemDrinkId
				orderItemMilkId
				orderItemSizeId
				__typename
			}
			nextToken
			__typename
		}
	}
`;
export const orderItemsByOrderID = /* GraphQL */ `
	query OrderItemsByOrderID(
		$orderID: ID!
		$sortDirection: ModelSortDirection
		$filter: ModelOrderItemFilterInput
		$limit: Int
		$nextToken: String
	) {
		orderItemsByOrderID(
			orderID: $orderID
			sortDirection: $sortDirection
			filter: $filter
			limit: $limit
			nextToken: $nextToken
		) {
			items {
				id
				drink {
					id
					name
					description
					price
					sizes {
						items {
							id
							drinkId
							sizeId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					flavorShots {
						items {
							id
							drinkId
							flavorShotId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					milks {
						items {
							id
							drinkId
							milkId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					createdAt
					updatedAt
					categoryDrinksId
					__typename
				}
				milk {
					id
					name
					drinks {
						items {
							id
							drinkId
							milkId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					createdAt
					updatedAt
					__typename
				}
				size {
					id
					value
					extraCost
					drinks {
						items {
							id
							drinkId
							sizeId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					createdAt
					updatedAt
					__typename
				}
				flavorShots {
					items {
						id
						name
						extraCost
						basketitemID
						drinks {
							nextToken
							__typename
						}
						createdAt
						updatedAt
						orderItemFlavorShotsId
						__typename
					}
					nextToken
					__typename
				}
				price
				orderID
				createdAt
				updatedAt
				orderItemDrinkId
				orderItemMilkId
				orderItemSizeId
				__typename
			}
			nextToken
			__typename
		}
	}
`;
export const getOrder = /* GraphQL */ `
	query GetOrder($id: ID!) {
		getOrder(id: $id) {
			id
			items {
				items {
					id
					drink {
						id
						name
						description
						price
						sizes {
							nextToken
							__typename
						}
						flavorShots {
							nextToken
							__typename
						}
						milks {
							nextToken
							__typename
						}
						createdAt
						updatedAt
						categoryDrinksId
						__typename
					}
					milk {
						id
						name
						drinks {
							nextToken
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					size {
						id
						value
						extraCost
						drinks {
							nextToken
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					flavorShots {
						items {
							id
							name
							extraCost
							basketitemID
							createdAt
							updatedAt
							orderItemFlavorShotsId
							__typename
						}
						nextToken
						__typename
					}
					price
					orderID
					createdAt
					updatedAt
					orderItemDrinkId
					orderItemMilkId
					orderItemSizeId
					__typename
				}
				nextToken
				__typename
			}
			store {
				id
				address
				latitude
				longtitude
				openingHour
				closingHour
				createdAt
				updatedAt
				__typename
			}
			total
			status
			User {
				id
				name
				email
				orders {
					items {
						id
						items {
							nextToken
							__typename
						}
						store {
							id
							address
							latitude
							longtitude
							openingHour
							closingHour
							createdAt
							updatedAt
							__typename
						}
						total
						status
						User {
							id
							name
							email
							createdAt
							updatedAt
							userDefaultStoreId
							userRoleId
							__typename
						}
						userID
						createdAt
						updatedAt
						userOrdersId
						orderStoreId
						__typename
					}
					nextToken
					__typename
				}
				defaultStore {
					id
					address
					latitude
					longtitude
					openingHour
					closingHour
					createdAt
					updatedAt
					__typename
				}
				role {
					id
					name
					createdAt
					updatedAt
					__typename
				}
				createdAt
				updatedAt
				userDefaultStoreId
				userRoleId
				__typename
			}
			userID
			createdAt
			updatedAt
			userOrdersId
			orderStoreId
			__typename
		}
	}
`;
export const listOrders = /* GraphQL */ `
	query ListOrders(
		$filter: ModelOrderFilterInput
		$limit: Int
		$nextToken: String
	) {
		listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				items {
					items {
						id
						drink {
							id
							name
							description
							price
							createdAt
							updatedAt
							categoryDrinksId
							__typename
						}
						milk {
							id
							name
							createdAt
							updatedAt
							__typename
						}
						size {
							id
							value
							extraCost
							createdAt
							updatedAt
							__typename
						}
						flavorShots {
							nextToken
							__typename
						}
						price
						orderID
						createdAt
						updatedAt
						orderItemDrinkId
						orderItemMilkId
						orderItemSizeId
						__typename
					}
					nextToken
					__typename
				}
				store {
					id
					address
					latitude
					longtitude
					openingHour
					closingHour
					createdAt
					updatedAt
					__typename
				}
				total
				status
				User {
					id
					name
					email
					orders {
						items {
							id
							total
							status
							userID
							createdAt
							updatedAt
							userOrdersId
							orderStoreId
							__typename
						}
						nextToken
						__typename
					}
					defaultStore {
						id
						address
						latitude
						longtitude
						openingHour
						closingHour
						createdAt
						updatedAt
						__typename
					}
					role {
						id
						name
						createdAt
						updatedAt
						__typename
					}
					createdAt
					updatedAt
					userDefaultStoreId
					userRoleId
					__typename
				}
				userID
				createdAt
				updatedAt
				userOrdersId
				orderStoreId
				__typename
			}
			nextToken
			__typename
		}
	}
`;
export const getDrink = /* GraphQL */ `
	query GetDrink($id: ID!) {
		getDrink(id: $id) {
			id
			name
			description
			price
			sizes {
				items {
					id
					drinkId
					sizeId
					drink {
						id
						name
						description
						price
						sizes {
							nextToken
							__typename
						}
						flavorShots {
							nextToken
							__typename
						}
						milks {
							nextToken
							__typename
						}
						createdAt
						updatedAt
						categoryDrinksId
						__typename
					}
					size {
						id
						value
						extraCost
						drinks {
							nextToken
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					createdAt
					updatedAt
					__typename
				}
				nextToken
				__typename
			}
			flavorShots {
				items {
					id
					drinkId
					flavorShotId
					drink {
						id
						name
						description
						price
						sizes {
							nextToken
							__typename
						}
						flavorShots {
							nextToken
							__typename
						}
						milks {
							nextToken
							__typename
						}
						createdAt
						updatedAt
						categoryDrinksId
						__typename
					}
					flavorShot {
						id
						name
						extraCost
						basketitemID
						drinks {
							nextToken
							__typename
						}
						createdAt
						updatedAt
						orderItemFlavorShotsId
						__typename
					}
					createdAt
					updatedAt
					__typename
				}
				nextToken
				__typename
			}
			milks {
				items {
					id
					drinkId
					milkId
					drink {
						id
						name
						description
						price
						sizes {
							nextToken
							__typename
						}
						flavorShots {
							nextToken
							__typename
						}
						milks {
							nextToken
							__typename
						}
						createdAt
						updatedAt
						categoryDrinksId
						__typename
					}
					milk {
						id
						name
						drinks {
							nextToken
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					createdAt
					updatedAt
					__typename
				}
				nextToken
				__typename
			}
			createdAt
			updatedAt
			categoryDrinksId
			__typename
		}
	}
`;
export const listDrinks = /* GraphQL */ `
	query ListDrinks(
		$filter: ModelDrinkFilterInput
		$limit: Int
		$nextToken: String
	) {
		listDrinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				name
				description
				price
				sizes {
					items {
						id
						drinkId
						sizeId
						drink {
							id
							name
							description
							price
							createdAt
							updatedAt
							categoryDrinksId
							__typename
						}
						size {
							id
							value
							extraCost
							createdAt
							updatedAt
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					nextToken
					__typename
				}
				flavorShots {
					items {
						id
						drinkId
						flavorShotId
						drink {
							id
							name
							description
							price
							createdAt
							updatedAt
							categoryDrinksId
							__typename
						}
						flavorShot {
							id
							name
							extraCost
							basketitemID
							createdAt
							updatedAt
							orderItemFlavorShotsId
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					nextToken
					__typename
				}
				milks {
					items {
						id
						drinkId
						milkId
						drink {
							id
							name
							description
							price
							createdAt
							updatedAt
							categoryDrinksId
							__typename
						}
						milk {
							id
							name
							createdAt
							updatedAt
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					nextToken
					__typename
				}
				createdAt
				updatedAt
				categoryDrinksId
				__typename
			}
			nextToken
			__typename
		}
	}
`;
export const getSize = /* GraphQL */ `
	query GetSize($id: ID!) {
		getSize(id: $id) {
			id
			value
			extraCost
			drinks {
				items {
					id
					drinkId
					sizeId
					drink {
						id
						name
						description
						price
						sizes {
							nextToken
							__typename
						}
						flavorShots {
							nextToken
							__typename
						}
						milks {
							nextToken
							__typename
						}
						createdAt
						updatedAt
						categoryDrinksId
						__typename
					}
					size {
						id
						value
						extraCost
						drinks {
							nextToken
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					createdAt
					updatedAt
					__typename
				}
				nextToken
				__typename
			}
			createdAt
			updatedAt
			__typename
		}
	}
`;
export const listSizes = /* GraphQL */ `
	query ListSizes(
		$filter: ModelSizeFilterInput
		$limit: Int
		$nextToken: String
	) {
		listSizes(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				value
				extraCost
				drinks {
					items {
						id
						drinkId
						sizeId
						drink {
							id
							name
							description
							price
							createdAt
							updatedAt
							categoryDrinksId
							__typename
						}
						size {
							id
							value
							extraCost
							createdAt
							updatedAt
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					nextToken
					__typename
				}
				createdAt
				updatedAt
				__typename
			}
			nextToken
			__typename
		}
	}
`;
export const getFlavorShot = /* GraphQL */ `
	query GetFlavorShot($id: ID!) {
		getFlavorShot(id: $id) {
			id
			name
			extraCost
			basketitemID
			drinks {
				items {
					id
					drinkId
					flavorShotId
					drink {
						id
						name
						description
						price
						sizes {
							nextToken
							__typename
						}
						flavorShots {
							nextToken
							__typename
						}
						milks {
							nextToken
							__typename
						}
						createdAt
						updatedAt
						categoryDrinksId
						__typename
					}
					flavorShot {
						id
						name
						extraCost
						basketitemID
						drinks {
							nextToken
							__typename
						}
						createdAt
						updatedAt
						orderItemFlavorShotsId
						__typename
					}
					createdAt
					updatedAt
					__typename
				}
				nextToken
				__typename
			}
			createdAt
			updatedAt
			orderItemFlavorShotsId
			__typename
		}
	}
`;
export const listFlavorShots = /* GraphQL */ `
	query ListFlavorShots(
		$filter: ModelFlavorShotFilterInput
		$limit: Int
		$nextToken: String
	) {
		listFlavorShots(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				name
				extraCost
				basketitemID
				drinks {
					items {
						id
						drinkId
						flavorShotId
						drink {
							id
							name
							description
							price
							createdAt
							updatedAt
							categoryDrinksId
							__typename
						}
						flavorShot {
							id
							name
							extraCost
							basketitemID
							createdAt
							updatedAt
							orderItemFlavorShotsId
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					nextToken
					__typename
				}
				createdAt
				updatedAt
				orderItemFlavorShotsId
				__typename
			}
			nextToken
			__typename
		}
	}
`;
export const flavorShotsByBasketitemID = /* GraphQL */ `
	query FlavorShotsByBasketitemID(
		$basketitemID: ID!
		$sortDirection: ModelSortDirection
		$filter: ModelFlavorShotFilterInput
		$limit: Int
		$nextToken: String
	) {
		flavorShotsByBasketitemID(
			basketitemID: $basketitemID
			sortDirection: $sortDirection
			filter: $filter
			limit: $limit
			nextToken: $nextToken
		) {
			items {
				id
				name
				extraCost
				basketitemID
				drinks {
					items {
						id
						drinkId
						flavorShotId
						drink {
							id
							name
							description
							price
							createdAt
							updatedAt
							categoryDrinksId
							__typename
						}
						flavorShot {
							id
							name
							extraCost
							basketitemID
							createdAt
							updatedAt
							orderItemFlavorShotsId
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					nextToken
					__typename
				}
				createdAt
				updatedAt
				orderItemFlavorShotsId
				__typename
			}
			nextToken
			__typename
		}
	}
`;
export const getMilk = /* GraphQL */ `
	query GetMilk($id: ID!) {
		getMilk(id: $id) {
			id
			name
			drinks {
				items {
					id
					drinkId
					milkId
					drink {
						id
						name
						description
						price
						sizes {
							nextToken
							__typename
						}
						flavorShots {
							nextToken
							__typename
						}
						milks {
							nextToken
							__typename
						}
						createdAt
						updatedAt
						categoryDrinksId
						__typename
					}
					milk {
						id
						name
						drinks {
							nextToken
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					createdAt
					updatedAt
					__typename
				}
				nextToken
				__typename
			}
			createdAt
			updatedAt
			__typename
		}
	}
`;
export const listMilks = /* GraphQL */ `
	query ListMilks(
		$filter: ModelMilkFilterInput
		$limit: Int
		$nextToken: String
	) {
		listMilks(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				name
				drinks {
					items {
						id
						drinkId
						milkId
						drink {
							id
							name
							description
							price
							createdAt
							updatedAt
							categoryDrinksId
							__typename
						}
						milk {
							id
							name
							createdAt
							updatedAt
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					nextToken
					__typename
				}
				createdAt
				updatedAt
				__typename
			}
			nextToken
			__typename
		}
	}
`;
export const getDrinkSize = /* GraphQL */ `
	query GetDrinkSize($id: ID!) {
		getDrinkSize(id: $id) {
			id
			drinkId
			sizeId
			drink {
				id
				name
				description
				price
				sizes {
					items {
						id
						drinkId
						sizeId
						drink {
							id
							name
							description
							price
							createdAt
							updatedAt
							categoryDrinksId
							__typename
						}
						size {
							id
							value
							extraCost
							createdAt
							updatedAt
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					nextToken
					__typename
				}
				flavorShots {
					items {
						id
						drinkId
						flavorShotId
						drink {
							id
							name
							description
							price
							createdAt
							updatedAt
							categoryDrinksId
							__typename
						}
						flavorShot {
							id
							name
							extraCost
							basketitemID
							createdAt
							updatedAt
							orderItemFlavorShotsId
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					nextToken
					__typename
				}
				milks {
					items {
						id
						drinkId
						milkId
						drink {
							id
							name
							description
							price
							createdAt
							updatedAt
							categoryDrinksId
							__typename
						}
						milk {
							id
							name
							createdAt
							updatedAt
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					nextToken
					__typename
				}
				createdAt
				updatedAt
				categoryDrinksId
				__typename
			}
			size {
				id
				value
				extraCost
				drinks {
					items {
						id
						drinkId
						sizeId
						drink {
							id
							name
							description
							price
							createdAt
							updatedAt
							categoryDrinksId
							__typename
						}
						size {
							id
							value
							extraCost
							createdAt
							updatedAt
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					nextToken
					__typename
				}
				createdAt
				updatedAt
				__typename
			}
			createdAt
			updatedAt
			__typename
		}
	}
`;
export const listDrinkSizes = /* GraphQL */ `
	query ListDrinkSizes(
		$filter: ModelDrinkSizeFilterInput
		$limit: Int
		$nextToken: String
	) {
		listDrinkSizes(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				drinkId
				sizeId
				drink {
					id
					name
					description
					price
					sizes {
						items {
							id
							drinkId
							sizeId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					flavorShots {
						items {
							id
							drinkId
							flavorShotId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					milks {
						items {
							id
							drinkId
							milkId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					createdAt
					updatedAt
					categoryDrinksId
					__typename
				}
				size {
					id
					value
					extraCost
					drinks {
						items {
							id
							drinkId
							sizeId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					createdAt
					updatedAt
					__typename
				}
				createdAt
				updatedAt
				__typename
			}
			nextToken
			__typename
		}
	}
`;
export const drinkSizesByDrinkId = /* GraphQL */ `
	query DrinkSizesByDrinkId(
		$drinkId: ID!
		$sortDirection: ModelSortDirection
		$filter: ModelDrinkSizeFilterInput
		$limit: Int
		$nextToken: String
	) {
		drinkSizesByDrinkId(
			drinkId: $drinkId
			sortDirection: $sortDirection
			filter: $filter
			limit: $limit
			nextToken: $nextToken
		) {
			items {
				id
				drinkId
				sizeId
				drink {
					id
					name
					description
					price
					sizes {
						items {
							id
							drinkId
							sizeId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					flavorShots {
						items {
							id
							drinkId
							flavorShotId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					milks {
						items {
							id
							drinkId
							milkId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					createdAt
					updatedAt
					categoryDrinksId
					__typename
				}
				size {
					id
					value
					extraCost
					drinks {
						items {
							id
							drinkId
							sizeId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					createdAt
					updatedAt
					__typename
				}
				createdAt
				updatedAt
				__typename
			}
			nextToken
			__typename
		}
	}
`;
export const drinkSizesBySizeId = /* GraphQL */ `
	query DrinkSizesBySizeId(
		$sizeId: ID!
		$sortDirection: ModelSortDirection
		$filter: ModelDrinkSizeFilterInput
		$limit: Int
		$nextToken: String
	) {
		drinkSizesBySizeId(
			sizeId: $sizeId
			sortDirection: $sortDirection
			filter: $filter
			limit: $limit
			nextToken: $nextToken
		) {
			items {
				id
				drinkId
				sizeId
				drink {
					id
					name
					description
					price
					sizes {
						items {
							id
							drinkId
							sizeId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					flavorShots {
						items {
							id
							drinkId
							flavorShotId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					milks {
						items {
							id
							drinkId
							milkId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					createdAt
					updatedAt
					categoryDrinksId
					__typename
				}
				size {
					id
					value
					extraCost
					drinks {
						items {
							id
							drinkId
							sizeId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					createdAt
					updatedAt
					__typename
				}
				createdAt
				updatedAt
				__typename
			}
			nextToken
			__typename
		}
	}
`;
export const getDrinkFlavorShot = /* GraphQL */ `
	query GetDrinkFlavorShot($id: ID!) {
		getDrinkFlavorShot(id: $id) {
			id
			drinkId
			flavorShotId
			drink {
				id
				name
				description
				price
				sizes {
					items {
						id
						drinkId
						sizeId
						drink {
							id
							name
							description
							price
							createdAt
							updatedAt
							categoryDrinksId
							__typename
						}
						size {
							id
							value
							extraCost
							createdAt
							updatedAt
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					nextToken
					__typename
				}
				flavorShots {
					items {
						id
						drinkId
						flavorShotId
						drink {
							id
							name
							description
							price
							createdAt
							updatedAt
							categoryDrinksId
							__typename
						}
						flavorShot {
							id
							name
							extraCost
							basketitemID
							createdAt
							updatedAt
							orderItemFlavorShotsId
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					nextToken
					__typename
				}
				milks {
					items {
						id
						drinkId
						milkId
						drink {
							id
							name
							description
							price
							createdAt
							updatedAt
							categoryDrinksId
							__typename
						}
						milk {
							id
							name
							createdAt
							updatedAt
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					nextToken
					__typename
				}
				createdAt
				updatedAt
				categoryDrinksId
				__typename
			}
			flavorShot {
				id
				name
				extraCost
				basketitemID
				drinks {
					items {
						id
						drinkId
						flavorShotId
						drink {
							id
							name
							description
							price
							createdAt
							updatedAt
							categoryDrinksId
							__typename
						}
						flavorShot {
							id
							name
							extraCost
							basketitemID
							createdAt
							updatedAt
							orderItemFlavorShotsId
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					nextToken
					__typename
				}
				createdAt
				updatedAt
				orderItemFlavorShotsId
				__typename
			}
			createdAt
			updatedAt
			__typename
		}
	}
`;
export const listDrinkFlavorShots = /* GraphQL */ `
	query ListDrinkFlavorShots(
		$filter: ModelDrinkFlavorShotFilterInput
		$limit: Int
		$nextToken: String
	) {
		listDrinkFlavorShots(
			filter: $filter
			limit: $limit
			nextToken: $nextToken
		) {
			items {
				id
				drinkId
				flavorShotId
				drink {
					id
					name
					description
					price
					sizes {
						items {
							id
							drinkId
							sizeId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					flavorShots {
						items {
							id
							drinkId
							flavorShotId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					milks {
						items {
							id
							drinkId
							milkId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					createdAt
					updatedAt
					categoryDrinksId
					__typename
				}
				flavorShot {
					id
					name
					extraCost
					basketitemID
					drinks {
						items {
							id
							drinkId
							flavorShotId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					createdAt
					updatedAt
					orderItemFlavorShotsId
					__typename
				}
				createdAt
				updatedAt
				__typename
			}
			nextToken
			__typename
		}
	}
`;
export const drinkFlavorShotsByDrinkId = /* GraphQL */ `
	query DrinkFlavorShotsByDrinkId(
		$drinkId: ID!
		$sortDirection: ModelSortDirection
		$filter: ModelDrinkFlavorShotFilterInput
		$limit: Int
		$nextToken: String
	) {
		drinkFlavorShotsByDrinkId(
			drinkId: $drinkId
			sortDirection: $sortDirection
			filter: $filter
			limit: $limit
			nextToken: $nextToken
		) {
			items {
				id
				drinkId
				flavorShotId
				drink {
					id
					name
					description
					price
					sizes {
						items {
							id
							drinkId
							sizeId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					flavorShots {
						items {
							id
							drinkId
							flavorShotId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					milks {
						items {
							id
							drinkId
							milkId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					createdAt
					updatedAt
					categoryDrinksId
					__typename
				}
				flavorShot {
					id
					name
					extraCost
					basketitemID
					drinks {
						items {
							id
							drinkId
							flavorShotId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					createdAt
					updatedAt
					orderItemFlavorShotsId
					__typename
				}
				createdAt
				updatedAt
				__typename
			}
			nextToken
			__typename
		}
	}
`;
export const drinkFlavorShotsByFlavorShotId = /* GraphQL */ `
	query DrinkFlavorShotsByFlavorShotId(
		$flavorShotId: ID!
		$sortDirection: ModelSortDirection
		$filter: ModelDrinkFlavorShotFilterInput
		$limit: Int
		$nextToken: String
	) {
		drinkFlavorShotsByFlavorShotId(
			flavorShotId: $flavorShotId
			sortDirection: $sortDirection
			filter: $filter
			limit: $limit
			nextToken: $nextToken
		) {
			items {
				id
				drinkId
				flavorShotId
				drink {
					id
					name
					description
					price
					sizes {
						items {
							id
							drinkId
							sizeId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					flavorShots {
						items {
							id
							drinkId
							flavorShotId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					milks {
						items {
							id
							drinkId
							milkId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					createdAt
					updatedAt
					categoryDrinksId
					__typename
				}
				flavorShot {
					id
					name
					extraCost
					basketitemID
					drinks {
						items {
							id
							drinkId
							flavorShotId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					createdAt
					updatedAt
					orderItemFlavorShotsId
					__typename
				}
				createdAt
				updatedAt
				__typename
			}
			nextToken
			__typename
		}
	}
`;
export const getDrinkMilk = /* GraphQL */ `
	query GetDrinkMilk($id: ID!) {
		getDrinkMilk(id: $id) {
			id
			drinkId
			milkId
			drink {
				id
				name
				description
				price
				sizes {
					items {
						id
						drinkId
						sizeId
						drink {
							id
							name
							description
							price
							createdAt
							updatedAt
							categoryDrinksId
							__typename
						}
						size {
							id
							value
							extraCost
							createdAt
							updatedAt
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					nextToken
					__typename
				}
				flavorShots {
					items {
						id
						drinkId
						flavorShotId
						drink {
							id
							name
							description
							price
							createdAt
							updatedAt
							categoryDrinksId
							__typename
						}
						flavorShot {
							id
							name
							extraCost
							basketitemID
							createdAt
							updatedAt
							orderItemFlavorShotsId
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					nextToken
					__typename
				}
				milks {
					items {
						id
						drinkId
						milkId
						drink {
							id
							name
							description
							price
							createdAt
							updatedAt
							categoryDrinksId
							__typename
						}
						milk {
							id
							name
							createdAt
							updatedAt
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					nextToken
					__typename
				}
				createdAt
				updatedAt
				categoryDrinksId
				__typename
			}
			milk {
				id
				name
				drinks {
					items {
						id
						drinkId
						milkId
						drink {
							id
							name
							description
							price
							createdAt
							updatedAt
							categoryDrinksId
							__typename
						}
						milk {
							id
							name
							createdAt
							updatedAt
							__typename
						}
						createdAt
						updatedAt
						__typename
					}
					nextToken
					__typename
				}
				createdAt
				updatedAt
				__typename
			}
			createdAt
			updatedAt
			__typename
		}
	}
`;
export const listDrinkMilks = /* GraphQL */ `
	query ListDrinkMilks(
		$filter: ModelDrinkMilkFilterInput
		$limit: Int
		$nextToken: String
	) {
		listDrinkMilks(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				drinkId
				milkId
				drink {
					id
					name
					description
					price
					sizes {
						items {
							id
							drinkId
							sizeId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					flavorShots {
						items {
							id
							drinkId
							flavorShotId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					milks {
						items {
							id
							drinkId
							milkId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					createdAt
					updatedAt
					categoryDrinksId
					__typename
				}
				milk {
					id
					name
					drinks {
						items {
							id
							drinkId
							milkId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					createdAt
					updatedAt
					__typename
				}
				createdAt
				updatedAt
				__typename
			}
			nextToken
			__typename
		}
	}
`;
export const drinkMilksByDrinkId = /* GraphQL */ `
	query DrinkMilksByDrinkId(
		$drinkId: ID!
		$sortDirection: ModelSortDirection
		$filter: ModelDrinkMilkFilterInput
		$limit: Int
		$nextToken: String
	) {
		drinkMilksByDrinkId(
			drinkId: $drinkId
			sortDirection: $sortDirection
			filter: $filter
			limit: $limit
			nextToken: $nextToken
		) {
			items {
				id
				drinkId
				milkId
				drink {
					id
					name
					description
					price
					sizes {
						items {
							id
							drinkId
							sizeId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					flavorShots {
						items {
							id
							drinkId
							flavorShotId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					milks {
						items {
							id
							drinkId
							milkId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					createdAt
					updatedAt
					categoryDrinksId
					__typename
				}
				milk {
					id
					name
					drinks {
						items {
							id
							drinkId
							milkId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					createdAt
					updatedAt
					__typename
				}
				createdAt
				updatedAt
				__typename
			}
			nextToken
			__typename
		}
	}
`;
export const drinkMilksByMilkId = /* GraphQL */ `
	query DrinkMilksByMilkId(
		$milkId: ID!
		$sortDirection: ModelSortDirection
		$filter: ModelDrinkMilkFilterInput
		$limit: Int
		$nextToken: String
	) {
		drinkMilksByMilkId(
			milkId: $milkId
			sortDirection: $sortDirection
			filter: $filter
			limit: $limit
			nextToken: $nextToken
		) {
			items {
				id
				drinkId
				milkId
				drink {
					id
					name
					description
					price
					sizes {
						items {
							id
							drinkId
							sizeId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					flavorShots {
						items {
							id
							drinkId
							flavorShotId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					milks {
						items {
							id
							drinkId
							milkId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					createdAt
					updatedAt
					categoryDrinksId
					__typename
				}
				milk {
					id
					name
					drinks {
						items {
							id
							drinkId
							milkId
							createdAt
							updatedAt
							__typename
						}
						nextToken
						__typename
					}
					createdAt
					updatedAt
					__typename
				}
				createdAt
				updatedAt
				__typename
			}
			nextToken
			__typename
		}
	}
`;

export const listCategories2 = /* GraphQL */ `
	query ListCategories(
		$filter: ModelCategoryFilterInput
		$limit: Int
		$nextToken: String
	) {
		listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				name
				drinks {
					items {
						id
						name
						price
						description
						categoryDrinksId
						sizes {
							items {
								id
								value
								extraCost
							}
						}
						milks {
							items {
								id
								name
							}
						}
						flavorShots {
							items {
								id
								name
								extraCost
							}
						}
					}
					nextToken
					__typename
				}
				createdAt
				updatedAt
				__typename
			}
			nextToken
			__typename
		}
	}
`;

export const listCategories = /* GraphQL */ `
	query ListCategories(
		$filter: ModelCategoryFilterInput
		$limit: Int
		$nextToken: String
	) {
		listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				name
				drinks {
					items {
						id
						name
						description
						price
						sizes {
							items {
								size {
									value
									extraCost
									id
								}
							}
							nextToken
							__typename
						}
						flavorShots {
							nextToken
							__typename
						}
						milks {
							items {
								milk {
									name
									id
								}
							}
						}
						createdAt
						updatedAt
						categoryDrinksId
						__typename
					}
					nextToken
					__typename
				}
				createdAt
				updatedAt
				__typename
			}
			nextToken
			__typename
		}
	}
`;
