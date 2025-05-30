import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
@Component({
  selector: 'app-contacto',
  imports: [CommonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  titulo: string = 'Contacto';

medios: any[] = [
  {"texto": "En Twitter",
    "url":"https://x.com/steeven_mentech"
  },
  {"texto": "En Facebook",
    "url":""
  },
  {"texto":"Por email",
    "url":"steeven.mendoza@uees.edu.ec"
  }
]
}

