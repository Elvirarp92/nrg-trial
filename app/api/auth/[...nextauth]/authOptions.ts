import { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const credentials = CredentialsProvider({
  name: 'Credentials',
  credentials: {
    username: { label: 'Username', type: 'text' },
    password: { label: 'Password', type: 'password' },
  },
  async authorize(credentials) {
    const res: Response = await fetch(`${process.env.API_URL}/auth/login/`, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: { 'Content-Type': 'application/json' },
    })

    const user = await res.json()

    if (res.ok && user) {
      return user
    }
    return null
  },
})

export const authOptions: AuthOptions = {
  providers: [credentials],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    session({ session, token }) {
      if (token?.accessToken) {
        session.username = token.username
        session.isStaff = token.isStaff
        session.accessToken = token.accessToken
      }
      return session
    },
    jwt({ token, user }) {
      // Persist the API bearer token to the JWT right after signin
      if (user) {
        token.username = user.username
        token.isStaff = user.is_staff
        token.accessToken = user.token
      }
      return token
    },
  },
}
