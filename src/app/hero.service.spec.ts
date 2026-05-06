import { inject, TestBed } from '@angular/core/testing';
import { HeroService } from './hero.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MessageService } from './message.service';

describe('HeroService', () => {
  let mockMessageService;
  let httpTestingController: HttpTestingController;
  let service: HeroService;

  beforeEach(() => {
    mockMessageService = jasmine.createSpyObj(['add']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HeroService,
        { provide: 'MessageService', useValue: mockMessageService },
      ],
    });

    // httpTestingController = TestBed.inject(HttpTestingController);
    // let messageService = TestBed.inject(MessageService);
    // service = TestBed.inject(HeroService);
  });

  describe('getHero', () => {
    it('should call get with the correct URL', inject(
      [HeroService, HttpTestingController],
       (service: HeroService, controller: HttpTestingController) => {
       //call getHero
       service.getHero(4);

       //test that url was correct
      //  controller.

    }));
  });
});
