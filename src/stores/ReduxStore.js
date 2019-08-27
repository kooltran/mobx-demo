import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import galleryReducder from "../reducer/galleryReducer";

export default createStore(
    galleryReducder,
    {
        term: "",
        images: [],
        status: "initial"
    },
    applyMiddleware(thunk)
);