import { Component, Pipe, PipeTransform } from '@angular/core';
import {contentfulService} from '../../services/contentful.service';
import { Location } from "@angular/common";
import { DomSanitizer} from '@angular/platform-browser';
import { ImageMatchPipe } from '../pipes/match-id.pipe';

@Component({
    moduleId: module.id,
    selector: 'shop',
    templateUrl: 'shop.component.html'
})
export class ShopComponent { 
    products:{};
    assets:Array<Object>;
    
    constructor(
        private _contentfulService: contentfulService,
        private _sanitizer: DomSanitizer){
        this._contentfulService.getProducts().subscribe(res => {                
            this.products = res ;       
            this.assets = res.includes.Asset ;
        });    
    }
    
}