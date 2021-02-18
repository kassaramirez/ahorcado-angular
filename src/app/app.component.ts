import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // propiedades de la clase appComponent

  palabra = 'A';

  palabraOculta = '';

  intentos = 0;

  letras = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'Ñ',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  gano = false;

  perdio = false;

  constructor() {
    this.palabraOculta = '_ '.repeat(this.palabra.length);
  }

  comprobar(letra: string) {
    this.existeLetra(letra);

    const palabraOcultaArray = this.palabraOculta.split(' ');

    for (let i = 0; i < this.palabra.length; i++) {
      if (this.palabra[i] === letra) {
        palabraOcultaArray[i] = letra;
      }
    }

    const pos = this.letras.indexOf(letra);
    this.letras.splice(pos, 1);

    this.palabraOculta = palabraOcultaArray.join(' ');
    this.verificaGane();
  }

  verificaGane() {
    const palabraArray = this.palabraOculta.split(' ');

    const palabraEvaluar = palabraArray.join('');

    if (palabraEvaluar === this.palabra) {
      this.gano = true;
      console.log('Has Ganado');
    }

    if (this.intentos >= 9) {
      this.perdio = true;
      console.log('Has Perdido');
    }
  }

  existeLetra(letra: string) {
    if (this.palabra.indexOf(letra) == -1) {
      this.intentos++;
    }
  }

  reiniciarJuego(palabraNueva: string) {
    if (!palabraNueva) {
      Swal.fire({
        title: 'Ups!',
        text: 'Debe ingresar una palabra',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return;
    }

    this.letras = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'Ñ',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ];
    this.palabra = palabraNueva;
    this.palabraOculta = '_ '.repeat(this.palabra.length);
    this.intentos = 0;
    this.gano = false;
    this.perdio = false;
  }
}
