import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit, OnChanges {


  @Input()
  maxNota: number = 5;
  @Input()
  selectedStar: number = 0;
  previousSelection: number = 0;
  maxNotaArray: any = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['selectedStar'].firstChange){
      this.previousSelection = this.selectedStar;
    }
  }

  ngOnInit(): void {
    this.previousSelection = this.selectedStar;
    this.maxNotaArray = Array(this.maxNota).fill(0);
  }


  @Output()
  onRating: EventEmitter<number> = new EventEmitter<number>();


  handleMouseEnter(index: number) {
    this.selectedStar = index + 1;
  }

  handleMouseLeave(): void {
    if (this.previousSelection !== 0) {
      this.selectedStar = this.previousSelection;
    } else {
      this.selectedStar = 0;
    }
  }


  rating(index: number): void {
    this.selectedStar = index + 1;
    this.previousSelection = this.selectedStar;
    this.onRating.emit(this.selectedStar);
  }




}
