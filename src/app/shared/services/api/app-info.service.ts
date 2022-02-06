import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, switchMapTo, tap } from 'rxjs';
import { AppInfo } from 'src/app/shared/models/api/model';
import { AppInfoRepository } from 'src/app/shared/repositories/app-info.repository';

@Injectable({
  providedIn: 'root',
})
export class AppInfoService {
  public constructor(private http: HttpClient, private appInfoRepository: AppInfoRepository) {}

  /** Returns information about the currently running application. If the information does not exist in
   * the browser's cache, it is retrieved from the server and inserted into the cache prior to returning.
   */
  public getAppInfo(): Observable<AppInfo> {
    const url = 'https://localhost:7107/api/appinfo';

    return this.http.get<AppInfo>(url).pipe(
      tap((appInfo) => this.appInfoRepository.setActiveAppInfo(appInfo)),
      this.appInfoRepository.skipWhileAppInfosCached(this.appInfoRepository.appInfoId, { returnSource: of(null) }), // Needs returnSource or else control won't pass to next line when cache is populated
      switchMapTo(this.appInfoRepository.activeAppInfo$),
      catchError(() => {
        return of({ versionNumber: '<unknown>' } as AppInfo);
      }),
    );
  }
}
