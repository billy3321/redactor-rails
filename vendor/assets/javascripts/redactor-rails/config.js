window.init_redactor = function(){
  var csrf_token = $('meta[name=csrf-token]').attr('content');
  var csrf_param = $('meta[name=csrf-param]').attr('content');
  var params = {};
  if (csrf_param !== undefined && csrf_token !== undefined) {
      params[csrf_param] = csrf_token;
  }
  $('.redactor').redactor(
    { "imageUpload":"/redactor_rails/pictures",
      "uploadImageFields": params,
      "imageGetJson":"/redactor_rails/pictures",
      "path":"/assets/redactor-rails",
      "css":"style.css",
      "buttonSource": true}
  );
}

$(document).on( 'ready page:load', window.init_redactor );
