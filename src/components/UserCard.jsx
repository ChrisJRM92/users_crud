import './UserCard.css'

const UserCard = ({ user, deleteUser, setUserSelected, setFormIsOpen }) => {

    const handleDelete = () =>{
      deleteUser(user?.id)
    }

    const handleEdit = () =>{
      setUserSelected(user)
      setFormIsOpen(true)
    }

  return (
    <article>
        <h3>{user?.first_name} {user?.last_name}</h3>
        <hr />
        <ul>
            <li>
                <span className='email'>Correo</span>
                <div className='icon'><i class="fa-regular fa-envelope"></i><span className='spam_email'>{user?.email}</span></div>
            </li>
            <li>
                <span className='birthday'>Cumpleaños</span>
                <div className='icon'><i class="fa-solid fa-cake-candles"></i><span className='spam_bd'>{user?.birthday}</span></div>
            </li>
        </ul>
        <div className='btn'>
          <button className='btn1' onClick={handleDelete}>Eliminar usuario</button>
          <button className='btn2' onClick={handleEdit}>Editar usuario</button>
        </div>
    </article>
  )
}

export default UserCard