import styles from "./Loader.module.css";
import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <ThreeDots color="#465df3" height={80} width={80} wrapperClass={styles.loader}/>
  );
};

export default Loader;