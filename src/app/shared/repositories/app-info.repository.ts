import { Injectable } from '@angular/core';
import { createState, Store } from '@ngneat/elf';
import { selectActiveEntity, setActiveId, setEntities, withActiveId, withEntities } from '@ngneat/elf-entities';
import { createRequestsCacheOperator, updateRequestCache, withRequestsCache } from '@ngneat/elf-requests';
import { filter, map } from 'rxjs';
import { AppInfo } from 'src/app/shared/models/api/model';

@Injectable({
  providedIn: 'root',
})
export class AppInfoRepository {
  public readonly appInfoId = 'appInfo';
  private readonly state = createState(
    withEntities<AppInfo, 'versionNumber'>({ idKey: 'versionNumber' }),
    withRequestsCache<typeof this.appInfoId>(),
    withActiveId(),
  );
  private readonly store = new Store({ name: this.appInfoId, state: this.state.state, config: this.state.config });
  public skipWhileAppInfosCached = createRequestsCacheOperator(this.store);

  /** Gets the active AppInfo from the store. Dev note: Be sure the object has been inserted into the store with
   *  setActiveAppInfo() prior to accessing this property. */
  public readonly activeAppInfo$ = this.store.pipe(selectActiveEntity()).pipe(
    filter((appInfo) => !!appInfo),
    map((appInfo) => appInfo as AppInfo),
  );

  /** Insert the AppInfo into the store, overwriting any existing items. The data exist only in the browser's
   *  memory and is released when the user navigates to another app or does a browser refresh.
   */
  public setActiveAppInfo(appInfo: AppInfo) {
    this.store.update(updateRequestCache(this.appInfoId), setEntities([appInfo]), setActiveId(appInfo.versionNumber));
  }
}
