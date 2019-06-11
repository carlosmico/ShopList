import React from 'react';
import './App.css';

//Components
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import ShopList from './components/shopList/ShopList';
import CartList from './components/cartList/CartList';
import Item from './components/item/Item'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shopList: [],
      cartList: []
    }
  }

  addItem = (event) => {
    if (event.key === 'Enter') {
      let id = Date.now();

      let newItem = <Item key={id} id={id} title={event.target.value} addCartEvt={this.addToCartItem} removeEvt={this.removeItem} />

      this.setState({
        shopList: [...this.state.shopList, newItem]
      });

      event.target.value = "";
    }
  }

  addToCartItem = (event) => {
    console.log(event);

    let componentId = event.target.parentNode.parentNode.id;

    this.state.shopList.forEach((item, index) => {
      if (componentId === item.key) {
        console.log(item);


        this.setState({
          cartList: [...this.state.cartList, item]
        });

        this.removeItem(event);
      }
    });
  }

  removeItem = (event) => {
    let containerList = event.target.parentNode.parentNode.parentNode.parentNode.className;

    let componentId = event.target.parentNode.parentNode.id;

    if (containerList === 'shopList') {
      //Recogemos la shopList del estado para trabajar sobre ella comodamente
      let shopList = this.state.shopList;

      //Recorremos la shopList para encontrar el componente a eliminar
      this.state.shopList.forEach((item, index) => {
        if (componentId === item.key) {

          //Eliminamos el componente Item de la variable shopList
          shopList.splice(index, 1);

          //Asignamos la shopList que hemos editado al estado del componente padre
          this.setState({
            shopList: shopList
          });
        }
      });
    } else if (containerList === 'cartList') {
      //Recogemos la cartList del estado para trabajar sobre ella comodamente
      let cartList = this.state.cartList;

      //Recorremos la cartList para encontrar el componente a eliminar
      this.state.cartList.forEach((item, index) => {
        if (componentId === item.key) {

          //Eliminamos el componente Item de la variable cartList
          cartList.splice(index, 1);

          //Asignamos la cartList que hemos editado al estado del componente padre
          this.setState({
            cartList: cartList
          });
        }
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Header title="ShopList" />

        {/* LISTAS*/}
        <div className='lists'>

          <ShopList title='Shop List' items={this.state.shopList} addItem={this.addItem} />

          <CartList title='Cart' items={this.state.cartList} removeEvt={this.removeItem} />

        </div>

        <Footer copyright="© All rights reserved. 2019 Carlos Micó." />
      </div>
    );
  }
}

export default App;

