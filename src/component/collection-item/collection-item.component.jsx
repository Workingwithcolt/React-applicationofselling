import React from 'react';

import CustomeButton from '../custom-button/custom-button.component'

import { connect } from 'react-redux'

import { addItem } from  '../Redux/cart/cart.action'

import './collection-item.style.scss';

const CollectionItem = ({item,addItem}) =>{
    const {name,price,imageUrl} = item;
    return (
    <div className="collection-item">
        <div className='image'style=
                      {{backgroundImage:`url(${imageUrl})`}}/>
            <div className="collection-footer">
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
            </div>
            <CustomeButton  onClick ={() => addItem(item)}  className = 'custom-button' inverted>ADD TO CART </CustomeButton>
    </div>
)
}
export  const mapDispatchToProps = dispatch => ({
    addItem:item =>dispatch(addItem(item))
})
export default  connect(null,mapDispatchToProps)(CollectionItem);