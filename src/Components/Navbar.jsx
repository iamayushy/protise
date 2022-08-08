import nav from "../cssmodule/nav.module.css";

const Navbar = ({ children, handleChange, handleKey }) => {
  return (
    <div className={nav.navbar}>
      <section className={nav.layout}>

        <section className={nav.nsearch}>
          <input onKeyUp={(e) => handleKey(e)}   type="text" onChange={(e) => handleChange(e)} placeholder="search and enter" />
        </section>
      </section>

      {children}
    </div>
  );
};
export { Navbar };
