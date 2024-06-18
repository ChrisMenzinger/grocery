import { Component } from '@angular/core';
import { IonHeader, IonButton, IonFooter, IonContent } from '@ionic/angular/standalone';
import { ListComponent } from "../components/list/list.component";
import { ITEM_RESOURCE } from '../services/constants/api.constants';
import { ListItemComponent } from '../components/list-item/list-item.component';
import { ModalComponent } from '../components/modal/modal.component';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
    imports: [IonHeader, IonFooter, IonContent, ListComponent, IonButton, ListItemComponent, ModalComponent], 
})
export class HomePage {
  openModal = false

  onClickOpenModal = () => {
    this.openModal = true
  }
}
