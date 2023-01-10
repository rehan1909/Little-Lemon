import {Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Booking from './pages/Booking';
import MyOrder from './pages/MyOrder';
import Login from './pages/Login';

export default function Routers() {
    return (
        <Routes>
            <Route path="/" element= {
            <Homepage />
            } />

            <Route path="/about" element={
            <About />
            } />

            <Route path="/booking" element= {
            <Booking />
            } />

            <Route path="/myorder" element= {
            <MyOrder />
            } />

            <Route path="/login" element= {
            <Login />
            } />
        </Routes>
    );
}