import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
