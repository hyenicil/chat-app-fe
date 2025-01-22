import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from "./Components/HomePage";
import Status from "./Components/status/Status";
import StatusViewer from "./Components/status/StatusViewer";
import Signin from "./Components/register/Signin";
import Signup from "./Components/register/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/status' element={<Status/>}></Route>
        <Route path='/status/:userId' element={<StatusViewer/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
