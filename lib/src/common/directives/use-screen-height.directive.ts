import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
    selector: '[hacUseScreenHeight]'
})
export class HacUseScreenHeight implements OnInit, OnDestroy {
    @Input() minHeight: number;
    @Input() skipSetHeight: boolean = false;

    constructor(private elementRef: ElementRef) { 
        this.setElementHeight = this.setElementHeight.bind(this);
    }

    ngOnInit(): void {
        this.setElementHeight();
        this.listenEvents();
    }

    ngOnDestroy(): void {
        this.removeEvents();
    }

    listenEvents(): void {
        window.addEventListener('resize', this.setElementHeight, false);
        window.addEventListener('scroll', this.setElementHeight, false);
        window.addEventListener('click', this.setElementHeight, false);
    }

    removeEvents(): void {
        window.removeEventListener('resize', this.setElementHeight, false);
        window.removeEventListener('scroll', this.setElementHeight, false);
        window.removeEventListener('click', this.setElementHeight, false);
    }

    setElementHeight(e?: any): void {
        if (this.skipSetHeight) return;
        
        window.requestAnimationFrame(() => {

            const el = this.elementRef.nativeElement as HTMLElement;
            const pos = el.getBoundingClientRect().top;
            let height = window.innerHeight - pos;

            if (height <= this.minHeight) {
                height = this.minHeight;
            }

            el.style.maxHeight = `${height}px`;
        });
    }
}