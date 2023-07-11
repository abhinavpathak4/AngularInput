import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Data } from 'src/app/interfaces/data';
import { DataServiceService } from 'src/app/services/data-service.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor(private dataService : DataServiceService, 
              private _snackBar: MatSnackBar){}
  inputFields: any[] = [];
  list : Data[] = [];
  editModeArray: boolean[] = [];

  toggleEditMode(index: number) {
    this.editModeArray[index] = !this.editModeArray[index];
  }

  delete(data : Data){
    this.dataService.tempData.splice(this.dataService.tempData.indexOf(data),1);
  }
  
  update(data: Data) {
    const index = this.dataService.tempData.indexOf(data);
    if (index !== -1) {
      this.dataService.tempData[index] = data;
    }
    this.editModeArray[index] = false;
    console.log(this.dataService.tempData);
  }

  addMoreFields(): void {
    this.inputFields.push({});
  }
  
  getTempData(){
    return this.dataService.tempData;
  }

  saveRecords(){
    this.dataService.tempData.push(...this.dataService.tempListChild);
    this.dataService.tempListChild = [];
    this.inputFields = [];
    this.list = this.getTempData();
  }

  // db methods
  saveToDb(){
    this.dataService.uploadData();
    this._snackBar.open("Data Saved", "X", {
      duration: 3000});
  }
}
