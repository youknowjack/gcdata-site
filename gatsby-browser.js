require("prismjs/themes/prism.css")

exports.onInitialClientRender = () => {
  document.mixpanel.track(document.location.pathname);
  var trackedLinks = document.getElementsByClassName("mixpanel-track");
  for (var i = 0; i < trackedLinks.length; i++) {
    var prefix = trackedLinks[i].dataset["mptrackPrefix"];
    var id = trackedLinks[i].id;
    document.mixpanel.track_links("#" + id, prefix + "-" + id);
  }
}
