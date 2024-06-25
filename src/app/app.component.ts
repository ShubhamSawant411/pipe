import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  arr = [
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae enim dicta libero sapiente quam explicabo dolores dignissimos blanditiis aliquam, similique quos! Placeat, facilis exercitationem. Dolor nostrum maiores magnam qui quo!',
    'Hello this is a dummy text to check the functionality of the pipe',
    'Short text'
  ];
  ngOnInit(): void {
    setTimeout(()=>{
      this.arr[2] = 'Dummy Text loaded after 3 second'

    },2000)

  }
  title = 'pipe';
}
