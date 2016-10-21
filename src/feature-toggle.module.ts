import { NgModule } from '@angular/core';

import { FeatureToggleDirective } from './feature-toggle.directive';

const ANGULAR_FEATURE_TOGGLE_DIRECTIVES: any[] = [
  FeatureToggleDirective
];

@NgModule({
  declarations: ANGULAR_FEATURE_TOGGLE_DIRECTIVES,
  exports: ANGULAR_FEATURE_TOGGLE_DIRECTIVES
})

export class FeatureToggleModule { }
