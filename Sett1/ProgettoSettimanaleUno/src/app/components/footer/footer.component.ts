import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  togglePanel(): void {
    const panel = document.getElementById('panel');
    if (panel) {
      panel.style.display = (panel.style.display === 'none') ? 'block' : 'none';
    }
  }
}
