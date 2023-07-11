import { Injectable } from '@angular/core';
import { Data } from '../interfaces/data';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private httpClient: HttpClient) {
    this.getData();
   }
  tempListChild : Data[] = [];
  tempData : Data[] = [];
  URL = "http://localhost:8081/";
  getData() {
    return this.httpClient.get<Data[]>(this.URL + "getAll");
  }
  
  uploadData() {
    for (const data of this.tempData) {
      const obj ={
        type : data.type,
        body : data.body
      }
      this.httpClient.post<Data>(this.URL +"addData", obj)
        .subscribe(
          (response: Data) => {
            console.log(response);
          },
          (error: any) => {
            console.error("Error uploading data:", error);
          }
        );
    }
    this.tempData = [];
  }
}


// dbDeleteList : Data[] = [];
// dbUpdateList : Data[] = [];
// deleteDbData() {
//   for (const data of this.dbDeleteList) {
//     const options = {
//       body: {
//         id : data.id,
//         type: data.type,
//         body: data.body
//       }
//     };
//     this.httpClient.delete<Data>(this.URL + "delete", options)
//       .subscribe(
//         (response: Data) => {
//           console.log(response);
//         },
//         (error: any) => {
//           console.error("Error deleting data:", error);
//         }
//       );
//   }
//   this.dbDeleteList = [];
// }

// updateDbData() {
//   for (const data of this.dbUpdateList) {
//     const options = {
      
//         id : data.id,
//         type: data.type,
//         body: data.body
     
//     };
//     this.httpClient.put<Data>(this.URL + "update", options)
//       .subscribe(
//         (response: Data) => {
//           console.log(response);
//         },
//         (error: any) => {
//           console.error("Error deleting data:", error);
//         }
//       );
//   }
//   this.dbUpdateList = [];
// }  
