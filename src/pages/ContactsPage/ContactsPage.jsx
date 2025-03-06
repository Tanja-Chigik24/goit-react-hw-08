import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your contacts</DocumentTitle>
      <SearchBox />
      <ContactForm />
      <div>{loading && "Request in progress..."}</div>
      <ContactList />
    </>
  );
}
