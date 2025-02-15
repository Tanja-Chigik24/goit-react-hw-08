import css from "./Layout.module.css";

export const Layout = ({ children }) => {
  return (
    <main className={css.container}>
      <h1>Phonebook</h1>
      {children}
    </main>
  );
};
