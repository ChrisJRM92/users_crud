import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hooks/useCrud'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {

  const [userSelected, setUserSelected] = useState()
  const [formIsOpen, setFormIsOpen] = useState(false)

  const [ users, getUsers, createUser, deleteUser, updateUser ] = useCrud('/users/')
  useEffect(() => {
    getUsers()
  }, [])

  // console.log(users)

const handleOpenForm = () => {
  setFormIsOpen(true)
}

  return (
    <>
      <div className='header'>
        <h1>Usuarios</h1>
        <button onClick={handleOpenForm}><i class="fa-solid fa-user-plus"></i>Agregar usuario</button>
      </div>
      <FormUser
        createUser = {createUser}
        userSelected = {userSelected}
        updateUser={updateUser}
        setUserSelected = {setUserSelected}
        formIsOpen={formIsOpen}
        setFormIsOpen={setFormIsOpen}
      />
      <div className='container'>
        {
          users?.map((user) => (
            <UserCard
              key={user.id}
              user = {user}
              deleteUser = {deleteUser}
              setUserSelected = {setUserSelected}
              setFormIsOpen={setFormIsOpen}
              
            />
          ))
        }
      </div>
    </>
  )
}

export default App
