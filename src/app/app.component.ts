import { Component } from '@angular/core';
import { event } from 'jquery';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  ngOnInit() {
    $('.box > div').click(event, function (event: any) {
      console.log(event.target);
      $(event.target).toggleClass('selected').siblings().toggleClass('hide');
    })
  }
}
