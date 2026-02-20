# java-script
serve para mostrar oq aprendi

## GIT
Ferramenta de versionamento de uso local, que salva arquivo e um link para ele
 
 * Verificar o git
```
git --version
```
* Configurar o git
```
>git config --global user.name "seu nome"
>git config --global user.email "seuEmail@gmail.com"
```
## GITHUB
(Repositorio Remoto)
https://github.com/

## CHAVE SSH
adicionar chave
```
ssh-keygen -t ed25519 -C "seuEmail@gmail.com"
```
Inicializar agente-ssh
```
eval "$(ssh-agent -s)
```
Adicionar chave ssh ao agente
```
ssh-add ^/.ssh/id_ed25519
```
Copiar chave ssh
```
clip<~/.ssh/id_ed25519.pub
```
Adicionar chave no github
```
GITHUB -> SETTINGS -> SSH AND GPG KEYS -> NEW SSH KEY -> COLAR E COLOCAR TITULO
```

## REPOSITORIO
```
GITHUB -> REPOSITORYS -> NEW -> PUBLIC, ADD README -> CREATE