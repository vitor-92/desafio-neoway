## Rodando os testes localmente
#### Dentro da pasta API, execute os seguintes comandos para a instalação de algumas dependências e execução dos testes
```
    npm ci && \
    sudo npx playwright install-deps && \
    npm playwright test
```
## Para rodar os testes utilizando Docker, você precisa buildar a imagem e executá-la
#### Dentro da pasta  API, execute os seguintes comandos
```
    docker build -t docker-neo-api .
    
    docker run -it docker-neo-api:latest npm run test
```
#### Params
Para visualizar parâmetros
```
npm playwright test --help
```

## Ferramenta: Playwright
Utilizei o playwright tanto para Web-UI quanto para API.

[Motivos](https://github.com/vitor-92/desafio-neoway/tree/master/Web-UI#readme)

[Playwright](https://playwright.dev/)



