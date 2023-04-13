import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, timer } from 'rxjs';
import { increment, decrement } from '../ngrx';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  public counter$: Observable<any> = new Observable<any>();

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.counter$ = this.store.pipe(
      select('counterReducer')
    )
  }

  // decrement() {
  //   timer(1000)
  //     .subscribe(() => {
  //       this.store.dispatch(
  //         decrement({ payload: 3 })
  //       )
  //     })
  // }
  
  decrement() {
    this.store.dispatch(decrement({ payload: 3 }))
  }
  
  increment() {
    this.store.dispatch(increment({ payload: 3 }))
  }

  // increment() {
  //   timer(1000)
  //     .subscribe(() => {
  //       this.store.dispatch(
  //         increment({ payload: 3 })
  //       )
  //     })
  // }

}
