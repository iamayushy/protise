import { useEffect, useState } from "react"
import { api } from "../UnsplashApi/Unsplash"

const Page = ({photo}) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        api.search
        .getPhotos({query:'bike', orientation:'landscape'})
        .then(res => {
            setData(res)
            console.log(res)
        })
        .catch(() => {
            console.log('Wrong')
        })
    },[])
    return(
        <div>

        </div>
    )
}
export {Page}
