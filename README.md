# care-petz
Este projeto tem como objetivo implementar passo a passo e de forma did�tica uma aplica��o web 
de agendamento de servi�os para pets por um profissional autonomo.

O frontend da aplica��o ser� desenvolvido com Angular e o backend simulado pela implementa��o de uma API Fake, usando o JSON Server.


## Endere�o de Deploy - GitHub Pages
https://github.com/dmatrixxBR/care-petz


## Prot�tipo
https://www.figma.com/proto/N4EdtUFZ6KKBRVjEfcLaQa/CarePetz?type=design&node-id=8-124&t=4LfgHOnvf8dwDktZ-0&scaling=contain&page-id=6%3A2&starting-point-node-id=8%3A124

## Checklist

- [x] Criar o reposit�rio no GitHub com a estrutura do Gitflow, ou seja, branches main e develop. 
- [x] Usar componentes de algum framework CSS (Bootstrap, Materialize ou outro)
- [x] Apresentar as telas com layout responsivo usando ou n�o algum framework CSS.
- [x] Construir p�ginas web com o conceito de componentes.
- [x] Criar o layout da aplica��o com componentes, ou seja, o cabe�alho e rodap� precisam ser componentes.
- [x] Usar pelo menos dois tipos de data-binding (Interpolation, Property Binding, Event Binding e Two Way Data Binding).
- [ ] Passar dados via hierarquia de componentes, ou seja, usando @Input ou @Output. 
- [ ] Mapear componentes � rotas no m�dulo de rotas.
- [ ] Criar navega��o entre p�ginas por meio de rotas.
- [ ] Passar dados entre componentes que representam diferentes telas via par�metros de rotas. 
- [ ] Validar campos do formul�rio com REGEX e apresentar os erros.
- [ ] Desabilitar o bot�o de submit enquanto o formul�rio est� inv�lido.
- [ ] Fazer requisi��es a API com tratamento da resposta com Promises ou Observables.
- [ ] Cadastrar uma entidade no JSON Server.
- [ ] Apresentar uma lista de dados com a diretiva estrutural ngFor.
- [ ] Usar a diretiva ngIf. 
- [ ] Formatar a apresenta��o de dados com Pipes. 
- [ ] Build e deploy da aplica��o. 

## Manual de execu��o
- Clonar o reposit�rio com `git clone`
- Fazer checkout no branch `develop` que cont�m as modifica��es mais recentes
- Abrir o projeto no editor Visual Studio Code (VS Code)
- Abrir um terminal pelo VSCode e executar a API Fake (JSON Server) via o seguinte comando:
    - Comando: `npm run json-server --watch db.json --routes routes.json`
    - O comando deve ser aplicado no diret�rio raiz do projeto, ou seja, que cont�m o arquivo `db.json` e `routes.json`.
- Abrir um novo terminal pelo VSCode e ent�o executar o projeto Angular
    - Comando: `ng s`
