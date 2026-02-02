import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../module/todos.type';
import { catchError } from 'rxjs';


@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit{
  todoServices = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);

  ngOnInit(): void {
    this.todoServices.getResponseFromAPI()
    .pipe(
      catchError((error) =>{
        console.log(error);
        throw error;
      }
      ))
      .subscribe((todos) =>{
        this.todoItems.set(todos);
      });
        
    
  }

  ngOnChanges() {
      console.log("Change detection")
   }

   
   
   ngDoCheck() {
      console.log("Custom change detection")
   }
   
   ngAfterContentInit() {
      console.log("Content initialization")
   }
   
   ngAfterContentChecked() {
      console.log("Checking changes in content")
   }
   
   ngAfterViewInit() {
      console.log("View initialization")
   }
   
   ngAfterViewChecked() {
      console.log("Checking changes in views")
   }
   
   ngOnDestroy() {
      console.log("Destruction of component / directive")
   }
}
