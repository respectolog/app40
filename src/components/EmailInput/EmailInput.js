import emaillogo from '../../email.svg';

export function EmailInput() {
  return(
    <>
      <div className="login-form__email">
        <img src={emaillogo} width="22"/>
        <input type="email" id="email"/>
        <label for="email">E-mail</label>
      </div>
    </>
  );
}
