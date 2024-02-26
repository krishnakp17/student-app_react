import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import DeleteStudent from './components/DeleteStudent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewStudents from './components/ViewStudents';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route/>
        <Route path='/' element={<AddStudent/>}/>
        <Route path='/search' element={<SearchStudent/>}/>
        <Route path='/delete' element={<DeleteStudent/>}/>
        <Route path='/viewall' element={<ViewStudents/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
