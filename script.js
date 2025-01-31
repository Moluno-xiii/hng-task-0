function updateTime() {
  const currentTimeUTC = new Date().toUTCString();
  document.querySelector(
    '[data-testid="currentTimeUTC"]'
  ).textContent = `Current time in UTC: ${currentTimeUTC}`;

  const currentDay = new Date().toLocaleString("en-US", {
    weekday: "long",
  });
  document.querySelector(
    '[data-testid="currentDay"]'
  ).textContent = `Current day of the week: ${currentDay}`;
}

updateTime();
setInterval(updateTime, 1000);

window.onload = function () {
  console.log("Window onload function called");

  const img = document.getElementById("myImage");

  if (img.complete) {
    imageLoaded();
  } else {
    img.onload = imageLoaded;
  }

  function imageLoaded() {
    console.log("Image onload function called");
    const naturalWidth = img.naturalWidth;
    const naturalHeight = img.naturalHeight;
    const displayedWidth = img.width;
    const displayedHeight = img.height;

    console.log(`Natural dimensions: ${naturalWidth}x${naturalHeight}`);
    console.log(`Displayed dimensions: ${displayedWidth}x${displayedHeight}`);

    if (naturalWidth === displayedWidth && naturalHeight === displayedHeight) {
      console.log("The image is displayed at its natural dimensions.");
    } else {
      console.log("The image is not displayed at its natural dimensions.");
    }
  }
};
