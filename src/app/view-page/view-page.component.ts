import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { AnimationOptions } from 'ngx-lottie';
import Swal from 'sweetalert2';
import { ViewServiceService } from '../view-service.service';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.scss']
})

export class ViewPageComponent implements OnInit {
  fieldData: any; fieldCount = [];
  counter: number = 1;
  @ViewChild('div')div:ElementRef;
  @ViewChild('mg')mg:ElementRef;
  org:boolean=false;
  location:boolean=false;
  searchableArray:Array<any>=[];
  people:boolean=false;
  findQuery:any=null;
  options: AnimationOptions = {
    path: 'https://assets7.lottiefiles.com/packages/lf20_aBYmBC.json',
  };
  searchForm:FormGroup;
  btnClicked:boolean=false;
  searchQuery: string;
  choosenType:string="";
  enTdata:{people:Array<any>,location:Array<any>,org:Array<any>}={people:[],location:[],org:[]};
  constructor(public vs: ViewServiceService,
    public el:ElementRef,
    public toast:ToastController,public rend:Renderer2) {

    this.searchForm = new FormGroup({
        search:new FormControl("",Validators.required)
    })
   }

  ngOnInit(): void {
  }


  

    


  onChange(event){


  }
  onSearch(f){
    this.btnClicked=true
    console.log(f);
    this.rend.setStyle(this.div.nativeElement,"margin-top",'20px');
    this.rend.setStyle(this.mg.nativeElement,"zoom",'0.5');
    this.rend.setStyle(this.div.nativeElement,"margin-bottom",'10px');
    this.rend.setStyle(this.div.nativeElement,"height",'unset');

    if (f.value.searchQuery==null||f.value.searchQuery==""){    this.btnClicked=false;
      return this.showToast("Please Enter Text")}
    this.vs.sm=null;

    this.vs.getResults(this.searchQuery).then((res:any)=>{
      this.btnClicked=false;
      console.log(res)
      res.value.forEach((value:any) => {
        let people=   value.people.map((itm)=>{return {entity:'people',item:itm}});
        let org=   value.organizations.map((itm)=>{return {entity:'org',item:itm}});
        let location=   value.locations.map((itm)=>{return {entity:'loc',item:itm}});
          setTimeout(() => {
            console.log(people);
          }, 1000);
          this.enTdata.people.push(...people);
          this.enTdata.location.push(...location);
          this.enTdata.org.push(...org);

        });
       setTimeout(() => {
          console.log(this.enTdata)
        }, 2000)
    })
  }

  async showToast(msg: string) {
    const text= msg;
    const toast = await this.toast.create({
      message: text,

      duration: 2000,
      animated:true,
      position: 'bottom',
    }).then(tst=>tst.present());
  }
  onChangeBox(type,event){
    let findQuery:Array<any>=[];

    if(this.org){
      findQuery.push(...this.enTdata.org);
    }
    if(this.location){
      findQuery.push(...this.enTdata.location);

    }
    if(this.people){
      findQuery.push(...this.enTdata.people);

    }
    this.findQuery=findQuery;
  
    


  }
  onChangeSelectiin(event){
  console.log(event.target.checked,event.value,event.target.value)
  
    let a=this.searchableArray;
    if(event.target.checked){
        a.push(event.target.value);
    }else{
     
          const b= a.indexOf(event.target.value);
      if (a.indexOf(event.target.value)!=null){
        a.splice(b,1);
      }
    }

    this.searchableArray=a;
    console.log(this.searchableArray);
  }
}
