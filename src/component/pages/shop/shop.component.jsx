import React from 'react';

import {Route} from 'react-router-dom'

import {connect} from 'react-redux'

import {createStructuredSelector} from 'reselect'


import CollectionPreview from '../../preview-collection/collection-preview.component';

import {selectCollections} from '../../Redux/shop/shop.selectors'

import CollectionsOverview from '../../collections-overview/collections-overview.component'

import CollectionPage from '../collection/collection.component'

const ShopPage = ({match}) =>(
        <div className='shop-page'>
            <Route exact path ={`${match.path}`} component = {CollectionsOverview}/>
            <Route path ={`${match.path}/:collectionId`} component = {CollectionPage}/>
        </div>
    )

export default ShopPage;