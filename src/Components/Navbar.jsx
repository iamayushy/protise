import nav from "../cssmodule/nav.module.css";

const Navbar = ({ children }) => {
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
