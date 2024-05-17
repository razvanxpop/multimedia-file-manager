import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericService } from '../generic.service';

@Component({
  selector: 'app-delete-file',
  standalone: true,
  imports: [],
  templateUrl: './delete-file.component.html',
  styleUrl: './delete-file.component.css'
})
export class DeleteFileComponent {
  constructor(private genericService: GenericService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  onYes(): void {
    const id: number = this.route.snapshot.queryParams['id'];
    this.genericService.deleteFile(id).subscribe(() => {
      this.router.navigate(['show-files']).then(_ => {});
    })
  }

  onNo(): void {
    this.router.navigate(['show-files']).then(_ => {});
  }
}
