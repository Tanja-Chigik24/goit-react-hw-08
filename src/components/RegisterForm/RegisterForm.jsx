import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./RegisterForm.module.css";

const UserSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm;
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field
            className={css.field}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter name ..."
          />
        </label>
        <ErrorMessage className={css.error} name="email" component="span" />
        <label className={css.label}>
          Email
          <Field
            className={css.field}
            type="email"
            name="email"
            pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/."
            title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
            placeholder="Enter email ..."
          />
        </label>
        <ErrorMessage className={css.error} name="email" component="span" />
        <label className={css.label}>
          Password
          <Field
            className={css.field}
            type="password"
            name="password"
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct."
            placeholder="Enter password ..."
          />
        </label>
        <button className={css.btn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
