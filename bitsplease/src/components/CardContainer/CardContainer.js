import React from 'react';
import './CardContainer.css';

import StoreCard from '../StoreCard/StoreCard';

class CardContainer extends React.Component {
    render() {
        return (
            <div className='card-container'>
                <StoreCard />
                <StoreCard />
                <StoreCard />
                <StoreCard />
                <StoreCard />
                <StoreCard />
            </div>
        );
    }
}

export default CardContainer;
