import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge";

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

const Button = forwardRef<HTMLButtonElement,ButtonProps>(({
className,
    children,
    disabled,
    type="button",
    ...props
},ref)=>{
    return(
        <button
        type={type}
        className={twMerge(`
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        `)}>

        </button>
    )
})
Button.displayName = "Button";
export default Button;