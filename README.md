# DevConnect — React + Vite

Projeto organizado a partir do tutorial da aula prática da EFG.

## Estrutura

```text
DevConnect/
├── public/
├── src/
│   ├── components/
│   │   ├── FeaturesList.jsx
│   │   ├── Footer.jsx
│   │   └── Header.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── .gitignore
```

## Como executar

Abra o terminal nesta pasta e execute:

```bash
npm install
npm run dev
```

O Vite mostrará um endereço local, normalmente `http://localhost:5173/`.

## Como gerar a versão de publicação

```bash
npm run build
```

A pasta `dist/` será criada para publicação no Vercel.

## Atualizar pelo GitHub

Depois de conectar este repositório ao Vercel, envie as alterações:

```bash
git add .
git commit -m "Atualiza projeto DevConnect"
git push
```

O Vercel fará um novo deploy automaticamente quando a branch conectada receber o push.
