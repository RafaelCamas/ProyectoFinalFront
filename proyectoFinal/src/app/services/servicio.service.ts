import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Usuario } from '../models/usuario';
import { Band } from '../models/band';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  arrUsuarios: Usuario[];
  arrBands: Band[];
  constructor(private httpClient: HttpClient) {
    this.arrUsuarios = [
      {
        id: 1,
        nombreUsuario: 'Admin',
        fotoPerfil:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFCXNLdvUVOzW3dp9i3iAO78pQmlLXn1dn4Q&usqp=CAU',
        likedBands: [],
      },
      {
        id: 2,
        nombreUsuario: 'Admin2',
        fotoPerfil:
          'https://appamatix.com/wp-content/uploads/2016/05/04-450x427.jpg',
        likedBands: [],
      },
    ];
    this.arrBands = [
      {
        id: 1,
        nameBand: 'Bob Marley and The Wailers',
        bandPic:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vtpdo_KSR4kCjKUZRmwmhgHaGW%26pid%3DApi&f=1',
      },
      {
        id: 2,
        nameBand: 'Pink Floyd',
        bandPic:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.z5vk0L0fmgI1UcZ_r2mgHwHaFj%26pid%3DApi&f=1',
      },
    ];
  }
  getuserById(id): Promise<Usuario> {
    return this.httpClient
      .get<Usuario>(`http://localhost:8080/user/${id}`)
      .toPromise();
  }
  addUser(pUsuario): Promise<Usuario> {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-acces-token': '',
        'content-type': 'application/json; charset=UTF-8',
      }),
    };
    return this.httpClient
      .post<Usuario>(
        'http://localhost:8080/user/newUsuario',
        pUsuario,
        httpOptions
      )
      .toPromise();
  }
  // getuserById(id): Usuario {
  //   return this.arrUsuarios[0];
  // }
  // getAllBands(): Band[] {
  //   return this.arrBands;
  // }
}
