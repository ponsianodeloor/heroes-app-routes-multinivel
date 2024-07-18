import { Injectable } from '@angular/core';
import {HeroInterface} from "../interfaces/hero.interface.";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

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
}
