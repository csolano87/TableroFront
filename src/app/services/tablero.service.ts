import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment.prod';
import { delay } from 'rxjs';
import { ListaOrdenes } from '../interfaces/orden.interface';
const baseUrl = environment.url;

@Injectable({
  providedIn: 'root'


})
export class TableroService {
  userToken!: string;
  constructor(private http: HttpClient) { }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers() {
    return { headers: { 'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE3MDkwMTMzLCJleHAiOjE3MTcxNzY1MzN9.NGoZLFGgq9vZkU8joHhVskgKC4y0izCOIiXQKqieQuQ' } };
  }



  buscarTodosT() {
    return this.http
      .get<ListaOrdenes>(`${baseUrl}/api/buscarordenes/ordenesTotales`, this.headers)
      .pipe(delay(1500));
  }

}
