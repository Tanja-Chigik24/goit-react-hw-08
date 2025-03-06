import { Bars } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.container}>
      <Bars
        height="80"
        width="80"
        color="rgb(192, 226, 43)"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
