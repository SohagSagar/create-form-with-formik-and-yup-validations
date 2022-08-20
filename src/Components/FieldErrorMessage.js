import React from 'react';
import { ErrorMessage } from "formik";

const FieldErrorMessage = (name) => {
    console.log(name);
    return (
        <div className='text-red-600'><small><ErrorMessage name={name}/></small></div>
    );
};

export default FieldErrorMessage;