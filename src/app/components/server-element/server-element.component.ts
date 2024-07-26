import { Component, Input } from '@angular/core';
import { Server } from '../../app.component';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent {
@Input() element: Server | undefined

}
