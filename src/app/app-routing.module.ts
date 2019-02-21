import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // needed for routing
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';

/*
  Routes:
    JS Objects
    Determine which part of our app should be presented at a certain path
*/

const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'create', component: PostCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
