import { Route, Routes, ScrollRestoration } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Detail from "./Page/Detail";
import Home from "./Page/Home";
import ScrollToTop from "./Components/ScrollToTop";
import CreateAccount from "./Page/CreateAccount";
import Login from "./Page/Login";

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
      </Routes>
       <Footer /> 
    </div>
  );
}

export default App;
