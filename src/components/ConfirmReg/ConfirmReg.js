import confirm from '../../confirm.svg';
import "./ConfirmReg.sass";

export function ConfirmRegistration() {
  return (
    <div>
      <div className="confirm">
        <div className="confirm__block">
          <div><img src={confirm}/></div>
          <div className="confirm__text">Аккаунт успешно подтвержден!</div>
          <div className="confirm__enter">
            <button onClick={()=> window.location.assign('/')} type="button">Войти</button>
          </div>
        </div>
      </div>
    </div>
  );
}
