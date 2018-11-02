import { Component, OnInit } from '@angular/core';
import { AValueService } from '../a-value.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor(public aValue: AValueService) { }

  ngOnInit() {
  }

}
