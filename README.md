# ngNotes
Angular 2 notes

## Component
UI building blocks
- templateUrl
- template
- styleUrls
- styles
- selector

### SPECIAL
- element ref: <input type="text" #inputRef>

## Element Refs
extending element refs ElementRef
- @ViewChild('selector-name')
- @ContentChild('select-name')
@ViewChild('inputRef') inputRef : ElementRef;

## Binding
- Property Binding  [src] = "model.url"
- Event Binding  (click) = "onClicked()"
- Two Way binding [(ngModel)] = "model"
  - @Input(<alias>)    : property binding
  - @Output(<alias>)   : event binding

## String Interpolation
- {{ expression }}

## Ng LifeCycle Hooks
-


#
# TypeScript
