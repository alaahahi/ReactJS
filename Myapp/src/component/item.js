import React, {Component } from 'react';
class Item extends Component {

    render(){
        //const {id,number}=this.props;
        //const item = this.props.item;
        const {item} = this.props;
        const theitem= item.map((item)=>{
            return(
                <div>
                <p>{item.id}</p>
                <p>{item.number}</p>
                </div>
            );
        })
return(
        <div>
         {theitem}
        </div>
        );
    }
}
export default Item ;