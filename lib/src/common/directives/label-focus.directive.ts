import { Directive, ElementRef, Input, OnDestroy, DoCheck } from '@angular/core';

@Directive({
    selector: '[hacLabelFocus]'
})
export class HacLabelFocusDirective implements DoCheck, OnDestroy {
    @Input() hacLabelFocus: string = 'focus';
    private targetElem: Element;

    constructor(private elementRef: ElementRef) {
        this.setFocused = this.setFocused.bind(this);
        this.setBlur = this.setBlur.bind(this);
    }

    ngDoCheck(): void {
        const targetElem = document.querySelector(`#${this.elementRef.nativeElement.htmlFor}`);
        if (targetElem === this.targetElem) return;

        if (targetElem) {
            targetElem.addEventListener('focus', this.setFocused, true);
            targetElem.addEventListener('focusout', this.setBlur, true);
        }

        this.removeCurrentEventListeners();

        this.targetElem = targetElem;
    }

    ngOnDestroy(): void {
        this.removeCurrentEventListeners();
    }

    private setFocused(e) {
        this.focus(true);
    }

    private setBlur(e) {
        this.focus(false);
    }

    private focus(isFocused: boolean): void {
        isFocused ?
            this.elementRef.nativeElement.classList.add(this.hacLabelFocus) :
            this.elementRef.nativeElement.classList.remove(this.hacLabelFocus);
    }

    private removeCurrentEventListeners() {
        if (this.targetElem) {
            this.targetElem.removeEventListener('focus', this.setFocused);
            this.targetElem.removeEventListener('focusout', this.setBlur);
        }
    }
}
