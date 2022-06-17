import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={ <HomePage /> }  exact />
            <Route path="/about" element={ <AboutPage /> } />
            <Route path="/articles-list" element={ <ArticlesListPage /> } />
            <Route path="/article/:name" element={ <ArticlePage /> } />
            <Route path="*" element={ <NotFoundPage /> } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
