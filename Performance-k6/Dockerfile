
FROM grafana/k6

WORKDIR /performance
COPY /scripts/script.js /performance/scripts/

RUN k6 run scenarios/users.js

