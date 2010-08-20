
// Start autoreloading loop.
Drupal.behaviors.autoreload = function() {
  Drupal.autoreload_start();
}

// Fetch the autoreload file containing the time flag.
Drupal.autoreload_start = function() {
  $.get(Drupal.settings.basePath + Drupal.settings.autoreload.file, Drupal.autoreload_callback);
}

// Callback to process the returning GET request. Compare to last time flag and
// reload if it differs from current one.
Drupal.autoreload_callback = function(data) {
  if (!Drupal.autoreload_callback.last_data) {
    Drupal.autoreload_callback.last_data = data;
  }
  else {
    if (Drupal.autoreload_callback.last_data != data) {
      location.reload();
    }
  }
  setTimeout(Drupal.autoreload_start, 1000);
}
