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
                section.map(({id,...otherSectionProps})  => (
                    <MenuItem key = {id} {...otherSectionProps}/>
                ))}
            </div>
        )
    
      }

const mapStateToProps =createStructuredSelector({
  section:selectDirectorySections
})
export default connect(mapStateToProps)(Directory);