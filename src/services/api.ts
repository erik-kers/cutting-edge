import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

@inject(HttpClient)
export class Api {
    private http: HttpClient;
    private baseUrl = 'http://localhost:3000/';

    constructor(http) {
        http.configure(config => {
            config
                .withBaseUrl(this.baseUrl)
        });

        this.http = http;
    }

    public get(query): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.fetch(query)
                .then(response => response.json())
                .then(result => {
                    resolve(result);
                });
        });
    }
}