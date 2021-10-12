import React from 'react';
import './StoreCard.css';
import '../../index.css';

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
                    <div className='radio-container'>
                        <input type='radio' id='radio-xs' value='xs' />
                        <label htmlFor='radio-xs'>XS</label>
                        <input type='radio' id='radio-s' value='s' />
                        <label htmlFor='radio-xs'>S</label>
                        <input type='radio' id='radio-m' value='m' />
                        <label htmlFor='radio-xs'>M</label>
                    </div>
                    {/* <ul className='item-list'>
                        <li>{square}</li>
                        <li>{square}</li>
                        <li>{square}</li>
                        <li>{square}</li>
                    </ul> */}
                </div>

                <div className='card-body'>
                    <h2>TITLE</h2>
                    <p>This is a description</p>
                    <h2>R299.00</h2>
                    <h3>Color</h3>
                    {/* <ul className='item-list'>
                        <li>{square}</li>
                        <li>{square}</li>
                        <li>{square}</li>
                        <li>{square}</li>
                    </ul> */}
                    <button className='btn btn-primary' type='button'>ADD TO CART</button>
                </div>
            </div>
        );
    }
}

export default StoreCard;
