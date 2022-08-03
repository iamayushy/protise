import nav from "../cssmodule/nav.module.css";
import { catAdapter } from "../categories";
import { useRef, useEffect, useState } from "react";
import { api } from "../UnsplashApi/Unsplash";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { PhotoCard } from "./PhotoCard";
import { CategorySlider } from "./CategorySlider";

const Navbar = ({children}) => {

  useEffect(() => {
    // api.search
    //     .getPhotos({query: 'current events', perPage:1})
    //     .then(result => {
    //         setPhotosResponse(result);
    //         console.log(result)
    //     })
    //     .catch(() => {
    //         console.log("something went wrong!");
    //     });
  }, []);

  return (
    <div className={nav.navbar}>
      <section className={nav.layout}>
        <p>Protoise</p>

        <section className={nav.nsearch}>
          <input type="text" placeholder="search for any image" />
        </section>



      </section>

      {children}
    </div>
  );
};
export { Navbar };
