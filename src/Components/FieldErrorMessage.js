import React from 'react';
import { ErrorMessage } from "formik";

const FieldErrorMessage = () => {
    

    return (
        <div className='text-red-600'><small><ErrorMessage name='avf' /></small></div>
    );
};

export default FieldErrorMessage;