import React from 'react'
import './App.css';
// import StudentData from './components/StudentData';
// import Counter from './components/useState';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Create from './components/Create';
import View from './components/View';
import EditData from './components/EditData';

function App() {
  return (
    <>
      {/* <StudentData /> */}
      {/* <Counter /> */}
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/Create' element={<Create />}></Route>
          <Route path='/View' element={<View />}></Route>
          <Route path='/EditData/:id' element={<EditData />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
