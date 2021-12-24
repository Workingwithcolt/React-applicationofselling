import {createSelector } from 'reselect'

const selecetShop  = state => state.shop

export const selectCollections = createSelector(
    [selecetShop],
    shop => shop.selectCollections
)