import { HttpClient } from '@angular/common/http';
import { firstValueFrom, of } from 'rxjs';
import { anything, instance, match, mock, verify, when } from 'ts-mockito';

import { AppInfo } from '../../../shared/models/api/model';
import { AppInfoRepository } from '../../../shared/repositories/app-info.repository';
import { AppInfoService } from './app-info.service';

describe('AppInfoService', () => {
  let service: AppInfoService;
  let httpClientMock: HttpClient;
  let appInfoRepository: AppInfoRepository;

  beforeEach(() => {
    httpClientMock = mock(HttpClient);
    appInfoRepository = new AppInfoRepository();
    service = new AppInfoService(instance(httpClientMock), appInfoRepository);
  });

  describe('getAppInfo()', () => {
    let expected: AppInfo;

    beforeEach(() => {
      expected = {
        versionNumber: '0.1.0',
      };
      when(httpClientMock.get(anything())).thenReturn(of(expected));
    });

    it('should NOT query the API when the item is already in cache', async () => {
      await firstValueFrom(service.getAppInfo()); // Invokes the HTTP call
      await firstValueFrom(service.getAppInfo()); // Should return from cache
      verify(httpClientMock.get(match('/api/appinfo'))).once(); // Fails with a message saying there were two HTTP calls
    });
  });
});
