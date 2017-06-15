import { Injectable } from '@angular/core';


// PuzzleService handles all the operations to be done with the Puzzle boxes.
@Injectable()
export class PuzzleService {
    puzzleBoxSize: number;
    height: number;
    width: number;

    boxSize: number;
    boxes: Array<Box> = [];

    // This method is to initialise the boxes with the top, left and index values. Top, left are used in styles for positioning this box
    initilizeBoxValues(num) {
        let i = 0;
        let j = 0;
        let index = 0;
        if (num === 0) {
            this.boxes = [];
            for (i = 0; i < 3; i++) {
                for (j = 0; j < 3; j++) {
                    this.boxes.push(new Box(index, ++index, this.boxSize * i, this.boxSize * j));
                }
            }
        }
        else {
            this.boxes.forEach((box, index) => {
                let j = box.arrayIndex % 3;
                let i = Math.floor(box.arrayIndex / 3);
                box.top = this.boxSize * i;
                box.left = this.boxSize * j;
            });
        }
    }

    // This method is to move the box if they can be moved adjacent blank space, else no transition.
    moveBox(box: Box) {
        let blank = this.boxes[8];
        let boxItem = this.boxes[box.index - 1];
        if (boxItem.top === blank.top) {
            // If blank and current boxes are in same row, check if they are adjacent (i.e difference between left postition of each box should be box size)
            if (boxItem.left - blank.left === this.boxSize || blank.left - boxItem.left === this.boxSize) {
            }
            else {
                // Blank and current(clicked) boxes are not adjacent
                return false;
            }
        }
        else if (boxItem.left === blank.left) {
            // If blank and current boxes are in same column,
            if (boxItem.top - blank.top === this.boxSize || blank.top - boxItem.top === this.boxSize) {
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }

        let currentBoxTop = boxItem.top;
        let currentBoxLeft = boxItem.left;
        let aIndex = boxItem.arrayIndex;

        boxItem.top = blank.top;
        boxItem.left = blank.left;
        boxItem.arrayIndex = blank.arrayIndex;
        blank.top = currentBoxTop;
        blank.left = currentBoxLeft;
        blank.arrayIndex = aIndex;

        return true;
    }
}

export class Box {
    arrayIndex: number;
    index: number;
    top: number;
    left: number;
    constructor(aIndex, index, top, left) {
        this.arrayIndex = aIndex;
        this.index = index;
        this.top = top;
        this.left = left;
    }
}