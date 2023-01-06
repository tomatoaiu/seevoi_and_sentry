import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: process.env.SENTRY_URL,
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

window.seebel = window.seebel || {q: []};
window.seebel.q.push({userId: "test", userAttributes: {}});

const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  const txt = `Clicked Button`;
  button.textContent = txt;
  Sentry.captureMessage(txt);
});
