import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './screens/login/Login';
import Signup from './screens/signup/Signup';
import Home from './screens/home/Home';
import { Toaster } from 'react-hot-toast';
import ProtectedRoutes from './protectedRoutes/ProtectedRoutes';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        <Route element={<ProtectedRoutes />}>
          <Route path='/home' element={<Home />} />
        </Route>
        <Route path='*' element={<h1 style={{ textAlign: 'center' }}>PAGE NOT FOUND</h1>} />

      </Routes>

      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
