import {createSelector } from 'reselect'

const selectShop  = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key =>collections[key])
)
//Object.keys(collections) that will return the arrays of the key
//then map(key =>collections[key])then we map that array then assign the value according to the key which we provided
export const selectCollection = collectionUrlParam => 
createSelector(
    [selectCollections],
    collections =>collections[collectionUrlParam]
)