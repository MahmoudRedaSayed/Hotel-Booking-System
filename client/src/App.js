import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/NavBar';

import {Route,Routes,BrowserRouter as Router} from "react-router-dom"
import HomeScreen from "./Screens/HomeScreen";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Router>
        <Routes>
          <Route path='/' element={<HomeScreen></HomeScreen>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
