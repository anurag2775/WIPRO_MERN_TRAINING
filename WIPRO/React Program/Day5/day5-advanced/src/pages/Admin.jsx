import React from 'react'
import withAuth from '../hoc/withAuth'

function Admin() {
  return (
    <div>
      <h2>Admin Page</h2>
    </div>
  )
}

export default withAuth(Admin)  
