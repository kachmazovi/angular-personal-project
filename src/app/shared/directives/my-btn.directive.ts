import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyBtn]',
})
export class MyBtnDirective {
  private myBtn: HTMLElement = this.elementRef.nativeElement;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    if (this.myBtn) {
      this.renderer.addClass(this.myBtn, 'my-btn');

      this.renderer.listen(this.myBtn, 'mouseover', () => {
        this.renderer.setStyle(
          this.myBtn,
          'background-color',
          this.isDisabled ? 'rgba(0, 0, 0, 0.2)' : 'rgb(93, 0, 241)'
        );
        this.renderer.addClass(
          this.myBtn,
          this.isDisabled ? 'not-allowed' : ''
        );
      });

      this.renderer.listen(this.myBtn, 'mouseleave', () => {
        this.renderer.removeClass(this.myBtn, 'not-allowed');
        this.renderer.setStyle(this.myBtn, 'background', 'none');
      });
    }
  }

  private get isDisabled(): boolean {
    return this.myBtn.attributes.getNamedItem('disabled') ? true : false;
  }
}
