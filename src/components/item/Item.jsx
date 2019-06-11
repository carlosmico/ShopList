import React from 'react'

//CSS
import './Item.css'

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='item' id={this.props.id}>
                <p>{this.props.title}</p>

                <div className='buttoner'>
                    <i className="fas fa-cart-plus addCartBtn" onClick={this.props.addCartEvt}></i>
                    <i className="fas fa-trash-alt removeBtn" onClick={this.props.removeEvt}></i>
                </div>
            </div>
        );
    }
}

export default Item;