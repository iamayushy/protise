const PhotoCard = ({ photo }) => {
    const { user, urls } = photo;
    return (
      <>
        <section className="image-card">

          <section className="image-desc">
          <img src={user.profile_image.small} alt="" />
          <p>{user.name}</p>
          </section>
        <img className="img" src={urls.full}  />

        </section>
      </>
    );
  };
  export {PhotoCard}
