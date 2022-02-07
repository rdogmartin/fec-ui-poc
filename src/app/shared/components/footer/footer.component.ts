import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AppInfo } from '../../../shared/models/api/model';
import { AppInfoService } from '../../../shared/services/api/app-info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public readonly appInfo$: Observable<AppInfo>;

  public constructor(private appInfoService: AppInfoService) {
    this.appInfo$ = this.appInfoService.getAppInfo();
  }
}
