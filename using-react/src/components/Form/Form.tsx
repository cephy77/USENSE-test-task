import { useState } from "react"
import PasswordInput from "../PasswordInput/PasswordInput";
import "./Form.css"

function Form(){
    const [indicators, setIndicators] = useState({
        leftBar: "",
        mediumBar: "",
        rightBar: ""
    })
    const checkPassword = (pass:string)=>{
        const hasNumbers = /\d/.test(pass);
        const hasSymbols = /\W/.test(pass);
        const hasChars = /[a-zA-Z]+/g.test(pass);
        const twoOfThree =
        (hasChars && hasSymbols && !hasNumbers) ||
        (hasChars && hasNumbers && !hasSymbols) ||
        (hasNumbers && hasSymbols && !hasChars);
        const threOfThree= hasChars && hasSymbols && hasNumbers;
        if (pass.length === 0){
            setIndicators({
                leftBar: "",
                mediumBar: "",
                rightBar: ""
            })
        } else if (pass.length < 8){
            setIndicators({
                leftBar: " red",
                mediumBar: " red",
                rightBar: " red"
            })
        } else {
            setIndicators({
                leftBar: twoOfThree ? ' yellow' : threOfThree ? ' green' : ' red',
                mediumBar: twoOfThree ? ' yellow' : threOfThree ? ' green' : '',
                rightBar: threOfThree ? ' green' : '',
            })
        }
    }
    return (
    <div className="form">
        <h1 className="header">How Strong is Your Password?</h1>
        <PasswordInput verify={checkPassword}/>
        <div className="indicator-wrapper">
            <div className="indicator">
                <div className={`bar${indicators.leftBar}`}></div>
                <div className={`bar${indicators.mediumBar}`}></div>
                <div className={`bar${indicators.rightBar}`}></div>
            </div>
        </div>
    </div>)
}
export default Form