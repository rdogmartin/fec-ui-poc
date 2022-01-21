import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppInfo } from 'src/app/shared/models/api/model';
import { AppInfoService } from 'src/app/shared/services/api/app-info.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent {
  public appInfo$: Observable<AppInfo>;

  public constructor(private appInfoService: AppInfoService) {
    this.appInfo$ = this.appInfoService.getAppInfo();
  }
}
