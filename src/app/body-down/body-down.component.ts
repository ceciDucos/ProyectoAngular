import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-body-down',
  templateUrl: './body-down.component.html',
  styleUrls: ['./body-down.component.css']
})
export class BodyDownComponent implements OnInit {
  opcion;
  tipoVino;
  constructor(private router: Router,

    private route: ActivatedRoute) {
      this.route.params.subscribe(params => {
        if (params['tipo']) {
          this.opcion = params['tipo'];
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
