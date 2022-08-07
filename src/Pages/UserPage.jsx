import { CategorySlider } from "../Components/CategorySlider";
import { Navbar } from "../Components/Navbar";
import { catAdapter } from "../categories";
import { SingleImage } from "../Components/SingleImage";
import { useEffect, useState } from "react";
import { api } from "../UnsplashApi/Unsplash";
import { PhotoCard } from "../Components/PhotoCard";
import { ListImage } from "./ListImage";
import InfiniteScroll from "react-infinite-scroll-component";

const UserPage = () => {
  const [fetchedImage, setFetchedImage] = useState([]);
  const [singleImage, setSingleImage] = useState([])
  const [userQuery, setUserQuery] = useState(catAdapter[0]);
  const [text, setText] = useState('')


  const fetchImage = (category) => {
    api.search.getPhotos({ query: category, perPage: 10 }).then((res) => {
      const { response } = res;
      const { results } = response;
      setSingleImage([results[0]])
      setFetchedImage([...fetchedImage, ...results]);

    });
  };

  const handleKey = (e) => {
    if(e.key === 'Enter'){
      fetchImage(text)
    }
  }

  const handleText = (e) => {
    setText(e.target.value.trim())

  }

  const getIndex = (idx) => {
    setFetchedImage([])
    console.log(fetchedImage)
    fetchImage(catAdapter[idx]);
    setUserQuery(catAdapter[idx])
  };

  useEffect(() => {
    fetchImage(catAdapter[0]);
  }, []);

  return (
    <>
      <Navbar
       handleChange={handleText}
       handleKey={handleKey}>
        <CategorySlider getCategory={getIndex} />
      </Navbar>
      {singleImage.length > 0 &&
        singleImage.map((ele) => <SingleImage key={ele.id} photo={ele} />)}



          <InfiniteScroll
          dataLength={fetchedImage.length}
          next={() => fetchImage(userQuery)}
          hasMore={true}
          loader={<>loading...</>}
          >
        <ListImage>



            {fetchedImage.length > 0 &&
            fetchedImage.map((ele, i) => {
                return <PhotoCard key={i} photo={ele}/>
            })}

        </ListImage>
        </InfiniteScroll>
    </>
  );
};
export { UserPage };
