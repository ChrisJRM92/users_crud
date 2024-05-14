import { useEffect } from "react"
import { set, useForm } from "react-hook-form"

const FormUser = ({ createUser, userSelected, updateUser, setUserSelected }) => {

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
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <span>Email</span>
          <input {...register('email', { required: "Se requiere un correo", 
            pattern:{
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Correo no valido",
            },
            })} type="email" />
          <p>{errors.email && errors.email.message}</p>
        </label>

        <label>
          <span>Password</span>
          <input {...register('password', {  required: true })} aria-invalid={errors.password ? "true" : "false"} type="password" />
          {errors.password?.type === "required" && (<p role="alert">Se requiere una contraseña</p>)}
        </label>

        <label>
          <span>First Name</span>
          <input {...register('first_name', { required: true })} aria-invalid={errors.first_name ? "true" : "false"} type="text" />
          {errors.first_name?.type === "required" && (<p role="alert">Se requiere un nombre</p>)}
        </label>

        <label>
          <span>Last Name</span>
          <input {...register('last_name', { required: true })} aria-invalid={errors.last_name ? "true" : "false"} type="text" />
          {errors.last_name?.type === "required" && (<p role="alert">Se requiere un apellido</p>)}
        </label>

        <label>
          <span>Birthday</span>
          <input {...register('birthday')} type="date" />
        </label>
        
        <button>Submit</button>
      </form>
    </div>
  )
}

export default FormUser