import { Component, OnInit } from '@angular/core';
import { AValueService } from '../../a/a-value.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  constructor(public aValue: AValueService) { }

  ngOnInit() {
  }

}
