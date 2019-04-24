var context = cast.framework.CastReceiverContext.getInstance();
var playerManager = context.getPlayerManager();

function makeRequest(method, url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function() {
      if (this.status >= 200 && this.status < 300) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function() {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
  });
}

playerManager.setMessageInterceptor(
  cast.framework.messages.MessageType.LOAD,
  request => {
    console.log("Intercepting LOAD request");
    return new Promise((resolve, reject) => {
      if (request.media.contentType == "video/mp4") {
        return resolve(request);
      }

      // Fetch content repository by requested contentId
      makeRequest(
        "GET",
        "https://tse-summit.firebaseio.com/content.json?orderBy=%22$key%22&equalTo=%22" +
          request.media.contentId +
          "%22"
      ).then(function(data) {
        var item = data[request.media.contentId];
        if (!item) {
          // Content could not be found in repository
          reject();
        } else {
          // Adjusting request to make requested content playable
          request.media.contentId = item.stream.hls;
          request.media.contentType = "application/x-mpegurl";

          // Add metadata
          var metadata = new cast.framework.messages.MovieMediaMetadata();
          metadata.metadataType = cast.framework.messages.MetadataType.MOVIE;
          metadata.title = item.title;
          metadata.subtitle = item.author;

          resolve(request);
        }
      });
    });
  }
);

let touchControls = cast.framework.ui.Controls.getInstance();
// Clear default buttons
touchControls.clearDefaultSlotAssignments();
touchControls.assignButton(
  cast.framework.ui.ControlsSlot.SLOT_1,
  cast.framework.ui.ControlsButton.SEEK_BACKWARD_10
);

context.start({ touchScreenOptimizedApp: true });
cast.framework.CastReceiverContext.getInstance().setLoggerLevel(
  cast.framework.LoggerLevel.DEBUG
);
