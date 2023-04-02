import { Component } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
  projectList = [
    { Title: "LUAD", Type: "WSI images"},
    { Title: "BRCA", Type: "WSI images"},
    { Title: "UCEC", Type: "WSI images"},
    { Title: "GBM", Type: "WSI images"},
    { Title: "KIRC", Type: "WSI images"},
  ];
}

