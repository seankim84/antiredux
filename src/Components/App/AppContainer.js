import React, { Component } from 'react';
import AppPresenter from './AppPresenter';
import Store from 'store';

class AppContainer extends Component {
    state = {
         message: "Hellow"
    }
    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                message: "bye"
            })
        },2000)
    }
    render(){
        return( //Presenter안에 있는 것들은 store에 접근가능.
            <Store.Provider value={this.state}>
                <AppPresenter /> 
            </Store.Provider>
        ) 
    }
}

export default AppContainer;