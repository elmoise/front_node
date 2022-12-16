import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs';

@Injectable({
providedIn:'root'
})
export class ApiService {

  constructor( private http:HttpClient) { }

  allumer(){
  return this.http.post('https://node-red-gilt.vercel.app/etat',{etat:'allumer'}).pipe(
    tap((response)=>console.log(response),

    )
  )
  }

  eteindre(){
    return this.http.post('https://node-red-gilt.vercel.app/eteindre',{etat:'eteindre'}).pipe(
      tap((response)=>console.log(response)),
      )


}

get(){
  return this.http.get('https://node-red-gilt.vercel.app/get').pipe(
    tap((response)=>console.log(response)),
  )
}

}
