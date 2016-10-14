import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[kpFeatureToggle]'
})

export class FeatureToggleDirective implements OnInit {

  @Input() public kpFeatureToggle: string;

  private isEnabled: string;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    this.isEnabled = this.kpFeatureToggle;

    if (this.isEnabled) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
