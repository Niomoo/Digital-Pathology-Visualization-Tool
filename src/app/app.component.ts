import { Component } from '@angular/core';
import { appPath } from './app-path.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'PathologyVisualizationTool';
  path = appPath;
}
