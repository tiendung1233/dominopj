import {Route,Routes,Link} from 'react-router-dom'
import Menu from './pages/Menu/Menu';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Follow from './pages/Follow/Follow';
import Promotion from './pages/Promotion/Promotion';
import Voucher from './pages/Voucher/Voucher';
import {DefaultLayout} from './components/Layout';
function App() {
  return (
    <div className="App">
      <Routes>
        
          <Route path='/' element={<DefaultLayout><Home/></DefaultLayout>}/>
          <Route path='/menu' element={<DefaultLayout><Menu/></DefaultLayout>}/>
          <Route path='/cart' element={<DefaultLayout><Cart/></DefaultLayout>}/>
          <Route path='/follow' element={<DefaultLayout><Follow/></DefaultLayout>}/>
          <Route path='/promotion' element={<DefaultLayout><Promotion/></DefaultLayout>}/>
          <Route path='/voucher' element={<DefaultLayout><Voucher/></DefaultLayout>}/>
        


      </Routes>
    </div>
  );
}

export default App;
