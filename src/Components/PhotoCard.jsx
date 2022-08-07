import { Skeleton } from "@mantine/core";
import { useEffect, useRef, useState } from "react";

const PhotoCard = ({ photo }) => {
    const { user, urls } = photo;
    const [imageLoaded, setImageLoaded] = useState(true)


    return (
      <>
        <section className="image-card">

          <section className="image-desc">
          <img  src={user.profile_image.small} alt="" />
          <p>{user.name}</p>
          </section>
        <img    className="img" src={urls.full}  />

        </section>
      </>
    );
  };
  export {PhotoCard}
