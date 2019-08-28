import { observable, action, runInAction } from 'mobx'
import axios from 'axios'

class GalleryStore {
    @observable term = "";
    @observable images = [];
    @observable status = 'initial';

    @action fetchImages = async term => {
        this.status = "searching";
        this.term = term;
        this.images = [];

        try {
            const res = await axios.get(
                "https://api.unsplash.com/search/photos",
                {
                    params: {
                        client_id: "8c16a0088b61b5a0d56c38c66d855114b1574755f7d3c4f9e9319552dfb79292",
                        query: term
                    }
                }
            );
            this.setImages(res.data.results);
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    }

    @action setImages = images => {
        this.images = images;
        this.status = "done";
    };
}

const galleryStore = new GalleryStore();

export default galleryStore