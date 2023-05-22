import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { createBook } from '../store/books.action';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from 'src/app/shared/store/app-state';
import { appSelector } from 'src/app/shared/store/app.selector';
import { setAPIStatus } from 'src/app/shared/store/app.action';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  form!:FormGroup
  id!: number;
  constructor(
    private fb:FormBuilder,
    private store:Store,
    private location:Location,
    private router:Router,
    private appState:Store<AppState>,
    private activatedRoute:ActivatedRoute
    ){

      this.activatedRoute.params.subscribe(res=>{
        this.id=res['id']
      })
    }

  ngOnInit() {
    this.formInit()
  }

  formInit(){
    this.form=this.fb.group({
      id:Math.random(),
      name:['test',Validators.required],
      author:['Arslan Malik',Validators.required],
      cost:[100,Validators.required]

    })
  }
  back(){
    this.location.back()
  }
  save() {

    if(this.form.valid){
      this.store.dispatch(createBook({paylaod:{...this.form.value}}))
      const myApiStatus$=this.store.pipe(select(appSelector))
      myApiStatus$.subscribe(data=>{
        if(data.apiStatus==='success'){
          this.appState.dispatch(setAPIStatus({apiStatus:{apiResponseMessage:'',apiStatus:''}}))
          this.router.navigate(['/'])
        }
      })
    }
    else{
      console.log('form not valid')
    }
  }

}
