import { Component } from '@angular/core';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrl: './add-page.component.css'
})
export class AddPageComponent {
  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];
  
}
