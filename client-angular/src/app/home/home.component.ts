import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.dataService.getAlbum();
    this.dataService.getMembers();
    this.dataService.getconcertTours();
    this.dataService.getLabels();
  }
}
