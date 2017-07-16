import { Directive, ElementRef, HostListener, Input, OnInit, DoCheck } from '@angular/core';

@Directive({
    selector: '[hacCopyWidth]'
})
export class HacCopyWidthDirective implements OnInit, DoCheck {
    @Input() hacCopyWidth: HTMLElement;
    @Input() widthCssProperty: 'minWidth' | 'width' | 'maxWidth' = 'width';
    @Input() skip: boolean = false;

    constructor(private elementRef: ElementRef) { }

    ngOnInit(): void {
        this.calcWidth();
    }

    ngDoCheck(): void {
        this.calcWidth();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.calcWidth();
    }

    calcWidth(): void {
        if (this.skip) {
            this.setWidth(null);
            return;
        }

        if (!this.hacCopyWidth) {
            this.setWidth(0);
            return;
        }

        const computedStyle = getComputedStyle(this.hacCopyWidth, null);
        const borderLeft = parseFloat(computedStyle.borderLeftWidth.replace('px', ''));
        const borderRight = parseFloat(computedStyle.borderRightWidth.replace('px', ''));

        const finalWidth = this.hacCopyWidth.offsetWidth - borderLeft - borderRight;
        this.setWidth(finalWidth);
    }

    private setWidth(width: number) {
        this.elementRef.nativeElement.style[this.widthCssProperty] = width != null ? `${width}px` : null;
    }
}