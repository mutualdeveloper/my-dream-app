import { Component, OnInit } from '@angular/core';
import { ItemSocialBar} from './socialbar.item.model';

@Component({
  selector: 'app-socialbar',
  templateUrl: './socialbar.component.html',
  styleUrls: ['./socialbar.component.css']
})
export class SocialbarComponent implements OnInit {
  public itemsSocialBar: ItemSocialBar[] = []
  constructor() { 
    this.itemsSocialBar.push(new ItemSocialBar(1,'facebook','assets/icons/socialbar/facebook','http://facebook.com/chequesuazo',true));
    this.itemsSocialBar.push(new ItemSocialBar(2,'twitter','assets/icons/socialbar/twitter','c',false));
    this.itemsSocialBar.push(new ItemSocialBar(3,'whatsapp','assets/icons/socialbar/whatsapp','c',true));
    this.itemsSocialBar.push(new ItemSocialBar(3,'snapchat','assets/icons/socialbar/snapchat','c',false));    
  }
  
  ngOnInit() {
    
  }

}
