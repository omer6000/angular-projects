import { Directive, ElementRef, inject, input } from "@angular/core";

@Directive({
  selector: "a[appSafeLink]",
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)'
  }
})
export class SafeLinkDirective {
    queryInput = input<string>('my_angular_app',{alias: 'appSafeLink'});
    // private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);
    constructor() {
        console.log("SafeLinkDirective initialized");
    }
    onConfirmLeavePage(e: MouseEvent) {
        const leaveCondition = window.confirm("Are you sure you want to leave this page?");
        if (leaveCondition)
            (e.target as HTMLAnchorElement).href += "?from=" + this.queryInput();
        else
            e.preventDefault();         
    }
}