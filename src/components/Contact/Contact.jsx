import { HiMiniUser, HiPhone } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.list}>
      <div className={css.contact}>
        <p className={css.text}>
          <HiMiniUser className="my-icon" size="20" />
          {contact.name}
        </p>
        <p className={css.text}>
          <HiPhone className="my-icon" size="20" />
          {contact.number}
        </p>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
