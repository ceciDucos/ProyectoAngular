import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})

export class ListProductsComponent implements OnInit {
  opcion;
  tipoVino;
  users: any[] = [];
  constructor(private router: Router, protected userService: UserService,
    //hacer llamada a la api desde aca
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
  ngOnInit() {
    this.userService.getUsers()  //traigo los usuarios del .json a traves de esta func
    .subscribe(
      (data) => { // Success
        this.users = data['results'];  //guardo en users el arreglo results traido del .json
      },
      (error) => {
        console.error(error); //en caso de error imprimo en consola
      }
    );
  }
}


