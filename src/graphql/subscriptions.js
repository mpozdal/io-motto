/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBasketItem = /* GraphQL */ `
  subscription OnCreateBasketItem(
    $filter: ModelSubscriptionBasketItemFilterInput
  ) {
    onCreateBasketItem(filter: $filter) {
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
export const onUpdateBasketItem = /* GraphQL */ `
  subscription OnUpdateBasketItem(
    $filter: ModelSubscriptionBasketItemFilterInput
  ) {
    onUpdateBasketItem(filter: $filter) {
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
export const onDeleteBasketItem = /* GraphQL */ `
  subscription OnDeleteBasketItem(
    $filter: ModelSubscriptionBasketItemFilterInput
  ) {
    onDeleteBasketItem(filter: $filter) {
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
export const onCreateBasket = /* GraphQL */ `
  subscription OnCreateBasket($filter: ModelSubscriptionBasketFilterInput) {
    onCreateBasket(filter: $filter) {
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
export const onUpdateBasket = /* GraphQL */ `
  subscription OnUpdateBasket($filter: ModelSubscriptionBasketFilterInput) {
    onUpdateBasket(filter: $filter) {
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
export const onDeleteBasket = /* GraphQL */ `
  subscription OnDeleteBasket($filter: ModelSubscriptionBasketFilterInput) {
    onDeleteBasket(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateRole = /* GraphQL */ `
  subscription OnCreateRole($filter: ModelSubscriptionRoleFilterInput) {
    onCreateRole(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateRole = /* GraphQL */ `
  subscription OnUpdateRole($filter: ModelSubscriptionRoleFilterInput) {
    onUpdateRole(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteRole = /* GraphQL */ `
  subscription OnDeleteRole($filter: ModelSubscriptionRoleFilterInput) {
    onDeleteRole(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateStore = /* GraphQL */ `
  subscription OnCreateStore($filter: ModelSubscriptionStoreFilterInput) {
    onCreateStore(filter: $filter) {
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
export const onUpdateStore = /* GraphQL */ `
  subscription OnUpdateStore($filter: ModelSubscriptionStoreFilterInput) {
    onUpdateStore(filter: $filter) {
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
export const onDeleteStore = /* GraphQL */ `
  subscription OnDeleteStore($filter: ModelSubscriptionStoreFilterInput) {
    onDeleteStore(filter: $filter) {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
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
export const onCreateOrderItem = /* GraphQL */ `
  subscription OnCreateOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
  ) {
    onCreateOrderItem(filter: $filter) {
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
export const onUpdateOrderItem = /* GraphQL */ `
  subscription OnUpdateOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
  ) {
    onUpdateOrderItem(filter: $filter) {
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
export const onDeleteOrderItem = /* GraphQL */ `
  subscription OnDeleteOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
  ) {
    onDeleteOrderItem(filter: $filter) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
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
export const onCreateDrink = /* GraphQL */ `
  subscription OnCreateDrink($filter: ModelSubscriptionDrinkFilterInput) {
    onCreateDrink(filter: $filter) {
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
export const onUpdateDrink = /* GraphQL */ `
  subscription OnUpdateDrink($filter: ModelSubscriptionDrinkFilterInput) {
    onUpdateDrink(filter: $filter) {
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
export const onDeleteDrink = /* GraphQL */ `
  subscription OnDeleteDrink($filter: ModelSubscriptionDrinkFilterInput) {
    onDeleteDrink(filter: $filter) {
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
export const onCreateSize = /* GraphQL */ `
  subscription OnCreateSize($filter: ModelSubscriptionSizeFilterInput) {
    onCreateSize(filter: $filter) {
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
export const onUpdateSize = /* GraphQL */ `
  subscription OnUpdateSize($filter: ModelSubscriptionSizeFilterInput) {
    onUpdateSize(filter: $filter) {
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
export const onDeleteSize = /* GraphQL */ `
  subscription OnDeleteSize($filter: ModelSubscriptionSizeFilterInput) {
    onDeleteSize(filter: $filter) {
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
export const onCreateFlavorShot = /* GraphQL */ `
  subscription OnCreateFlavorShot(
    $filter: ModelSubscriptionFlavorShotFilterInput
  ) {
    onCreateFlavorShot(filter: $filter) {
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
export const onUpdateFlavorShot = /* GraphQL */ `
  subscription OnUpdateFlavorShot(
    $filter: ModelSubscriptionFlavorShotFilterInput
  ) {
    onUpdateFlavorShot(filter: $filter) {
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
export const onDeleteFlavorShot = /* GraphQL */ `
  subscription OnDeleteFlavorShot(
    $filter: ModelSubscriptionFlavorShotFilterInput
  ) {
    onDeleteFlavorShot(filter: $filter) {
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
export const onCreateMilk = /* GraphQL */ `
  subscription OnCreateMilk($filter: ModelSubscriptionMilkFilterInput) {
    onCreateMilk(filter: $filter) {
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
export const onUpdateMilk = /* GraphQL */ `
  subscription OnUpdateMilk($filter: ModelSubscriptionMilkFilterInput) {
    onUpdateMilk(filter: $filter) {
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
export const onDeleteMilk = /* GraphQL */ `
  subscription OnDeleteMilk($filter: ModelSubscriptionMilkFilterInput) {
    onDeleteMilk(filter: $filter) {
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
export const onCreateDrinkSize = /* GraphQL */ `
  subscription OnCreateDrinkSize(
    $filter: ModelSubscriptionDrinkSizeFilterInput
  ) {
    onCreateDrinkSize(filter: $filter) {
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
export const onUpdateDrinkSize = /* GraphQL */ `
  subscription OnUpdateDrinkSize(
    $filter: ModelSubscriptionDrinkSizeFilterInput
  ) {
    onUpdateDrinkSize(filter: $filter) {
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
export const onDeleteDrinkSize = /* GraphQL */ `
  subscription OnDeleteDrinkSize(
    $filter: ModelSubscriptionDrinkSizeFilterInput
  ) {
    onDeleteDrinkSize(filter: $filter) {
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
export const onCreateDrinkFlavorShot = /* GraphQL */ `
  subscription OnCreateDrinkFlavorShot(
    $filter: ModelSubscriptionDrinkFlavorShotFilterInput
  ) {
    onCreateDrinkFlavorShot(filter: $filter) {
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
export const onUpdateDrinkFlavorShot = /* GraphQL */ `
  subscription OnUpdateDrinkFlavorShot(
    $filter: ModelSubscriptionDrinkFlavorShotFilterInput
  ) {
    onUpdateDrinkFlavorShot(filter: $filter) {
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
export const onDeleteDrinkFlavorShot = /* GraphQL */ `
  subscription OnDeleteDrinkFlavorShot(
    $filter: ModelSubscriptionDrinkFlavorShotFilterInput
  ) {
    onDeleteDrinkFlavorShot(filter: $filter) {
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
export const onCreateDrinkMilk = /* GraphQL */ `
  subscription OnCreateDrinkMilk(
    $filter: ModelSubscriptionDrinkMilkFilterInput
  ) {
    onCreateDrinkMilk(filter: $filter) {
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
export const onUpdateDrinkMilk = /* GraphQL */ `
  subscription OnUpdateDrinkMilk(
    $filter: ModelSubscriptionDrinkMilkFilterInput
  ) {
    onUpdateDrinkMilk(filter: $filter) {
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
export const onDeleteDrinkMilk = /* GraphQL */ `
  subscription OnDeleteDrinkMilk(
    $filter: ModelSubscriptionDrinkMilkFilterInput
  ) {
    onDeleteDrinkMilk(filter: $filter) {
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
