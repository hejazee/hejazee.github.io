var disqus_config = function () {
  this.language = "fa";
};
(function($) {
  $(function() {  
    if ($('#disqus_thread').length > 0) {
      (function() {
        if (["localhost", "127.0.0.1"].indexOf(window.location.hostname) != -1) {
          document.getElementById('disqus_thread').innerHTML = 'Disqus comments not available by default when the website is previewed locally.';
          return;
        }
        var d = document, s = d.createElement('script'); s.async = true;
        s.src = '//' + 'hejazee.disqus.com/embed.js';
        s.setAttribute('data-timestamp', + new Date());
        (d.head || d.body).appendChild(s);
      })();
    }
  });
})(jQuery);
