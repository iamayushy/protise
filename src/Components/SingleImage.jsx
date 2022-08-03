import photos from '../cssmodule/image.module.css'
const SingleImage = ({photo}) => {
    const { urls } = photo;

    return(
        <>
        <section className={photos.box}>
            <img className={photos.pic} src={urls.regular} alt="display url" />
        </section>
        </>
    )
}

export {SingleImage}
