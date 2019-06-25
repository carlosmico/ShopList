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

    // decrement = (event) => {
    //     if(this.state.units > 1){
    //         this.setState({
    //             units: this.state.units - 1
    //         }, ()=>{
    //             this.props.updateItem(this.state);
    //         });
    //     }
    // }

    // increment = (event) => {
    //     this.setState({
    //         units: this.state.units + 1
    //     }, ()=>{
    //         this.props.updateItem(this.state);
    //     });
        
    // }

    render() {
        return (
            <div className='item' id={this.props.id}>
                <div>
                    <input className='.inputItem' contentEditable="true" onBlur={event=>this.props.update(event, this.state)} onChange={this.handleChange} value={this.state.title}/>

                    <div className='buttoner'>
                        <i className="fas fa-trash-alt removeBtn" onClick={event=>this.props.remove(event, this.state)}></i>
                    </div>
                </div>

                {/* <div>
                    <a className="customBtn" onClick={this.decrement}><span>-</span></a>
                    <span className="units">{this.state.units}</span>
                    <a className="customBtn" onClick={this.increment}><span>+</span></a>
                </div> */}
            </div>
        );
    }
}

export default Item;