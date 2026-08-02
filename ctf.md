---
layout: page
title: "CTF & Writeups"
permalink: /ctf/
---

<p class="page__intro">Liste des CTF auxquels j'ai participé, avec les writeups disponibles pour les challenges les plus intéressants.</p>

<div class="filters" id="ctf-filters">
  <button class="filter-chip is-active" data-filter="all">tous</button>
  {% assign all_cats = "" | split: "" %}
  {% for c in site.data.ctfs %}
    {% assign all_cats = all_cats | concat: c.categories %}
  {% endfor %}
  {% assign all_cats = all_cats | uniq | sort %}
  {% for cat in all_cats %}
  <button class="filter-chip" data-filter="{{ cat }}">{{ cat }}</button>
  {% endfor %}
</div>

<table class="ctf-table" id="ctf-table">
  <thead>
    <tr>
      <th>CTF</th>
      <th>Date</th>
      <th>Équipe</th>
      <th>Format</th>
      <th>Catégories</th>
      <th>Résultat</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {% assign sorted_ctfs = site.data.ctfs | sort: "date" | reverse %}
    {% for c in sorted_ctfs %}
    <tr class="ctf-row" data-categories="{{ c.categories | join: ',' }}">
      <td>
        {% if c.ctftime_url %}<a href="{{ c.ctftime_url }}" target="_blank" rel="noopener">{{ c.name }}</a>{% else %}{{ c.name }}{% endif %}
      </td>
      <td class="mono">{{ c.date }}</td>
      <td>{{ c.team }}</td>
      <td>{{ c.format }}</td>
      <td>{% for cat in c.categories %}<span class="pill pill--sm">{{ cat }}</span>{% endfor %}</td>
      <td class="mono">{{ c.rank }}</td>
      <td>
        {% if c.writeup and c.writeup != "" %}
          <a class="link-arrow" href="{{ '/writeups/' | append: c.writeup | append: '/' | relative_url }}">writeup →</a>
        {% else %}
          <span class="muted">—</span>
        {% endif %}
      </td>
    </tr>
    {% endfor %}
  </tbody>
</table>
