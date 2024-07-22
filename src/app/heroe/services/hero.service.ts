import { Injectable } from '@angular/core';
import {HeroInterface} from "../interfaces/hero.interface.";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {catchError, map, Observable, of} from "rxjs";

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

  addHero(hero:HeroInterface):Observable<HeroInterface>{
    return this.http.post<HeroInterface>(`${this.baseUrl}/heroes`,hero);
  }

  updateHero(hero:HeroInterface):Observable<HeroInterface>{
    if (!hero.id){ throw new Error('The hero must have an id');}
    return this.http.put<HeroInterface>(`${this.baseUrl}/heroes/${hero.id}`,hero);
  }

  deleteHero(id:string):Observable<boolean>{
    return this.http.delete<any>(`${this.baseUrl}/heroes/${id}`)
      .pipe(
        map(resp => resp.ok),
        catchError(err => of(false))
      );
  }

}
