import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import { Toaster } from "react-hot-toast";
import Loader from "../../components/Loader/Loader";
import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <AppBar />
      <Suspense fallback={<Loader />}>
        {children}
        <Toaster position="top-center" reverse-order={false} />
      </Suspense>
    </div>
  );
}
