import {createApi} from "unsplash-js"

const api = createApi({
    accessKey: import.meta.env.VITE_VERCEL_ENV
});

export {api}
