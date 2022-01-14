import { AppInfoService } from 'src/app/shared/services/api/app-info.service';
import { instance, mock } from 'ts-mockito';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let appInfoServiceMock: AppInfoService;

  beforeEach(() => {
    appInfoServiceMock = mock(AppInfoService);
    component = new DashboardComponent(instance(appInfoServiceMock));
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
