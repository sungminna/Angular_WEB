import { Component, OnInit, Input } from '@angular/core';
import { Spending } from '../spending';

@Component({
  selector: 'app-spending-detail',
  templateUrl: './spending-detail.component.html',
  styleUrls: ['./spending-detail.component.css']
})

export class SpendingDetailComponent implements OnInit {

  @Input() spending?: Spending;

  constructor() { }

  ngOnInit(): void {
  }

}
