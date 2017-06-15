import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { PuzzleService, Box } from "app/services/puzzle.service";

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
export class PuzzleComponent implements OnInit {
  isBoxNotMovable: boolean = false;

  @ViewChild("boxContainer") boxContainer;

  constructor(public puzzleService: PuzzleService) { }

  ngOnInit() {
  }

  moveBox(boxItem: Box) {
    this.isBoxNotMovable = false;
    let movable = this.puzzleService.moveBox(boxItem);
    if (!movable) {
      this.isBoxNotMovable = true;
      setTimeout(this.unsetIsBoxNotMovable,1000);
    }
  }

  unsetIsBoxNotMovable = () => {
        this.isBoxNotMovable = false;
  };
}
