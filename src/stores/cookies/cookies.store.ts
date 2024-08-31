// app/store/cookies.store.ts
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type CookiesState = {
  isCookiesAccepted: boolean;
};
function getCookiesState(): boolean {
  const cookiesState = localStorage.getItem('cookies');
  return cookiesState === 'true' ? true : false;
}

const initialState: CookiesState = {
  isCookiesAccepted: getCookiesState(),
};

export const CookiesStore = signalStore(
  withState(initialState),
  withMethods((store) => ({
    acceptCookies() {
      patchState(store, { isCookiesAccepted: true });
      localStorage.setItem('cookies', 'true');
    },
    declineCookies() {
      patchState(store, { isCookiesAccepted: false });
      localStorage.setItem('cookies', 'false');
    },
  }))
);
