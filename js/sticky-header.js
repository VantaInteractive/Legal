// Header stuff - sticky logo, menu, event-based logo change
document.addEventListener('DOMContentLoaded', function() {
  var headerLogo = document.getElementById('logo');
  var isScrollingDown = false;
  var logoStickyPosition = { top: 1.5 * 16, left: 4.5 * 16 };
  var scrollThreshold = headerLogo.offsetTop - logoStickyPosition.top;
  var isLogoSticky = false;
  var isInitialScroll = true;

  function handleScroll() {
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    var currentScrollDown = scrollY > scrollThreshold;

    if (currentScrollDown !== isScrollingDown) {
      isScrollingDown = currentScrollDown;

      if (isScrollingDown) {
        headerLogo.classList.add('logo-sticky');
        isLogoSticky = true;
      } else {
        headerLogo.classList.remove('logo-sticky');
        isLogoSticky = false;
      }

      if (isScrollingDown) {
        headerLogo.style.transition = 'transform 0.15s ease-in-out';
        headerLogo.style.transform = 'translate(-95%, 0%)';
      } else {
        headerLogo.style.transition = 'transform 0.15s ease-in-out';
        headerLogo.style.transform = 'translate(0, 0)';
      }
    }

    if (!isScrollingDown && !isLogoSticky) {
      headerLogo.style.border = 'none';
    } else {
      headerLogo.style.border = '0.25rem solid var(--white)';
    }
  }

  function setInitialBorderWidths() {
    headerLogo.style.borderTopWidth = headerLogo.offsetHeight + 'px';
    headerLogo.style.borderRightWidth = headerLogo.offsetWidth + 'px';
    headerLogo.style.borderBottomWidth = headerLogo.offsetHeight + 'px';
    headerLogo.style.borderLeftWidth = headerLogo.offsetWidth + 'px';
  }

  window.addEventListener('load', function() {
    headerLogo.style.display = 'block'; // Show the logo once it's loaded
    setInitialBorderWidths();
    isInitialScroll = false;
  });

  window.addEventListener('scroll', handleScroll);
});
