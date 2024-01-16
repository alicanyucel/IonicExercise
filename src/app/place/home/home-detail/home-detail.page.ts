import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.page.html',
  styleUrls: ['./home-detail.page.scss'],
})
export class HomeDetailPage  {

  public progress = 0;

  constructor() {
    setInterval(() => {
      this.progress += 0.01;
      if (this.progress > 1) {
        setTimeout(() => {
          this.progress = 0;
        }, 2000);
      }
    }, 50);
  }
}
