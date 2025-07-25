import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @Output() toggleCartEvent = new EventEmitter<void>();

  ngOnInit() {
    let cart_list = localStorage.getItem('cart_list') ?? '[]';
    this.cart_list = JSON.parse(cart_list);
  }
  cart_list: any[] = [];

  toggleCart(event: Event) {
    event.preventDefault();
    event.stopPropagation(); // Prevent event bubbling
    this.toggleCartEvent.emit();
  }
}
