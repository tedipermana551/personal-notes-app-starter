import React from 'react';
import Navigation from './component/Navigation';
import HomePageWrapper from './pages/HomePage';
import {Route, Routes} from "react-router-dom";
import ArchivePageWrapper from './pages/ArchivePage';
import NewNoteWrapper from './pages/NewNotePage';
import { Link } from 'react-router-dom';
import DetailNotePageWrapper from './pages/DetailNotePage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
      <h1><Link to="/">Catatan Pribadi</Link></h1>
      <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePageWrapper />} />
          <Route path="/archive" element={<ArchivePageWrapper />} />
          <Route path="/notes/new" element={<NewNoteWrapper />} />
          <Route path="/notes/:id" element={<DetailNotePageWrapper />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
