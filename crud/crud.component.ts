import { Component, OnInit } from '@angular/core';
import { DataoperationsService } from '../services/dataoperations.service';
import { Student } from '../classes/student';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  students:Student[] = [];
  stud:Student = {
    name:"",
    email:"",
    mobile:0,
    city:""
  };
  pos:number;


  constructor(private data:DataoperationsService) { }

  ngOnInit() {

      this.students = this.data.getAll();
  }

  addStudent(){

      this.data.insert(this.stud);
  }

  deleteStudent(pos:number){

      this.data.delete(pos);
  }

  editStudent(pos:number, st:Student){

      this.stud = st;
      this.pos = pos;

  }

  updateStudent(){

      this.data.update(this.stud,this.pos);
  }
}
