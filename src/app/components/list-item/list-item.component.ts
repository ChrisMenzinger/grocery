import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonButton, IonCheckbox, IonLabel } from '@ionic/angular/standalone';
import { ItemService } from 'src/app/services/item.service';
import { ItemId } from 'src/app/types/Item';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  imports: [IonCheckbox, IonLabel],
  standalone: true,
})
export class ListItemComponent  implements OnInit {
  @Input() name?: string
  @Input() id: ItemId = 0
  @Output() deleteItem: EventEmitter<ItemId> = new EventEmitter<ItemId>();
  constructor() 
  {}

  ngOnInit(): void {}

  onDeleteClick(): void {
    this.deleteItem.emit(this.id);
  }


}
