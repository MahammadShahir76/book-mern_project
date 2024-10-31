import { Route, Routes } from 'react-router-dom';
import './App.css';
import Headers from './Components/Headers';
import Home from './Components/Home';
import AddBook from './Components/AddBook';
import Books from './Components/Book/Books';
import About from './Components/About';
import Bookdetails from './Components/Book/Bookdetails';

function App() {
  return (
    <>
      <header>
      <Headers/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/add' element={<AddBook/>} exact/>
          <Route path='/books' element={<Books/>} exact/>
          <Route path='/about' element={<About/>} exact/>
          <Route path='/books/:id' element={<Bookdetails/>} exact/>
        </Routes>
      </main>
    </>
  );
}

export default App;
