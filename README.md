# 🌿 Galeria de Flora - Padrão MVC

Uma galeria de plantas e flores moderna desenvolvida em JavaScript puro seguindo o padrão arquitetural MVC (Model-View-Controller).

## ✨ Funcionalidades

- **Filtragem por Categorias**: Flores, Árvores, Suculentas, Ervas, Frutíferas
- **Busca por Palavra-chave**: Pesquisa em nomes, categorias e características das plantas
- **Paginação**: Exibe 8 plantas por página com navegação
- **Efeitos de Transição**: Animações suaves de fade in/out
- **Design Responsivo**: Interface simples, moderna e intuitiva com tema botânico
- **Navegação por Teclado**: Atalhos para navegação rápida

## 🏗️ Arquitetura MVC

### Model (`model.js`)
- Gerencia os dados das plantas e flores
- Aplica lógica de filtragem e paginação
- Mantém o estado da aplicação

### View (`view.js`)
- Renderiza a interface do usuário
- Gerencia eventos de interação
- Aplica animações e transições

### Controller (`controller.js`)
- Coordena a comunicação entre Model e View
- Processa eventos e atualiza a interface
- Gerencia o fluxo de dados

## 📁 Estrutura do Projeto

```
gallery-mvc/
├── index.html          # Página principal
├── style/
│   └── style.css       # Estilo da página
├── js/
│   ├── model.js        # Modelo de dados
│   ├── view.js         # Interface do usuário
│   ├── controller.js   # Controlador
│   └── app.js          # Inicializador
├── img/                # Pasta para as imagens
│    └── plantas/
│         ├── arvores/  
│         ├── ervas/
│         ├── flores/
│         ├── frutiferas/
│         └── suculentas /                    
└── README.md           # Documentação
```

## 🚀 Como Usar

1. **Clone ou baixe o projeto**
2. **Abra o arquivo `index.html` em um navegador**
3. **Explore as funcionalidades**:
   - Clique nas categorias para filtrar plantas
   - Use o campo de busca para encontrar plantas específicas
   - Navegue pelas páginas usando os botões de paginação

## 🎯 Funcionalidades Detalhadas

### Filtros de Categoria
- **Todas**: Exibe todas as plantas
- **Flores**: Rosas, sakuras, lírio do campo, lírio do vale
- **Árvores**: Carvalho, bambu, palmeira, bétula
- **Suculentas**: Echeveria, aloe vera, cacto, sedum
- **Ervas**: Manjericão, alecrim, hortelã, sálvia
- **Frutíferas**: Laranjeira, figueira, romãzeira , mangueira

### Sistema de Busca
- Pesquisa em tempo real
- Busca por nome, categoria ou características

### Paginação
- 8 plantas por página
- Navegação anterior/próxima
- Indicador de página atual
- Botões desabilitados quando apropriado

### Animações
- Efeito escalonado no carregamento
- Transições suaves

## 🛠️ Tecnologias Utilizadas

- **JavaScript Puro**: Sem frameworks ou bibliotecas
- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com gradientes e animações
- **Padrão MVC**: Arquitetura organizada e escalável
- **Font Awesome**: Biblioteca de ícones

## 🌱 Dados das Plantas

O projeto inclui 25 imagens de plantas, organizadas em 5 categorias:
- 5 flores
- 5 árvores (carvalho, bambu, palmeira, bétula)
- 5 suculentas (echeveria, aloe vera, cacto, sedum)
- 5 ervas (manjericão, alecrim, hortelã, sálvia)
- 5 jardins (zen, vertical, de flores, botânico)

Cada planta possui:
- ID
- Nome descritivo
- Categoria botânica
- URL da imagem
- Palavras-chave para busca

## 📱 Responsividade

O design é totalmente responsivo:
- **Desktop**: Grid com múltiplas colunas
- **Tablet**: Grid adaptativo
- **Mobile**: Layout em coluna única

## 🎨 Design System

### Cores (Tema Botânico)
- **Primária**: #4a7c59 (verde floresta)
- **Secundária**: #2d5a27 (verde escuro)
- **Acento**: #6b8e23 (verde oliva)
- **Neutra**: #6c757d (cinza)
- **Sucesso**: #28a745 (verde)
- **Erro**: #dc3545 (vermelho)

### Tipografia
- **Fonte**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700

### Componentes
- Cards com sombras e bordas arredondadas
- Botões com hover effects
- Inputs com focus states
- Loading spinner animado

## 📈 Performance

- **Lazy Loading**: Imagens carregadas sob demanda
- **Debounce**: Busca otimizada
- **Intersection Observer**: Para lazy loading
- **CSS Transitions**: Animações suaves

## 🔒 Tratamento de Erros

- Fallback para imagens não carregadas
- Tratamento de erros globais
- Mensagens de erro amigáveis
- Botão de recarregar página


## 📝 Licença

Este projeto foi desenvolvido para fins educacionais, demonstrando a implementação do padrão MVC em JavaScript puro com foco em floras.

