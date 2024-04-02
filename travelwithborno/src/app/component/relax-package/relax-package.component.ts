import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap} from '@angular/router';
@Component({
  selector: 'app-relax-package',
  templateUrl: './relax-package.component.html',
  styleUrl: './relax-package.component.css'
})
export class RelaxPackageComponent implements OnInit{
  students=[
    {"id": 1, "title": "Bandarban" ,"subtitle" :"Travel Code :A1", "imgsrc":"assets/image/Package/Relax/bandrbn-r.png"},
    {"id": 2, "title": "Coxbazar","subtitle" :"Travel Code :A2","imgsrc":"assets/image/Package/Relax/cox-r.png"},
    {"id": 3, "title": "Rangamati","subtitle" :"Travel Code :A3","imgsrc":"assets/image/Package/Relax/rangamati-r.png"},
    {"id": 4, "title": "Shajek Valey","subtitle" :"Travel Code :A4","imgsrc":"assets/image/Package/Relax/sajek-r.png"},
    {"id": 5, "title": "Syleht","subtitle" :"Travel Code :A5","imgsrc":"assets/image/Package/Relax/syleht-r.png"},
    {"id": 6, "title": "Shajek Valey","subtitle" :"Travel Code :A6","imgsrc":"assets/image/Package/Relax/sajek-r.png"},


  ]
  constructor(private router: Router, private route: ActivatedRoute) { }
  navigateToForm() {
    this.router.navigate(['/form']);
  }

  ngOnInit() {

  }

}
