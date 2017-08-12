import { Component, OnInit } from '@angular/core';
import { WebApiService } from "../../../../modules/web-api/services/web-api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private webApiService: WebApiService) { }

  ngOnInit() {
    this.webApiService.checkApi()
      .subscribe(res => {
        console.log('Response from API', res);
      })
  }

}
