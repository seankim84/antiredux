import React, { Fragment } from 'react';
import Flex from 'styled-flex-component';
import Header from '../Header';
import Notification from 'Components/Notification';
import Store from 'store';

const AppPresenter = () => (
    <Fragment>
        <Header />
        <Flex alginCenter full column>
            <Store.Consumer>
                {store => {
                    return Object.keys(store.notifications).map(key => (
                        <Notification
                            id={store.notifications[key].id} 
                            key={store.notifications[key].id} 
                            text={store.notifications[key].text}
                            seen={store.notifications[key].seen}
                        />
                    ));
                }}
            </Store.Consumer>
        </Flex>
    </Fragment>
)

export default AppPresenter;