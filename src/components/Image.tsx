import { config } from "../config/config"


export const Image = ({url, alt}: {url?: string, alt: string}) => {
    const baseUrl = config.API_URL
    return (
        <img src={`${baseUrl}${url}`} alt={alt}/>
    )
}