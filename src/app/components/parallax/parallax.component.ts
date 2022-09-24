import { AfterViewInit, Component, destroyPlatform, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Controller, Scene } from 'scrollmagic';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss'],
})
export default class ParallaxComponent implements OnInit, AfterViewInit {
  controllers: Controller[];
  @ViewChildren('test') divs: QueryList<ElementRef<HTMLDivElement>> = new QueryList;

  myDivs = [
    {
      id: 0,
      title: 'FIRST',
      className: 'red'
    },
    {
      id: 1,
      title: 'SECOND',
      className: 'turquoise'
    },
    {
      id: 2,
      title: 'THIRD',
      className: 'yellow'
    },
    {
      id: 3,
      title: 'FOURTH',
      className: 'orange'
    }
  ]

  constructor() {
    // // Ex 1
    // let controller1 = new Controller();

    // Ex 2
    let controller2 = new Controller({
      globalSceneOptions: {
        triggerHook: 'onLeave',
      }
    });

    // Ex 3
    // let controller3 = new Controller();

    this.controllers = [
      // controller1,
      controller2,
      // controller3
    ]
  }

  public ngOnDestroy(): void {
    //Just to be sure
    this.controllers.map(c => c.destroy(true));
  }

  public ngAfterViewInit(): void {
    // Ex 2
    this.divs.map((d) => {
      console.log(d);
      new Scene({triggerElement: d.nativeElement})
      .setPin(d.nativeElement, {pushFollowers: false})
      .addTo(this.controllers[0]);
    });

  }

  public ngOnInit(): void {
    // Ex 1
    //   new Scene({
    //   triggerElement: '#trigger1',
    //   duration: 500,
    // }).setPin('#pin1')
    // .addTo(this.controllers[0]);

    //   new Scene({
    //   triggerElement: '#trigger2'
    // }).setPin('#pin2')
    // .addTo(this.controllers[0]);
  }
}
