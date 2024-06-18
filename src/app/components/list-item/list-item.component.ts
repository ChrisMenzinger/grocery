import { Component, Input, inject } from '@angular/core';
import { IonCheckbox, IonLabel } from '@ionic/angular/standalone';
import { ItemService } from 'src/app/services/item.service';
import { ItemId } from 'src/app/types/Item';

@Component({ 
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  imports: [IonCheckbox, IonLabel],
  standalone: true,
})
export class ListItemComponent {
  @Input() name?: string;
  @Input() id!: ItemId;
  itemService = inject(ItemService);

  onDeleteClick(): void {
    this.itemService.deleteItem(this.id).subscribe();
  }
}
