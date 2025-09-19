import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Artist from './pages/Artist';
import Search from './pages/Search';
import Playlist from './pages/Playlist';
import Mypage from './pages/Mypage';
import PlaylistDetail from './pages/PlaylistDetail'

function App() {
  return (
    <div className="wrap">
      <Navbar />

      <main className='container'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/artist" element={<Artist />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/playlist" element={<Playlist />}></Route>
          <Route path="/playlist/:id" element={<PlaylistDetail />}></Route>
          <Route path="/mypage" element={<Mypage />}></Route>
        </Routes>
      </main>

      <footer className="site-footer">
        <small>&copy; {new Date().getFullYear()} SWEETPICK </small>
      </footer>
    </div>
  );
}

export default App;
