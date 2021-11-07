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

### Custom Directives
- use Directive() decorator, current ElementRef can be injected 
- @HostListener('event') : to listen to host events
  - @HostListener('mouseenter') mouseover(eventData: Event) {  }
- @HostBinding('property') : to bind to host property
  - @HostBinding('style.backgroundColor') bgColor: string;

## Services
- put business logic in one place and follow DRY pattern
- Services are singletons within the scope of an injector, Angular DI has a hierarchical injection system, which means that nested injectors can create their own service instances.
- @Injectable() directive from @angular/core
- put services in providers array (in @NgModule / @Component)
  
## Routing
- to navigate between pages/ different part of the application, Add RouterModule in imports of AppModule
  ``` typescript
    let routes: Routes = [
    { path : "shopping", component : ShoppingListComponent },
    { path : "recipe", component : RecipeComponent },
    { path : "", component : RecipeComponent }];
    RouterModule.forRoot(routes)
  ```
- "/page" is absolute path and "page" is relative path, for parameters use :name eg ` "users/:id/:action" `
- <b>router-outlet</b> directive is responsible for rendering Component on the route ` <router-outlet></router-outlet> `  
- <b>routerLink</b> directive used to specify route. ` <a routerLink="/page" >The Page</a>`
- <b>routerLinkActive</b> can be used to specify class to add when a route is active. ` <a routerLinkActive="active" routerLink="/page" >The Page</a> `
- <b>routerLinkActiveOption</b> to configure active link ` <a routerLinkActive="active" [routerLinkActiveOption]="{exact=true}" routerLink="/page" >The Page</a> `
 
#
# TypeScript
## class
```typescript
  export class foo { }
```
  
## Getter/Setters
  ```typescript
  class foo {
      private _bar: boolean = false;
      get bar(): boolean {
          return this._bar;
      }
      set bar(value: boolean) {
          this._bar = value;
      }
  }
  ```
