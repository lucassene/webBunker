import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Entry, ValidationEntry } from '../../models/entry';
import { Evaluation } from '../../models/evaluation';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'validate-list',
  templateUrl: 'validate-list.component.html',
})

export class ValidateListComponent implements OnInit{

  constructor(private dataService: DataService){};

  shownIcon = '';
  likeIcon = 'ic_like.png';
  dislikeIcon = 'ic_dislike.png';
  errorIcon = 'ic_error.png';
  vEntries: ValidationEntry[] = [];
  opacity = '1.0';
  isChecked = true;

  membership: string;

  @Input() entries;

  @Output() checkChanged = new EventEmitter<boolean>();
  @Output() rateChanged = new EventEmitter<Evaluation>();
  @Output() removeMember = new EventEmitter<string>();

  ngOnInit(){
    this.membership = this.dataService.getLoggedMember();
    for (let i=0;i<this.entries.length;i++){
      let item = new ValidationEntry(
        this.entries[i],
        '',
        '1.0',
        0
      );
      this.vEntries.push(item);
      if (this.entries[i].member.membership != this.membership){
        this.rateChanged.emit(new Evaluation(this.entries[i].member.membership, 0));
      }
    }
    console.log(this.vEntries);
  }

  onClick(entry: ValidationEntry){
    if (entry.entry.member.membership !== this.membership && this.isChecked){
      if (entry.icon === ''){
        entry.icon = this.likeIcon;
        this.rateChanged.emit(new Evaluation(entry.entry.member.membership, 1));
      } else if (entry.icon === this.likeIcon){
        entry.icon = this.dislikeIcon;
        this.rateChanged.emit(new Evaluation(entry.entry.member.membership, -1));
      } else if (entry.icon === this.dislikeIcon){
        entry.icon = this.errorIcon;
        entry.opacity = '0.25';
        this.removeMember.emit(entry.entry.member.membership);
      } else {
        entry.icon = '';
        entry.opacity = '1.0';
        this.rateChanged.emit(new Evaluation(entry.entry.member.membership, 0));
      }
      let count = 0;
      for (let i=0;i<this.vEntries.length;i++){
        if (this.vEntries[i].opacity == '1.0'){
          count++;
        }
      }
      if (count <= 1){
        this.checkChanged.emit(false);
      } else { this.checkChanged.emit(true) }
    }
  }

  onCheckBoxChange(){
    this.isChecked = !this.isChecked;
    this.checkChanged.emit(this.isChecked);
    if (this.isChecked){
      this.opacity = '1.0'
    } else { this.opacity = '0.25'}
  }

}
