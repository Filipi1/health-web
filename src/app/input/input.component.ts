import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { InputConfig, InputToForm } from 'src/share/form';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent implements OnInit {

  @Input() inputConfig: InputConfig = new InputConfig()
  @Input() id: string = ""
  @Output() value = new EventEmitter<InputConfig>();

  titulo: string = ""
  icon: string = "account_circle"
  mask: string = ""
  type: string = "text"
  inputValue: any = ""
  error_message: string = ""

  constructor() { }

  sendValue(event) {
    this.inputConfig.value = event.target.value
    this.value.emit(this.inputConfig)
  }

  ngOnInit(): void {
    this.id = this.inputConfig.id
    this.titulo = this.inputConfig.title
    this.icon = this.inputConfig.icon
    this.mask = this.inputConfig.mask
    this.type = this.inputConfig.type
  }
}
