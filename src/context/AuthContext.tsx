import {
  createContext,
  useContext,
  useState,
  useEffect,
  FC,
  ReactNode
} from 'react';

interface IUser {
  name: string;
  age: number;
  email: string;
}

interface AuthContextType {
  authenticatedUser: IUser | null;
  login: (userData: IUser) => void;
  logout: () => void;
}

interface IProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: FC<IProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('userFans');
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
    } else {
      setUser(null);
    }
  }, []);

  const login = (userData: IUser) => {
    localStorage.setItem('userFans', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('userFans');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ authenticatedUser: user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
