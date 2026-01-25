import React from 'react'
import withAuth from '../hoc/withAuth'

function Employee() {
  return (
    <div>
      <h2>Employee Page</h2>
    </div>
  )
}

export default withAuth(Employee)
