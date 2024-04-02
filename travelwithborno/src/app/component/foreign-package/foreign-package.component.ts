import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
@Component({
  selector: 'app-foreign-package',
  templateUrl: './foreign-package.component.html',
  styleUrl: './foreign-package.component.css'
})
export class ForeignPackageComponent implements OnInit {
  students=[
    {"id": 1, "title": "Darjiling" ,"subtitle" :"Travel Code :C1", "imgsrc":"assets/image/Package/Foreign/darjiling.png"},
    {"id": 2, "title": "Kasmir","subtitle" :"Travel Code :C2","imgsrc":"assets/image/Package/Foreign/kasmir-f.png"},
    {"id": 3, "title": "Ladakh","subtitle" :"Travel Code :C3","imgsrc":"assets/image/Package/Foreign/ladakh.png"},
    {"id": 4, "title": "Sikim","subtitle" :"Travel Code :C4","imgsrc":"assets/image/Package/Foreign/sikim.png"},



  ]
  constructor(private router: Router, private route: ActivatedRoute) { }
  navigateToForm() {
    this.router.navigate(['/form']);
  }

  ngOnInit() {

  }

}
