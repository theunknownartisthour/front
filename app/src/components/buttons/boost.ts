import { Component, View, CORE_DIRECTIVES } from 'angular2/angular2';
import { SessionFactory } from '../../services/session';
import { Client } from '../../services/api';
import { WalletService } from '../../services/wallet';
import { BoostModal } from '../modal/modal';

@Component({
  selector: 'minds-button-boost',
  inputs: ['_object: object']
})
@View({
  template: `
    <button class="mdl-button mdl-color-text--white mdl-button--colored mdl-button--raised m-boost-button-fat"
      (click)="boost()">
    Boost
    </button>
    <m-modal-boost [open]="showModal" (closed)="showModal = false" action="vote up"></m-modal-boost>
  `,
  directives: [CORE_DIRECTIVES, BoostModal]
})

export class BoostButton {

  object = {
    'guid': null
  };
  session = SessionFactory.build();
  showModal : boolean = false;

  constructor() {
  }

  set _object(value : any){
    if(!value)
      return;
    this.object = value;
  }

  boost(){
    this.showModal = true;
  }

}
