import { inject, Inject, Injectable } from '@angular/core';
import { Todo } from '../module/todos.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  http = inject(HttpClient);
 
  getResponseFromAPI(){
    const url ='https://jsonplaceholder.typicode.com/todos';
    return this.http.get<Array<Todo>>(url);
  }
}
