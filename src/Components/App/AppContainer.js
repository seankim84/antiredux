import React, { Component } from 'react';
import AppPresenter from './AppPresenter';
import Store from 'store';

class AppContainer extends Component {
    constructor(props){ // Provider에 포함시킬 함수는 반드시 constructor 안에 있어야한다.
        super(props);
        this.state = {
            notifications: {
                "1":{
                    id: 1,
                    text:"Something",
                    seen: false
                },
                "2": {
                    id: 1,
                    text: "Something else",
                    seen: false
                },
                "3": {
                    id: 3,
                    text: "Something else different",
                    seen: false
                },
            }
        }
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