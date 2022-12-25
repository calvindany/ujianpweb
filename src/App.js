import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Absensi from './component/Absensi/Absensi';
import Tugas from './component/Tugas/Tugas';
import Home from './component/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="absensi" element={<Absensi />}/>
          <Route path="tugas" element={<Tugas />}  />
          <Route path="*"  />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
