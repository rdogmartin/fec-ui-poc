import { AppInfoService } from 'src/app/shared/services/api/app-info.service';
import { instance, mock } from 'ts-mockito';

import { ReportsComponent } from './reports.component';

describe('ReportsComponent', () => {
  let component: ReportsComponent;
  let appInfoServiceMock: AppInfoService;

  beforeEach(() => {
    appInfoServiceMock = mock(AppInfoService);
    component = new ReportsComponent(instance(appInfoServiceMock));
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
