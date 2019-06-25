import React from 'react';

//REDUX
import { connect } from 'react-redux'

//FIREBASE
import FIREBASE from 'firebase';

//ITEMS
import Item from '../../components/item/Item'

//CSS
import './ShopList.css'

//GLOBAL VARIABLES
var database;

class ShopList extends React.Component {
    constructor(props) {
        super(props);

        //This is required because firebase don't accept @ on their refs
        let email = this.props.userLogged.email;
        let username = email.split('@')[0];

        this.state = {
            username: username,
            shopList: []
        }

        database = FIREBASE.database();
    }

    componentDidMount = () => {
        this.getAllItems();
    }

    getAllItems = () => {
        database.ref(`${this.state.username}/items`).on("value", (data) => {
            let items = data.val();

            let components = [];

            //Recorremos el objeto que devuelve firebase que es un objeto de objetos con la información de los items
            for (const itemId in items) {
                if (items.hasOwnProperty(itemId)) {
                    let item = items[itemId];

                    //Por cada item que recuperamos de la BD añadimos uno nuevo al array de items del estado
                    let itemComponent = < Item key={item.id} id={item.id} title={item.title} units={item.units} update={this.updateItem} remove={this.removeItem} />

                    components.push(itemComponent);
                }
            }

            this.setState({
                shopList: components
            });
        });
    }

    addItem = (event) => {
        if (event.key === 'Enter' && event.target.value !== "") {
            let itemId = Date.now();

            let itemTitle = event.target.value;

            database.ref(`${this.state.username}/items/${itemId}`).set({
                id: itemId,
                title: itemTitle,
                units: 1
            }).catch(err => console.log(err));

            event.target.value = "";
        }
    }

    updateItem = (event, state) => {
        let itemId = event.target.parentNode.parentNode.parentNode.id;

        console.log(state)

        database.ref(`${this.state.username}/items/${state.id}`).update({
            title: state.title
        });
    }

    removeItem = (event, state) => {
        let itemId = state.id;

        if (itemId !== "") {
            //Obtenemos la referencia del item de la bd mediante el id y lo eliminamos
            let itemRef = database.ref(`${this.state.username}/items/${itemId}`);
            itemRef.remove();
        }
    }

    render() {
        return (
            <div className='shopList'>
                <input type="text" onKeyUp={this.addItem} placeholder="Add item..." />

                <div className='itemsList'>
                    {this.state.shopList}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userLogged: state.userLogged
    }
}

export default connect(mapStateToProps)(ShopList);