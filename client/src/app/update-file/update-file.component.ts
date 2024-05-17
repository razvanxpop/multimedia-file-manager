import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { File } from '../file';
import { GenericService } from '../generic.service';

@Component({
  selector: 'app-update-file',
  standalone: true,
  imports: [],
  templateUrl: './update-file.component.html',
  styleUrl: './update-file.component.css'
})
export class UpdateFileComponent implements OnInit {
  title: string = '';
  format: string = '';
  genre: string = '';
  path: string = '';

  constructor(private genericService: GenericService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void { this.populateFields(); }

  onUpdate(title: string, format: string, genre: string, path: string): void {
    const id: number = this.route.snapshot.queryParams['id'];
    this.genericService.updateFile(id, title, format, genre, path).subscribe(
      () => { this.router.navigate(['show-files']).then(_ => {}); }
    );
  }

  populateFields(): void {
    const id: number = this.route.snapshot.queryParams['id'];
    this.genericService.populateUpdateFields(id).subscribe(
      (file: File) => {
        this.title = file.title;
        this.format = file.format;
        this.genre = file.genre;
        this.path = file.path;
      }
    );
  }

  onCancel(): void {
    this.router.navigate(['show-files']).then(_ => {});
  }

}
