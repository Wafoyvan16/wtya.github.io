---
title: "lattice-me-this"
ctf: "DownUnderCTF 2025"
category: "crypto"
difficulty: "medium"
date: 2025-09-21
tags: ["rsa", "lattice", "lll", "sagemath"]
---

## Résumé

> Exemple de writeup à remplacer. Structure suggérée : énoncé, analyse
> mathématique, script de résolution, flag.

Un chiffrement RSA est fourni avec un module `n` partagé entre plusieurs
paires `(e, c)`, laissant supposer une attaque par petits exposants ou par
réseau (lattice).

## Analyse

Les paramètres fournis suggèrent une attaque de type Håstad, où le même
message est chiffré plusieurs fois avec un petit exposant public `e = 3`
sous des modules différents. Le théorème des restes chinois permet de
reconstruire `m^e mod (n1 * n2 * n3)`, puis une racine cubique entière donne
le message en clair.

## Résolution

```python
from sympy.ntheory.modular import crt
from gmpy2 import iroot

ns = [n1, n2, n3]
cs = [c1, c2, c3]

m_e, _ = crt(ns, cs)
m, exact = iroot(m_e, 3)
assert exact

print(bytes.fromhex(hex(m)[2:]))
```

## Flag

```
DUCTF{exemple_de_flag_a_remplacer}
```

## Points clés à retenir

- Un exposant public faible (`e = 3`) combiné à plusieurs chiffrés du même
  message est un signal classique d'attaque de Håstad.
- Toujours vérifier si une racine `e`-ième exacte existe avant de conclure.
