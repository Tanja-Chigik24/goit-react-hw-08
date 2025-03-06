import { useId } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const id = useId();
  const nameFilter = useSelector(selectNameFilter);
  const handleFilterChange = (e) => dispatch(changeFilter(e.target.value));

  return (
    <div className={css.box}>
      <label className={css.label}>Find contacts by name and phone</label>
      <input
        className={css.input}
        type="text"
        onChange={handleFilterChange}
        id={id}
      />
    </div>
  );
}
