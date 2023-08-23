import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movies';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
title :string = 'Top 3 Bollywood Movies';
movies:Movie[]=[
  { title: '3 Idiats', director:'Rajkumar',cast:'Amir',releaseDate:2019},
  { title: 'Tumbad', director:'Rahil',cast:'Rahi',releaseDate:2020},
  { title: 'Kantara', director:'Rishab',cast:'Rishab',releaseDate:2022},
]
favSongs = [
  'VedTuzhe','Ved Lagale', 'Dunaya Banane Vale', 'Radha hi bavari'
]
  constructor() { }

  ngOnInit() {
   
    
  }

}
