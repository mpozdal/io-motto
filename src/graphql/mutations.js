/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBasketItem = /* GraphQL */ `
  mutation CreateBasketItem(
    $input: CreateBasketItemInput!
    $condition: ModelBasketItemConditionInput
  ) {
    createBasketItem(input: $input, condition: $condition) {
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
export const updateBasketItem = /* GraphQL */ `
  mutation UpdateBasketItem(
    $input: UpdateBasketItemInput!
    $condition: ModelBasketItemConditionInput
  ) {
    updateBasketItem(input: $input, condition: $condition) {
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
export const deleteBasketItem = /* GraphQL */ `
  mutation DeleteBasketItem(
    $input: DeleteBasketItemInput!
    $condition: ModelBasketItemConditionInput
  ) {
    deleteBasketItem(input: $input, condition: $condition) {
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
export const createBasket = /* GraphQL */ `
  mutation CreateBasket(
    $input: CreateBasketInput!
    $condition: ModelBasketConditionInput
  ) {
    createBasket(input: $input, condition: $condition) {
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
export const updateBasket = /* GraphQL */ `
  mutation UpdateBasket(
    $input: UpdateBasketInput!
    $condition: ModelBasketConditionInput
  ) {
    updateBasket(input: $input, condition: $condition) {
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
export const deleteBasket = /* GraphQL */ `
  mutation DeleteBasket(
    $input: DeleteBasketInput!
    $condition: ModelBasketConditionInput
  ) {
    deleteBasket(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createRole = /* GraphQL */ `
  mutation CreateRole(
    $input: CreateRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    createRole(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateRole = /* GraphQL */ `
  mutation UpdateRole(
    $input: UpdateRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    updateRole(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteRole = /* GraphQL */ `
  mutation DeleteRole(
    $input: DeleteRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    deleteRole(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createStore = /* GraphQL */ `
  mutation CreateStore(
    $input: CreateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    createStore(input: $input, condition: $condition) {
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
export const updateStore = /* GraphQL */ `
  mutation UpdateStore(
    $input: UpdateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    updateStore(input: $input, condition: $condition) {
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
export const deleteStore = /* GraphQL */ `
  mutation DeleteStore(
    $input: DeleteStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    deleteStore(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createOrderItem = /* GraphQL */ `
  mutation CreateOrderItem(
    $input: CreateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    createOrderItem(input: $input, condition: $condition) {
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
export const updateOrderItem = /* GraphQL */ `
  mutation UpdateOrderItem(
    $input: UpdateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    updateOrderItem(input: $input, condition: $condition) {
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
export const deleteOrderItem = /* GraphQL */ `
  mutation DeleteOrderItem(
    $input: DeleteOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    deleteOrderItem(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createDrink = /* GraphQL */ `
  mutation CreateDrink(
    $input: CreateDrinkInput!
    $condition: ModelDrinkConditionInput
  ) {
    createDrink(input: $input, condition: $condition) {
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
export const updateDrink = /* GraphQL */ `
  mutation UpdateDrink(
    $input: UpdateDrinkInput!
    $condition: ModelDrinkConditionInput
  ) {
    updateDrink(input: $input, condition: $condition) {
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
export const deleteDrink = /* GraphQL */ `
  mutation DeleteDrink(
    $input: DeleteDrinkInput!
    $condition: ModelDrinkConditionInput
  ) {
    deleteDrink(input: $input, condition: $condition) {
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
export const createSize = /* GraphQL */ `
  mutation CreateSize(
    $input: CreateSizeInput!
    $condition: ModelSizeConditionInput
  ) {
    createSize(input: $input, condition: $condition) {
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
export const updateSize = /* GraphQL */ `
  mutation UpdateSize(
    $input: UpdateSizeInput!
    $condition: ModelSizeConditionInput
  ) {
    updateSize(input: $input, condition: $condition) {
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
export const deleteSize = /* GraphQL */ `
  mutation DeleteSize(
    $input: DeleteSizeInput!
    $condition: ModelSizeConditionInput
  ) {
    deleteSize(input: $input, condition: $condition) {
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
export const createFlavorShot = /* GraphQL */ `
  mutation CreateFlavorShot(
    $input: CreateFlavorShotInput!
    $condition: ModelFlavorShotConditionInput
  ) {
    createFlavorShot(input: $input, condition: $condition) {
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
export const updateFlavorShot = /* GraphQL */ `
  mutation UpdateFlavorShot(
    $input: UpdateFlavorShotInput!
    $condition: ModelFlavorShotConditionInput
  ) {
    updateFlavorShot(input: $input, condition: $condition) {
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
export const deleteFlavorShot = /* GraphQL */ `
  mutation DeleteFlavorShot(
    $input: DeleteFlavorShotInput!
    $condition: ModelFlavorShotConditionInput
  ) {
    deleteFlavorShot(input: $input, condition: $condition) {
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
export const createMilk = /* GraphQL */ `
  mutation CreateMilk(
    $input: CreateMilkInput!
    $condition: ModelMilkConditionInput
  ) {
    createMilk(input: $input, condition: $condition) {
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
export const updateMilk = /* GraphQL */ `
  mutation UpdateMilk(
    $input: UpdateMilkInput!
    $condition: ModelMilkConditionInput
  ) {
    updateMilk(input: $input, condition: $condition) {
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
export const deleteMilk = /* GraphQL */ `
  mutation DeleteMilk(
    $input: DeleteMilkInput!
    $condition: ModelMilkConditionInput
  ) {
    deleteMilk(input: $input, condition: $condition) {
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
export const createDrinkSize = /* GraphQL */ `
  mutation CreateDrinkSize(
    $input: CreateDrinkSizeInput!
    $condition: ModelDrinkSizeConditionInput
  ) {
    createDrinkSize(input: $input, condition: $condition) {
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
export const updateDrinkSize = /* GraphQL */ `
  mutation UpdateDrinkSize(
    $input: UpdateDrinkSizeInput!
    $condition: ModelDrinkSizeConditionInput
  ) {
    updateDrinkSize(input: $input, condition: $condition) {
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
export const deleteDrinkSize = /* GraphQL */ `
  mutation DeleteDrinkSize(
    $input: DeleteDrinkSizeInput!
    $condition: ModelDrinkSizeConditionInput
  ) {
    deleteDrinkSize(input: $input, condition: $condition) {
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
export const createDrinkFlavorShot = /* GraphQL */ `
  mutation CreateDrinkFlavorShot(
    $input: CreateDrinkFlavorShotInput!
    $condition: ModelDrinkFlavorShotConditionInput
  ) {
    createDrinkFlavorShot(input: $input, condition: $condition) {
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
export const updateDrinkFlavorShot = /* GraphQL */ `
  mutation UpdateDrinkFlavorShot(
    $input: UpdateDrinkFlavorShotInput!
    $condition: ModelDrinkFlavorShotConditionInput
  ) {
    updateDrinkFlavorShot(input: $input, condition: $condition) {
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
export const deleteDrinkFlavorShot = /* GraphQL */ `
  mutation DeleteDrinkFlavorShot(
    $input: DeleteDrinkFlavorShotInput!
    $condition: ModelDrinkFlavorShotConditionInput
  ) {
    deleteDrinkFlavorShot(input: $input, condition: $condition) {
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
export const createDrinkMilk = /* GraphQL */ `
  mutation CreateDrinkMilk(
    $input: CreateDrinkMilkInput!
    $condition: ModelDrinkMilkConditionInput
  ) {
    createDrinkMilk(input: $input, condition: $condition) {
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
export const updateDrinkMilk = /* GraphQL */ `
  mutation UpdateDrinkMilk(
    $input: UpdateDrinkMilkInput!
    $condition: ModelDrinkMilkConditionInput
  ) {
    updateDrinkMilk(input: $input, condition: $condition) {
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
export const deleteDrinkMilk = /* GraphQL */ `
  mutation DeleteDrinkMilk(
    $input: DeleteDrinkMilkInput!
    $condition: ModelDrinkMilkConditionInput
  ) {
    deleteDrinkMilk(input: $input, condition: $condition) {
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
