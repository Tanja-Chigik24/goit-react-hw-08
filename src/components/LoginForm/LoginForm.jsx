import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./LoginForm.module.css";

const UserSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then((data) => {
        toast.success("Login success!");
      })
      .catch(() => {
        toast.error("Login error");
      });

    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field
            className={css.field}
            type="email"
            name="email"
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
            placeholder="Enter password ..."
          />
        </label>
        <ErrorMessage className={css.error} name="password" component="span" />
        <button type="submit" className={css.btn}>
          Log In
        </button>
      </Form>
    </Formik>
  );
}
