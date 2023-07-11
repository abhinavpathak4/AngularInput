import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/interfaces/data';
import { DataServiceService } from 'src/app/services/data-service.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {
  dataFromDb: Data[] = [];
  displayedColumns: string[] = ['Type', 'Body', 'Edit' , 'Delete'];
  dataSource!: MatTableDataSource<Data> ;

  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((resp) => {
      this.dataFromDb = resp;
      this.dataSource = new MatTableDataSource(this.dataFromDb);
      console.log(this.dataFromDb);
    });
  }

  delete(element :any){

  }
  edit(element :any){
    
  }
}