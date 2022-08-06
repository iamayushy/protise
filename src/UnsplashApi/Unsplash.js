import {createApi} from "unsplash-js"

const api = createApi({
    accessKey: import.meta.env.VITE_UNSPLASH_API_KEY
});

export {api}
