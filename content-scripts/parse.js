const queryOptions = { active: true, lastFocusedWindow: true };
let [tab] = await chrome.tabs.query(queryOptions);

const pageTitle = tab.title || 'No title found';
const metaDescription = document.querySelector('meta[name="description"]').content || 'No description found';
const canonicalUrl = document.querySelector('link[rel="canonical"]') || 'No canonical found';

document.getElementById('title').innerHTML = `Title: ${pageTitle}`;
document.getElementById('description').innerHTML = `Description: ${metaDescription}`;
document.getElementById('canonical').innerHTML = `Canonical: ${canonicalUrl}`;
