{%for entry in entries -%}
- [{{- entry.title }}]({{ entry.link }}){% if entry.description %} - {{ entry.description }}{% endif %}
{% endfor%}