import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    username?: string
    isStaff?: boolean
    accessToken?: string
  }

  interface User {
    id: string
    username: string
    groups: number[]
    is_staff: boolean
    token: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    username?: string
    isStaff?: boolean
    accessToken?: string
  }
}