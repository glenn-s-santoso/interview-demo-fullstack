import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import UsersPage from './pages/UsersPage';

export default function App() {
  const [token, setToken] = useState(null);
  return token
    ? <UsersPage token={token} onLogout={() => setToken(null)} />
    : <LoginPage onLogin={setToken} />;
}
