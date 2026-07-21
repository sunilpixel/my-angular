import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  users = [
    {
      id: 101,
      name: "Sunil",
    },
    {
      id: 102,
      name: "Rahul",
    },
    {
      id: 103,
      name: "Admin",
    },
  ];
  constructor() {}

  ngOnInit() {}
}
