export function RegButton() {
  return(
    <div className="login-form__submit">
      <button onClick={()=> window.location.assign('confirm')} type="button">Зарегистрироваться</button>
    </div>
  );
}
