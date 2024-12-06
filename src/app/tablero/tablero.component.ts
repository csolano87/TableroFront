/* import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableroService } from '../services/tablero.service';
import { Listaordene } from '../interfaces/orden.interface';
import { Proceso } from '../interfaces/cargaProceso.interface';
import { Subscription, interval, switchMap } from 'rxjs'; */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TableroService } from '../services/tablero.service';
import { Listaordene } from '../interfaces/orden.interface';
import { Proceso } from '../interfaces/cargaProceso.interface';
import { Subscription, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css'],
})
export class TableroComponent implements OnInit {
  constructor(private listagetlist: TableroService) {}
  public listaordene: Listaordene[] = [];

  //cargando = false;
  public listaproceso: Proceso[] = [];
  itemsPerPage: number = 1; // Número de elementos por página
  currentPage: number = 1; // Página actual
  totalPages: number = 0; // Total de páginas
  public page: number=0;
  pageSize: number = 7;
 cargando:boolean=false;
  public proceso: Proceso[] = [];
  public procesoTemp: Proceso[] = [];
  polling: any;
  intervalId: any;

  ngOnInit(): void {
   
    this.intervalId = setInterval(() => {
      this.nextPage();
    }, 50000);
    this.buscarTodas();
    this.pollData();
  }

  nextPage(): void {
    this.totalPages = Math.ceil(this.listaordene.length / this.pageSize);
    console.log('totalPages+++',  this.totalPages)
    console.log('tamano****', this.page < this.totalPages)
    console.log('totalPages****',  this.totalPages)
    console.log('page****', this.page )
    if (this.page < this.totalPages) {
      this.page++;
    } else {
      this.page = 1;
    }
  }
  buscarTodas() {
    this.cargando= true;
    this.listagetlist.buscarTodosT().subscribe(({ listaordenes }) => {
      console.log(listaordenes);
      this.listaordene = listaordenes;
      this.cargando=false;
    });
  }
  pollData() {
    setInterval(() => {
      this.polling = this.buscarTodas() } ,100000)}
  /* public listaordene: Listaordene[] = [];
  public listaproceso: Proceso[] = [];
  public proceso: Proceso[] = [];
  public procesoTemp: Proceso[] = [];
  public page: number = 0;
  public itemsPerPage: number = 1;
  public currentPage: number = 1;
  public pageSize: number = 15;
  public totalPages: number = 0;
  public cargando: boolean = false;

  private intervalId: any;
  private pollSubscription: Subscription | null = null;

  constructor(private listagetlist: TableroService) {}

  ngOnInit(): void {
    this.buscarTodas();
    this.pollData();
    this.startPageRotation();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    if (this.pollSubscription) {
      this.pollSubscription.unsubscribe();
    }
  }

  private startPageRotation(): void {
    this.intervalId = setInterval(() => {
      this.nextPage();
    }, 3000);
  }

  private updateTotalPages(): void {
    this.totalPages = Math.ceil(this.listaordene.length / this.pageSize);
  }

  nextPage(): void {
    this.page = (this.page < this.totalPages - 1) ? this.page + 1 : 0;
  }

  buscarTodas(): void {
    this.listagetlist.buscarTodosT().subscribe({
      next: ({ listaordenes }) => {
        this.listaordene = listaordenes;
        this.updateTotalPages();
      },
      error: (err) => console.error('Error fetching data', err)
    });
  }

  pollData(): void {
    this.pollSubscription = interval(5000).pipe(
      switchMap(() => this.listagetlist.buscarTodosT())
    ).subscribe({
      next: ({ listaordenes }) => {
        this.listaordene = listaordenes;
        this.updateTotalPages();
      },
      error: (err) => console.error('Error polling data', err)
    });
  } */
}
