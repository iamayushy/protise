import { CategorySlider } from "../Components/CategorySlider";
import { Navbar } from "../Components/Navbar";
import { catAdapter } from "../categories";
import { SingleImage } from "../Components/SingleImage";
import { useEffect, useState } from "react";
import { api } from "../UnsplashApi/Unsplash";
import { PhotoCard } from "../Components/PhotoCard";
import { usePhoto } from "../Components/usePhoto";
import { ListImage } from "./ListImage";

const UserPage = () => {
  const [image, setImage] = useState("");
  const [fetchedImage, setFetchedImage] = useState([]);
  const [userQuery, setUserQuery] = useState(catAdapter[0]);
  const { list } = usePhoto({ searchQuery: userQuery });

  const fetchImage = (category) => {
    api.search.getPhotos({ query: category, perPage: 1 }).then((res) => {
      const { response } = res;
      const { results } = response;
      setFetchedImage(results);
      console.log(results)
    });
  };

  const getIndex = (idx) => {
    fetchImage(catAdapter[idx]);
    setUserQuery(catAdapter[idx])
  };

  useEffect(() => {
    fetchImage(catAdapter[0]);
  }, []);

  return (
    <>
      <Navbar>
        <CategorySlider getCategory={getIndex} />
      </Navbar>
      {fetchedImage.length > 0 &&
        fetchedImage.map((ele) => <SingleImage key={ele.id} photo={ele} />)}

        <ListImage>
            {list.length > 0 &&
            list.map((ele, i) => {
                return <PhotoCard key={i} photo={ele}/>
            })}
        </ListImage>
    </>
  );
};
export { UserPage };
