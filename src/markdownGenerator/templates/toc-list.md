{%for entry in entries %}
{% if entry.indent === 1 %}
    - [{{ entry.title }}]({{ entry.link }})
{% elif entry.indent === 2  %}
        - [{{ entry.title }}]({{ entry.link }})
{% else %}
- [{{ entry.title }}]({{ entry.link }})
{% endif %}
{% endfor %}