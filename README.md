# care-petz
Este projeto tem como objetivo implementar passo a passo e de forma did?tica uma aplicação web 
de agendamento de serviços para pets por um profissional autonomo.

O frontend da aplicação será desenvolvido com Angular e o backend simulado pela implementação de uma API Fake, usando o JSON Server.


## Endereço de Deploy - GitHub Pages
https://dmatrixxbr.github.io/care-petz/

## Video Explicativo do Desenvolvimento do Projeto
https://www.youtube.com/watch?v=udVpMb6o7mE


## Protótipo
https://www.figma.com/proto/N4EdtUFZ6KKBRVjEfcLaQa/CarePetz?type=design&node-id=8-124&t=4LfgHOnvf8dwDktZ-0&scaling=contain&page-id=6%3A2&starting-point-node-id=8%3A124

## Checklist

- [x] Criar o repositório no GitHub com a estrutura do Gitflow, ou seja, branches main e develop. 
- [x] Usar componentes de algum framework CSS (Bootstrap, Materialize ou outro)
- [x] Apresentar as telas com layout responsivo usando ou não algum framework CSS.
- [x] Construir páginas web com o conceito de componentes.
- [x] Criar o layout da aplicação com componentes, ou seja, o cabeçalho e rodapé precisam ser componentes.
- [x] Usar pelo menos dois tipos de data-binding (Interpolation, Property Binding, Event Binding e Two Way Data Binding).
- [x] Passar dados via hierarquia de componentes, ou seja, usando @Input ou @Output. 
- [x] Mapear componentes ? rotas no módulo de rotas.
- [x] Criar navegação entre páginas por meio de rotas.
- [x] Passar dados entre componentes que representam diferentes telas via parâmetros de rotas. 
- [x] Validar campos do formulário com REGEX e apresentar os erros.
- [x] Desabilitar o botão de submit enquanto o formulário está inválido.
- [x] Fazer requisições a API com tratamento da resposta com Promises ou Observables.
- [x] Cadastrar uma entidade no JSON Server.
- [x] Apresentar uma lista de dados com a diretiva estrutural ngFor.
- [x] Usar a diretiva ngIf. 
- [x] Formatar a apresentação de dados com Pipes. 
- [x] Build e deploy da aplicação. 

## Manual de execução
- Clonar o repositório com `git clone`
- Fazer checkout no branch `develop` que contém as modificações mais recentes
- Abrir o projeto no editor Visual Studio Code (VS Code)
- Abrir um terminal pelo VSCode e executar a API Fake (JSON Server) via o seguinte comando:
    - Comando: `npm run json-server --watch db.json --routes routes.json`
    - O comando deve ser aplicado no diretório raiz do projeto, ou seja, que contém o arquivo `db.json` e `routes.json`.
- Abrir um novo terminal pelo VSCode e então executar o projeto Angular
    - Comando: `ng s`
