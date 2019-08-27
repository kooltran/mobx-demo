import axios from "axios";

export const fetchImages = term => {
    return async dispatch => {
        dispatch({
            type: "BEGIN_SEARCH",
            term
        });

        try {
            const response = await axios.get(
                "https://api.unsplash.com/search/photos",
                {
                    params: {
                        client_id: "8c16a0088b61b5a0d56c38c66d855114b1574755f7d3c4f9e9319552dfb79292",
                        query: term
                    }
                }
            );
            dispatch({
                type: "DONE_SEARCH",
                images: response.data.results
            });
        } catch (error) {
            dispatch({
                type: "ERROR_SEARCH"
            });
        }
    };
};