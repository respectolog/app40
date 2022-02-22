import { useState } from "react";
import background from '../../back.svg';
import "./MainForm.sass";
import { FormHead } from "../../components/FormHead/FormHead.js";
import { UnderHeadText } from "../../components/UnderHeadText/UnderHeadText.js";
import { EmailInput } from "../../components/EmailInput/EmailInput.js";
import { PassInput } from "../../components/PassInput/PassInput.js";
import { Enter } from "../../components/Enter/Enter.js";

export function MainForm() {
  return (
    <div>
      <div className="login-form">
        < FormHead header="TELCELLMARKET"/>
        < UnderHeadText/>
        < EmailInput/>
        < PassInput/>
        < Enter/>
      </div>
    </div>
  );
}
