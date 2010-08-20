
Drupal.behaviors.autoreload = function() {
  Drupal.autoreload_start();
}

Drupal.autoreload_start = function() {
  $.get(Drupal.settings.basePath + Drupal.settings.autoreload.file, Drupal.autoreload_callback);
}

Drupal.autoreload_callback = function(data) {
  console.log(data);
  setTimeout(Drupal.autoreload_start, 500)
}
