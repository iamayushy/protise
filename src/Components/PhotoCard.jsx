const PhotoCard = ({ photo }) => {
    const { user, urls } = photo;

    return (
      <>
        <img className="img" src={urls.regular} />
        <a
          className="credit"
          target="_blank"
          href={`https://unsplash.com/@${user.username}`}
        >
          {user.name}
        </a>
      </>
    );
  };
  export {PhotoCard}
