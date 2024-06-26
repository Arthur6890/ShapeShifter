# Escopo e objetivo

_Projeto usado na disciplina de Praticas em desenvolvimento de software_.

_Projeto com objetivo de ajudar o usuário a acompanhar a sua rotina de treinos na academia_.

Este é um aplicativo feito em React Native, Node.js, utilizando Typescript, e Mongo DB para banco de dados.

O usuário terá a opção de:

- Cadastrar uma ficha de treino
- Alterar a carga em cada exercício
- Acompanhar quantos dias do mês ele foi à academia
- Acesso a videos de exercicios que ele pode praticar em casa

Entre outras funcionalidades

## Autores

[![image](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) Arthur Ramos - Dev Fullstack](https://github.com/arthur6890)

[![image](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) João Victor Valgas - Back End](https://github.com/joaovalgas)

[![image](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) Lucas Jacone - Banco de Dados](https://github.com/jackjacone)

[![image](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) Alexis Mariz - Dev Fullstack](https://github.com/Adgmariz)

## Instalação

Primeiro, clone o repositório

`git clone https://github.com/arthur6890/ShapeShifter`

Depois, instale o projeto com yarn ou npm

```bash
  cd ShapeShifter
  yarn
```

ou

```bash
  cd ShapeShifter
  npm install
```

## Pré-requisitos

Para usar o Expo CLI, você precisa ter as seguintes ferramentas instaladas em sua máquina de desenvolvedor:

- Node.js LTS release
- Git
- For macOS or Linux users: Watchman

## Ferramentas recomendadas

- Yarn
- VS Code Editor
- VS Code Expo Extension para debugging e preenchimento automático da configuração Expo.

## Backlog do produto

1 - Como um usuário, eu quero me cadastrar no aplicativo

2 - Como um usuário, eu quero logar no aplicativo, visualizar e editar minhas informações pessoais (nome, idade, peso, altura, etc.) para manter meu perfil atualizado.

3 - Como um usuário, eu quero visualizar meu histórico de treinos para acompanhar meu progresso ao longo do tempo.

4 - Como um usuário, eu quero visualizar os detalhes do meu treino atual, incluindo exercícios, séries, repetições e carga, para que eu saiba o que fazer durante o treino.

5 - Como um usuário, eu quero marcar os exercícios concluídos durante o treino para acompanhar meu progresso.

6 - Como um usuário, eu quero sincronizar meu smartwatch com o sistema para que eu possa registrar automaticamente informações de treino, como frequência cardíaca, calorias queimadas e tempo de atividade.

7 - Como um usuário, eu quero acessar uma biblioteca de vídeos e tutoriais sobre exercícios, nutrição e outras informações relevantes para melhorar meu conhecimento e habilidades.

8 - Como um usuário, eu quero ver um feed com as postagens recentes dos usuários que sigo para me manter atualizado sobre seu progresso, fotos e dicas de fitness.

9 - Como um usuário, eu quero publicar atualizações de status, fotos e vídeos no meu feed para compartilhar meu progresso e experiências com os outros.

10 - Como um usuário, eu quero interagir com as postagens no feed, curtindo, comentando e compartilhando, para me conectar e apoiar outros usuários.

11 - Como um usuário, eu quero receber notificações e lembretes sobre os horários agendados, alterações no meu treino e outras informações relevantes para me manter informado e motivado.

12 - Como um instrutor, eu quero criar, editar e deletar treinos personalizados para meus alunos, selecionando exercícios, séries, repetições e carga.

13 - Como um instrutor, eu quero visualizar e analisar o progresso dos meus alunos para ajustar seus treinos e garantir que estejam alcançando seus objetivos.

14 - Como um instrutor, eu quero criar, editar e deletar a biblioteca com treinos, vídeos e dicas.

## Backlog do sprint

### 1 - Como um usuário, eu quero me cadastrar no aplicativo.

-Back End: Criar a lógica de registro de usuários. (Alexis)

-Back End:Garantir a validação dos dados inseridos e a integração com o banco de dados. (João)

-Front End: Criar a interface do usuário para o registro de usuários. Isso inclui a criação
de campos de entrada de dados e a validação de dados no lado do cliente. (Arthur)

-Banco de Dados: Criar e gerenciar o banco de dados que armazena os dados de registro de
usuários. (Lucas)

### 2 - Como um usuário, eu quero logar no aplicativo, visualizar e editar minhas informações pessoais para manter meu perfil atualizado.

-Back End: Criar a lógica de login do usuário, incluindo a validação de suas credenciais e a criação e gerenciamento de
uma sessão de usuário segura. (João)

-Back End: Criar a lógica para permitir que o usuário visualize e edite suas informações pessoais. (Alexis)

-Back End: Validação dos dados inseridos e a integração com o banco de dados para salvar as alterações. (João)

-Front End: criar a interface do usuário para o login e a exibição e edição das informações pessoais do usuário. (Arthur)

-Front End: Implementar a função de exibir mensagens de erro ou sucesso após a edição das informações pessoais. (Alexis)

-Banco de Dados: criar e gerenciar o banco de dados que armazena as informações pessoais
do usuário. (Lucas)

-Banco de Dados: garantir que o esquema do banco de dados esteja correto e que as consultas necessárias para exibir e
editar as informações pessoais do usuário funcionem. (Lucas)

### 3 - Como um usuário, eu quero visualizar meu histórico de treinos para acompanhar meu progresso ao longo do tempo.

-Back End: criar a lógica para recuperar os dados de treino do usuário a partir do banco de dados e
fornecê-los ao Front End para exibição. (Alexis)

-Back End: criarfiltros e ordenação para permitir que o usuário visualize seu histórico de treinos de
maneira personalizada. (João)

-Front End: criar a interface do usuário para exibir o histórico de treinos do usuário.Isso pode
incluir a criação de tabelas, gráficos ou outros tipos de visualização de dados. (Arthur)

-Banco de Dados: criar e gerenciar o banco de dados que armazena os dados de treino do usuário. (Lucas)

### 4 - Como um usuário, eu quero visualizar os detalhes do meu treino atual, incluindo exercícios, séries, repetições e carga, para que eu saiba o que fazer durante o treino.

-Back End: criar a lógica para recuperar os detalhes do treino atual do usuário a partir do banco de dados
e fornecê-los ao Front End para exibição. (Alexis)

-Back End: criar lógica para atualizar o treino atual do usuário com novas informações, como carga ou
número de repetições. (João)

-Front End: criar a interface do usuário para exibir os detalhes do treino atual do usuário. (Arthur)

-Banco de Dados: criar e gerenciar o banco de dados que armazena os detalhes do treino atual do usuário. (Lucas)

### 5 - Como um usuário, eu quero marcar os exercícios concluídos durante o treino para acompanhar meu progresso.

-Back End: criar a lógica para registrar os exercícios concluídos pelo usuário durante o treino e atualizar
as informações relevantes no banco de dados. (João)

-Front End: criar a interface do usuário para permitir que o usuário marque os
exercícios concluídos durante o treino. (Arthur)

-Banco de Dados: criar e gerenciar o banco de dados que armazena as informações
dos exercícios concluídos durante o treino. (Lucas)


## Arquitetura Hexagonal

-Domínio: Esta é a camada central da aplicação. Ela contém a lógica de negócios e as entidades do domínio Usuário, Treino, Exercício(Ficha), etc. A lógica de negócios seria as regras e operações que podem ser realizadas nessas entidades.
No caso do nosso projeto, no backend criamos a pasta Services, nela implementamos a Interface e as Entidades de usuário e Ficha de Treino, e aplicamos nelas as regras de negócio

-Ports: Nossos ports são usados para levar dados para fora da lógica de negócios (como no exemplo, uma interface de repositório de usuário que tem métodos para salvar um usuário, buscar um usuário, etc.). Por essa lógica, eles são considerados Driven Ports

-Adapters: Os adapters são a implementação dos ports. Utilizamos no projeto os Driven adapters, que implementam os nossos "driven ports" para levar dados para fora da lógica de negócios (No nosso exemplo, fizemos uma implementação de repositório de user e de TrainingFiles que usa MongoDB para salvar e buscar usuários e suas fichas de treino).

-Infraestrutura: Esta é a camada externa da nossa aplicação. Ela contém todas as tecnologias externas que a aplicação usa, como banco de dados, web framework, etc. No caso do nosso projeto, nossa infraestrutura seria o MongoDB, o Node.js e o React Native.
