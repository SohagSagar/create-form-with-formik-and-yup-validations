import { useEffect } from "react";


const addTtoLocalStroage = (data) => {
    console.log(data);
    const registrationData = JSON.parse(localStorage.getItem('registrationData'));
    console.log(registrationData);
    if (registrationData === null) {
        let dataArray = [];
        dataArray.push(data);
        localStorage.setItem('registrationData', JSON.stringify(dataArray));
        return true;
    } else {
        let dataArray = [...registrationData];
        dataArray.push(data);
        localStorage.setItem('registrationData', JSON.stringify(dataArray));
        return true;
    }

}

const getLocalStroageData = () => {

    const storedData = JSON.parse(localStorage.getItem('registrationData'));
    if(storedData){
        return storedData
    }else{
        return [];
    }
}

const removeFromLocalStroage = (id, refreshUl, setRefreshUl) => {
    const storedData = localStorage.getItem('registrationData');
    if (storedData) {
        const storedDataInLocalStroage = JSON.parse(storedData);
        const updatedData = []
        for (const data of storedDataInLocalStroage) {
            if (data.userID !== id) {
                updatedData.push(data)
            }
        }
        localStorage.setItem('registrationData', JSON.stringify(updatedData));
        setRefreshUl(!refreshUl);
        return true;
    }

}




export {
    addTtoLocalStroage,
    getLocalStroageData,
    removeFromLocalStroage
}
