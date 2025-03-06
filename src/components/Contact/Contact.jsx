import { HiMiniUser, HiPhone } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRemoving } from "../../redux/contacts/selectors";
import { changeContact, openModal } from "../../redux/contacts/slice";
import ModalContactDelete from "../ModalContactDelete/ModalContactDelete";
import css from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const showModal = useSelector(selectIsRemoving);
  const handleDelete = () => {
    dispatch(openModal(contact));
  };

  const handleChangeContact = () => {
    dispatch(changeContact(contact));
  };

  return (
    <div>
      <ModalContactDelete
        showModal={showModal}
        contact={contact}
      ></ModalContactDelete>

      <div className={css.list}>
        <div className={css.contact}>
          <p className={css.text}>
            <HiMiniUser className={css.myIcon} />
            {contact.name}
          </p>
          <p className={css.text}>
            <HiPhone className={css.myIcon} />
            {contact.number}
          </p>
        </div>
        <div className={css.btns}>
          <button className={css.btn} onClick={handleDelete}>
            Delete
          </button>
          <button className={css.btn} onClick={handleChangeContact}>
            Change
          </button>
        </div>
      </div>
    </div>
  );
}
