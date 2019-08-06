{{ hlLevel }} {{ title }}
{% if description -%}
  > {{ description }}
{% endif %}
{%- if entries %}
    {%- include 'list.md' %}
{% endif %}