import { useRef } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { catAdapter } from "../categories";
import nav from "../cssmodule/nav.module.css";
const CategorySlider = ({ getCategory }) => {
  const eleRef = useRef();

  const move = (val) => {
    const ele = eleRef.current;
    ele.scrollBy(0 + val, 0);
  };

  return (
    <section className={nav.hadapter}>
      <AiFillCaretLeft
        size={20}
        className={nav.left}
        onClick={() => move(-300)}
      />

      <ul ref={eleRef} className={nav.flow}>
        {catAdapter &&
          catAdapter.map((category, index) => {
            return (
              <li onClick={() => getCategory(index)} key={index}>
                {category}
              </li>
            );
          })}
      </ul>

      <AiFillCaretRight
        size={20}
        className={nav.right}
        onClick={() => move(300)}
      />
    </section>
  );
};
export { CategorySlider };
