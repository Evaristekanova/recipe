import { Component, Output, EventEmitter } from '@angular/core';
import { Server } from '../../app.component';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<Server>();
  @Output() bluePrintCreated = new EventEmitter<Server>();
  server = '';
  content = '';

  serverToBeCreated() {
    this.serverCreated.emit({
      tpye: this.server,
      description: this.content,
    });
    (this.server = ''), (this.content = '');
  }
  bluePrintToBeCreated() {
    this.bluePrintCreated.emit();
  }
}
