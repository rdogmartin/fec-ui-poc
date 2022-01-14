import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AppInfo } from '../../models/api/model';

@Injectable({
  providedIn: 'root'
})
export class AppInfoService {

  public constructor(
    private http: HttpClient,
  ) {}

  public getAppInfo(): Observable<AppInfo> {
    const url = 'https://localhost:7107/api/appinfo';

    return this.http.get<AppInfo>(url);
  }
}
