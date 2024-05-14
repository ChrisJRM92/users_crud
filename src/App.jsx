import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hooks/useCrud'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {

  const [userSelected, setUserSelected] = useState()

  const [ users, getUsers, createUser, deleteUser, updateUser ] = useCrud('/users/')
  useEffect(() => {
    getUsers()
  }, [])

  console.log(users)
  return (
    <>
      <h1>Use Crud</h1>
      <FormUser
        createUser = {createUser}
        userSelected = {userSelected}
        updateUser={updateUser}
        setUserSelected = {setUserSelected}
      />
      <div>
        {
          users?.map((user) => (
            <UserCard
              key={user.id}
              user = {user}
              deleteUser = {deleteUser}
              setUserSelected = {setUserSelected}
              
            />
          ))
        }
      </div>
    </>
  )
}

export default App
