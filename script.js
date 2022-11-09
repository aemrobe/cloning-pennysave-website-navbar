const shareIcon = document.querySelector(".share-icon");

const socialMediaIcons = document.querySelector(".social-media-lists");

shareIcon.addEventListener("click", function () {
  console.log("clicked");

  socialMediaIcons.classList.toggle("show-your-self");
});
