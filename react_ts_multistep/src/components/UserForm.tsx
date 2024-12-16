
type UserProps = {
  data: {
    name: string,
    email: string
  }
}
const UserForm = ({data}: UserProps) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input type="text" name="name" id="name" placeholder="Digite seu nome" required/>
      </div>
      <div className="form-control">
        <label htmlFor="email">E-mail:</label>
        <input type="text" name="email" id="email" placeholder="Digite o seu e-mail" required/>
      </div>
    </div>
  )
}

export default UserForm