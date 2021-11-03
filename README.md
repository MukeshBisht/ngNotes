# ngNotes : Angular 2 cheatsheet
Angular 2 notes

## Component
UI building blocks
- templateUrl = ''
- template = ``
- styleUrls = []
- styles = []
- selector = ''

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
- ngOnChanges 
    - Called after a bound input property changes.
- ngOnInit 
    - Called once the component is initalized.
- ngOnDoCheck 
    - Called during every change detection run.
- ngAfterContentInit 
    - Called after content (ng-content) has been rendered in the view.
- ngAfterContentChecked
    - Called every time the rendered content has been checked.
- ngAfterContentInit 
    - Called after the component's view (and child views) has been initilized.
- ngAfterContentChecked
    - Called every time the view (and child views) has been checked.
- ngOnDestroy     
    - Called once the coomponent is about to be destroyed.

## Directives
- Attribute Directives (eg ngClass, ngStyle)
  - looks like normal HTML attribute
  - Only affect/change the element they are added to
- Structural Directives )en *ngFor, *ngIf)
  - have a leading *
  - Affact a whole area in the DOM (elements get added/removed)

#
# TypeScript
