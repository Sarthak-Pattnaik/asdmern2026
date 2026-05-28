import React from 'react'
import './App.css';
// import StudentData from './components/StudentData';
// import Counter from './components/useState';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Create from './components/Create';

function App() {
  return (
    <>
      {/* <StudentData /> */}
      {/* <Counter /> */}
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/Create' element={<Create />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
