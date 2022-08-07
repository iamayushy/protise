import {useEffect, useState } from "react"
import { api } from "../UnsplashApi/Unsplash"

const usePhoto = ({searchQuery}) => {
    const [loading, setLoading] = useState(true)
    const [list, setList] = useState([])

    const sendQuery = () => {

            setLoading(true)

            api.search
            .getPhotos({query: searchQuery, perPage:10})
            .then(res => {
                const {response} = res
                const {results} = response
                setList([...list, ...results])
                setLoading(false)
            })
            .catch(e => {
                console.log(e)

            })


    }

    useEffect(() => {
        sendQuery(searchQuery)
    }, [searchQuery])

    return {list, loading}
}
export {usePhoto}
