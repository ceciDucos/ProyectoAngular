import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})

export class ListProductsComponent implements OnInit {
  opcion;
  tipoVino;
  constructor(private router: Router,

    private route: ActivatedRoute) {
      this.route.params.subscribe(params => {
        if (params['op']) {
          this.opcion = params['op'];
        }
        if(this.opcion === "tintos" ){
          this.tipoVino = "TINTOS"
        }else if(this.opcion === "rosados"){
          this.tipoVino = "ROSADOS"
        }else{
          this.tipoVino = "BLANCOS"
        }
    })
}  
  ngOnInit(): void {
  }
}


