import photos from '../cssmodule/image.module.css'
import {Skeleton} from '@mantine/core'
import { useEffect, useState } from 'react';

const SingleImage = ({photo}) => {
    const { urls } = photo;
    const [loading, setLoading] = useState(true)
    const res = Object.values(urls)
    return(
        <>
        { res.length > 0  ?
            <Skeleton visible={true} height={520}></Skeleton>
        :

        <section style={{backgroundImage:`url(${urls.full})`}} className={photos.box}>
        </section>
        }
        </>
    )
}

export {SingleImage}
