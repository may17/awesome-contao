{%for entry in entries -%}
- [{{- entry.title }}]({{ entry.link }}){% if entry.isVideo %} (📹 Video) {% endif %}{% if entry.description %} - {{ entry.description }}{% endif %}
{% endfor%}