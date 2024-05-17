import { Routes } from '@angular/router';
import { AddFileComponent } from './add-file/add-file.component';
import { DeleteFileComponent } from './delete-file/delete-file.component';
import { ShowFilesComponent } from './show-files/show-files.component';
import { UpdateFileComponent } from './update-file/update-file.component';

export const routes: Routes = [
  { path: 'show-files', component: ShowFilesComponent},
  { path: 'delete-file', component: DeleteFileComponent },
  { path: 'add-file', component: AddFileComponent },
  { path: 'update-file', component: UpdateFileComponent },
  { path: '', redirectTo: '/show-files', pathMatch: 'full'},
  //{ path: '', component: ShowFilesComponent}
];
