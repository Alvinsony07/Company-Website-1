import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  available: boolean;
  isVeg: boolean;
}

@Component({
  selector: 'app-menu-page',
  imports: [CommonModule],
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.css'
})
export class MenuPageComponent {
  
  menuItems: MenuItem[] = [
    // Breakfast
    {
      id: 1,
      name: 'Masala Dosa',
      description: 'Crispy crepe with spiced potato filling',
      price: 45,
      category: 'Breakfast',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&h=200&fit=crop',
      available: true,
      isVeg: true
    },
    {
      id: 2,
      name: 'Idli Sambar',
      description: 'Steamed rice cakes with lentil curry',
      price: 35,
      category: 'Breakfast',
      image: 'https://images.unsplash.com/photo-1506096924842-a21f0a229a5b?w=300&h=200&fit=crop',
      available: true,
      isVeg: true
    },
    {
      id: 3,
      name: 'Poha',
      description: 'Flattened rice with vegetables and spices',
      price: 30,
      category: 'Breakfast',
      image: 'https://images.unsplash.com/photo-1604662692419-64a5dbd2e2e6?w=300&h=200&fit=crop',
      available: true,
      isVeg: true
    },
    // Lunch
    {
      id: 4,
      name: 'Chicken Biriyani',
      description: 'Fragrant basmati rice with spiced chicken',
      price: 120,
      category: 'Lunch',
      image: 'https://images.unsplash.com/photo-1563379091339-03246963d7d3?w=300&h=200&fit=crop',
      available: true,
      isVeg: false
    },
    {
      id: 5,
      name: 'Veg Thali',
      description: 'Complete meal with rice, dal, vegetables, roti',
      price: 80,
      category: 'Lunch',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop',
      available: true,
      isVeg: true
    },
    {
      id: 6,
      name: 'Fish Curry Rice',
      description: 'Traditional Kerala fish curry with rice',
      price: 95,
      category: 'Lunch',
      image: 'https://images.unsplash.com/photo-1604660730033-cb2dd5d85e39?w=300&h=200&fit=crop',
      available: true,
      isVeg: false
    },
    // Snacks
    {
      id: 7,
      name: 'Samosa',
      description: 'Deep-fried pastry with spiced filling',
      price: 15,
      category: 'Snacks',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop',
      available: true,
      isVeg: true
    },
    {
      id: 8,
      name: 'Vada Pav',
      description: 'Mumbai street food - spiced potato fritter in bun',
      price: 25,
      category: 'Snacks',
      image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop',
      available: true,
      isVeg: true
    },
    // Beverages
    {
      id: 9,
      name: 'Masala Chai',
      description: 'Spiced Indian tea',
      price: 12,
      category: 'Beverages',
      image: 'https://images.unsplash.com/photo-1597318281503-27b3136d0fae?w=300&h=200&fit=crop',
      available: true,
      isVeg: true
    },
    {
      id: 10,
      name: 'Fresh Lime Juice',
      description: 'Refreshing lime juice with mint',
      price: 20,
      category: 'Beverages',
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=300&h=200&fit=crop',
      available: true,
      isVeg: true
    }
  ];

  categories = ['All', 'Breakfast', 'Lunch', 'Snacks', 'Beverages'];
  selectedCategory = 'All';
  orderItems: any[] = [];

  get filteredItems() {
    if (this.selectedCategory === 'All') {
      return this.menuItems;
    }
    return this.menuItems.filter(item => item.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  addToOrder(item: MenuItem) {
    const existingItem = this.orderItems.find(orderItem => orderItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.orderItems.push({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1
      });
    }
  }

  getOrderTotal(): number {
    return this.orderItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  placeOrder() {
    alert(`Order placed! Total: ₹${this.getOrderTotal()}\n\nItems:\n${this.orderItems.map(item => `${item.name} x${item.quantity}`).join('\n')}`);
    this.orderItems = [];
  }
}
