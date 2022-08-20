import RegistrationForm from './Components/RegistrationForm';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='px-12'>
      <RegistrationForm />
      <Toaster />
    </div>
  );
}

export default App;
