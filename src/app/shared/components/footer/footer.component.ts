import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AppInfo } from '../../models/api/model';
import { AppInfoService } from '../../services/api/app-info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public appInfo$: Observable<AppInfo>;

  public constructor(private appInfoService: AppInfoService) {
    this.appInfo$ = this.appInfoService.getAppInfo();
  }
}
