import { Component, OnInit, TemplateRef } from '@angular/core';
import { Items } from '../item.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  searchText: string = '';
  item: any = {};
  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.fetchItems();
  }

  fetchItems() {
    this.products = Items;
    this.filteredProducts = [...this.products]
  }

  filterProducts(): void {
    if (this.searchText.trim() === '') {
      this.filteredProducts = [...this.products]; // Reset filter if search text is empty
    } else {
      this.filteredProducts = this.products.filter(item =>
        item.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  openSaveItemModal(data: any,template:any) {
    const modalRef = this.modalService.open(template, { centered: true });
    modalRef.componentInstance.item = {
      name: '',
      image: '',
      totalStock: 0,
      outStock: 0,
      balance: 0,
    };

    modalRef.result.then(
      (result) => {
        console.log('Modal closed with:', result);
      },
      (reason) => {
        console.log('Modal dismissed:', reason);
      }
    );
  }

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.item.images = reader.result as string; // Base64 URL
      };
      reader.readAsDataURL(file);
    }
  }


  save(modal: any) {
    console.log('Saving item:', this.item);
    Items.unshift(this.item);
    this.fetchItems()
    // this.activeModal.close(this.item);
    modal.close()
  }

}
