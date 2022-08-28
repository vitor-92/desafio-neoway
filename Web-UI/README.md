## Para rodar os testes
#### Dentro da pasta Web-UI, execute os seguintes comandos
```
    npm ci && \
    sudo npx playwright install-deps && \
    npx playwright test
```
#### Params
- Para rodar um arquivo específico
    - npx playwright test tests/createCart.spec.js
- Para rodar headhed/headless
    - npx playwright test --headed
- Debug mode
    - npx playwright test --headed --debug

## Ferramenta: Playwright
Utilizei o playwright para a automação dos cenários porque é um framework que traz agilidade no desenvolvimento e conta com muitos pontos positivos:
- Full paralelismo gratuito.
- Cross-browser. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox.
- Cross-platform. (Windows, Linux, and macOS, locally or on CI, headless or headed).
- Auto waits.
- Geração do relatório bem simples.
- Fácil integração com CI/CD.
- Simple visualização dos testes que estão sendo executados.
- Multi linguagem de programação (TypeScript, JavaScript, Python, .NET, Java.).
- Debug e Tools bem completos.
- Ótima documentação.
- Possibilidade de testes de API.

https://playwright.dev/

