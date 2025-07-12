// The Js code
const shareBtn = document.getElementById("shareBtn");
const sharePopup = document.getElementById("sharePopup");
const shareOverlay = document.getElementById("shareOverlay");

shareBtn.addEventListener("click", function () {
  // Toggle active state on button
  shareBtn.classList.toggle("active");

  // Check if we're on mobile or desktop
  if (window.innerWidth <= 767 && shareBtn.classList.contains("active")) {
    // Mobile: toggle overlay
    shareOverlay.classList.toggle("active");
    shareBtn.classList.remove("active");
    // Hide shareBtn when overlay is active
    if (shareOverlay.classList.contains("active")) {
      shareBtn.classList.add("hidden");
    } else {
      shareBtn.classList.remove("hidden");
    }
  } else {
    // Desktop: toggle popup
    sharePopup.classList.toggle("active");
  }
});

// Close share options when clicking outside
document.addEventListener("click", function (e) {
  if (!e.target.closest(".article-footer")) {
    shareBtn.classList.remove("active");
    sharePopup.classList.remove("active");
    shareOverlay.classList.remove("active");
    shareBtn.classList.remove("hidden");
  }
});

// Handle window resize
window.addEventListener("resize", function () {
  shareBtn.classList.remove("active");
  sharePopup.classList.remove("active");
  shareOverlay.classList.remove("active");
  shareBtn.classList.remove("hidden");
});
