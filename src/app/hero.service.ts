import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from '../app/hero';
import { HEROES } from '../app/mock-heroes';
import { MessageService } from './message.service';


@Injectable()
export class HeroService {

  constructor( private MessageService: MessageService ) { }

  getHeroes(): Observable<Hero[]> {
    this.MessageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
