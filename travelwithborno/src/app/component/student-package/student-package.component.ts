// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { title } from 'process';
@Component({
  selector: 'app-student-package',
  templateUrl: './student-package.component.html',
  styleUrl: './student-package.component.css'
})
export class StudentPackageComponent implements OnInit{
  students=[
    {"id": 1, "title": "Coxbazar" ,"subtitle" :"Travel Code :B1", "imgsrc":"assets/image/Package/Sudent/cox-s.png"},
    {"id": 2, "title": "Debotakhum","subtitle" :"Travel Code :B2","imgsrc":"assets/image/Package/Sudent/debota-s.png"},
    {"id": 3, "title": "Rangamati","subtitle" :"Travel Code :B3","imgsrc":"assets/image/Package/Sudent/rangamati-s.png"},
    {"id": 4, "title": "Shajek Valey","subtitle" :"Travel Code :B4","imgsrc":"assets/image/Package/Sudent/sajek-s.png"},
    {"id": 5, "title": "Shitakundu","subtitle" :"Travel Code :B5","imgsrc":"assets/image/Package/Sudent/sitakundu-s.jpg"},
    {"id": 6, "title": "Syleht","subtitle" :"Travel Code :B6","imgsrc":"assets/image/Package/Sudent/syleht-s.png"},


  ]
  constructor(private router: Router, private route: ActivatedRoute) { }
  navigateToForm() {
    this.router.navigate(['/form']);
  }

  ngOnInit() {

  }

}
