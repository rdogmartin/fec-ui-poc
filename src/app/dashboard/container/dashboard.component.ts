import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppInfo } from 'src/app/shared/models/api/model';
import { AppInfoService } from 'src/app/shared/services/api/app-info.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public appInfo$: Observable<AppInfo>;

  public constructor(private appInfoService: AppInfoService) {
    this.appInfo$ = this.appInfoService.getAppInfo();
  }
}
