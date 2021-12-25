import React from 'react'

import {connect} from 'react-redux'

import './collections-overview.styles.scss'

import {selectCollectionForPreview} from '../Redux/shop/shop.selectors'


import {createStructuredSelector}  from 'reselect'

import CollectionPreview from '../../component/preview-collection/collection-preview.component'

const CollectionsOverview = ({collections}) =>(
    <div className = 'collections-overview'>
    {
        collections.map(({id,...otherCollectionProps}) =>(
            <CollectionPreview key= {id} {...otherCollectionProps}/>
        ))
    }
    </div>
)
const mapStateToProps = createStructuredSelector({
    collections:selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);