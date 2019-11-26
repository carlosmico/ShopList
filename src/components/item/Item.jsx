import React from 'react'

//CSS
import './Item.css'

class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            title: this.props.title,
            units: this.props.units || 0
        };
    }

    handleChange = (event) => {
        event.preventDefault();
        let title = event.target.value;

        this.setState({
            title
        })
    }

    render() {
        return (
            <div className='item' id={this.props.id}>
                <div>
                    <input className='.inputItem' contentEditable="true" onBlur={event => this.props.update(event, this.state)} onChange={this.handleChange} value={this.state.title} />

                    <div className='buttoner'>
                        {this.props.checkedItem ?
                            <i className="fas fa-trash-alt removeBtn" onClick={event => this.props.removeOrChecked(event, this.state)}></i> :
                            ""
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;