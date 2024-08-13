import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <div className={styles.loadMoreBlock}>
      <button className={styles.loadMoreBtn}
        onClick={() => {
          onLoadMore();
        }
        }>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;