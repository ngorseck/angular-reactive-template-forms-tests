import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../service/http/open-rest-api/api.service";
import {DataResponse} from "../../models/dataResponse";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  providers: [ApiService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  constructor(private apiService: ApiService) {
  }
  dataObjects: DataResponse[] = [];

  ngOnInit(): void {
    this.all();
    this.save();
  }
  all() {
    this.apiService.getObjects().subscribe({
      next: (data) => {this.dataObjects = data;},
      error: err => console.log(err),
      complete: () => console.log('Datas received.')
    });
  }
  save() {
    let data = {
      "name": "Apple MacBook Pro 16",
      "data": {
        "year": 2019,
        "price": 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB"
      }
    };
    let data$ = this.apiService.addObjects(data);
    data$.subscribe(response => console.log(response.status));
  }
}
