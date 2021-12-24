import React from 'react'

import './collection.styles.scss'

import {connect} from 'react-redux'

import {selectCollection} from '../../Redux/shop/shop.selectors'

import CollectionItem from '../../collection-item/collection-item.component'

const CollectionPage = ({collection}) =>(
    <div className= 'collection-page'>
    <h2>COLLECTION PAGE</h2>
    </div>
)

const mapStateToProps = (state,ownProps) =>({
    collection:selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage)