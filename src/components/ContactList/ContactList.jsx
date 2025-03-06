import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { useSelector } from "react-redux";
import { selectLoading, selectError } from "../../redux/contacts/selectors";
import Loader from "../../components/Loader/Loader";
import css from "./ContactList.module.css";

export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);
  const load = useSelector(selectLoading);
  const error = useSelector(selectError);
  return (
    <ul className={css.list}>
      {load && <Loader />}
      {error && <p>Error occured... Error is {error}</p>}
      {visibleContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
