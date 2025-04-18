import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

type ModalType = 'booking' | 'edit' | 'delete';

@Component({
  selector: 'app-booking-modal',
  imports: [CommonModule],
  templateUrl: './booking-modal.component.html',
  styleUrl: './booking-modal.component.css'
})
export class BookingModalComponent {
  @Input() show: boolean = false;
  @Input() title: string = '';
  @Input() type: ModalType = 'booking';
  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();

  @HostListener('document:keydown.escape', ['$event'])
  onEscapePress(event: KeyboardEvent) {
    this.closeModal();
  }

  closeModal() {
    this.close.emit();
  }

  confirmAction() {
    this.confirm.emit();
  }

  getIcon(): string {
    switch(this.type) {
      case 'booking': return '📅';
      case 'edit': return '✏️';
      case 'delete': return '🗑️';
      default: return '';
    }
  }

  getConfirmButtonColor(): string {
    switch(this.type) {
      case 'booking': return 'bg-green-600 hover:bg-green-700';
      case 'edit': return 'bg-blue-600 hover:bg-blue-700';
      case 'delete': return 'bg-red-600 hover:bg-red-700';
      default: return 'bg-gray-600 hover:bg-gray-700';
    }
  }
}