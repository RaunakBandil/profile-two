import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';
import {SelectionModel} from '@angular/cdk/collections';

interface Category {
  value: string;
  viewValue: string;
  image: string;
}






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: string[] = ['Mr', 'Mrs', 'Ms',];
  Relocate: string[] = ['Yes','No'];
  age: string[] =['20','21','22','23','24','25','26','27','28','29','30','31']
  languages: string[] = ['English', 'Hindi','Other'];
  spaking: string[] = ['Expert', 'Beginner', 'Fluently'];
  languagess: string[] = ['Portugese', 'Hindi','English'];
  Locations: string[] =['India, Kolkata','U.P.', 'M.P.'];
  Salarys :string[] =['Currency','Money', 'Other'];
  phones:string[] =['../assets/image/flag.png + 91']


  categories: Category[] = [
    {value: '1', viewValue: 'Laravel', image: 'https://www.itsolutionstuff.com/category-images/laravel.svg'},
    {value: '2', viewValue: 'Angular', image: 'https://www.itsolutionstuff.com/category-images/angular.svg'},
    {value: '3', viewValue: 'Bootstrap', image: 'https://www.itsolutionstuff.com/category-images/bootstrap.svg'},
    {value: '4', viewValue: 'JS', image: 'https://www.itsolutionstuff.com/category-images/javascript.svg'},
    {value: '5', viewValue: 'Git', image: 'https://www.itsolutionstuff.com/category-images/git.png'}
  ];


  constructor() { }

  ngOnInit(): void {
  }



}
