import React from 'react';

import './CustomRadioInput.css';

const square = (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" fill="#fff" />
    </svg>
)

class CustomRadioInput extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='custom-radio-input'>{square}</div>
                {/* <input type='radio' />
                <label>{this.props.option}</label> */}
            </React.Fragment>
        );
    }
}

export default CustomRadioInput;
