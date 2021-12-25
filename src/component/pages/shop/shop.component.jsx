import React from 'react';

import {Route,Switch} from 'react-router-dom'

import {connect} from 'react-redux'

import {createStructuredSelector} from 'reselect'



import CollectionPreview from '../../preview-collection/collection-preview.component';

import {selectCollections} from '../../Redux/shop/shop.selectors'

import CollectionsOverview from '../../collections-overview/collections-overview.component'

import CollectionPage from '../collection/collection.component'

const ShopPage = ({match}) =>{
    // console.log(Props)
    const {path} = match
    console.log(path+"This our path")
    return (
        <div className='shop-page'>
            <Route exact path ={`${path}`} component = {CollectionsOverview}/>
            <Route exact path = {`${path}/:collectionId`} component = {CollectionPage}/>
        </div>
    )}
    

export default ShopPage;