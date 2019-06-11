import React from 'react';

//CSS

class CartList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='cartList'>
                <h2>{this.props.title}</h2>

                <div className='itemsList'>
                    {this.props.items}
                </div>
            </div>
        );
    }
}

export default CartList;