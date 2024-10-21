import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

const STAFF_ROUTES = [
  '/users'
]

export default withAuth(
  function middleware(req) {
    if (STAFF_ROUTES.includes(req.nextUrl.pathname) && !req.nextauth.token?.isStaff) {
      return NextResponse.redirect(`${req.nextUrl.origin}/unauthorized`)
    }
  }
)
