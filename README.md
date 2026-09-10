# 🎸 Muse Fan Website

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=flat&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

Website fã multi-página dedicado à banda Muse, com discografia, tour, história da banda e formulário de contacto com validação em JavaScript puro. Projeto de formação do curso de Full Stack Web Development, focado em HTML semântico, layout responsivo com o grid do Bootstrap e interatividade sem frameworks.

> 📷 _[Adiciona aqui 2-3 screenshots das páginas: Home, Álbuns e Contacto]_
> 🔗 _[Link para a demo ao vivo no GitHub Pages, depois de publicares]_

## ✨ Destaques

- **Site 100% responsivo** — layout construído com o sistema de grid de 12 colunas do Bootstrap 5, adaptado a mobile, tablet e desktop
- **Formulário de contacto com validação em JavaScript** — validação de todos os campos (nome, apelido, data de nascimento, email, telefone, mensagem) sem recarregar a página, com mensagens de erro específicas por campo
- **SEO on-page** — cada página tem `<title>`, `meta description` e `meta keywords` próprios e relevantes
- **Navegação multi-página consistente** — navbar fixa e reutilizada em todas as páginas, com menu responsivo (hamburger em mobile)

## 🛠️ Tecnologias

| Camada | Tecnologias |
|---|---|
| Estrutura | HTML5 semântico |
| Estilo | CSS3, Bootstrap 5 (grid, componentes) |
| Interatividade | JavaScript (vanilla) |
| Ícones | Font Awesome |

## 📄 Páginas

- **`index.html`** — Home, com banner de destaque e highlights (último álbum, tour, história)
- **`sobre.html`** — história da banda
- **`albuns.html`** — discografia completa em grid de cards
- **`tour.html`** — datas e informações da tour mundial
- **`contacto.html`** — formulário de contacto com validação client-side em JavaScript

## 🚀 Como correr o projeto

Não precisa de servidor nem instalação — é um site estático:

1. Fazer download ou clone do repositório
2. Abrir o ficheiro `index.html` diretamente no browser

_(ou visitar a versão publicada em GitHub Pages, se disponível — ver link no topo)_

## ✅ Validação do formulário de contacto

O `script.js` valida no browser, antes de qualquer envio:
- Nome, apelido e data de nascimento não podem estar vazios
- Email tem de conter `@`
- Telefone é obrigatório
- Mensagem tem de ter pelo menos 10 caracteres

Cada campo mostra o seu próprio erro em tempo real, e uma mensagem de sucesso confirma o envio.

## 📁 Estrutura

```
Módulo 5 - Banda/
├── index.html
├── sobre.html
├── albuns.html
├── tour.html
├── contacto.html
└── assets/
    ├── css/style.css
    ├── js/script.js
    └── img/
```

---
Projeto desenvolvido no âmbito do curso de Full Stack Web Development.
