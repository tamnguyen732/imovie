import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Catalog from './pages/Catelog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:category/search/:keyword' element={<Catalog />} />
        <Route path='/:category/:id' />
        <Route path='/:category' element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
