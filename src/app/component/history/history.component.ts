import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { HistoryAPI } from "src/app/models/historyapi.model";
import { ResultAPI } from "src/app/models/resultapi.model";
import { HistoryAPIService } from "src/app/services/historyapi.service";

@Component({

    templateUrl: './history.component.html',
})
export class HistoryComponent implements OnInit {

    id: any;
    history: any;
    histories: HistoryAPI[];
    result: any[];

    constructor(
        private historyAPIService: HistoryAPIService,

    ) {

    }

    ngOnInit() {

        this.tailaidshistory();
    }
    tailaidshistory() {
        this.historyAPIService.findAll().then(
            res => {
                this.histories = res as HistoryAPI[];
                console.log(this.histories);
                this.result = this.histories;
            },
            err => {
                console.log(err);
            }
        )
    }

    searchIDHistory(evn: any) {

        var id = evn.target.value;
        console.log(id);
        if (id == 0 || id == null) {
            this.result = this.histories
        }
        else {
            this.result = this.histories.filter(b => b.id.toString().toLowerCase().includes(id));
        }
    }

}