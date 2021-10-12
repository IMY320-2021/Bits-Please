import React from 'react';
import './CardContainer.css';

import StoreCard from '../StoreCard/StoreCard';

const StoreData = {
    data: [
        {
            id: 'mg-01',
            title: 'Mug',
            description: 'For coffee addicts, the perfect mug',
            price: 59.95,
            image_url: './image.png',
            options: ['XS', 'S ', 'M', 'L ', 'XL'],
        },
        {
            id: 'hd-01',
            title: 'Hoodie',
            description: 'A comfortable hoodie',
            price: 359.95,
            image_url: './image.png',
            options: ['XS', 'S ', 'M', 'L ', 'XL']
        },
        // {
        //     id: 's-ts-01',
        //     title: 'Short Sleeve T-Shirt',
        //     description: '100% pure cotton short sleeve T-Shirt with printed graphic',
        //     price: 129.95,
        //     image_url: './image.png',
        //     options: ['XS', 'S ', 'M', 'L ', 'XL']
        // },
        // {
        //     id: 'l-ts-01',
        //     title: 'Long Sleeve T-Shirt',
        //     description: '100% pure cotton long sleeve T-Shirt with printed graphic',
        //     price: 159.95,
        //     image_url: './image.png',
        //     options: ['XS', 'S ', 'M', 'L ', 'XL']
        // },
    ]
}

class CardContainer extends React.Component {

    render() {
        return (
            <div className='card-container'>
                {StoreData.data.map(item => {
                    return (
                        < StoreCard key={item.id} data={item} />
                    )
                })}
            </div>
        );
    }
}

export default CardContainer;
