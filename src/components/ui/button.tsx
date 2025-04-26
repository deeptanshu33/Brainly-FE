type Variants = "primary"|"secondary"
interface ButtonProps{
    variant: Variants;
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: React.ReactNode;
    endIcon?: any;
    fullWidth?:any;
    loading?:boolean;
    onClick?: () => void;
}

const variantStyles = {
    "primary" : "bg-purple-600 text-white",
    "secondary" : "bg-purple-300 text-purple-600"
}

const defaultStyles = "rounded-md flex items-center font-light"

const sizeStyles = {
    "sm" : "py-1 px-2",
    "md" : "py-2 px-4", 
    "lg" : "py-4 px-6"
}

export const Button = (props: ButtonProps) => {
    return <button onClick={props.onClick} className={`flex justify-center ${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]} ${props.fullWidth ? "w-full" : ""} ${props.loading ? "opacity-45" : "opacity-100"}`}>
        {props.startIcon ? <div className={`pr-2 `}>{props.startIcon}</div> : null} {props.text} {props.endIcon}
        </button>
}

<Button variant="primary" size="md" text="test" onClick={()=>{}} />