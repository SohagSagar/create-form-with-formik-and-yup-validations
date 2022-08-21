import React, { useEffect, useState } from 'react';
import { getLocalStroageData } from './LocalStroage';
import UserRow from './UserRow';

const RegisteredUsers = ({ refreshUI,setRefreshUI }) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const allUser = getLocalStroageData()
        console.log(allUser);
        setUsers(allUser)
    }, [refreshUI])

    console.log(refreshUI);

    return (
        <div className='px-12 border rounded-lg my-12'>
            {/* heading */}
            <h1 className='text-center font-semibold text-lg py-2'>Registered User List</h1>


            {
                users.length < 1 ? <p className='text-center font-semibold text-md py-2'>No user found</p> :
                    <div class="overflow-x-auto py-6">
                        <table class="table table-compact w-full">
                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>UserID</th>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Occupation</th>
                                    <th>Religion</th>
                                    <th>Merital Status</th>
                                    <th>Date of Birth</th>
                                    <th>Govt ID</th>
                                    <th>Contact To</th>
                                    <th>Emergency Contact</th>
                                    <th>Address</th>
                                    <th>pinCode</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Country</th>
                                    <th>Nationality</th>
                                    <th>Actions</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users?.map((user, index) =>
                                        <UserRow
                                            key={user.userID}
                                            index={index + 1}
                                            user={user}
                                            refreshUI={refreshUI} 
                                            setRefreshUI={setRefreshUI}
                                        />
                                    )
                                }

                            </tbody>

                        </table>
                    </div>
            }
        </div>
    );
};

export default RegisteredUsers;