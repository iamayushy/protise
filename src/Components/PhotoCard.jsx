const PhotoCard = ({ photo }) => {
    const { user, urls } = photo;
    console.log(user, urls)
    return (
      <>
        <img className="img" src={urls.regular} width="200px" />
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
