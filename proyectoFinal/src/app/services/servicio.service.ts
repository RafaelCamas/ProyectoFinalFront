import { Injectable } from '@angular/core';
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
        userName: 'Admin',
        fotoPerfil:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFCXNLdvUVOzW3dp9i3iAO78pQmlLXn1dn4Q&usqp=CAU',
        likedBands: [],
      },
      {
        id: 2,
        userName: 'Admin2',
        fotoPerfil:
          'https://appamatix.com/wp-content/uploads/2016/05/04-450x427.jpg',
        likedBands: [],
      },
    ];
  }
  getuserById(id): Promise<Usuario> {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-acces-token': localStorage.getItem('token'),
        'content-type': 'application/json; charset=UTF-8',
      }),
    };
    return this.httpClient
      .get<Usuario>(`http://localhost:8080/user/${id}`)
      .toPromise();
  }
  addUser(pUsuario): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-acces-token': localStorage.getItem('token'),
        'content-type': 'application/json; charset=UTF-8',
      }),
    };
    return this.httpClient
      .post<any>('http://localhost:8080/user/newUsuario', pUsuario, httpOptions)
      .toPromise();
  }
  addBand(pBand): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-acces-token': localStorage.getItem('token'),
        'content-type': 'application/json; charset=UTF-8',
      }),
    };
    return this.httpClient
      .post<any>('http://localhost:8080/band/' + pBand, httpOptions)
      .toPromise();
  }
  verify(pUsuario): Promise<any> {
    const httOptions = {
      headers: new HttpHeaders({
        'x-acces-token': localStorage.getItem('token'),
        'content-type': 'application/json; charset=UTF-8',
      }),
    };
    return this.httpClient
      .get<any>('http://localhost:8080/user/login' + pUsuario)
      .toPromise();
  }
  deleteBand(pBandId): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-acces-token': localStorage.getItem('token'),
        'content-type': 'application/json; charset=UTF-8',
      }),
    };
    return this.httpClient
      .delete<any>(`http://localhost:8080/band/${pBandId}`)
      .toPromise();
  }
  getAllBands(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-acces-token': localStorage.getItem('token'),
        'content-type': 'application/json; charset=UTF-8',
      }),
    };

    return this.httpClient.get('http://localhost:8080/band/').toPromise();
  }
  modifyBand(pBand, id): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-acces-token': localStorage.getItem('token'),
        'content-type': 'application/json; charset=UTF-8',
      }),
    };
    return this.httpClient
      .put(`http://localhost:8080/band/${id}`, pBand)
      .toPromise();
  }
  rateBand(pBand, id): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-acces-token': localStorage.getItem('token'),
        'content-type': 'application/json; charset=UTF-8',
      }),
    };
    return this.httpClient
      .put(`http://localhost:8080/band/${id}`, pBand)
      .toPromise();
  }
  getUserById(id): Usuario {
    return this.arrUsuarios[0];
  }
}
