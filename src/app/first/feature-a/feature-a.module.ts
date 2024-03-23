import {NgModule} from "@angular/core";
import {ChildAComponent} from "./child-a/child-a.component";
import {FeatureARoutingModule} from "./feature-a-routing.module";

@NgModule({
    declarations: [
        ChildAComponent,
    ],
    imports: [FeatureARoutingModule]
})
export class FeatureAModule {}
