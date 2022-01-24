import { AppInfoService } from 'src/app/shared/services/api/app-info.service';
import { instance, mock } from 'ts-mockito';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let appInfoServiceMock: AppInfoService;

  beforeEach(() => {
    appInfoServiceMock = mock(AppInfoService);
    component = new FooterComponent(instance(appInfoServiceMock));
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
