import { User, UsersService } from './users.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('UsersService', () => {
  let service: UsersService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new UsersService(httpClientSpy);
  });

  it('should be created', () => {

    const expectedUsers: User[] =
      [
        { id: 1, firstname: 'fritz', lastname: 'Müller', age: 21, email: 'fritz@puzzle.ch' },
        { id: 1, firstname: 'Franz', lastname: 'Müller', age: 24, email: 'franz@puzzle.ch' }
      ];

    httpClientSpy.get.and.returnValue(of(expectedUsers));

    expect(service).toBeTruthy();
  });
});
