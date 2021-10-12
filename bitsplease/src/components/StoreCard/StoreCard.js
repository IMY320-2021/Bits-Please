import React from 'react';
import './StoreCard.css';
import '../../index.css';
import CustomRadioGroup from '../CustomRadioGroup/CustomRadioGroup';

const square = (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" fill="#373737" />
    </svg>
);

class StoreCard extends React.Component {
    render() {
        return (
            <div className='card'>
                <div className='card-header'>
                    <div className='card-image'>
                        <h1>IMG</h1>
                    </div>
                </div>

                <div className='card-body'>
                    <h2>TITLE</h2>
                    <p>This is a description</p>
                    <h2>R299.00</h2>
                    <h3>Color</h3>
                    <CustomRadioGroup />
                    <button className='btn btn-primary' type='button'>ADD TO CART</button>
                </div>
            </div>
        );
    }
}

export default StoreCard;
