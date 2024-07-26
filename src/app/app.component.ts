import { Component } from '@angular/core';
export interface Server {
  tpye: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  serverElement: Server[] = [
    {
      tpye: 'Server 1',
      description: 'This is the first server!!',
    },
  ];
  element: Server | undefined;
  onServerCreated(server: Server) {
    this.element = server;
    this.serverElement.push(this.element);
  }
  onBluePrintCreated(bluePrint: Server) {
    console.log(bluePrint);
  }
}
