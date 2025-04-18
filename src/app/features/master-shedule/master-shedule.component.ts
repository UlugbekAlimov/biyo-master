import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookingModalComponent } from '../../shared/booking-modal/booking-modal.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-master-shedule',
  imports: [CommonModule, FormsModule, BookingModalComponent, RouterLink],
  templateUrl: './master-shedule.component.html',
  styleUrl: './master-shedule.component.css'
})
export class MasterSheduleComponent {
  selectedDate = '2024-04-22';

  timeSlots = [
    { start: '09:00', end: '09:30', label: 'Маникюр' },
    { start: '10:00', end: '10:30', label: '—' },
    { start: '11:00', end: '11:30', label: 'Бронь' },
    { start: '13:00', end: '13:30', label: '—' },
    { start: '15:00', end: '15:30', label: '—' },
    { start: '17:00', end: '17:30', label: 'Бронь' },
    { start: '18:30', end: '19:00', label: '—' },
    { start: '19:30', end: '20:00', label: '—' }
  ];

  clients = [
    { time: '10:00', name: 'тектс', service: 'Маликure' },
    { time: '11:00', name: 'текст', service: 'Маликure' },
    { time: '15:00', name: 'текст', service: 'Маликure' }
  ]
  showModal = false;
  selectedClient: any;
  showEditModal = false;
  showDeleteModal = false;
  
  openEditModal(client: any) {
    this.selectedClient = client;
    this.showEditModal = true;
  }
  
  openDeleteModal(client: any) {
    this.selectedClient = client;
    this.showDeleteModal = true;
  }
  
  handleEditConfirm() {
    // Логика сохранения изменений
    this.showEditModal = false;
  }
  
  handleDeleteConfirm() {
    // Логика удаления
    this.showDeleteModal = false;
  }
}
