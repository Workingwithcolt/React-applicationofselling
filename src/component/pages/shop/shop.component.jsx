import React from 'react';

import {connect} from 'react-redux'

import {createStructuredSelector} from 'reselect'

import CollectionPreview from '../../preview-collection/collection-preview.component';

import {selectCollections} from '../../Redux/shop/shop.selectors'

import CollectionsOverview from '../../collections-overview/collections-overview.component'

const ShopPage = ({collections}) =>(
        <div className='shop-page'>
        {
            <CollectionsOverview/>
        }
        </div>
    )
export default ShopPage;