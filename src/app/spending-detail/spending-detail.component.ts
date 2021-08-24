import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SpendingService } from '../spending.service';
import { Spending } from '../spending';

@Component({
  selector: 'app-spending-detail',
  templateUrl: './spending-detail.component.html',
  styleUrls: ['./spending-detail.component.css']
})

export class SpendingDetailComponent implements OnInit {

  @Input() spending?: Spending;

  constructor(
    private route: ActivatedRoute, 
    private spendingService: SpendingService, 
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getSpending();
  }

  getSpending(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.spendingService.getSpending(id).subscribe(spending => this.spending = spending);
  }
  
  save(): void{
    if(this.spending){
      this.spendingService.updateSpending(this.spending)
        .subscribe(() => this.goBack());
    }
  }
  
}
