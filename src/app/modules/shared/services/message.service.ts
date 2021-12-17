import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ALERT_SERVICE } from '../../../constants/constants';
import { Message, MessageType } from '../models/message';

export const NOTIFICATION_SERVICE = "NOTIFICATION_SERVICE"

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  notifications: Subject<Message>


  constructor() {
    this.notifications = new Subject<Message>();
  }

  onMessage(service: string = NOTIFICATION_SERVICE): Observable<Message> {
    return this.notifications
      .asObservable()
      .pipe(filter(x => x.service == service));
  }

  sendPayload(payload: any) {
    const message: Message = {
      id: 'test',
      type: MessageType.System,
      payload: payload
    }

    this.notifications.next(message)
  }

  success(message: string, autoClose: number = 2000) {
    let sendMessage: Message = {
      id: "SUCCESS_ALERT",
      type: MessageType.Success,
      autoClose: autoClose,
      message: message,
      service: ALERT_SERVICE
    }

    this.notifications.next(sendMessage)
  }

  error(message: string, autoClose: number = 2000) {
    let sendMessage: Message = {
      id: "ERROR_ALERT",
      type: MessageType.Error,
      autoClose: autoClose,
      message: message,
      service: ALERT_SERVICE
    }

    this.notifications.next(sendMessage)
  }

  warn(message: string, autoClose: number = 2000) {
    let sendMessage: Message = {
      id: "WARN_ALERT",
      type: MessageType.Warning,
      autoClose: autoClose,
      message: message,
      service: ALERT_SERVICE
    }

    this.notifications.next(sendMessage)
  }

  info(message: string, autoClose: number = 2000) {
    let sendMessage: Message = {
      id: "INFO_ALERT",
      type: MessageType.Info,
      autoClose: autoClose,
      message: message,
      service: ALERT_SERVICE
    }

    this.notifications.next(sendMessage)
  }

  sendNotification(message: Message) {
    this.notifications.next(message)
  }
}
