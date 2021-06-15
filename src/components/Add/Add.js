import React, { Component } from 'react'
import './Add.css';
import Items from '../Items/Items';

export class Add extends Component {
    state={
        rows: [],
        todoTitle:'',
    };
    addItem=(e)=>{
        if(this.state.todoTitle !==''){
            this.setState({
                rows: [...this.state.rows,{id: Date.now(),title: this.state.todoTitle, isDone:false}],
                todoTitle: ''
            });
        }
    }
    changeInput=(e)=>{
        this.setState({
            todoTitle:e.target.value,
        })
    }
    statusItem=(id)=>{
         let newItems=this.state.rows.map((item)=> item.id!== id ? item : {...item,isDone: !item.isDone,});
         this.setState({rows: newItems});
    }
    render() {
        return (
            <div>
                <Items rows={this.state.rows} statusItem={this.statusItem}/>
                <div className="add">
                    <input type="text" value={this.state.todoTitle} className="input" onChange={this.changeInput}></input>
                    <button
                    onClick={this.addItem}
                    >
                        Click
                    </button>
                </div>
            </div>
        )
    }
} 

export default Add