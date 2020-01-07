# Decisões de Projeto

## Framework Backend
O motivo da escolha do Django, como descrito na arquitetura foi a gama de funcionalidades o mesmo trás, além de uma estrutura própria que facilita a escalabilidade para projetos maiores.

Outro framework que era uma possível escolha era o Flask mas por se tratar de um microframework, acreditei que perdia para o Django em relação a uma escalabilidade, além de depender de framework de terceiros.

## Modelagem do banco

Em um primeiro momento, só foi implementado um CRUD básico de cadastro com uma tabela para persistir os produtos. Porém, foi exemplificado uma modelagem para facilitar o controle de cada unidade do produto de um sistema de controle de estoque. Por exemplo, conseguir monitorar em qual "galpão" a unidade do produto está.

## Abordagem do Frontend

No frontend foi priorizado utilização de componentes mais leves, para garantir a experiência do usuário. Com isso, uma menor quantidade de dependências que facilitam o desenvolvimento como react-strap, react-materialize, bootstrap, etc.

Outra abordagem futura, seria modularizar o código buildado usando o code split, gerando diversos arquivos de builds.

Foi optado um padrão de código usar somente function components como hooks.

## Futuras implementações

- Adicionar suporte ao postgre
- Melhoria do feedback ao usuário nos formulários
- Adicionar filtros e paginação nas tabelas
- Adicionar autenticação
- Criar containers para facilitar a implantação da aplicação
- Adicionar testes unitários ao frontend

#### Executando o projeto
Clique [aqui](executando.md) para ver como executar esse projeto.
