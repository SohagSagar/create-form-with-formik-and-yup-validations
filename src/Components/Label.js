import React from 'react';

const Label = ({children}) => {
    return (
        
            <div>
                <label className='mr-3'>{children}</label>
            </div>
        
    );
};

export default Label;