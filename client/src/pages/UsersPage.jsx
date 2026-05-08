import { useUsers } from '../hooks/useUsers';

export default function UsersPage({ token, onLogout }) {
  const { users, loading, error } = useUsers(token);

  if (loading) return <p>Loading…</p>;
  if (error)   return <p style={{ color: 'red' }}>Error: {error}</p>;
  if (!users.length) return <p>No users found.</p>;

  return (
    <div>
      <h1>Users</h1>
      <button onClick={onLogout}>Logout</button>
      <ul>{users.map(u => <li key={u.id}>{u.email} — {u.role}</li>)}</ul>
    </div>
  );
}
