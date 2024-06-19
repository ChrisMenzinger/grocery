import { Component, EventEmitter, Input, Output, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonButton, IonInput, IonModal, ModalController } from '@ionic/angular/standalone';
import { ItemService } from 'src/app/services/item.service';
import { ItemToCreate } from 'src/app/types/Item';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [IonModal, IonInput, IonButton, FormsModule]
})
export class ModalComponent {
  @Input() isModalOpen?: boolean;
  @Output() isModalOpenChange = new EventEmitter<boolean>();
  value: ItemToCreate = { name: '' };
  itemService = inject(ItemService);

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
    if (!isOpen) {
      this.resetForm();
    }
    this.isModalOpenChange.emit(isOpen);
  }

  addItem() {
    this.itemService.createItem(this.value).subscribe({
      next: () => {
        this.setOpen(false);
      }
    });
  }

  private resetForm() {
    this.value.name = '';
  }

  onWillDismiss() {
    this.setOpen(false);
  }
}
