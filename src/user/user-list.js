/**
 * @author:Thierno Barry
 * @date: 02/02/2016
 */
import {inject} from 'aurelia-dependency-injection';
import {UserAPI} from './user-api';
import {DialogService} from 'aurelia-dialog';
import {UserDetails} from './user-details-modal'

@inject(UserAPI, DialogService)
export class UserList
{

  constructor(userApi, dialogService)
  {
    this.userApi = userApi;
    this.dialogService = dialogService;
    this.users = null;
    this.selectedUser = null;
  }

  //retrieve user list from user api service
  get()
  {
    this.userApi
      .getAllUsers()
      .then(data =>
      {
        this.users = data.results;
      });
  }

  //call automatically get method on component rendering
  created()
  {
    this.get();
  }

  //invoke modal window view for showing more user informations
  showModalDetails(user)
  {
    this.dialogService.open({viewModel: UserDetails, model: user});
  }
}
