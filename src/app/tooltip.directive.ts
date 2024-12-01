import { AfterViewInit, Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import tippy from 'tippy.js';

@Directive({
  selector: '[appTooltip]',
  standalone: true
})
export class TooltipDirective implements AfterViewInit, OnChanges{
  
  @Input('appTooltip') tooltipContent: string = '';
  
  tippyInstance: any;

  constructor(private readonly elRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.tippyInstance = tippy(this.elRef.nativeElement, {
      content: this.tooltipContent
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
      if (changes['tooltipContent']) {
        this.updateTooltipContent();
      }
  }

  updateTooltipContent(): void {
    if (this.tippyInstance) {
      this.tippyInstance.setContent(this.tooltipContent);
    }
  }
}
