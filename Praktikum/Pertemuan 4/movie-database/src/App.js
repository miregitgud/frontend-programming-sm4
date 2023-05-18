// import logo from './logo.svg';
import React from 'react';
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom";
import CreateMovie from './pages/movie/Create';
import NowPlayingMovie from './pages/movie/NowPlaying';
import PopularMovie from './pages/movie/Popular';
import TopRatedMovie from './pages/movie/TopRated';
import Layout from './Layout';
// import Header from './components/Header';
// import Main from './components/Main';
// import Footer from './components/Footer';

function App() {
  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/Create" element={<CreateMovie />}></Route>
        <Route path="/movie/NowPlaying" element={<NowPlayingMovie />}></Route>
        <Route path="/movie/Popular" element={<PopularMovie />}></Route>
        <Route path="/movie/TopRated" element={<TopRatedMovie />}></Route>
      </Routes>
    </Layout> 
    </>
  );
}

export default App;
