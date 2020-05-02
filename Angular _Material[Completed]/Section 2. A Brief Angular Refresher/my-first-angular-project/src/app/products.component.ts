import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from './products.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html'
})

export class ProductsComponent implements OnInit, OnDestroy {
    productName = 'A book';
    isDisabled = true;
    products = ['A Book', 'A Tree'];
    private productsSubsciption: Subscription;

    constructor(private productsService: ProductsService) {
        
        setTimeout(() => {
            //this.productName = 'A Tree';
            this.isDisabled = false;
            
        }, 3000);
    }

    ngOnInit() {
        this.products = this.productsService.getProducts();
        this.productsSubsciption = this.productsService.productsUpdated.subscribe(() => {
            this.products = this.productsService.getProducts();
        });
        
    }

    ngOnDestroy() {
        this.productsSubsciption.unsubscribe();
    }

    onAddProduct(form) {
        //this.products.push(this.productName);
        console.log(form);
        if (form.valid) {
            //this.products.push(form.value.productName);
            this.productsService.addProduct(form.value.productName);
        }
    }

    onRemoveProduct(productName: string) {
        this.products = this.products.filter(p => p !== productName);
    }
}