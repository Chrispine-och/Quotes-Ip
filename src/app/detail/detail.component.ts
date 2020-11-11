import { Component, OnInit, Input } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() quote: Quote;

  upvotes = 0;
  downvotes = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
