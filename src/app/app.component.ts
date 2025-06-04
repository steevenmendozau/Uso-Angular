import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { TablaComponent } from './shared/tabla/tabla.component';
import { RecursosService } from './servicios/recursos.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Foto } from './interfaz/foto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactoComponent, TablaComponent,HttpClientModule],
  providers: [RecursosService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyectoAngular';
  fotos: Foto[] = [];

  constructor(private recursoService: RecursosService) {
    this.recursoService.obtenerDatos().subscribe(respuesta =>{
      this.fotos = respuesta as Array<Foto>;
    })
  }
}

