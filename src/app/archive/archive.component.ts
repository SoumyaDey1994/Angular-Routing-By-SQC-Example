import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  year : number;
  month : number;
  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    // as navigating to different componeent
    let paramMap =this.route.snapshot.paramMap;
    this.year = +paramMap.get('year');
    this.month = +paramMap.get('month');
  }
//method to navigate back to Home Page
  goToHomePage(){
    this.router.navigate(['/']);
  }

}
