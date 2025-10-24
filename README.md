# ConnectMind 🎯

Sistema de gerenciamento de eventos desenvolvido com Angular 11 (Frontend) e ASP.NET Core 5.0 (Backend).

## 📋 Sobre o Projeto

O ConnectMind é uma aplicação web completa para gerenciamento de eventos, permitindo o cadastro e controle de eventos, palestrantes e participantes. O sistema é composto por:

- **Backend**: API REST desenvolvida em ASP.NET Core 5.0 com Entity Framework Core e SQLite
- **Frontend**: Aplicação SPA desenvolvida em Angular 11 com Bootstrap 4

## 🛠️ Tecnologias Utilizadas

### Backend (.NET)
- ASP.NET Core 5.0
- Entity Framework Core 5.0.4
- SQLite
- Swagger/OpenAPI
- AutoMapper

### Frontend (Angular)
- Angular 11.1.1
- Bootstrap 4.6.2
- NgBootstrap 6
- FontAwesome 5
- TypeScript 4.1.2

## 📋 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

### Para o Backend:
- [.NET 5.0 SDK](https://dotnet.microsoft.com/download/dotnet/5.0) (versão 5.0.408 ou superior)
- [Visual Studio 2019/2022](https://visualstudio.microsoft.com/) ou [Visual Studio Code](https://code.visualstudio.com/)

### Para o Frontend:
- [Node.js](https://nodejs.org/) (versão 12.x ou superior)
- [npm](https://www.npmjs.com/) (versão 6.x ou superior)
- [Angular CLI](https://angular.io/cli) (versão 11.x)

## 🚀 Como Executar o Projeto

### 1. Clonando o Repositório

```bash
git clone https://github.com/andregspaschoa/ConnectMind.git
cd ConnectMind
```

### 2. Configurando e Executando o Backend

#### 2.1. Navegue até a pasta do backend:
```bash
cd Back/src/ConnectMind.API
```

#### 2.2. Restaure as dependências:
```bash
dotnet restore
```

#### 2.3. Execute as migrations do banco de dados:
```bash
dotnet ef database update
```

#### 2.4. Execute a aplicação:
```bash
dotnet watch run
```

A API estará disponível em:
- HTTP: `http://localhost:5000`
- HTTPS: `https://localhost:5001`
- Swagger: `https://localhost:5001/swagger`

### 3. Configurando e Executando o Frontend

#### 3.1. Abra um novo terminal e navegue até a pasta do frontend:
```bash
cd Front/ConnectMind-App
```

#### 3.2. Instale as dependências:
```bash
npm install
```

#### 3.3. Execute a aplicação:
```bash
npm start
```
ou
```bash
ng serve -o
```

A aplicação frontend estará disponível em: `http://localhost:4200`

## 🏗️ Estrutura do Projeto

```
ConnectMind/
├── Back/                          # Backend (.NET Core)
│   └── src/
│       ├── global.json           # Configuração do SDK .NET
│       └── ConnectMind.API/
│           ├── Controllers/      # Controllers da API
│           ├── Data/            # Context e Migrations do EF
│           ├── Models/          # Modelos de dados
│           ├── Properties/      # Configurações de launch
│           ├── appsettings.json # Configurações da aplicação
│           └── Program.cs       # Ponto de entrada da aplicação
├── Front/                       # Frontend (Angular)
│   └── ConnectMind-App/
│       ├── src/
│       │   ├── app/            # Componentes Angular
│       │   │   ├── eventos/    # Módulo de eventos
│       │   │   ├── nav/        # Componente de navegação
│       │   │   └── palestrantes/ # Módulo de palestrantes
│       │   ├── assets/         # Recursos estáticos
│       │   └── environments/   # Configurações de ambiente
│       ├── angular.json        # Configuração do Angular CLI
│       └── package.json        # Dependências npm
└── README.md                   # Documentação do projeto
```

## 🎯 Funcionalidades

- ✅ Cadastro e gerenciamento de eventos
- ✅ Listagem de eventos
- ✅ Interface responsiva com Bootstrap
- ✅ API RESTful com documentação Swagger
- ✅ Banco de dados SQLite

## 🔧 Comandos Úteis

### Backend (.NET):
```bash
# Executar em modo de desenvolvimento
dotnet run --environment Development

# Executar migrations
dotnet ef migrations add NomeDaMigracao
dotnet ef database update

# Gerar build de produção
dotnet build --configuration Release
```

### Frontend (Angular):
```bash
# Executar em modo de desenvolvimento
ng serve

# Executar testes
ng test

# Gerar build de produção
ng build --prod

# Executar linting
ng lint
```

## 🌐 URLs do Projeto

### Desenvolvimento:
- **Frontend**: http://localhost:4200
- **Backend**: https://localhost:5001
- **Swagger**: https://localhost:5001/swagger

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Desenvolvedor

**André Paschoa** - [GitHub](https://github.com/andregspaschoa)

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
