import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { RouterLink } from "@angular/router-deprecated";

import { Client } from '../../../services/api';
import { SessionFactory } from '../../../services/session';
import { Material } from '../../../directives/material';
import { BUTTON_COMPONENTS } from '../../../components/buttons';


@Component({
  selector: 'minds-card-user',
  inputs: ['object', 'avatarSize'],
  templateUrl: 'src/controllers/cards/user/user.html',
  directives: [ CORE_DIRECTIVES, Material, RouterLink, BUTTON_COMPONENTS ]
})

export class UserCard {

  user : any;
  session = SessionFactory.build();
  minds = window.Minds;
  avatarSize : string = 'medium';
  bannerSrc: string;

	constructor(public client: Client){
	}

  set object(value: any) {
    this.user = value;
    this.bannerSrc = `${this.minds.cdn_url}/fs/v1/banners/${this.user.guid}/fat/${this.user.icontime}`
  }
}
