import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <h1>Not Found</h1>
      <p>Could not find requested resource</p>
      <Link
        className='text-secondary'
        href='/'
      >
        Return Home
      </Link>
    </>
  )
}
