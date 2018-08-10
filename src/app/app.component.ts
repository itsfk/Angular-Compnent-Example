import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ComponentExample';
  rootItems = ['Apples', 'Bananas', 'Cherries'];
  onItemWasAdded(newItem) {
  this.rootItems.push(newItem);
  console.log(this.rootItems);
}
}
