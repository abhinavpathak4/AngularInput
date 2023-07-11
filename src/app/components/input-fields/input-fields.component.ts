import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Data } from 'src/app/interfaces/data';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-input-fields',
  templateUrl: './input-fields.component.html',
  styleUrls: ['./input-fields.component.css']
})
export class InputFieldsComponent {
 
  constructor(private dataService : DataServiceService){}

  myForm: FormGroup = new FormGroup({
    body: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required)
  });

  isButtonClicked: boolean = false;

  addData(){
    this.isButtonClicked = true;
    this.dataService.tempListChild.push(this.myForm.value);
  }
  
  updateBodyValue(value: string): void {
    this.myForm.patchValue({ body: value });
  }

  get bodyControl(): FormControl {
    return this.myForm.get('body') as FormControl;
  }

  updateValidation(): void {
    const type = this.myForm.get('type')?.value;
    const bodyControl = this.myForm.get('body');

    if (type === 'email') {
      bodyControl?.setValidators([Validators.required, Validators.email]);
    } else if (type === 'number') {
      bodyControl?.setValidators([Validators.required, Validators.pattern(/^[0-9]*$/)]);
    } else {
      bodyControl?.setValidators([Validators.required]);
    }
    bodyControl?.updateValueAndValidity();
  }
}
