---
layout: page
title: "Articles de recherche"
permalink: /articles/
---

<p class="page__intro">Sujets de recherche en cours ou a venir, sur la
securite offensive et defensive.</p>

<div class="article-list">
  {% assign sorted_articles = site.articles | sort: "date" | reverse %}
  {% for a in sorted_articles %}
  <a class="article-card" href="{{ a.url | relative_url }}">
    <div class="article-card__meta">
      {% if a.status %}<span class="tag tag--{{ a.status | slugify }}">{{ a.status }}</span>{% endif %}
      <span class="writeup__date">{{ a.date | date: "%d %b %Y" }}</span>
    </div>
    <h3 class="article-card__title">{{ a.title }}</h3>
    <p class="article-card__summary">{{ a.summary }}</p>
  </a>
  {% endfor %}
</div>
