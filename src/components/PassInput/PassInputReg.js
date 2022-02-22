import { useState } from "react";
import eye from '../../Search.svg';
import {Icon} from './EyeSvg.js'
export function PassInputReg() {
  const [passVisible, setVis] = useState(false);
  const [passVisible2, setVis2] = useState(false);
  const [activeInput1, setActive] = useState('');
  const [activeInput2, setActive2] = useState('');

  return(
    <>
      <div className="login-form__password">
        <Icon fill={passVisible ? "#FC441D" : "black"} setfunc={() => setVis(!passVisible)}/>
        <label for="pass">Пароль</label>
        <input type={passVisible ? "text" : "password"} id="pass" className={activeInput1} onFocus={() => setActive('active')} onBlur={() => setActive('not-active')}/>
      </div>
      <div className="login-form__password-repeat">
        <Icon fill={passVisible2 ? "#FC441D" : "black"} setfunc={() => setVis2(!passVisible2)}/>
        <label for="pass-repeat">Повторите пароль</label>
        <input type={passVisible2 ? "text" : "password"} id="pass-repeat" className={activeInput2} onFocus={() => setActive2('active')} onBlur={() => setActive2('not-active')}/>
      </div>
    </>
  );
}
