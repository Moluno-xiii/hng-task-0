function updateTime() {
  const currentTimeUTC = new Date().toUTCString();
  document.querySelector(
    '[data-testid="currentTimeUTC"]'
  ).textContent = `Current time in UTC: ${currentTimeUTC}`;
}

updateTime();
setInterval(updateTime, 1000);
