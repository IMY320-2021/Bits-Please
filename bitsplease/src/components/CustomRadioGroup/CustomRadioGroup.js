import React from 'react'
import CustomRadioInput from '../CustomRadioInput/CustomRadioInput';
import './CustomRadioGroup.css';

// const SIZES = ['XS', 'S', 'M', 'L', 'XL'];

class CustomRadioGroup extends React.Component {
    render() {
        return (
            <div className='custom-radio-group'>
                {this.props.data.map(size => {
                    return (
                        <CustomRadioInput key={size} option={size} />
                    )
                })
                }
            </div>
        );
    }
}

export default CustomRadioGroup;
