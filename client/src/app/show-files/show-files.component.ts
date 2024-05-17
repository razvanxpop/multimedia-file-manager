import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { File } from '../file';
import { GenericService } from '../generic.service';


@Component({
  selector: 'app-show-files',
  standalone: true,
  imports: [],
  templateUrl: './show-files.component.html',
  styleUrl: './show-files.component.css'
})
export class ShowFilesComponent implements OnInit {  
  files: File[] = [];
  currentTitle: string = '';
  previousTitle: string = '';
  constructor(private genericService: GenericService, private router: Router) {}

  ngOnInit(): void { this.refresh(''); }

  refresh(title: string): void {
    this.previousTitle = this.currentTitle;
    this.currentTitle = title;
    this.genericService.fetchFiles(this.currentTitle).subscribe(files => this.files = files);
  }

  onChange(title: string): void {
    this.refresh(title);
  }

  navigateToAdd(): void {
    this.router.navigate(['add-file']).then(_ => {});
  }

  navigateToDelete(id: number): void {
    this.router.navigate(['delete-file'], {queryParams: {id: id}}).then(_ => {});
  }

  navigateToUpdate(id: number): void {
    this.router.navigate(['update-file'], {queryParams: {id: id}}).then(_ => {});
  }

}
