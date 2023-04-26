import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, map } from 'rxjs';

@Injectable()
export class ApiService {
    constructor(private readonly httpService: HttpService) { }

    getRandomCats(): Observable<any[]> {
        return this.httpService
            .get('https://api.thecatapi.com/v1/images/search?limit=10')
            .pipe(
                map(response => response.data),
            );
    }
}
