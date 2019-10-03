import React from 'react'

//REDUX
import { connect } from 'react-redux'

//CSS
import './Main.css'

class Main extends React.Component {
    constructor(props) {
        super(props)

        this.checkIfUserIsLogged();
    }

    checkIfUserIsLogged = () => {
        if(this.props.userLogged){
            this.props.history.push(`/shoplist`)
        }
    }

    render() {
        return (
            <div className='Main'>
                <div>
                    <div className='Content'>
                        <h1>Shoplist makes your shopping list easier</h1>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userLogged: state.userLogged
    }
}

export default connect(mapStateToProps)(Main);