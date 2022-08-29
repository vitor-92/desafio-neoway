## Instalação do K6 para o linux
```
sudo gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
```
```
echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
```
```
sudo apt-get update
```
```
sudo apt-get install k6
```

## Rodando o Script

    - Dentro da pasta Performance-k6, rodar o comando:
```    
    - k6 run scenarios/users.js
```
## Rodando grafana e k6

    - Dentro da pasta Performance-k6, rodar o comando:
```   
docker-compose up -d

```    
```    
k6 run --out influxdb=http://localhost:8086/k6 scripts/script.js

```

## Visualizar resultado: [LINK](http://localhost:3000/d/k6/k6-load-testing-results?orgId=1&refresh=5s)



#### Instalação K6 outros SOs
    - https://k6.io/docs/getting-started/installation/
