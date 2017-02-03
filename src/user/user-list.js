/**
 * @author:Thierno Barry
 * @date: 02/02/2016
 */
import { inject } from 'aurelia-dependency-injection';
import { UserAPI } from './user-api';

@inject(UserAPI)
export class UserList {

    constructor(userApi) {
        this.userApi = userApi;
        this.users = null;
    }
    //retrieve user list from user api service
    get() {
        this.userApi
            .getAllUsers()
            .then(data => this.users = data.results);
    }
    //call automatically get method on component rendering
    created() {
        this.get();
    }

}