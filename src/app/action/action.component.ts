import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {
  gold: number = 0;
  log: string[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.gold = 0;
  }

  farm() {
    let winnings = Math.trunc(Math.random() * 3 + 2)
    this.gold += winnings;
    this.log.push("You have won " + winnings)
  }

  cave() {
    let winnings = Math.trunc(Math.random() * 5 + 5)
    this.gold += winnings;
    this.log.push("You have won " + winnings)
  }

  casino() {
    let winnings = Math.trunc(Math.random() * 200) - 100
    this.gold += winnings;
    if(winnings > 0){
      this.log.push("You have won " + winnings)
    }
    else{
      this.log.push("You have lost " + Math.abs(winnings))
    }
  }

  house() {
    let winnings = Math.trunc(Math.random() * 8 + 7)
    this.gold += winnings;
    this.log.push("You have won " + winnings)
  }



}
