import { API_URL } from "astro:env/server"

export async function getUsuarios() {
  const res = await fetch(`${API_URL}/user/users`, {
    
    signal: AbortSignal.timeout(8000),
  })
  if (!res.ok) throw new Error(`API respondió ${res.status}`)
  return res.json()
}