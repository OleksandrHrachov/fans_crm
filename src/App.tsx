import './App.css';
import { AuthProvider } from './context/AuthContext';
import { LoginPage } from './pages/LoginPage';
import { UserPage } from './pages/UserPage';

function App() {
  let renderPage;

  switch (window.location.pathname) {
    case '/login':
      renderPage = <LoginPage />;
      break;
    case '/user':
      renderPage = <UserPage />;
      break;
    default:
      window.location.pathname = '/login';
      break;
  }
  return (
    <AuthProvider>
      <div className="app">
        <nav className="app__nav">
          <a href="http://localhost:3000/login">LOGIN</a>
          <a href="http://localhost:3000/user">PROFILE</a>
        </nav>
        <div className="app_page">{renderPage}</div>
      </div>
    </AuthProvider>
  );
}

export default App;
