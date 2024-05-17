import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GenericService } from '../generic.service';

@Component({
  selector: 'app-add-file',
  standalone: true,
  imports: [],
  templateUrl: './add-file.component.html',
  styleUrl: './add-file.component.css'
})
export class AddFileComponent {
  constructor(private genericService: GenericService, private router: Router) {}

  ngOnInit(): void {}

  onAdd(title: string, format: string, genre: string, path: string): void {
    this.genericService.addFile(title, format, genre, path).subscribe(() => {
        this.router.navigate(['show-files']).then(_ => {})
      });
  }

  onCancel(): void {
    this.router.navigate(['show-files']).then(_ => {});
  }
}
