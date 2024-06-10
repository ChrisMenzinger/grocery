import { Component } from '@angular/core';
import { IonHeader, IonButton, IonFooter, IonContent } from '@ionic/angular/standalone';
import { ListComponent } from "../components/list/list.component";
import { ITEM_RESOURCE } from '../services/constants/api.constants';
import { ListItemComponent } from '../components/list-item/list-item.component';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
    imports: [IonHeader, IonFooter, IonContent, ListComponent, IonButton, ListItemComponent], 
})
export class HomePage {
  constructor() {
  }

  onDere = ()=>{
    console.log(ITEM_RESOURCE)
    console.log("dere")
  }
}
