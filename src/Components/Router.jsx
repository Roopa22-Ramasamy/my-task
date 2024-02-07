import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Login from './Login';
import Sign from './Sign';
import Home from './Home';


export default function Router() {
    return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>}>Home</Route>
            <Route path = 'Login' element = {<Login/>}>Login</Route>
            <Route path="Sign" element={<Sign/>}>Sign</Route>
            
        </Routes> 
      </BrowserRouter>
    )
}
