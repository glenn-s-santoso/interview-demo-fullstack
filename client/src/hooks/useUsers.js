import { useEffect, useState } from 'react';
import { fetchUsers } from '../services/userService';

export function useUsers(token) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers(token)
      .then(setUsers)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [token]);

  return { users, loading, error };
}
