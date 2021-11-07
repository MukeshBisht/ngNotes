import { isPlatformBrowser } from '@angular/common';
import { Directive, HostBinding, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {

  @HostListener('click') onToggle(event: Event) {
    let list = this.element.nativeElement.querySelector('ul');
    list.classList.toggle('show');
  }

  constructor(private element:ElementRef, renderer: Renderer2) {}
}
