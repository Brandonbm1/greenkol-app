import "../styles/Button.css"

export const Button = (
    {text, action, type = "primary"}: 
    {text: string, action: () => void, type: 'primary' | 'secondary' | 'muted'}
) => {
    return(
        <button className={`button ${type}`} onClick={action}>
            {text}
        </button>
    )
}