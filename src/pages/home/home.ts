import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AddPage } from '../add/add';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage) {
    // this.name = navParams.get('name');
    this.storage.get('name').then((val) => {
      this.name = val;
    });
  }
  add(event){
    this.navCtrl.push(AddPage, {
      
    });
  }
}
