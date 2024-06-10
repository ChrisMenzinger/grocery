import { Component, signal } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Item, ItemId } from 'src/app/types/Item';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
  imports: [ListItemComponent],
})
export class ListComponent{
  itemsSubject = signal<Item[]>([]) || undefined;

  constructor(
    private readonly itemService: ItemService
  ) { 
    this.itemService.getAllItems().subscribe((items) => this.itemsSubject.set(items))
  }

  deleteItem(itemId: ItemId) {
    return this.itemService.deleteItem(itemId).subscribe(()=>{
      this.itemsSubject.update((value) => {
        return value.filter((i) => i.id !== itemId) 
      })
    })
  }
}
