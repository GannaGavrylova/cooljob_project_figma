import styles from "./styles.module.css";
import clacksa from "../../assets/icons/clacksa.svg";
import poisk from "../../assets/icons/poisk.svg";
import location from "../../assets/icons/location.svg";
function Search() {
  return (
    <div className={styles.search_container}>
      <h1>
        Один клик <br /> и работа в кармане
      </h1>
      <div className={styles.search_content}>
        <label>
          <img src={poisk} alt="poisk" /> Должность или компания
        </label>
        <input type="text" name="text" className={styles.serch_input} />

        <label>
          <img src={location} alt="location" /> Город, Страна
        </label>
        <input type="text" name="text" className={styles.serch_input} />
        <button className={styles.search_btn}>Поиск</button>
        <img src={clacksa} alt="clacksa" />
      </div>
    </div>
  );
}

export default Search;
