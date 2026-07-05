# Página de Upsell — "No cierres esta página"

Página de upsell responsiva (mobile-first) em espanhol, com aviso de processamento e VSL via VTurb SmartPlayer (ConverteAI).

## Estrutura

```
Up/
├── index.html              # Marcação da página
├── assets/
│   ├── css/
│   │   └── style.css       # Tema, layout, animações e responsividade
│   └── js/
│       ├── player.js       # Carregamento do player VTurb (ConverteAI)
│       └── main.js         # Comportamentos gerais (ano do footer, aviso de saída)
└── README.md
```

## Seções da página

1. **Alerta (fundo vermelho)** — título "NO CIERRES ESTA PÁGINA" e texto de aviso em negrito.
2. **Vídeo (fundo branco)** — headline "ANTES DE RECIBIR TU ACCESO…", emoji 👇 animado e o player VTurb (máx. 400px).
3. **Footer** — copyright com ano dinâmico e disclaimer Facebook/Google.

## Personalização rápida

- **Cores**: edite as variáveis em `:root` no topo de `assets/css/style.css`.
- **Vídeo**: troque o `id` do `<vturb-smartplayer>` no `index.html` e a URL `PLAYER_SRC` em `assets/js/player.js`.
- **Aviso ao sair**: para desativar a confirmação de saída do navegador, mude `EXIT_WARNING_ENABLED` para `false` em `assets/js/main.js`.

## Como testar

Abra o `index.html` no navegador, ou sirva localmente:

```bash
npx serve .
```
