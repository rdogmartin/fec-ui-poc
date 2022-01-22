import { HttpClient } from '@angular/common/http';
import { instance, mock } from 'ts-mockito';
import { AppInfoRepository } from '../../repositories/app-info.repository';
import { AppInfoService } from './app-info.service';

describe('AppInfoService', () => {
  let service: AppInfoService;
  let httpClientMock: HttpClient;
  let appInfoRepositoryMock: AppInfoRepository;

  beforeEach(() => {
    httpClientMock = mock(HttpClient);
    appInfoRepositoryMock = mock(AppInfoRepository);
    service = new AppInfoService(instance(httpClientMock), instance(appInfoRepositoryMock));
  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });
});
