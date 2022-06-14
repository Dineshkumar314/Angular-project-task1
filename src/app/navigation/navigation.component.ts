import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  relativePathSRC = "../assets/homefurniture.jpg";
  widthSRC = 1400;
  heightSRC = 500;
  

  constructor() { }

  ngOnInit(): void {
  }
 // search() {
  //   console.log('search icon clicked');
  // }
}
