
import Topbar from "./Components/Topbar/Topbar";
import Home from "./Components/Home/Home";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Write from "./Pages/Write/Write";
import Settings from "./Pages/Settings/Settings";
import Single from "./Pages/Single/Single";


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const user = true;
  return (
   <Router>
      <Topbar />
      <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/Register' element={user ? <Home/> :<Register/>} />
          <Route path='/Login' element={user ? <Home/> :<Login/>} />
          <Route path='/Write' element={user ? <Write/> :<Register/>} />
          <Route path='/Settings' element={user ? <Settings/> :<Register/>} />
          <Route path=':id' element={<Single/>} />
      </Routes>
   </Router>
  );
}

export default App;
