import { CategorySlider } from "../Components/CategorySlider"
import { Navbar } from "../Components/Navbar"
import { catAdapter } from "../categories"
import { SingleImage } from "../Components/SingleImage"
import { useEffect, useState } from "react"
import { api } from "../UnsplashApi/Unsplash"

const UserPage = () => {
    const [image, setImage] = useState('')

    const fetchImage = (category) => {
        api.search
        .getPhotos({query: category, perPage:1})
        .then(res => {
            console.log(res.response.results[0])
        })
    }

    const getIndex = (idx) => {
        fetchImage(catAdapter[idx])
    }

    // useEffect(() => {
    //     api.search
    //         .getPhotos({query: 'current events', perPage:1})
    //         .then(result => {
    //             setPhotosResponse(result);
    //             console.log(result)
    //         })
    //         .catch(() => {
    //             console.log("something went wrong!");
    //         });
    //   }, [image]);

    return(
        <>
        <Navbar>
            <CategorySlider getCategory={getIndex}/>
        </Navbar>
        {/* show up single Image */}
        {/* <SingleImage/> */}
        </>
    )
}
export {UserPage}
