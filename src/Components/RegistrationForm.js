import { Field, Form, Formik, FormikProps } from 'formik';
import React from 'react';
import Label from './Label';

const RegistrationForm = () => {
    return (
        <div className='border rounded-lg  my-5 px-5'>
            <h1 className='text-center font-semibold text-lg py-2'>Registration Form</h1>

            <Formik>
                <Form>

                    <div className=' '>
                        {/* personal details starts */}
                        <h4 className='text-md font-semibold mb-1'>Personal Details</h4>

                        <div className='grid sm:grid-cols-1 lg:grid-cols-[1fr,2fr]'>
                            <div>
                                {/* left side inputs */}
                                <div className='mb-5'>
                                    <Label>Name<sup className='text-red-600'>*</sup></Label>
                                    <input type="text" placeholder="Type here" class="input input-bordered input-sm w-[300px] max-w-xs focus:outline-none " />
                                </div>

                                <div className='mb-5'>
                                    <Label>Mobile</Label>
                                    <input type="text" placeholder="Type here" class="input input-bordered input-sm w-[300px] max-w-xs focus:outline-none " />
                                </div>
                            </div>

                            {/* right side inputs */}
                            <div>
                                <div className='grid sm:grid-cols-1 lg:grid-cols-[1fr,1fr] justify-items-start'>
                                    <div className='mb-5 flex items-center'>
                                        <Label>Date of Birth or Age</Label>
                                        <input type="date" placeholder="Type here" class="input input-bordered input-sm w-[300px] max-w-xs focus:outline-none mr-3" />
                                    </div>

                                    <div className='mb-5 flex items-center'>
                                        <Label>Sex<sup className='text-red-600'>*</sup></Label>
                                        <select class="select select-bordered select-sm w-[300px] max-w-xs  focus:outline-none">
                                            <option className='hidden'></option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='grid sm:grid-cols-1 lg:grid-cols-[1fr,1fr] items-center'>
                                    <div className='mb-5 flex items-center'>
                                        <Label>Govt_Issued_Id</Label>
                                        <select class="select select-bordered select-sm w-[300px] max-w-xs  focus:outline-none">
                                            <option className='hidden'></option>
                                            <option>NID</option>
                                            <option>Birth Certificate</option>
                                        </select>
                                    </div>

                                    <div className='mb-5 ml-10'>
                                        <input type="text" placeholder="Type here" class="input input-bordered input-sm w-[300px] max-w-xs focus:outline-none " />

                                    </div>
                                </div>



                            </div>
                        </div>
                        {/* personal details ends */}


                        {/* contact details starts */}
                        <h4 className='text-md font-semibold mb-1'>Contact Details</h4>
                        <div className='grid sm:grid-cols-1 lg:grid-cols-[1fr,2fr]'>

                            {/* left contents */}
                            <div className='grid  lg:grid-cols-[1fr,1fr] gap-0 items-center justify-items-start'>
                                <div className='mb-5 flex items-center'>
                                    <Label>Contact</Label>
                                    <select class="select select-bordered select-sm w-[120px] max-w-xs  focus:outline-none">
                                        <option className='hidden'></option>
                                        <option>Parent</option>
                                        <option>Others</option>
                                    </select>
                                </div>

                                <div className='mb-5'>
                                    <input type="text" placeholder="Type here" class="input input-bordered input-sm w-[150px] max-w-xs focus:outline-none " />

                                </div>
                            </div>
                            {/* right contents */}
                            <div className='grid sm:grid-cols-1 lg:grid-cols-[1fr,1fr] justify-items-stretch'>
                                <div className='mb-5 flex items-center '>
                                    <Label>Email</Label>
                                    <input type="text" placeholder="Type here" class="input input-bordered input-sm w-[300px] max-w-xs focus:outline-none mr-3" />
                                </div>

                                <div className='mb-5 flex items-center '>
                                    <Label>Emergency Number</Label>
                                    <input type="text" placeholder="Type here" class="input input-bordered input-sm w-[200px] max-w-xs focus:outline-none mr-3" />
                                </div>
                            </div>

                        </div>

                        {/* contact details ends */}

                        {/* address details starts */}

                        <h4 className='text-md font-semibold mb-1'>Address Details</h4>
                        <div className='grid sm:grid-cols-1 lg:grid-cols-[1fr,2fr]'>
                            <div>
                                {/* left side inputs */}
                                <div className='mb-5'>
                                    <Label>Address<sup className='text-red-600'>*</sup></Label>
                                    <input type="text" placeholder="Type here" class="input input-bordered input-sm w-[300px] max-w-xs focus:outline-none " />
                                </div>

                                <div className='mb-5'>
                                    <Label>Country</Label>
                                    <select class="select select-bordered select-sm w-[300px] max-w-xs  focus:outline-none">
                                        <option className='hidden'></option>
                                        <option>India</option>
                                        <option>Bangladesh</option>
                                    </select>
                                </div>
                            </div>

                            {/* right side inputs */}
                            <div className='grid sm:grid-cols-1 lg:grid-cols-[1fr,1fr] justify-items-stretch'>
                                <div className='mb-5 flex items-center'>
                                    <Label>State</Label>
                                    <input type="text" placeholder="Type here" class="input input-bordered input-sm w-full w-[300px] focus:outline-none mr-3" />
                                </div>

                                <div className='mb-5 flex items-center'>
                                    <Label>City</Label>
                                    <select class="select select-bordered select-sm w-full max-w-xs  focus:outline-none">
                                        <option className='hidden'></option>
                                        <option>City - 1</option>
                                        <option>City - 2</option>
                                    </select>
                                </div>
                                <div className='mb-5 flex items-center'>
                                    <Label>Pincode</Label>
                                    <input type="text" placeholder="Type here" class="input input-bordered input-sm w-[300px] max-w-xs focus:outline-none mr-3" />
                                </div>
                            </div>

                        </div>
                        {/* address details ends */}

                        {/* others details starts */}

                        <h4 className='text-md font-semibold mb-1'>Others Details</h4>
                        <div className='grid grid-cols-4 mb-5 justify-items-start'>

                            <div className='flex'>
                                <Label>Occupation</Label>
                                <input type="text" placeholder="Type here" class="input input-bordered input-sm w-[150px] max-w-xs focus:outline-none mr-3" />
                            </div>

                            <div className='flex'>
                                <Label>Religion</Label>
                                <select class="select select-bordered select-sm w-[150px] max-w-xs  focus:outline-none">
                                    <option className='hidden'></option>
                                    <option>Religion-1</option>
                                    <option>Religion-2</option>
                                </select>
                            </div>

                            <div className='flex'>
                                <Label>Merital_Status</Label>
                                <select class="select select-bordered select-sm w-[150px]  max-w-xs  focus:outline-none">
                                    <option className='hidden'></option>
                                    <option>Married</option>
                                    <option>Single</option>
                                </select>
                            </div>

                            <div className='flex'>
                                <Label>Nationality</Label>
                                <select class="select select-bordered select-sm max-w-xs w-[150px] focus:outline-none">
                                    <option className='hidden'></option>
                                    <option>Indian</option>
                                    <option>Bangladeshi</option>
                                </select>
                            </div>
                        </div>



                    </div>

                    <div className='flex justify-center py-6 gap-2'>
                        <button  class="btn btn-sm btn-wide rounded-full bg-red-600 border-none text-white normal-case">Cancel</button>
                        <button type='submit' class="btn btn-sm btn-wide rounded-full bg-green-600 border-none text-white normal-case">Submit</button>
                    </div>

                </Form>
            </Formik>
        </div>
    );
};

export default RegistrationForm;