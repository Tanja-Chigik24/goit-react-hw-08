import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactList";
import { SearchBox } from "../SearchBox/SearchBox";
import { Layout } from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { selectLoading, selectError } from "../../redux/contactsSlice";
import Loader from "../Loader/Loader";
import ErrorMes from "../ErrorMes/ErrorMes";

export const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <SearchBox />
      <ContactForm />
      {loading && !error && <Loader />}
      {error && <ErrorMes />}
      <ContactList />
    </Layout>
  );
};
