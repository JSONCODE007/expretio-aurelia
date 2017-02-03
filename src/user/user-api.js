/**
 * @author:Thierno Barry
 * @date: 02/02/2016
 */
import { inject } from 'aurelia-dependency-injection';
import { HttpClient } from 'aurelia-fetch-client';

@inject(HttpClient)
export class UserAPI {
    constructor(httpClient) {
        this.httpClient = httpClient;
        //setup http client router parameters 
        this.configurehttpRouter();
    }

    configurehttpRouter() {
        this.httpClient.configure(config => {
            config.
                useStandardConfiguration()
                .withBaseUrl('https://randomuser.me/api/')
        })
    }

    getAllUsers() {
        return new Promise(resolve => {
            this.httpClient.fetch('?results=50')
                .then(response => resolve(response.json()));
        })
    }
}