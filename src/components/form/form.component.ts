import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InputConfig, FormConfig } from '../../share/form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  @Input() formConfig: FormConfig
  @Output() value = new EventEmitter<FormConfig>();

  inputList: InputConfig[] = []

  constructor() { }

  ngOnInit(): void {
    if (this.formConfig == null) return;  

    Object.keys(this.formConfig.form).forEach(key => {
      var config: InputConfig = new InputConfig();

      config.id         = key
      config.title      = this.formConfig.form[key].title
      config.icon       = this.formConfig.form[key].icon
      config.mask       = this.formConfig.form[key].mask
      config.useIcon    = this.formConfig.form[key].useIcon
      config.type       = this.formConfig.form[key].type
      config.value      = this.formConfig.form[key].value

      this.inputList.push(config)
      //console.log('KEY: ', this.inputList)
    })
  }

  insertValue(config: InputConfig) {
    this.formConfig.form[config.id] = config
  }

  submit() {
    this.value.emit(this.formConfig)
  }
}

