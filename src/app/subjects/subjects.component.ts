import { Component, OnInit } from '@angular/core';
import { Subject } from './subject.model';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  sub: Subject;
  subjects: Subject[] = [
    new Subject('პროგრამირება 1', 0, 'ირმა დავითაშვილი', 4, 'დავალებები: 40 / შუალედური : 30 (2x) / ფინალური : 30'),
    new Subject('ფიზიკა 3', 0, 'ზურაბ ჯიბუტი', 4, 'დავალებები: 40 / შუალედური : 30 (2x) / ფინალური : 30'),
    new Subject('ფილოსოფია', 0, 'თორნიკე ქოროღლიშვილი', 4, 'სემინარში მონაწილეობა : 20 / საშინაო დავალება : 20 / პრეზენტაცია : 10 / საკონტროლო წერა : 20 / ფინალური :30')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  delete(index){
    this.subjects.splice(index);
  }

  reciveClick($event){
    this.sub = $event;
    this.subjects.push(this.sub);
    this.sub = null;
  }
}
