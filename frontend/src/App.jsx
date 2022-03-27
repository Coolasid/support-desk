import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './component/Header';
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header></Header>
          <Routes>
            <Route path={'/'} element={<Home></Home>}></Route>
            <Route path={'/Login'} element={<Login></Login>}></Route>
            <Route path={'/register'} element={<Register></Register>}></Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
