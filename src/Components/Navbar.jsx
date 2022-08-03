import nav from "../cssmodule/nav.module.css";
import { catAdapter } from "../categories";
import { useRef, useEffect, useState } from "react";
import { api } from "../UnsplashApi/Unsplash";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { PhotoCard } from "./PhotoCard";

const Navbar = () => {
  const eleRef = useRef();

  const move = (val) => {
    const ele = eleRef.current;
    ele.scrollBy(0 + val, 0);
  };

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

      <section className={nav.hadapter}>
        <AiFillCaretLeft
          size={20}
          className={nav.left}
          onClick={() => move(300)}
        />

        <ul ref={eleRef} className={nav.flow}>
          {catAdapter &&
            catAdapter.map((category, index) => {
              return <li key={index}>{category}</li>;
            })}
        </ul>

        <AiFillCaretRight
          size={20}
          className={nav.right}
          onClick={() => move(-300)}
        />

      </section>
    </div>
  );
};
export { Navbar };
