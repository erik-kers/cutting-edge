import { inject } from 'aurelia-framework';
import { MdToastService, MdModal } from 'aurelia-materialize-bridge';

@inject(MdToastService)
export class LoginModalCustomElement {
  private modal: MdModal;
  private toast: MdToastService;

  private openModal(): void {
    this.modal.open();
  }
  
}