import { Directive, EventEmitter, ElementRef, Input, HostListener, Output } from '@angular/core';
import { FileUploader } from './file-uploader.class';
import * as i0 from "@angular/core";
export class FileSelectDirective {
    constructor(element) {
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onFileSelected = new EventEmitter();
        this.element = element;
    }
    getOptions() {
        return this.uploader?.options;
    }
    getFilters() {
        return '';
    }
    isEmptyAfterSelection() {
        return !!this.element.nativeElement.attributes.multiple;
    }
    onChange() {
        const files = this.element.nativeElement.files;
        const options = this.getOptions();
        const filters = this.getFilters();
        this.uploader?.addToQueue(files, options, filters);
        this.onFileSelected.emit(files);
        if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
        }
    }
}
FileSelectDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: FileSelectDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
FileSelectDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.0", type: FileSelectDirective, selector: "[ng2FileSelect]", inputs: { uploader: "uploader" }, outputs: { onFileSelected: "onFileSelected" }, host: { listeners: { "change": "onChange()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: FileSelectDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[ng2FileSelect]' }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { uploader: [{
                type: Input
            }], onFileSelected: [{
                type: Output
            }], onChange: [{
                type: HostListener,
                args: ['change']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zZWxlY3QuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9uZzItZmlsZS11cGxvYWQvZmlsZS11cGxvYWQvZmlsZS1zZWxlY3QuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRyxPQUFPLEVBQUUsWUFBWSxFQUF1QixNQUFNLHVCQUF1QixDQUFDOztBQUcxRSxNQUFNLE9BQU8sbUJBQW1CO0lBTzlCLFlBQVksT0FBbUI7UUFML0IsK0RBQStEO1FBQ3JELG1CQUFjLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFLMUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQscUJBQXFCO1FBQ25CLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7SUFDMUQsQ0FBQztJQUdELFFBQVE7UUFDTixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDL0MsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRW5ELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUN2QztJQUNILENBQUM7O2dIQWxDVSxtQkFBbUI7b0dBQW5CLG1CQUFtQjsyRkFBbkIsbUJBQW1CO2tCQUQvQixTQUFTO21CQUFDLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFO2lHQUUvQixRQUFRO3NCQUFoQixLQUFLO2dCQUVJLGNBQWM7c0JBQXZCLE1BQU07Z0JBcUJQLFFBQVE7c0JBRFAsWUFBWTt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIElucHV0LCBIb3N0TGlzdGVuZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRmlsZVVwbG9hZGVyLCBGaWxlVXBsb2FkZXJPcHRpb25zIH0gZnJvbSAnLi9maWxlLXVwbG9hZGVyLmNsYXNzJztcclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZzJGaWxlU2VsZWN0XScgfSlcclxuZXhwb3J0IGNsYXNzIEZpbGVTZWxlY3REaXJlY3RpdmUge1xyXG4gIEBJbnB1dCgpIHVwbG9hZGVyPzogRmlsZVVwbG9hZGVyO1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8tb3V0cHV0LW9uLXByZWZpeFxyXG4gIEBPdXRwdXQoKSBvbkZpbGVTZWxlY3RlZDogRXZlbnRFbWl0dGVyPEZpbGVbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGVbXT4oKTtcclxuXHJcbiAgcHJvdGVjdGVkIGVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRPcHRpb25zKCk6IEZpbGVVcGxvYWRlck9wdGlvbnMgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMudXBsb2FkZXI/Lm9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBnZXRGaWx0ZXJzKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuICBpc0VtcHR5QWZ0ZXJTZWxlY3Rpb24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISF0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5hdHRyaWJ1dGVzLm11bHRpcGxlO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2hhbmdlJylcclxuICBvbkNoYW5nZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZmlsZXM7XHJcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRPcHRpb25zKCk7XHJcbiAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5nZXRGaWx0ZXJzKCk7XHJcbiAgICB0aGlzLnVwbG9hZGVyPy5hZGRUb1F1ZXVlKGZpbGVzLCBvcHRpb25zLCBmaWx0ZXJzKTtcclxuXHJcbiAgICB0aGlzLm9uRmlsZVNlbGVjdGVkLmVtaXQoZmlsZXMpO1xyXG4gICAgaWYgKHRoaXMuaXNFbXB0eUFmdGVyU2VsZWN0aW9uKCkpIHtcclxuICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19