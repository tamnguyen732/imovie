import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllRoutes from './routes/Routes';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:category/search/:keyword' />
        <Route path='/:category/:id' />
        <Route path='/:category' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
