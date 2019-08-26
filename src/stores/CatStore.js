import { observable, action, computed } from "mobx";

class CatStore {
  @observable cats = [];

  @action addCat = cat => {
    this.cats.push(cat);
  };

  @computed get catCount() {
    return this.cats.length;
  }
}

const store = new CatStore();

export default store;
