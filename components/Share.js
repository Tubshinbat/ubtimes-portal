export default ({ shareUrl = "a", title = "a" }) => {
  return (
    <>
      <ul className="share-box ">
        <li>
          <i className="fa fa-share-alt" />
        </li>
        <li className="facebook">
          <a
            href={`http://www.facebook.com/share.php?u=${shareUrl}`}
            target="popup"
          >
            <i className="fa-brands fa-facebook-square" /> Хуваалцах
          </a>
        </li>
        <li className="twitter">
          <a
            href={`https://twitter.com/intent/tweet?text=${title}&url=${shareUrl}`}
            target="popup"
          >
            <i className="fa-brands fa-twitter-square" /> Жиргэх
          </a>
        </li>
      </ul>
    </>
  );
};
