## Para rodar os testes localmente
#### Dentro da pasta API, execute os seguintes comandos
```
    npm ci && \
    sudo npx playwright install-deps && \
    npm playwright test
```
## Para rodar os testes no Docker
```
    docker build -t docker-neo-api .
    
    docker run -it docker-neo-api:latest npm run test
```
#### Dentro da pasta API, execute os seguintes comandos
```
    npm ci && \
    sudo npx playwright install-deps && \
    npm playwright test
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



