import photos from '../cssmodule/image.module.css'


const SingleImage = ({photo}) => {
    const { urls } = photo;

    return(
        <>
        <section style={{backgroundImage:`url(${urls.full})`}} className={photos.box}>
        </section>
        </>
    )
}

export {SingleImage}
