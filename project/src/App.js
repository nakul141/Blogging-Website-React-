import Navbar from "./Allpages/components/Navbar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/Login/Login";
import Register from "./register/Register";
import { Route,Routes, BrowserRouter } from "react-router-dom";
import Sidebar from "./Allpages/SideBar/Sidebar";


function App() {

  const user = false;
  return (
    <BrowserRouter>
    <Navbar/>
    {/* <Switch>   */}
    {/* <BrowserRouter> */}
    <Routes>
      <Route exact path="/" element={ <Home/>}/>
       {/* <Home/> */}
      {/* </Route> */}

      <Route path="/register" element={<Register/>}/>
       {/* {user ? <Home/> : <Register/>} */}
      {/* </Route> */}

      <Route path="/login" element={<Login/>}/>
      {/* {user ? <Home/> : <Login/>} */}
      {/* </Route> */}

      <Route path="/write" element={<Write/>}/>
      <Route path="/about" element={<Sidebar/>}/>
      {/* {user ? <Write/> : <Register/>} */}
      {/* </Route> */}

      <Route path="/settings" element={<Settings/>}/>
      {/* {user ? <Settings/> : <Register/>} */}
      {/* </Route> */}

      <Route path="/post/:postId" element={<Single/>}/>
       {/* <Single/> */}
      {/* </Route> */}
      </Routes>
      </BrowserRouter>

    // {/* </Switch> */}
  );
}

export default App;
