import React from 'react';

//CSS
import './ShopList.css'

class ShopList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='shopList'>
                <h2>{this.props.title}</h2>

                <input type="text" onKeyUp={this.props.addItem} placeholder="Add item..." />

                <div className='itemsList'>
                    {this.props.items}
                </div>
            </div>
        );
    }
}

export default ShopList;