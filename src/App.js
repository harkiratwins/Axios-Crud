import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import Add from './Pages/User/Add';
import Edit from './Pages/User/Edit';
import Users from './Pages/User/Users';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
     
      <Routes>
      <Route  path="/" exact element={<Home/>} />
      <Route  path="/home" exact element={<Home/>} />
      <Route  path="/users/:id" exact element={<Users/>} />
      <Route  path="/add-user" exact element={<Add/>} />
      <Route  path="/edit-user/:id" exact element={<Edit/>} />
     
            
      
    </Routes>
       
      </div>
    </div>
  );
}

export default App;
