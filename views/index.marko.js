// Compiled using marko@4.4.21 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>Loja de Livros</title><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css\"> <link href=\"css/estilos.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\"></head><body>");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-inverse\"><div class=\"navbar-header\"><a class=\"navbar-brand\" href=\"#\">Alura Books</a></div></nav><div class=\"container page-wrap\"><div class=\"row\"> ");

  marko_forEach(data.books, function(book) {
    out.w("<div class=\"col-md-3 col-sm-6 hero-feature text-center\"><div class=\"thumbnail\"><img src=\"images/" +
      marko_escapeXmlAttr(book.cover) +
      "\" alt=\"\"><div class=\"caption\"><h3>" +
      marko_escapeXml(book.name) +
      "</h3><p>" +
      marko_escapeXml(book.description) +
      "</p><p>" +
      marko_escapeXml(book.price) +
      "</p><p><a href=\"#\" class=\"btn btn-primary\">Comprar!</a><a href=\"#\" class=\"btn btn-default\">Detalhes</a></p></div></div></div>");
  });

  out.w(" </div> </div><footer class=\"site-footer\"><p>Todos os direitos reservados</p></footer>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
