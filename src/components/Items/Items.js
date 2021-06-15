import React, { Component } from 'react'
import './Items.css';

export class Items extends Component {
    static rows;
    render() {
        this.rows=this.props.rows;
        return (
            <div className="items">
                <ul>
                    {
                        this.rows.map((Item)=> <li key={Item.id} className={`point ${Item.isDone ? 'onTrue' : 'onFalse'}`}  onClick={()=>this.props.statusItem(Item.id)}>{Item.title}</li>)
                    }
                </ul>
            </div>
        )
    }
}

export default Items