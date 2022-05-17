import {Route,Routes,Link} from 'react-router-dom'
import Menu from './pages/Menu/Menu';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Follow from './pages/Follow/Follow';
import Promotion from './pages/Promotion/Promotion';
import Voucher from './pages/Voucher/Voucher';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/follow' element={<Follow/>}/>
        <Route path='/promotion' element={<Promotion/>}/>
        <Route path='/voucher' element={<Voucher/>}/>


      </Routes>
    </div>
  );
}

export default App;
