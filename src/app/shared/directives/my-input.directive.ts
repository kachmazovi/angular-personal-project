import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyInput]'
})
export class MyInputDirective {
  private inputElement: HTMLInputElement = this.elementRef.nativeElement;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { 
    if (this.inputElement) {
      this.renderer.addClass(this.inputElement, 'my-input');

      this.renderer.listen(this.inputElement, 'focus', () => {
        this.renderer.setStyle(this.inputElement, 'border-bottom', '2px solid rgb(93, 0, 241)');
      });
      
      this.renderer.listen(this.inputElement, 'blur', () => {
        this.renderer.setStyle(this.inputElement, 'border-bottom', '2px solid white');
      });
    }
  }
}