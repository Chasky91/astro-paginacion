import { API_URL } from "astro:env/server"

export async function getUsuarios(page, limit) {
  const res = await fetch(`${API_URL}/user/users?page=${page}&limit=${limit}`, {
    
  })
  if (!res.ok) throw new Error(`API respondió ${res.status}`)
  return res.json()
}