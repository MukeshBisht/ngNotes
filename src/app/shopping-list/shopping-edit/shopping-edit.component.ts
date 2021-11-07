import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameRef: ElementRef;
  @ViewChild('amountInput') amountRef: ElementRef;

  @Output() onAdd = new EventEmitter<Ingredient>();

  ngOnInit(): void {
  }

  addIngredient() {
    let ing = new Ingredient(this.nameRef.nativeElement.value, this.amountRef.nativeElement.value);
    if(ing.name !== '')
    this.onAdd.emit(ing);
  }
}