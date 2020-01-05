# Arquitetura

Com o objetivo de ser um projeto escalável para contemplar um sistema completo de controle de estoque, a seguinte arquitetura foi decidida:

## Padrão de projeto
No sistema de controle de estoque será utilizado as características do **MVVM**.

Visando a reutilização de componentes e melhor manutenção do código, principalmente nos componentes UI.

## Banco de Dados
O projeto suporta conexão com **Postgre** e com **SQLite**, tendo a compatibilidade com um banco básico para desenvolvimento e fácil configuração (**SQLite**) e um banco open source, robusto para ambientes de homologação e produção (**Postgre**).

## Backend
Baseado no requisito não funcional de uma aplicação na linguagem **python**, serão utilizados os seguintes frameworks

### Django
Visando a escalabilidade do projeto, familiaridade com o *framework* e a gama de funcionalidades que o **Django** entrega foi escolhido como o *framework* principal do *backend*.

### Django Rest Framework
Criação e customização de **APIs REST**

### Django Simple History
Criação de Logs

### Django ORM
Framework padrão do django para a consulta e persistência dos dados

### Unit Test
Integrado ao django para a criação de testes unitários

### Factory Boy + Faker
Biblioteca para facilitar a criação de dados para testes


## Frontend
Baseado no requisito não funcional de uma aplicação no framework **React**, serão utilizados os seguintes frameworks para auxiliar o desenvolvimento.

Visando em otimizar a experiência do cliente, o frontend utilizará o menor número de bibliotecas possíveis para reduzir o tamanho dos arquivos buildados.

### React Router
Criação de rotas internas no React

### Axios
Comunicação HTTP

### SAAS
Tranpilador de SCSS para CSS

### Lodash
Pacote com diversos utilitários para auxiliar o desenvolvimento

#### Decisões de projeto
Clique [aqui](decisoes.md) para ver as decisões de projeto para a escolha dessa arquitetura.
