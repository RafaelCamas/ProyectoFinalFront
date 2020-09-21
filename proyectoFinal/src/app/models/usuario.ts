export class Usuario {
  id: number;
  userName: string;
  fotoPerfil: string;
  likedBands: any[];
  constructor(pId, pUserName, pFotoPerfil, pLikedBands) {
    this.id = pId;
    this.userName = pUserName;
    this.fotoPerfil = pFotoPerfil;
    this.likedBands = pLikedBands;
  }
}
