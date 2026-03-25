import React from 'react';
import Navigation from './component/Navigation';
import HomePage from './pages/HomePage';
import {Route, Routes} from "react-router-dom";
import ArchivePage from './pages/ArchivePage';
import NewNotePage from './pages/NewNotePage';
import { Link } from 'react-router-dom';
import DetailNotePage from './pages/DetailNotePage';
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { getUserLogged,putAccessToken,getAccessToken } from './utils/network-data';
import GlobalNavigation from './component/GlobalNavigation';
import { LocaleProvider } from './contexts/LocaleContext';

function App() {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [locale, setLocale] = React.useState('id');
  const [theme, setTheme] = React.useState('light');

  const toggleLocale = () => {
    setLocale((prevLocale) => (prevLocale === 'id' ? 'en' : 'id'));
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const localeContextValue = React.useMemo(() => ({
    locale,
    toggleLocale,
    theme,
    toggleTheme,
  }), [locale, theme]);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  React.useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  React.useEffect(() => {
    const storedLocale = localStorage.getItem('locale');
    if (storedLocale) {
      setLocale(storedLocale);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('locale', locale);
  }, [locale]);

  React.useEffect(() => {
    const checkAuthUser = async () => {
      const accessToken = getAccessToken();
      if (accessToken) {
        const { data } = await getUserLogged();
        setAuthedUser(data);
      }
    };

    checkAuthUser();
  }, []);

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  }

  async function onLogout() {
    setAuthedUser(null);
    putAccessToken('');
  }

  if (authedUser === null) {
    return (
      <LocaleProvider value={localeContextValue}>
      <div className="app-container">
      <header className="app-header">
      <h1><Link to="/">{locale === 'id' ? 'Catatan Pribadi' : 'Personal Notes'}</Link></h1>
      <GlobalNavigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<LoginPage loginSuccess={onLoginSuccess} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

    </div>
    </LocaleProvider>
    );
  }

  return (
    <LocaleProvider value={localeContextValue}>
    <div className="app-container">
      <header className="app-header">
      <h1><Link to="/">{locale === 'id' ? 'Catatan Pribadi' : 'Personal Notes'}</Link></h1>
      <GlobalNavigation />
      <Navigation logout={onLogout} name={authedUser.name} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/notes/new" element={<NewNotePage />} />
          <Route path="/notes/:id" element={<DetailNotePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

    </div>
    </LocaleProvider>
  );
}

export default App;
