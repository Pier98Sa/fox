import { FoxgetService } from './../foxget.service';
import { Component } from '@angular/core';
import { Fox } from '../Fox';

@Component({
  selector: 'app-foxview',
  templateUrl: './foxview.component.html',
  styleUrls: ['./foxview.component.css']
})
export class FoxviewComponent {
constructor(private service: FoxgetService){

}
  fox?: Fox | null = null;

  reload() {
    console.log('reload requested');
    this.service.getFox().subscribe( fox => this.fox = fox);
  }

}
