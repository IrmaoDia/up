# Páginas de Upsell

Páginas de upsell responsivas (mobile-first) em espanhol, com VSL via VTurb SmartPlayer (ConverteAI) e checkout Hotmart.

## Estrutura

```
Up/
├── index.html              # Upsell 1 — "No cierres esta página"
├── assets/
│   ├── css/
│   │   └── style.css       # Tema, layout, animações e responsividade
│   └── js/
│       ├── player.js       # Carregamento do player VTurb (ConverteAI)
│       ├── hotmart.js      # Checkout Hotmart (sales funnel widget)
│       ├── cta-delay.js    # Revelações programadas (7:38 vagas, 8:20 botão)
│       └── main.js         # Comportamentos gerais (aviso de saída)
├── up2/                    # Upsell 2 — hero amarelo "Altar Digital"
│   ├── index.html
│   └── assets/             # Mesma estrutura (botão aos 4:12)
└── README.md
```

## Upsell 1 (raiz)

1. **Alerta (fundo vermelho)** — título "NO CIERRES ESTA PÁGINA", texto em negrito e barra de progresso verde em 90%.
2. **Vídeo (fundo branco)** — headline "ANTES DE RECIBIR TU ACCESO…", emoji 👇 animado e o player VTurb.
3. **Contador de vagas** — aparece aos 7:38 da VSL; sobe lentamente de 42 até 47.
4. **Botão Hotmart** — oculto, aparece aos 8:20 da VSL (após o play).

## Upsell 2 (`/up2`)

1. **Hero (fundo amarelo #fff06e)** — título preto com destaque em vermelho.
2. **Vídeo (fundo branco)** — headline "Mira este mensaje…" e player VTurb.
3. **Botão Hotmart** — oculto, aparece aos 4:12 da VSL (após o play).

## Personalização rápida

- **Cores**: edite as variáveis em `:root` no topo de cada `style.css`.
- **Vídeo**: troque o `id` do `<vturb-smartplayer>` no `index.html` e a URL `PLAYER_SRC` em `assets/js/player.js`.
- **Tempos de exibição**: ajuste as constantes `*_TIME_SECONDS` em `assets/js/cta-delay.js`.
- **Aviso ao sair**: para desativar a confirmação de saída do navegador, mude `EXIT_WARNING_ENABLED` para `false` em `assets/js/main.js`.

## Como testar

Sirva a raiz do projeto localmente (necessário para os caminhos absolutos da up2):

```bash
python -m http.server 8080
# ou
npx serve .
```

Acesse `http://localhost:8080/` (up1) e `http://localhost:8080/up2/` (up2).
