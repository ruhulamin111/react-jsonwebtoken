import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct/AddProduct';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import OrderList from './components/OrderList/OrderList';
import Products from './components/Products/Products';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/orderlist' element={<OrderList></OrderList>}></Route>
        <Route path='/addproduct' element={<RequireAuth>
          <AddProduct></AddProduct></RequireAuth>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>

      </Routes>
    </div>
  );
}

export default App;
