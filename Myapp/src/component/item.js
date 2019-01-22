import React, {Component } from 'react';
import "./item.css";

class Item extends Component {
    render(){
        //const {id,number}=this.props;
        //const item = this.props.item;
        const {item} = this.props;
        const theitem= item.map((item)=>{
            return item.number>999 ?
            <div className="item" key={item.id}>
            <p>{item.id}</p>
            <p>{item.number}</p>
            </div> 
            :null

        })
return(
        <div>
         {theitem}
        </div>
        );
    }
}
export default Item ;