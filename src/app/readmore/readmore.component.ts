import { Component, Input, ElementRef, AfterViewInit } from '@angular/core';

@Component({
    selector: 'read-more',
    template: `
        <div [innerHTML]="text|highlight:search:type:id:availableIds" [class.collapsed]="isCollapsed" [style.height]="isCollapsed ? maxHeight+'px' : 'auto'">
        </div>
            <ion-button shape="round" fill="clear" class="read" (click)="isCollapsed =! isCollapsed">Read {{isCollapsed? 'more':'less'}}</ion-button>
    `,
    styles: [`
        div.collapsed {
            overflow: hidden;
        }
    `]
})
export class ReadMoreComponent implements AfterViewInit {

    //the text that need to be put in the container
    @Input() text: string;
    @Input() search:string
    @Input() id:string
    @Input() availableIds:string
    //maximum height of the container
    @Input() maxHeight: number = 100;
    @Input() type:string;
    //set these to false to get the height of the expended container 
    public isCollapsed: boolean = true;
    public isCollapsable: boolean = false;

    constructor(private elementRef: ElementRef) {
    }

    ngAfterViewInit() {
        let currentHeight = this.elementRef.nativeElement.getElementsByTagName('div')[0].offsetHeight;
       //collapsable only if the contents make container exceed the max height
        if (currentHeight > this.maxHeight) {
            this.isCollapsed = true;
            this.isCollapsable = true;
        }
    }
}