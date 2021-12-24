import React from 'react';

import {connect} from 'react-redux'

import {createStructuredSelector} from 'reselect'

import CollectionPreview from '../../preview-collection/collection-preview.component';

import {selectCollections} from '../../Redux/shop/shop.selectors'

const  ShopPage = ({collections}) =>{
    return (
        <div className='shop-page'>
        {
            collections.map(({id,...otherCollectionProps})=>(
                <CollectionPreview key = {id} {...otherCollectionProps}></CollectionPreview>
            ))
        }

        </div>
    )
}
const mapStateToProps = createStructuredSelector =>({
    collections:selectCollections
})
export default connect(mapStateToProps)(ShopPage);