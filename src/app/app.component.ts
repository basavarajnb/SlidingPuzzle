import { Component, ViewChild, OnInit, HostListener, HostBinding } from '@angular/core';
import { PuzzleService } from "app/services/puzzle.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sliding Puzzle';
  @ViewChild("container") container;

  constructor(public puzzleService: PuzzleService) {

  }

  ngOnInit(): void {
    this.puzzleService.height = this.container.nativeElement.offsetHeight;
    this.puzzleService.width = this.container.nativeElement.offsetWidth;
    if (this.puzzleService.width > this.puzzleService.height) {
      this.puzzleService.puzzleBoxSize = this.puzzleService.height - 50;
      this.puzzleService.boxSize = Math.floor((this.puzzleService.height - 50) / 3);
    }
    else {
      this.puzzleService.puzzleBoxSize = this.puzzleService.width - 50;
      this.puzzleService.boxSize = Math.floor((this.puzzleService.width - 50) / 3);
    }
    this.puzzleService.initilizeBoxValues(0);
  }

  @HostListener('window:resize', ['$event.target'])
  onResize() {
    this.resizeWorks();
  }

  private resizeWorks(): void {
    this.puzzleService.height = this.container.nativeElement.offsetHeight;
    this.puzzleService.width = this.container.nativeElement.offsetWidth;
    if (this.puzzleService.width > this.puzzleService.height) {
      this.puzzleService.puzzleBoxSize = this.puzzleService.height - 50;
      this.puzzleService.boxSize = Math.floor((this.puzzleService.height - 50) / 3);
    }
    else {
      this.puzzleService.puzzleBoxSize = this.puzzleService.width - 50;
      this.puzzleService.boxSize = Math.floor((this.puzzleService.width - 50) / 3);
    }
    this.puzzleService.initilizeBoxValues(1);    
  }

}
