import { Directive, Injectable, Input, EventEmitter, Output, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[scrollSpy]'
})
export class ScrollSpyDirective {
    @Input() public spiedTags = [];
    @Output() public sectionChange = new EventEmitter<string>();
    private currentSection: string;

    constructor(private _el: ElementRef) {}

    @HostListener('scroll', ['$event'])
    onScroll(event: any) {
        let currentSection: string;
        const children = this._el.nativeElement.children;
        const scrollTop = event.target.scrollTop;
        const parentOffset = event.target.offsetTop;
        for (let i = 0; i < children.length; i++) {
            const element = children[i];
            if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
                if ((element.offsetTop - parentOffset) <= scrollTop) {
                    currentSection = element.id;
                }
            }
        }
        if (currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(this.currentSection);
        }
    }

}

// import {Directive, ElementRef, EventEmitter, HostListener, Input, Output} from "@angular/core";

// @Directive({
//     selector: "[scrollSpy]"
// })

// export class ScrollSpyDirective {
//     @Input()
//     public spiedTags = [];

//     @Output()
//     public sectionChange = new EventEmitter<string>();

//     private currentSection: string;
//     private timeout: any;

//     constructor(private readonly _el: ElementRef) {
//     }

//     @HostListener("scroll", ["$event"])
//     onScroll(event: any): void {
//         this.timeout && clearTimeout(this.timeout);
//         this.timeout = setTimeout(() => {
//             // debugger
//             let currentSection: string = '';
//             const children: any = this._el.nativeElement.children;
//             const scrollTop = event.target.scrollTop;
//             const parentOffset = event.target.offsetTop;
//             for (let element of children) {
//                 if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
//                     if (element.offsetTop - parentOffset <= scrollTop) {
//                         currentSection = element.id;
//                     }
//                 }
//             }
//             if (currentSection !== this.currentSection) {
//                 this.currentSection = currentSection;
//                 this.sectionChange.emit(currentSection);
//             }
//         }, 50);
//     }
// }

