{%for entry in entries -%}
- [{{- entry.title }}]({{ entry.link }}) - {{ entry.description }}
{% endfor%}