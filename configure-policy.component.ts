import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configure-policy',
  templateUrl: './configure-policy.component.html',
  styleUrls: ['./configure-policy.component.scss']
})
export class ConfigurePolicyComponent implements OnInit {

  heading1="ADD POLICIES";
  heading2="POLICIES DESCRIPTION";

  policiesname="";
  policiesid="";
  policiesdescription="";
  createdby="";

  policieslist:any=[]
  // editpoliciesData: any;
  buttonName="submit";
  editpoliciesObj: any;
  editpoliciesObjindex: any;
  editpoliciesObjIndex: any;


  constructor() { 
    console.log('policieslist lenght',this.policieslist);
  }

  ngOnInit(): void {
  } 

  Submit(){
    let policiesObj={
      policiesname:this.policiesname,
      policiesid:this.policiesid,
      policiesdescription:this.policiesdescription,
      createdby:this.createdby
    }
    localStorage.getItem('policiesList')
    if(this.buttonName=="submit"){
     this.policieslist.push(policiesObj)
    }else{
       this.policieslist[this.editpoliciesObjIndex]=policiesObj;
       this.buttonName="submit";
    }

    localStorage.setItem('key_name','rani') 

    this.Cancel();
    console.log('policieslist',this.policieslist);
   
   
  }

//   editSubmit(){
//   console.log('editpoliciesData',this.editpoliciesData)
//   let policiesObj={
//     policiesname:this.policiesname,
//     policiesid:this.policiesid,
//     policiesdescription:this.policiesdescription,
//     createdby:this.createdby
//   }
//  this.policieslist[this.editpoliciesData]=policiesObj;
//   }

  Cancel(){
    this.policiesname="";
    this.policiesid="";
    this.policiesdescription="";
    this.createdby="";
  }
  
  editpolicies(index: any){
    this.buttonName="Update"
    this.editpoliciesObj=this.policieslist[index];
    this.editpoliciesObjIndex=index
    this.policiesname=this.editpoliciesObj.policiesname;
    this.policiesid=this.editpoliciesObj.policiesid;
    this.policiesdescription=this.editpoliciesObj.policiesdescription;
    this.createdby=this.editpoliciesObj.createdby;

  // this.editpoliciesData=item;
  // this.editpoliciesData=index;
  // this.policiesname=item.policiesname;
  // this.policiesid=item.policiesid;
  // this.policiesdescription=item.policiesdescription;
  // this.createdby=item.createdby;

  }

deletepolicies(index: any){
  console.log('deletepolicies',index,)
  this.policieslist.splice(index,1)
}

  }
  
 
