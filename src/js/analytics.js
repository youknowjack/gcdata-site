// Initialize Mixpanel and track page views
(function() {
  // Initialize Mixpanel
  if (typeof window.init_mixpanel === 'function') {
    window.init_mixpanel();
  }

  // Track page view
  if (typeof window.mixpanel !== 'undefined') {
    window.mixpanel.track(document.location.pathname);

    // Track link clicks for elements with mixpanel-track class
    var trackedLinks = document.getElementsByClassName("mixpanel-track");
    for (var i = 0; i < trackedLinks.length; i++) {
      var link = trackedLinks[i];
      var prefix = link.dataset.mptrackPrefix || 'link_click';
      var id = link.id;
      if (id) {
        window.mixpanel.track_links("#" + id, prefix + "-" + id);
      }
    }
  }
})();
