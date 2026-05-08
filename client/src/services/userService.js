const BASE = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export async function fetchUsers(token) {
  const res = await fetch(`${BASE}/api/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Failed to fetch users');
  return data.data;
}
