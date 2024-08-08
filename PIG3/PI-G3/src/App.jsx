import { Route, Routes, ScrollRestoration } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Detail from "./Page/Detail";
import Home from "./Page/Home";
import SessionStart from "./Page/SessionStart";
import ScrollToTop from "./Components/ScrollToTop";
import CreateAccount from "./Page/CreateAccount";

function App() {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/sessionStart" element={<SessionStart />}/>  {/* <= descomentar aca para activar la pagina con el formulario de inicio de sesion */}
        <Route path="/createaccount" element={<CreateAccount/>}/>
      </Routes>
       <Footer /> 
    </div>
  );
}

export default App;
