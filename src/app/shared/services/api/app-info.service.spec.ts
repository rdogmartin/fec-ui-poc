import { HttpClient } from '@angular/common/http';
import { instance, mock } from 'ts-mockito';
import { AppInfoService } from './app-info.service';

describe('AppInfoService', () => {
  let service: AppInfoService;
  let httpClientMock: HttpClient;

  beforeEach(() => {
    httpClientMock = mock(HttpClient);
    service = new AppInfoService(instance(httpClientMock));
  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });
});
