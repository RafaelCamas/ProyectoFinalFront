export class Usuario {
  id: number;
  nombreUsuario: string;
  fotoPerfil: string;
  likedBands: any[];
  constructor(pId, pNombreUsuario, pFotoPerfil, pLikedBands) {
    this.id = pId;
    this.nombreUsuario = pNombreUsuario;
    this.fotoPerfil = pFotoPerfil;
    this.likedBands = pLikedBands;
  }
}
