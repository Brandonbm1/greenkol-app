import type { ReactNode } from "react";
import "../styles/Button.css"

export const Button = (
    {text, action, icon, type = "primary"}: 
    {text: string, action: () => void, icon?: ReactNode; type: 'primary' | 'secondary' | 'muted'}
) => {
    return(
        <button className={`button ${type}`} onClick={action}>
            {text} {icon}
        </button>
    )
}