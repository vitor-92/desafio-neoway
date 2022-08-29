## Para rodar os testes localmente
#### Dentro da pasta Web-UI, execute os seguintes comandos
```
    npm ci && \
    sudo npx playwright install-deps && \
    npm playwright test
```

## Para rodar os testes localmente
#### Dentro da pasta Web-UI, execute os seguintes comandos
```
    docker build -t docker-neo-web-ui .
    docker run -it docker-neo-web-ui:latest npm run test
```
    
#### Params
Para visualizar parâmetros
```
npm playwright test --help
```


## Ferramenta: Playwright
Utilizei o playwright para a automação dos cenários porque é um framework que traz agilidade no desenvolvimento e conta com muitos pontos positivos:
- Full paralelismo gratuito.
- Cross-browser. Engines(Chromium, WebKit, and Firefox).
- Cross-platform. (Windows, Linux, and macOS, locally or on CI, headless or headed).
- Auto waits.
- Geração do relatório bem simples.
- Fácil integração com CI/CD.
- Simple visualização dos testes que estão sendo executados.
- Multi linguagem de programação (TypeScript, JavaScript, Python, .NET, Java.).
- Debug e Tools bem completos.
- Ótima documentação.
- Possibilidade de testes de API.

[Playwright](https://playwright.dev/)

