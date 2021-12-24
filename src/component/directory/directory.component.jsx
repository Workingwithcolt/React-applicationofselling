import React,{ Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss';
import {connect } from 'react-redux'

import {createStructuredSelector} from 'reselect'

import {selectDirectorySections} from '../Redux/directory/directory.selectors'
const  Directory = ({section})=>{
        return(
            <div className = 'directory-menu'>
            {
                this.state.section.map(({ title , imageUrl , id  , size , linkUrl })  => (
                    <MenuItem key = {id} title = {title} imageUrl  = {imageUrl} size = {size} linkUrl={linkUrl}/>
                ))}
            </div>
        )
    
      }

const mapStateToProps =createStructuredSelector({
  sections:selectDirectorySections
})
export default connect(mapStateToProps)(Directory);