import { CategorySlider } from "../Components/CategorySlider"
import { Navbar } from "../Components/Navbar"
import { catAdapter } from "../categories"
import { SingleImage } from "../Components/SingleImage"
import { useEffect, useState } from "react"
import { api } from "../UnsplashApi/Unsplash"
import { PhotoCard } from "../Components/PhotoCard"

const UserPage = () => {
    const [image, setImage] = useState('')
    const [fetchedImage, setFetchedImage] = useState([])
    const fetchImage = (category) => {
        api.search
        .getPhotos({query: category, perPage:1})
        .then(res => {
            const {response} = res
            const {results} = response
            setFetchedImage(results)
        })
    }

    const getIndex = (idx) => {
        fetchImage(catAdapter[idx])
    }

    useEffect(() => {
       fetchImage(catAdapter[0])
      }, []);

    return(
        <>
        <Navbar>
            <CategorySlider getCategory={getIndex}/>
        </Navbar>
        {fetchedImage.length > 0 && fetchedImage.map((ele, i) =>
            (<SingleImage key={ele.id} photo={ele}/>)
        )}

        </>
    )
}
export {UserPage}
