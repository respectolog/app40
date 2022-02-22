import background from '../../back.svg';
import backarrow from '../../backarrow.svg';
import "./RegForm.sass";
import { FormHead } from "../../components/FormHead/FormHead.js";
import { UnderHeadReg } from "../../components/UnderHeadReg/UnderHeadReg.js";
import { EmailInput } from "../../components/EmailInput/EmailInput.js";
import { PassInputReg } from "../../components/PassInput/PassInputReg.js";
import { RegButton } from "../../components/RegButton/RegButton.js";
import { TelInput } from "../../components/TelInput/TelInput.js";
import { CheckInput } from "../../components/CheckInput/CheckInput.js";


export function RegForm() {
  return (
    <div>
      <div className="reg-form">
        <div className="back"><a href="/"><img src={backarrow} width="14"/></a></div>
        < FormHead header="TELCELLMARKET"/>
        < UnderHeadReg/>
        < TelInput/>
        < EmailInput/>
        < PassInputReg/>
        < CheckInput />
        < RegButton/>
      </div>
    </div>
  );
}
