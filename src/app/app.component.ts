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
    $('.toggle').click(event, function (event: any) {
      $(event.target).parent().parent().parent().toggleClass('selected').siblings().toggleClass('hide');
    })
  }
}
