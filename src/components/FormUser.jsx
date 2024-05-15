import './FormUser.css'
import { useEffect } from "react"
import { set, useForm } from "react-hook-form"

const FormUser = ({ createUser, userSelected, updateUser, setUserSelected, formIsOpen, setFormIsOpen }) => {

  const { handleSubmit, register, reset, formState: { errors } }= useForm()


  useEffect(() => {
    reset(userSelected)
  }, [userSelected])
  
  const submit = (data) =>{
    // console.log(data)
    if(userSelected){
      // update
      updateUser(userSelected.id, data)
      setUserSelected()
    }else{
      // Create
      createUser(data)
    }

    reset({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: ''
    })
    setFormIsOpen(false)
  }

  const handleExit = ()=>{
    setFormIsOpen(false)
    reset({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: ''
    })
    setUserSelected()
  }

  return (
    <div className={`container_form ${formIsOpen || 'container_form_close'}`}>
      <form onSubmit={handleSubmit(submit)}>
        <i onClick={handleExit} class="fa-solid fa-xmark"></i>
        <h2 className='title'>{userSelected ? 'Register':'Crear usuario'}</h2>
        <div className='content_form'>
          <label>
            <span>Correo</span>
            <input placeholder='ejemplo@email.com' {...register('email', { required: "* Se requiere un correo", 
              pattern:{
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Correo no valido",
              },
              })} type="email" />
            <p>{errors.email && errors.email.message}</p>
          </label>

          <label>
            <span>Contraseña</span>
            <input placeholder='Ingresar contraseña' {...register('password', {  required: true })} aria-invalid={errors.password ? "true" : "false"} type="password" />
            {errors.password?.type === "required" && (<p role="alert">* Se requiere una contraseña</p>)}
          </label>

          <label>
            <span>Nombres</span>
            <input placeholder='Nombres completos' {...register('first_name', { required: true })} aria-invalid={errors.first_name ? "true" : "false"} type="text" />
            {errors.first_name?.type === "required" && (<p role="alert">* Valores no válidos</p>)}
          </label>

          <label>
            <span>Apellidos</span>
            <input placeholder='Apellidos completos' {...register('last_name', { required: true })} aria-invalid={errors.last_name ? "true" : "false"} type="text" />
            {errors.last_name?.type === "required" && (<p role="alert">* Valores no válidos</p>)}
          </label>

          <label>
            <span>Fecha de nacimiento </span>
            <input {...register('birthday')} type="date" />
          </label>
        </div>
        <button className='btn_form'>Enviar</button>
      </form>
    </div>
  )
}

export default FormUser