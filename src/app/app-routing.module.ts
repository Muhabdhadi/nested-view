import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FirstComponent} from "./first/first.component";
import {SecondComponent} from "./second/second.component";
import {ChildBComponent} from "./first/child-b/child-b.component";

const routes: Routes = [
    { path: '', redirectTo: '/first-component', pathMatch: 'full' },
    {
        path: 'first-component',
        component: FirstComponent,
        children: [
            {
                path: 'feature-a',
                loadChildren: () => import('./first/feature-a/feature-a.module').then(m => m.FeatureAModule)
            },
            {
                path: 'child-b',
                component: ChildBComponent
            }
        ]
    },
    { path: 'second-component', component: SecondComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
