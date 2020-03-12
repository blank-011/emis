import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from '../subject.model';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {
  subjectName: string;
  grade: number;
  teacher: string;
  credit: number;
  comments: string;
  showContent: boolean = true;
  currentSubject: Subject;

  @Output() clickEvent = new EventEmitter<Subject>();
  constructor() { }

  ngOnInit(): void {
  }

  addToList(){
    this.currentSubject = new Subject(this.subjectName, this.grade, this.teacher, this.credit, this.comments);
    this.showContent = !this.showContent;
    this.clickEvent.emit(this.currentSubject);    
  }
}
