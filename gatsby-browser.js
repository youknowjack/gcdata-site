require("prismjs/themes/prism.css")

exports.track = () => {
    window.mixpanel.track(document.location.pathname);
    var trackedLinks = document.getElementsByClassName("mixpanel-track");
    for (var i = 0; i < trackedLinks.length; i++) {
      var prefix = trackedLinks[i].dataset["mptrackPrefix"];
      var id = trackedLinks[i].id;
      window.mixpanel.track_links("#" + id, prefix + "-" + id);
    }
}

exports.onInitialClientRender = () => {
  window.init_mixpanel();
  exports.track();
}

exports.onRouteUpdate = () => {
  if (window.mixpanel) {
    exports.track();
  }
}
