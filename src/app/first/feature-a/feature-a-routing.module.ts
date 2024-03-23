import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ChildAComponent} from "./child-a/child-a.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: ChildAComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class FeatureARoutingModule {}
