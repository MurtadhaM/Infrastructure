window.onDOMReady =
  window.onDOMReady ||
  ((_) =>
    document.readyState == "loading"
      ? document.addEventListener("DOMContentLoaded", _)
      : _());
function markdownToHTML() {
  res_textarea.value = md.render(textArea0.value);
}
let textArea0,
  md_html,
  fileInputId,
  res_textarea;
  
window.onDOMReady((_) => {
  textArea0 = document.querySelector("#textArea0");
  md_html = document.querySelector("#md_html");
  res_textarea = document.querySelector("#res_textarea");
  auto_updating = false;
  md = new markdownit();
  md_html.addEventListener("click", markdownToHTML);

  textArea0.addEventListener("input", (_) => {
    if (auto_updating === true) {
      markdownToHTML();
    }
  });

  
  md_html.addEventListener('click', function(){
    // Add your javascript here
  let preview = document.getElementById('language-html');
  let textArea = document.getElementById('textArea0');
  let res_textarea = document.getElementById('res_textarea');
  let md_html = document.getElementById('md_html');
  let md = markdownit();
  md.set({html: true});
  md.set({langPrefix: 'language-'});
  md.set({highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs language-' + lang + '"><code>' +
               hljs.highlight(lang, str, true).value +
               '</code></pre>';
      } catch (__) {}
    }
    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  }
  });

      let text = textArea.value;
      let result = md.render(text);
      res_textarea.value = result;
      console.log(result);
      preview.innerHTML  = result;
  });
  
});
