import React from 'react';
import './StoreCard.css';

class StoreCard extends React.Component {
    render() {
        return (
            <div className='card'>
                <div className='card-header'>
                    <div className='card-image'>
                        <h1>IMG</h1>
                    </div>
                    <ul className='item-list'>
                        <li>Q</li>
                        <li>W</li>
                        <li>E</li>
                        <li>R</li>
                    </ul>
                </div>

                <div className='card-body'>
                    <h2>TITLE</h2>
                    <p>This is a description</p>
                    <h2>R299.00</h2>
                    <h3>Color</h3>
                    <ul className='item-list'>
                        <li>Q</li>
                        <li>W</li>
                        <li>E</li>
                        <li>R</li>
                        <li>T</li>
                    </ul>
                    <button className='btn btn-primary' type='button'>ADD TO CART</button>
                </div>
            </div>
        );
    }
}

export default StoreCard;
