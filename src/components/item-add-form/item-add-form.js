import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component{

    render () {
        return (
            <div className="list-add-form">
                <button 
                className ="btn btn-outline-secondary"
                onClick={()=> this.props.onItemAdded('Make some job')}>
                    Add Item
                </button>
            </div>

        )
    }
}