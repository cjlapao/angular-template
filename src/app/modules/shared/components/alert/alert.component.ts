import { NotificationService } from '../../services/notification.service';
import { MessageType } from '../../models/message';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ALERT_SERVICE } from 'src/app/constants/constants';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  @Input() id = 'default-alert';
  @Input() fade = true;

  lastMessage: string = '';
  messageSubscription: Subscription | null;

  constructor(
    private messageService: NotificationService,
    private _snackBar: MatSnackBar
  ) {
    this.messageSubscription = null;
  }

  ngOnInit(): void {
    // subscribe to new alert notifications
    this.messageSubscription = this.messageService
      .onMessage(ALERT_SERVICE)
      .subscribe((message) => {
        this.lastMessage = message.message ?? 'undefined';
        let cssClass = 'blue';
        switch (message.type) {
          case MessageType.Error:
            cssClass = 'error';
            break;
          case MessageType.Info:
            cssClass = 'info';
            break;
          case MessageType.Success:
            cssClass = 'success';
            break;
          case MessageType.System:
            cssClass = 'blue';
            break;
          case MessageType.Warning:
            cssClass = 'warn';
            break;
        }

        let duration = message.autoClose ? 2000 : undefined;

        if (message.autoClose) {
          duration = 2000;
        }

        this._snackBar.open(this.lastMessage, undefined, {
          horizontalPosition: this.getHorizontalPosition(
            message.horizontalPosition ?? 'center'
          ),
          verticalPosition: this.getVerticalPosition(
            message.verticalPosition ?? 'bottom'
          ),
          duration: duration,
          panelClass: [`${cssClass}-snackbar`],
        });
      });
  }

  ngOnDestroy() {
    this.messageSubscription?.unsubscribe();
  }

  getHorizontalPosition(position: string): MatSnackBarHorizontalPosition {
    switch (position) {
      case 'center':
        return 'center';
      case 'end':
        return 'end';
      case 'start':
        return 'start';
      case 'left':
        return 'left';
      case 'right':
        return 'right';
      default:
        return 'center';
    }
  }

  getVerticalPosition(position: string): MatSnackBarVerticalPosition {
    switch (position) {
      case 'bottom':
        return 'bottom';
      case 'top':
        return 'top';
      default:
        return 'bottom';
    }
  }
}
