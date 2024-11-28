import { FunctionComponent } from "react";

interface ButtonProps {
    name:string
}
 
const Button: FunctionComponent<ButtonProps> = ({ name}) => {
    return (  
        <>
        {name}
        </>
    );
}
 
export default Button;