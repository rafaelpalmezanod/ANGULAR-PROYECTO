import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  
})
export class ContactComponent {
  Formulario = new FormGroup({
    nombre: new FormControl('',Validators.required),
    apellido: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    telefono: new FormControl('',Validators.required),
  });

  constructor(){}

  onSubmit() {
    if (this.Formulario.valid) {
      console.log('Form Submitted:', this.Formulario.value);
    } else {
      this.Formulario.markAllAsTouched();
    }
  }

  

}
