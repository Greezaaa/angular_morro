import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type CookiesState = {
  isCookiesAccepted: boolean;
  showPolicy: boolean;
};

function getCookiesState(): boolean {
  const cookiesState = localStorage.getItem('cookies');
  return cookiesState === 'true';
}

function switchPolicy(policy: boolean): boolean {
  return !policy;
}

const initialState: CookiesState = {
  isCookiesAccepted: getCookiesState(),
  showPolicy: false,
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
    togglePolicy() {
      const currentPolicyState = store.showPolicy();
      patchState(store, { showPolicy: switchPolicy(currentPolicyState) });
    },
  }))
);
