import { useAuth } from '../../context/AuthContext';
import { Helmet } from 'react-helmet';
import './UserPage.css';

export const UserPage = () => {
  const context = useAuth();

  const handleLogout = () => {
    context?.logout();
    window.location.pathname = '/login';
  };
  return (
    <div className="user">
      <Helmet>
        <title>User page</title>
      </Helmet>
      <h2 className="user__title">Profile</h2>
      {context?.authenticatedUser ? (
        <div className="user__info">
          <p>Hello {context?.authenticatedUser.name}</p>
          <p>Your age is {context?.authenticatedUser.age}</p>
          <p>Your email is {context?.authenticatedUser.email}</p>
          <button type="button" onClick={handleLogout}>
            LOGOUT
          </button>
        </div>
      ) : (
        <p>
          You are not logged into the application, please go to the{' '}
          <a href="http://localhost:3000/login">login page</a>
        </p>
      )}
    </div>
  );
};
