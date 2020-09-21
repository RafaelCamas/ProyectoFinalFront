export class Band {
  id: number;
  name: string;
  img: string;
  genre: string;
  constructor(pId, pName, pImg, pGenre) {
    this.id = pId;
    this.name = pName;
    this.img = pImg;
    this.genre = pGenre;
  }
}
