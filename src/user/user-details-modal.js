/**
 * @author:Thierno Barry
 * @date: 02/02/2016
 */
import {inject} from 'aurelia-framework';
import {DialogController} from 'aurelia-dialog';

@inject(DialogController)

export class UserDetails
{

  constructor(controller)
  {
    this.controller = controller;
    controller.settings.centerHorizontalOnly = true;
  }

  //pass the selected user informations to the modal view
  activate(user)
  {
    this.user = user;
  }
}
