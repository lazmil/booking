import BookingForm from '../components/firstPage';
import Services from '../components/secondPage';
import Conformation from '../components/lastPage';
import { Route, Routes } from 'react-router-dom';

const Router = () => (

  <div className='L-router-block'>
    <Routes>
      <Route path='/' element={<BookingForm />} index />
      <Route path='/services' element={<Services />} />
      <Route path='/conformation' element={<Conformation />} />
    </Routes>

  </div>
)

export default Router