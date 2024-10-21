"use client"
import { getSession, signOut } from "next-auth/react"

async function handleLogout() {
    const session = await getSession()
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Token ${session?.accessToken}`
    }
    const logout = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout/`, {
        method: 'POST',
        headers
    })

    if (logout.ok) signOut()
}

export default function Component() {
    return (
        <button onClick={() => handleLogout()}>Sign out</button>
    )
}