API DE GERENCIAMENTO DE EVENTOS ACADÊMICOS

Projeto desenvolvido para a disciplina Programação Web II (PWEB2) do Instituto Federal de Alagoas (IFAL).

A aplicação consiste em uma API REST desenvolvida com Node.js e Express, responsável por gerenciar eventos acadêmicos como seminários, minicursos e workshops.

__________________________________________________

INTEGRANTE

- Melissa Carolyne Alves de Oliveira

(O trabalho deveria ser em grupo, mas como faltei última aula devido à falta de transporte, não consegui me juntar a um grupo.)

__________________________________________________

OBJETIVO DO PROJETO

Desenvolver uma API capaz de realizar o gerenciamento de eventos acadêmicos, permitindo:

- Cadastro de eventos
- Consulta de eventos
- Atualização de eventos
- Remoção de eventos
- Inscrição em eventos
- Cancelamento de eventos
- Filtragem de eventos por diferentes critérios

A API simula um sistema utilizado por instituições acadêmicas para administrar suas atividades e eventos.

__________________________________________________

TECNOLOGIAS UTILIAZDAS

- Node.js
- Express.js
- JavaScript (ES Modules)

__________________________________________________

Estrutura do Projeto

pweb2-eventos-equipeXX
│ 
├── README.md
├── package.json
│
└── src
     │
     ├── server.js
     ├── app.js
     │
     └── database
            └── EventosDatabase.js

__________________________________________________

DESCRIÇÃO DOS ARQUIVOS

- server.js:
    Responsável por iniciar o servidor da aplicação.

- app.js:
    Contém as configurações do Express e as rotas da API.

- EventosDatabase.js:
    Classe responsável por simular um banco de dados em memória para armazenamento dos eventos.

__________________________________________________

MODELO DE EVENTO

Cada evento possui os seguintes atributos:

Campo -> Tipo -> Descrição
id -> number -> Identificador único
titulo -> string -> Título do evento
descricao -> string -> Descrição do evento
vagas -> number -> Número total de vagas
vagasDisponiveis -> number -> Vagas ainda disponíveis
modalidade -> string -> presencial, remoto ou híbrido
cargaHoraria -> number -> Carga horária do evento
ativo -> boolean -> Indica se o evento está ativo
dataCriacao -> string -> Data de criação no formato ISO
__________________________________________________

COMO EXECUTAR O PROJETO

1 Clonar o repositório
git clone https://github.com/melissa-oliveira2005/pweb2-eventos-equipeXX

2 Acessar a pasta do projeto
cd pweb2-eventos-equipeXX

3 Instalar as dependências
npm install

4 Iniciar o servidor
node src/server.js

O servidor será iniciado em:

http://localhost:3000

__________________________________________________

ROTAS DA API
__________________________________________________


LISTAR TODOS OS EVENTOS
GET /eventos

__________________________________________________

BUSCAR EVENTO POR ID
    GET /eventos/:id

__________________________________________________

CRIAR EVENTO
    POST /eventos

Exemplo de body:

{
  "titulo": "Workshop de Node.js",
  "descricao": "Aprendendo a criar APIs",
  "vagas": 30,
  "modalidade": "presencial",
  "cargaHoraria": 4
}

__________________________________________________

ATUALIZAR EVENTO
PUT /eventos/:id

__________________________________________________

REMOVER EVENTO
DELETE /eventos/:id

__________________________________________________

LISTAR APENAS EVENTOS ATIVOS
GET /eventos?ativo=true

__________________________________________________

FILTRAR POR MODALIDADE
GET /eventos?modalidade=presencial

__________________________________________________

FILTRAR POR NÚMERO MÍNIMO DE VAGAS
GET /eventos?vagasMin=10

__________________________________________________

REALIZAR INSCRIÇÃO EM EVENTO
    POST /eventos/:id/inscricao

Reduz o número de vagas disponíveis do evento.

__________________________________________________

CANCELAR EVENTO
PATCH /eventos/:id/cancelar

Marca o evento como inativo.

__________________________________________________

OBSERVAÇÃO

O projeto utiliza uma classe simulando banco de dados em memória, portanto os dados são perdidos sempre que o servidor é reiniciado.

__________________________________________________

DISCIPLINA

Programação Web II – PWEB2
Instituto Federal de Alagoas – IFAL