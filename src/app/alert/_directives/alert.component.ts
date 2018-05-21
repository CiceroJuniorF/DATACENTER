import { Component, OnInit } from '@angular/core';

import { Alert, AlertType } from '../_models/index';
import { AlertService } from '../_services/index';
import { timer } from 'rxjs/observable/timer';
import { take, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { defer } from 'rxjs/observable/defer';


@Component({
    moduleId: module.id,
    selector: 'alert',
    templateUrl: 'alert.component.html'
})

export class AlertComponent {
    alerts: Alert[] = [];
    constructor(private alertService: AlertService) {
        setInterval(() => { 
            if(this.alerts.length > 0){
                this.removeAlert(this.alerts[0]);
            }
        }, 6000);
    }

    ngOnInit() {
        this.alertService.getAlert().subscribe((alert: Alert) => {
            if (!alert) {
                // clear alerts when an empty alert is received
                this.alerts = [];
                return;
            }

            // add alert to array
            this.alerts.push(alert);            
        });
    }

    removeAlert(alert: Alert) {
        this.alerts = this.alerts.filter(x => x !== alert);
    }

    cssClass(alert: Alert) {
        if (!alert) {
            return;
        }

        // return css class based on alert type
        switch (alert.type) {
            case AlertType.Success:
                return 'alert alert-success';
            case AlertType.Error:
                return 'alert alert-danger';
            case AlertType.Info:
                return 'alert alert-info';
            case AlertType.Warning:
                return 'alert alert-warning';
        }
    }

    startCloseTimer(alert: Alert) {
        const interval = 1000;
        const duration = 10 * 1000;
        return Observable.timer(0, 10 * 1000000)
            .finally(() => console.log("Fecho Porra"))
            .map(value => alert);

    }
}