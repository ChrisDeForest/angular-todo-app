import { Directive } from '@angular/core';

@Directive({
  selector: '[appTooltipSingleton]',
  standalone: true
})
export class TooltipSingletonDirective {

  constructor() { }

}
