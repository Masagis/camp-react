/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap'
import axios from 'axios'
// import { Link } from 'react-router-dom'

function Home() {
  const [datas, setDatas] = useState()
  const [errors, setErrors] = useState()
  const [loading, setLoading] = useState()
  // const users = [
  //   {
  //     id: 1,
  //     name: 'agis',
  //   },
  //   {
  //     id: 2,
  //     name: 'igbal',
  //   },
  //   {
  //     id: 3,
  //     name: 'fahmi',
  //   },
  //   {
  //     id: 4,
  //     name: 'wahyu',
  //   },
  // ]

  // WITh FETCH
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         'https://jsonplaceholder.typicode.com/users',
  //       ) // URL API dummy
  //       if (!response.ok) {
  //         throw new Error('Error fetching data')
  //       }
  //       const data = await response.json()
  //       console.log('response', data)
  //       setDatas(data)
  //     } catch (error) {
  //       setErrors(error.message)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }

  //   fetchData()
  // }, []) // [] memastikan fetch hanya dilakukan sekali setelah render pertama

  // WITH AXIOS
  useEffect(() => {
    const fetchData = async (id) => {
      setLoading(true) // Set loading state to true
      try {
        // const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`);
        const response = await axios({
          method: 'PUT',
          url: `https://jsonplaceholder.typicode.com/users/${id}`,
          // data: {
          //   name: 'masagis',
          //   email:'masagis@gmail.com',
          //   username:'masagis'
          // }
        })
        console.log('response', response)
        setDatas(response.data) // Save the data into state
        setErrors(null)
      } catch (err) {
        setErrors(err.message)
      } finally {
        setLoading(false) // Set loading state to false
      }
    }

    fetchData(23)
  }, [])

  // console.log(datas)
  console.log(errors)
  console.log(loading)

  return (
    <div>
      {/* <h1>Home</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul> */}
      <h1>Data from API Fetch & Axios</h1>
      <ul>
        {datas && datas.map((item) => <li key={item.id}>{item.name}</li>)}
      </ul>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>email</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {datas &&
            datas.map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.username}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Home
