import tellogo from '../../Tel.svg';
import InputMask from 'react-input-mask';

export function TelInput() {
  return(
    <>
      <div className="login-form__tel">
        <img src={tellogo} width="22"/>
        <InputMask mask="+7\(999) 999 99 99" maskChar=" " />
        <label for="phone">Телефон</label>
      </div>
    </>
  );
}
