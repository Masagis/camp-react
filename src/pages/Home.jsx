import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom'

function Home() {
  const users = [
    {
      id: 1,
      name: 'agis',
    },
    {
      id: 2,
      name: 'igbal',
    },
    {
      id: 3,
      name: 'fahmi',
    },
    {
      id: 4,
      name: 'wahyu',
    },
  ]
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {users.map(user =>(
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>

        )) }
      </ul>
    </div>
  )
}

export default Home
