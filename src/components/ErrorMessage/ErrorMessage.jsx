import s from "./ErrorMessage.module.css"

function ErrorMessage() {
  return (
      <div className={s.error}>
          <h2>Oops... Something went wrong, try again!</h2>
    </div>
  )
}

export default ErrorMessage