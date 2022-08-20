

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




export default addTtoLocalStroage