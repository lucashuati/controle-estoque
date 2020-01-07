# Executando o projeto

Como descrito na arquitetura a stack principal desse projeto é **React** + **Django**, com isso as dependências desse projeto são:



| Dependência | Versão | Observação |
| -------- | -------- | -------- |
| Python     | 3.6+     | Obrigatório     |
| Node     | 13+     | Obrigatório     |
| Yarn ou NPM     | -     | Obrigatório     |
| pip     | -     | Obrigatório     |
| Virtualenv     | -     | Recomendável     |

## Variavéis de ambiente
Para o correto funcionamento da aplicação é necessária a configuração de algumas variavéis de ambiente:



| Nome | Descrição | Padrão |
| -------- | -------- | -------- |
| SECRET_KEY     | Chave de controle solicitada pelo Django     | <string>     |
| DJANGO_ENV     | Seleciona o ambiente que a aplicação irá ser executada     | DEVELOPMENT ou PRODUCTION     |
| ALLOWED_HOSTS     | Endpoints que terão acesso a aplicação     | <endpoint1>,<endpoint2>,...     |
| DATABASE     | Seleciona qual database será executada na aplicação     | sqlite     |
| REACT_APP_API_HOST | Endpoint do backend | <endpoint>


## Executando o backend
#### Intalando as dependências do projeto

```shell=
pip install -r requirements.txt
```

#### Executando os migrations

```shell=
python manage.py migrate
```

#### Criando dados para teste
```shell=
python manage.py loaddata */fixtures/*.json
```

#### Executando os testes unitários
```shell=
python manage.py test
```

#### Executando a aplicação
```shell=
python manage.py runserver
```

## Executando o frontend
#### Intalando as dependências do projeto

```shell=
yarn install
```

#### Executando a aplicação
```shell=
yarn start
```
