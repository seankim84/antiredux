import React, { Fragment } from 'react';
import Flex from 'styled-flex-component';
import Header from '../Header';
import Notification from 'Components/Notification';

const AppPresenter = () => (
    <Fragment>
        <Header />
        <Flex alginCenter full column>
            <Notification text={"hellow"} seen={false} />
        </Flex>
    </Fragment>
)

export default AppPresenter;