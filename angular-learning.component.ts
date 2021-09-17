import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-learning',
  templateUrl: './angular-learning.component.html',
  styleUrls: ['./angular-learning.component.scss']
})
export class AngularLearningComponent implements OnInit {
  memberName:any;
  memberMobile:any;

  memberlist:any=[]
  editMemberData: any;
  editIndex: any;

  constructor() {
   }

  ngOnInit(): void {
  }

  submit(){
      let memberObj={
        memberName:this.memberName,
        memberMobile:this.memberMobile
      }

      this.memberlist.push(memberObj)
  }

  submitEdit(){
    let newData={
      memberName:this.memberName,
      memberMobile:this.memberMobile
    }
    this.memberlist[this.editIndex]=newData;
  }
  
  
  clear(){
    this.memberName="";
    this.memberMobile="";
  }

  editMember(index: any,member:any){
    this.editMemberData=member;
    this.editIndex=index;
    this.memberName=member.memberName;
    this.memberMobile=member.memberMobile;

  }
  

  deleteMember(index: any){
    this.memberlist.splice(index,1)
  }
}
