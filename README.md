# ngNotes
Angular 2 notes

## Component
UI building blocks
- templateUrl
- template
- styleUrls
- styles
- selector

## Element Refs
element ref: <input type="text" #inputRef>
- @ViewChild('selector-name')
  - @ViewChild('inputRef') inputRef : ElementRef;
- @ContentChild('select-name')

## Binding
- Property Binding  [src] = "model.url"
- Event Binding  (click) = "onClicked()"
- Two Way binding [(ngModel)] = "model"
  - @Input(<alias>)    : property binding
    - @Inout() model: Model;
  - @Output(<alias>)   : event binding
    - @Output() onAction: EventEmitter<T>;

## String Interpolation
- {{ expression }}

## Ng LifeCycle Hooks
-


#
# TypeScript
