import { Injectable } from '@angular/core';
import {HeroInterface} from "../interfaces/hero.interface.";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {catchError, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private baseUrl:string = environment.baseUrl;
  public heroes: HeroInterface[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getHeroes(){
    return this.http.get<HeroInterface[]>(`${this.baseUrl}/heroes`);
  }

  getHeroById(id:string):Observable<HeroInterface | undefined>{
    return this.http.get<HeroInterface>(`${this.baseUrl}/heroes/${id}`)
      .pipe(
        catchError(err => of(undefined))
      );
  }

  getSuggestions(query:string):Observable<HeroInterface[]>{
    if(!query.trim()){
      return of([]);
    }
    return this.http.get<HeroInterface[]>(`${this.baseUrl}/heroes?q=${query}`)
      .pipe(
        catchError(err => of([]))
      );
  }
}
