import { Component, CORE_DIRECTIVES, EventEmitter, ElementRef } from 'angular2/angular2';
import { Client } from '../../services/api';

@Component({
  selector: 'm-ad-boost',
  providers: [ Client ],
  template: `

  `,
  directives: [ CORE_DIRECTIVES ],
  host: {
    'class': 'm-ad-block m-ad-block-boosts'
  }
})

export class BoostAds{

  boosts : Array<any> = [];

  constructor(public client: Client) {

  }

  fetch(){
    this.client.get('api/v1/boost/fetch/content')
      .then((response : any) => {

      });
  }

}
