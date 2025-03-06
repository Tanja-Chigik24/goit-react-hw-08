import Modal from "react-modal";
import { HiMiniUser, HiPhone } from "react-icons/hi2";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedContact } from "../../redux/contacts/selectors";
import { closeModal } from "../../redux/contacts/slice";
import { toast } from "react-hot-toast";
import css from "./ModalContactDelete.module.css";

export default function ModalContactDelete({ showModal }) {
  const dispatch = useDispatch();
  const contactDelete = useSelector(selectSelectedContact);
  const onCloseDeleteContact = () => {
    dispatch(deleteContact(`${contactDelete.id}`));
    toast.success("Contact deleted!");
  };
  const onClose = () => {
    dispatch(closeModal());
    toast.success("Contact not deleted!");
  };

  return (
    <div>
      <Modal
        isOpen={showModal}
        onRequestClose={onClose}
        className={css.modal}
        overlayClassName={css.overlay}
        ariaHideApp={false}
      >
        {
          <div className={css.backdrop}>
            <div className={css.modal}>
              <p className={css.text}>You confirm the deletion of the</p>
              <div className={css.name}>
                <HiMiniUser className={css.myIcon} />
                contact.name: {contactDelete.name}
              </div>
              <div className={css.number}>
                <HiPhone className={css.myIcon} /> contact.number:
                {contactDelete.number}
              </div>
              <div className={css.btns}>
                <button className={css.btn} onClick={onCloseDeleteContact}>
                  Сonfirm
                </button>
                <button className={css.btn} onClick={onClose}>
                  Сancel
                </button>
              </div>
            </div>
          </div>
        }
      </Modal>
    </div>
  );
}
