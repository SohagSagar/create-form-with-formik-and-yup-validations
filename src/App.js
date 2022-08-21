import RegistrationForm from './Components/RegistrationForm';
import { Toaster } from 'react-hot-toast';
import RegisteredUsers from './Components/RegisteredUsers';
import { useState } from 'react';

function App() {
  const [refreshUI,setRefreshUI]=useState(true);
  return (
    <div className='px-12'>
      <RegistrationForm refreshUI={refreshUI} setRefreshUI={setRefreshUI}/>
      <RegisteredUsers refreshUI={refreshUI} setRefreshUI={setRefreshUI} />
      <Toaster />
    </div>
  );
}

export default App;
