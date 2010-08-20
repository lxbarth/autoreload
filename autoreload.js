
Drupal.behaviors.autoreload = function() {
  Drupal.autoreload_start();
}

Drupal.autoreload_start = function() {
  $.get(Drupal.settings.basePath + Drupal.settings.autoreload.file, Drupal.autoreload_callback);
}

Drupal.autoreload_callback = function(data) {
      console.log(data);
  if (!Drupal.autoreload_callback.last_data) {
    Drupal.autoreload_callback.last_data = data;
  }
  else {
    if (Drupal.autoreload_callback.last_data != data) {
      location.reload();
      console.log('reload!');
    }
  }
  setTimeout(Drupal.autoreload_start, 1000);
}
