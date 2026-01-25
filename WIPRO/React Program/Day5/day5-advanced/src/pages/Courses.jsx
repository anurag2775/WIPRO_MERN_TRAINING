import React from 'react'
import withAuth from '../hoc/withAuth'

function Courses() {
  return (
    <div>
      <h2>Courses Page</h2>
    </div>
  )
}

export default withAuth(Courses)
