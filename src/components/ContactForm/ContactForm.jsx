import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addContact, patchContact } from "../../redux/contacts/operations";
import { cancel } from "../../redux/contacts/slice";
import {
  selectIsUpdating,
  selectSelectedContact,
} from "../../redux/contacts/selectors";
import css from "./ContactForm.module.css";

const UserSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function ContactForm() {
  const contactEdit = useSelector(selectSelectedContact);
  const dispatch = useDispatch();
  const updatingContact = useSelector(selectIsUpdating);
  const onClick = () => {
    dispatch(cancel());
  };
  const handleSubmit = (values, actions) => {
    if (updatingContact) {
      dispatch(
        patchContact({
          contactId: contactEdit.id,
          data: { name: values.username, number: values.number },
        })
      );
      toast.success("Contact updated!", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      dispatch(
        addContact({
          name: values.username,
          number: values.number,
        })
      );
      toast.success("Contact added!", {
        style: {
          borderRadius: "10px",
          background: "#2112",
          color: "##fff",
        },
      });
    }
    actions.resetForm();
  };

  const nameFieldId = useId();
  const numberFieldId = useId();
  const initialValues = {
    username: "",
    number: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      <Form className={css.form}>
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={css.field}
            type="text"
            name="username"
            id={nameFieldId}
            placeholder="Enter contact text..."
            required
          />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
        </div>
        <div>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={css.field}
            type="text"
            name="number"
            id={numberFieldId}
            placeholder="Enter contact number..."
            required
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button type="submit" className={css.btn}>
          {updatingContact ? "Update contact" : "Add a new contact"}
        </button>
        {updatingContact && (
          <button type="submit" className={css.btn} onClick={onClick}>
            Cancel
          </button>
        )}
      </Form>
    </Formik>
  );
}
