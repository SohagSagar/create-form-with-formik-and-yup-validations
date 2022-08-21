import React from 'react';
import toast from 'react-hot-toast';
import { removeFromLocalStroage } from './LocalStroage';

const UserRow = ({user,index,refreshUI,setRefreshUI}) => {
    const {userID,name, mobile,date,gender,govtIdType,govtIdNumber,contactTo,contactToNumber,email,emergencyNumber,address,country,state,city,pinCode, occupation, religion,nationality, meritalStatus} =user;

    // remove item from list
    const handleRemoveItem = (id) => {
        const removeItem = removeFromLocalStroage(id, refreshUI, setRefreshUI);
        if (removeItem) {
            toast.success('Delete successfully');
            setRefreshUI(!refreshUI);
        } else {
            toast.error('Fail to Delete ')
        }
    }
    return (
        <tr>
            <th>{index}</th>
            <td>{userID}</td>
            <td>{name}</td>
            <td>{gender}</td>
            <td>{email}</td>
            <td>{mobile}</td>
            <td>{occupation}</td>
            <td>{religion}</td>
            <td>{meritalStatus}</td>
            <td>{date}</td>
            <td>{govtIdType}-{govtIdNumber}</td>
            <td>{contactTo}-{contactToNumber}</td>
            <td>{emergencyNumber}</td>
            <td>{address}</td>
            <td>{pinCode}</td>
            <td>{city}</td>
            <td>{state}</td>
            <td>{country}</td>
            <td>{nationality}</td>
            <td><button onClick={() => handleRemoveItem(userID)} class="btn btn-xs btn-error rounded-full">Delete</button></td>
            
        </tr>
    );
};

export default UserRow;