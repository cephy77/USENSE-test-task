import { useState, useEffect } from "react";
import hide from "../../assets/hide.png"
import show from "../../assets/show.png"
import "./PasswordInput.css"

function PasswordInput(props:{verify(pass:string):void}){
    const {verify} = props
    const [password, setPassword] = useState("");
    const [visibilityPng, setVisibilityPng] = useState(show)
    const [inputType, setInputType] = useState("password")

    useEffect(()=>{
        verify(password)
    }, [password])

    const toggleVisibility = ()=>{
        if(inputType === "password"){
            setInputType("text") 
            setVisibilityPng(hide)
        } else {
            setInputType("password")
            setVisibilityPng(show)
            
        }
    }
    const passwordHandler = (e:any)=>{
        setPassword(e.target.value)
    }


    return(
    <div className="password-wrapper">
        <input  className="password-wrapper__input" type={inputType} name="password" value={password} onChange={passwordHandler}/>
        <div className="password-wrapper__visibility-switch" onClick={toggleVisibility}>
            <img src={visibilityPng} alt=""/>
         </div>
    </div>)
} 
export default PasswordInput