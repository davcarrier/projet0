import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eyes',
  templateUrl: './eyes.component.html',
  styleUrls: ['./eyes.component.scss'],
})
export class EyesComponent implements OnInit {
  private readonly Y_ADJUSTMENT = 100;
  private readonly X_ADJUSTMENT = 100;

  private anchor: HTMLElement;
  private rect: DOMRect;
  private anchorX: number;
  private anchorY: number;

  constructor() {

  }

  public ngOnInit(): void {
    this.anchor = document.getElementById("anchor");
    this.rect = this.anchor.getBoundingClientRect();
    this.anchorX = (this.rect.left + this.rect.width / 2) - this.X_ADJUSTMENT;
    this.anchorY = (this.rect.top + this.rect.height / 2) - this.Y_ADJUSTMENT;

    this.addMouseListener();
  }

  private addMouseListener() {
    document.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const anglDeg = this.angle(mouseX, mouseY, this.anchorX, this.anchorY);

      const eyes = document.querySelectorAll('.eye');
      eyes.forEach((eye: HTMLElement) => {
        eye.style.transform = `rotate(${90 + anglDeg}deg)`
        this.anchor.style.filter = `hue-rotate(${anglDeg}deg)`
      })

    })
  }

  private angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx); //range (-PI, PI)
    const deg = rad * 180 / Math.PI; //rads to degs, range

    return deg;
  }
}
