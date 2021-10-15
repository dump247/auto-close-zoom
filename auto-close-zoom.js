browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (!tab.url) {
    // Ignore tab that the extension does not get a url for.
    // The extension only gets the url for zoom tabs (see permissions in the manifest).
    return;
  }

  const url = new URL(tab.url);

  if (url.hash === '#success') {
    console.info(`Closing successful zoom tab`, { url, tabId, hash: url.hash });
    browser.tabs.remove(tabId);
  }
});

