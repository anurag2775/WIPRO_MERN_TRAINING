import React from 'react'
import withAuth from '../hoc/withAuth'

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
    </div>
  )
}

export default withAuth(Home)
