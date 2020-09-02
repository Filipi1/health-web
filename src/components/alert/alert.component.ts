import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class ErrorAlertComponent implements OnInit {

  @Input() messages: string[] = [];
  @Input() success: boolean;

  result: boolean = false;
  ready = false;

  constructor() { }

  ngOnInit(): void {
    this.result = this.success;
    this.ready = true;
  }

}
