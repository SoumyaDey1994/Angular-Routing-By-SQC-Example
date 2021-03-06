import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  parameters : string[] = [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let params =this.route.snapshot.paramMap;
    this.parameters = [...params.keys];
    console.log(params);
  }

}
