import { API_URL } from "astro:env/server"

export async function getUsuarios(page, limit) {
  const res = await fetch(`${API_URL}/user/users?page=${page}&limit=${limit}`, {
    
  })
  if (!res.ok) throw new Error(`API respondió ${res.status}`)
  return res.json()
}

export async function login(email, password) {
  const res = await fetch(`${API_URL}/user/loguin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  if (!res.ok) throw new Error(`API respondió ${res.status}`)
  return res.json()
}