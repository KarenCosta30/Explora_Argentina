import { Route, Routes, ScrollRestoration } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Detail from "./Page/Detail";
import Home from "./Page/Home";
import ScrollToTop from "./Components/ScrollToTop";
import CreateAccount from "./Page/CreateAccount";
import Login from "./Page/Login";
import ControlPanel from "./Page/ControlPanel"
import Favorites from "./Page/Favorites";



function App() {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/Login" element={<Login />}/>  
        <Route path="/createaccount" element={<CreateAccount/>}/>
        <Route path="/userlist" element={<ControlPanel/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
       <Footer /> 
    </div>
  );
}

export default App;
