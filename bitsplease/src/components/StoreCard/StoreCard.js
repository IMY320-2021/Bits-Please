import React from 'react';
import './StoreCard.css';
import '../../index.css';
import CustomRadioGroup from '../CustomRadioGroup/CustomRadioGroup';

class StoreCard extends React.Component {
    render() {
        const data = this.props.data;

        return (
            <div className='card'>
                <div className='card-header'>
                    <div className='card-image'>
                        <img srcSet={data.image_url[0]} alt={data.description} />
                    </div>
                </div>

                <div className='card-body'>
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                    <h2 className='price-heading'>R {data.price}</h2>
                    <h3>Color</h3>
                    <CustomRadioGroup data={data.options} />
                    <button className='btn btn-primary' type='button'>ADD TO CART</button>
                </div>
            </div>
        );
    }
}

export default StoreCard;
