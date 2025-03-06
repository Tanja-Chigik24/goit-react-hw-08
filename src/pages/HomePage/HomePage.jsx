import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import photo from "../../../public/images/iPhone_contacts.png";
import css from "../HomePage/HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <div className={css.container}>
        <img src={photo} alt="" className={css.imgPhoneBook} />
        <h1 className={css.title}>Welcome to super Phonebook</h1>
      </div>
    </>
  );
}
