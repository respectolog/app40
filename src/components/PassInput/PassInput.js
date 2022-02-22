import { useState } from "react";
import eye from '../../Search.svg';
import {Icon} from './EyeSvg.js'
export function PassInput() {
  const [passVisible, setVis] = useState(false);
  const [activeInput, setActive] = useState('');

  return(
    <>
      <div className="login-form__password">
        <Icon fill={passVisible ? "#FC441D" : "black"} setfunc={() => setVis(!passVisible)}/>
        <label for="pass">Пароль</label>
        <input type={passVisible ? "text" : "password"} id="pass" className={activeInput} onFocus={() => setActive('active')} onBlur={() => setActive('not-active')}/>
        <div className="login-form__password-forget"><a href="#">Забыли пароль?</a></div>
      </div>
    </>
  );
}
