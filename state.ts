// This file illustrates how to introduce state - the example is - for now - not part of the index application. 
// I am not sure where an application would initialize an instance of Consent - my bet is that it should be done in the
// index.ts file - not here in the state.ts module - so that the instance can be given as argument to bootstrap.

interface Consent {
  marketing: boolean;
  statistics: boolean;
}

type ConsentType = keyof Consent;

export function createSetConsent(consent: Consent) {
  return function setConsent(kind: keyof Consent, accept: boolean) {
    consent[kind] = accept;
    // update the UI
  }
}

// ---- test:
// test("can update consent", () => { ... })

const consent: Consent = {
  marketing: true,
  statistics: true,
};

const setConsent = createSetConsent(consent);

setConsent("marketing", false);

// assert(consent.marketing === false);
