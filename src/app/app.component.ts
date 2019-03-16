import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  testData = [
    {
      data: "test1",
      children: [
        {
          data: "test11",
          children: [
            {
              data: "test111",
              children: []
            }
          ]
        }
      ]
    },
    {
      data: "test2",
      children: [
        {
          data: "test12",
          children: [
            {
              data: "test112",
              children: []
            }
          ]
        }
      ]
    },
    {
      data: "test3",
      children: [
        {
          data: "test13",
          children: [
            {
              data: "test113",
              children: []
            }
          ]
        },
        {
          data: "test23",
          children: [
            {
              data: "test123",
              children: []
            }
          ]
        }
      ]
    }
  ]
}
