import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/NavBar';

import {Route,Routes,BrowserRouter as Router} from "react-router-dom"
import HomeScreen from "./Screens/HomeScreen";
import Bookingscreen from "./Screens/BookingScreen"
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import ProfileScreen from "./Screens/ProfileScreen";
import AdminScreen from "./Screens/AdminScreen";
import LandingScreen from "./Screens/LandingScreen"
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Router>
        <Routes>
          <Route path='/' exact element={<LandingScreen></LandingScreen>}></Route>
          <Route path='/home' exact element={<HomeScreen></HomeScreen>}></Route>
          <Route path='/profile' exact element={<ProfileScreen></ProfileScreen>}></Route>
          <Route path='/login' exact element={<LoginScreen></LoginScreen>}></Route>
          <Route path='/register' exact element={<RegisterScreen></RegisterScreen>}></Route>
          <Route path='/admin' exact element={<AdminScreen></AdminScreen>}></Route>
          <Route path="/book/:roomid/:fromdate/:todate" exact element={<Bookingscreen/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
