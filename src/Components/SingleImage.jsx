import photos from '../cssmodule/image.module.css'
import {Skeleton} from '@mantine/core'
import { useEffect, useState } from 'react';

const SingleImage = ({photo}) => {
    const { urls } = photo;

    return(
        <>
        <section  style={{backgroundImage:`url(${urls.full})`}} className={photos.box}>
        </section>

        </>
    )
}

export {SingleImage}
