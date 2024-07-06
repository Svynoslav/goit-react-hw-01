import clsx from "clsx";
import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div className={css.userContainer}>
        <img className={css.img} src={image} alt="User avatar" width="250" />
        <p className={clsx(css.text, css.nameText)}>{name}</p>
        <p className={clsx(css.text, css.userText)}>@{tag}</p>
        <p className={clsx(css.text, css.userText)}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={clsx(css.statsItem)}>
          <span className={clsx(css.text, css.statsText)}>Followers</span>
          <span className={clsx(css.text, css.statsText, css.statsNum)}>
            {stats.followers}
          </span>
        </li>
        <li className={clsx(css.statsItem)}>
          <span className={clsx(css.text, css.statsText)}>Views</span>
          <span className={clsx(css.text, css.statsText, css.statsNum)}>
            {stats.views}
          </span>
        </li>
        <li className={clsx(css.statsItem)}>
          <span className={clsx(css.text, css.statsText)}>Likes</span>
          <span className={clsx(css.text, css.statsText, css.statsNum)}>
            {stats.likes}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
