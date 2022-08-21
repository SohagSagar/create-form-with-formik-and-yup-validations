import { Field, Form, Formik, FormikProps, ErrorMessage } from 'formik';
import React from 'react';
import Label from './Label';
import * as yup from "yup";
import FieldErrorMessage from './FieldErrorMessage';

import toast from 'react-hot-toast';
import { addTtoLocalStroage } from './LocalStroage';

const userID = Math.floor(10000000 + Math.random() * 10000000);

const RegistrationForm = ({ refreshUI, setRefreshUI }) => {
    const validationSchema = yup.object({
        name: yup.string().required("Field is Required!"),
        mobile: yup.number('Number Expected').required("Mobile is Required!"),
        date: yup.date().required("Field is Required!"),
        gender: yup.string().required("Field is Required!"),
        contactTo: yup.string().required("Field is Required!"),
        contactToNumber: yup.number('only number is valid').required("Field is Required!"),
        govtIdType: yup.string().required("Field is Required!"),
        govtIdNumber: yup.number('only number is valid').required("Field is Required!"),
        email: yup.string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'invalid email').required("Field is Required!"),
        emergencyNumber: yup.number('only number is valid').required("Field is Required!"),
        address: yup.string('String required').required("Field is Required!"),
        country: yup.string().required("Field is Required!"),
        state: yup.string().required("Field is Required!"),
        city: yup.string().required("Field is Required!"),
        occupation: yup.string().required("Field is Required!"),
        religion: yup.string().required("Field is Required!"),
        pinCode: yup.number().required("Field is Required!"),
        nationality: yup.string().required("Field is Required!"),
        meritalStatus: yup.string().required("Field is Required!"),
    });

    return (
        <div className='border rounded-lg  my-5 px-5'>
            <h1 className='text-center font-semibold text-lg py-2'>Registration Form</h1>

            <Formik
                validationSchema={validationSchema}
                initialValues={{
                    name: '',
                    mobile: '',
                    date: '',
                    gender: '',
                    govtIdType: '',
                    govtIdNumber: '',
                    contactTo: '',
                    contactToNumber: '',
                    email: '',
                    emergencyNumber: '',
                    address: '',
                    country: '',
                    state: '',
                    city: '',
                    pinCode: '',
                    occupation: '',
                    religion: '',
                    nationality: '',
                    meritalStatus: ''


                }}

                onSubmit={(values, { resetForm }) => {
                    console.log(values);
                    const userInfo = { ...values, userID }
                    const saveToLocalStroage = addTtoLocalStroage(userInfo);

                    if (saveToLocalStroage) {
                        toast.success('Register Successful');
                        resetForm();
                        setRefreshUI(!refreshUI)
                    } else {
                        toast.error('Fail to register');
                    }

                }}
            >
                <Form>

                    <div className='mx-auto'>
                        {/* personal details starts */}
                        <h4 className='text-md font-semibold mb-1'>Personal Details</h4><hr className='mb-2' />

                        <div className='grid sm:grid-cols-1 lg:grid-cols-[1fr,2fr]'>
                            <div>
                                {/* left side inputs */}
                                <div className='mb-2'>
                                    <Label className="">Name<sup className='text-red-600'>*</sup></Label>
                                    <Field type="text" name='name' placeholder="Type here" className="input input-bordered input-sm w-[300px] max-w-xs focus:outline-none mt-1 " />
                                    <div className='text-red-600'><small><ErrorMessage name='name' /></small></div>
                                </div>

                                <div className='mb-2'>
                                    <Label>Mobile</Label>
                                    <Field type="number" name='mobile' placeholder="Type here" className="input input-bordered input-sm w-[300px] max-w-xs focus:outline-none mt-1 " />
                                    {/* <FieldErrorMessage name='mobile' /> */}
                                    {/* <ErrorMessage name="mobile" /> */}
                                    <div className='text-red-600'><small><ErrorMessage name='mobile' /></small></div>
                                </div>
                            </div>

                            {/* right side inputs */}
                            <div>
                                <div className='grid sm:grid-cols-1 lg:grid-cols-[1fr,1fr] justify-items-start'>
                                    <div className='mb-2'>
                                        <Label>Date of Birth or Age</Label>
                                        <Field type="date" name='date' placeholder="Type here" className="input input-bordered input-sm w-[300px] max-w-xs focus:outline-none mt-1 mt-1 mr-3" />
                                        <div className='text-red-600'><small><ErrorMessage name='date' /></small></div>
                                    </div>

                                    <div className='mb-2'>
                                        <Label>Sex<sup className='text-red-600'>*</sup></Label>
                                        <Field name='gender' as="select" className="select select-bordered select-sm w-[300px] max-w-xs  focus:outline-none mt-1">
                                            <option className='hidden'></option>
                                            <option value={'male'}>Male</option>
                                            <option value={'female'}>Female</option>
                                        </Field>
                                        <div className='text-red-600'><small><ErrorMessage name='gender' /></small></div>
                                    </div>
                                </div>

                                <div className='grid sm:grid-cols-1 lg:grid-cols-[1fr,1fr] justify-items-start'>
                                    <div className='mb-2'>
                                        <Label>Govt Issued Id</Label>
                                        <Field name='govtIdType' as="select" className="select select-bordered select-sm w-[300px] max-w-xs  focus:outline-none mt-1">
                                            <option className='hidden'></option>
                                            <option>NID</option>
                                            <option>Birth Certificate</option>
                                        </Field>
                                        <div className='text-red-600'><small><ErrorMessage name='govtIdType' /></small></div>
                                    </div>

                                    <div className='mb-2'>
                                        <Label>ID Number</Label>
                                        <Field name="govtIdNumber" type="text" placeholder="Type here" className="input input-bordered input-sm w-[300px] max-w-xs focus:outline-none mt-1 " />
                                        <div className='text-red-600'><small><ErrorMessage name='govtIdNumber' /></small></div>

                                    </div>
                                </div>



                            </div>
                        </div>
                        {/* personal details ends */}


                        {/* contact details starts */}
                        <h4 className='text-md font-semibold mb-1 mt-5'>Contact Details</h4><hr className='mb-2' />
                        <div className='grid sm:grid-cols-1 lg:grid-cols-[1fr,2fr]'>

                            {/* left contents */}
                            <div className='flex gap-3'>
                                <div className='mb-2'>
                                    <Label>Contact To</Label>
                                    <Field name='contactTo' as='select' className="select select-bordered select-sm w-[120px] max-w-xs  focus:outline-none mt-1">
                                        <option className='hidden'></option>
                                        <option>Parent</option>
                                        <option>Others</option>
                                    </Field>
                                    <div className='text-red-600'><small><ErrorMessage name='contactTo' /></small></div>
                                </div>

                                <div className='mb-2'>
                                    <Label>Contact Number</Label>
                                    <Field name="contactToNumber" type="text" placeholder="Type here" className="input input-bordered input-sm w-[170px] max-w-xs focus:outline-none mt-1 " />
                                    <div className='text-red-600'><small><ErrorMessage name='contactToNumber' /></small></div>

                                </div>
                            </div>
                            {/* right contents */}
                            <div className='grid sm:grid-cols-1 lg:grid-cols-[1fr,1fr] justify-items-stretch'>
                                <div className='mb-2'>
                                    <Label>Email</Label>
                                    <Field name='email' type="text" placeholder="Type here" className="input input-bordered input-sm w-[300px] max-w-xs focus:outline-none mt-1 mr-3" />
                                    <div className='text-red-600'><small><ErrorMessage name='email' /></small></div>
                                </div>

                                <div className='mb-2'>
                                    <Label>Emergency Number</Label>
                                    <Field name='emergencyNumber' type="text" placeholder="Type here" className="input input-bordered input-sm w-[300px] max-w-xs focus:outline-none mt-1 mr-3" />
                                    <div className='text-red-600'><small><ErrorMessage name='emergencyNumber' /></small></div>
                                </div>
                            </div>

                        </div>

                        {/* contact details ends */}

                        {/* address details starts */}

                        <h4 className='text-md font-semibold mb-1 mt-5'>Address Details</h4><hr className='mb-2' />
                        <div className='grid sm:grid-cols-1 lg:grid-cols-[1fr,2fr]'>
                            <div>
                                {/* left side inputs */}
                                <div className='mb-2'>
                                    <Label>Address<sup className='text-red-600'>*</sup></Label>
                                    <Field name='address' type="text" placeholder="Type here" className="input input-bordered input-sm w-[300px] max-w-xs focus:outline-none mt-1 " />
                                    <div className='text-red-600'><small><ErrorMessage name='address' /></small></div>
                                </div>

                                <div className='mb-2'>
                                    <Label>Country</Label>
                                    <Field name='country' as='select' className="select select-bordered select-sm w-[300px] max-w-xs  focus:outline-none mt-1">
                                        <option className='hidden'></option>
                                        <option value={'india'}>India</option>
                                        <option value={'bangladesh'}>Bangladesh</option>
                                    </Field>
                                    <div className='text-red-600'><small><ErrorMessage name='country' /></small></div>
                                </div>
                            </div>

                            {/* right side inputs */}
                            <div className='grid sm:grid-cols-1 lg:grid-cols-[1fr,1fr] justify-items-stretch'>
                                <div className='mb-2'>
                                    <Label>State</Label>
                                    <Field name="state" type="text" placeholder="Type here" className="input input-bordered input-sm w-[300px] focus:outline-none mt-1 mr-3" />
                                    <div className='text-red-600'><small><ErrorMessage name='state' /></small></div>
                                </div>

                                <div className='mb-2'>
                                    <Label>City</Label>
                                    <Field name='city' as="select" className="select select-bordered select-sm w-[300px] max-w-xs  focus:outline-none mt-1">
                                        <option className='hidden'></option>
                                        <option value={'city-1'}>City - 1</option>
                                        <option value={'city-2'}>City - 2</option>
                                    </Field>
                                    <div className='text-red-600'><small><ErrorMessage name='city' /></small></div>
                                </div>
                                <div className='mb-2'>
                                    <Label>Pincode</Label>
                                    <Field name="pinCode" type="text" placeholder="Type here" className="input input-bordered input-sm w-[300px] max-w-xs focus:outline-none mt-1 mr-3" />
                                    <div className='text-red-600'><small><ErrorMessage name='pinCode' /></small></div>
                                </div>
                            </div>

                        </div>
                        {/* address details ends */}

                        {/* others details starts */}

                        <h4 className='text-md font-semibold mb-1 mt-5'>Others Details</h4><hr className='mb-2' />
                        <div className='grid sm:grid-cols-1 lg:grid-cols-3 mb-5 justify-items-start'>

                            <div className=''>
                                <Label>Occupation</Label>
                                <Field name="occupation" type="text" placeholder="Type here" className="input input-bordered input-sm w-[300px]  max-w-xs focus:outline-none mt-1 mr-3" />
                                <div className='text-red-600'><small><ErrorMessage name='occupation' /></small></div>
                            </div>

                            <div className=''>
                                <Label>Religion</Label>
                                <Field name='religion' as="select" className="select select-bordered select-sm w-[300px] max-w-xs  focus:outline-none mt-1">
                                    <option className='hidden'></option>
                                    <option value={'religion-1'}>Religion-1</option>
                                    <option value={'religion-2'}>Religion-2</option>
                                </Field>
                                <div className='text-red-600'><small><ErrorMessage name='religion' /></small></div>
                            </div>

                            <div className=''>
                                <Label>Merital_Status</Label>
                                <Field name='meritalStatus' as="select" className="select select-bordered select-sm w-[300px]  max-w-xs  focus:outline-none mt-1">
                                    <option className='hidden'></option>
                                    <option value={'married'}>Married</option>
                                    <option value={'single'}>Single</option>
                                </Field>
                                <div className='text-red-600'><small><ErrorMessage name='meritalStatus' /></small></div>
                            </div>

                            <div className='mt-3'>
                                <Label>Nationality</Label>
                                <Field name='nationality' as="select" className="select select-bordered select-sm max-w-xs w-[300px] focus:outline-none mt-1">
                                    <option className='hidden'></option>
                                    <option value={'indian'}>Indian</option>
                                    <option value={'bangladeshi'}>Bangladeshi</option>
                                </Field>
                                <div className='text-red-600'><small><ErrorMessage name='nationality' /></small></div>
                            </div>
                        </div>

                        <div className='flex justify-center py-6 gap-2'>
                            <button type='reset' className="btn btn-sm lg:btn-wide rounded-full bg-red-600 border-none text-white normal-case">Reset</button>
                            <button type='submit' className="btn btn-sm lg:btn-wide rounded-full bg-green-600 border-none text-white normal-case">Submit</button>
                        </div>

                    </div>



                </Form>
            </Formik>
        </div >
    );
};

export default RegistrationForm;