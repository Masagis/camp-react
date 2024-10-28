import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { useParams } from 'react-router-dom'

function UserDetail() {
  const {userId} = useParams()
  return (
    <div>
      <h1>User Detail</h1>
      <p>user ID: {userId}</p>
    </div>
  )
}

export default UserDetail