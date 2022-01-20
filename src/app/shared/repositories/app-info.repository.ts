import { Injectable } from '@angular/core';
import { createState, Store } from '@ngneat/elf';
import { selectActiveEntity, setActiveId, setEntities, withActiveId, withEntities } from '@ngneat/elf-entities';
import { createRequestsCacheOperator, updateRequestCache, withRequestsCache } from '@ngneat/elf-requests';
import { AppInfo } from 'src/app/shared/models/api/model';

export const appInfoId = 'appInfo';
const { state, config } = createState(
  withEntities<AppInfo, 'versionNumber'>({ idKey: 'versionNumber' }),
  withRequestsCache<typeof appInfoId>(),
  withActiveId()
);
const store = new Store({ name: appInfoId, state, config });
export const skipWhileAppInfosCached = createRequestsCacheOperator(store);

@Injectable({
  providedIn: 'root',
})
export class AppInfoRepository {
  activeAppInfo$ = store.pipe(selectActiveEntity());

  setAppInfo(appInfo: AppInfo) {
    store.update(updateRequestCache(appInfoId), setEntities([appInfo]), setActiveId(appInfo.versionNumber));
  }
}
