# ImuniData

Este é um sistema de monitoramento de vacinação desenvolvido com Java Spring Boot e React.

## Dicionário de Dados

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | Long | Identificador único gerado automaticamente |
| municipio | String | Nome do município onde a vacina foi aplicada |
| estado | String | Sigla do estado (ex: SP, BA) |
| vacina | String | Nome da vacina (ex: BCG, Gripe, Polio) |
| dose | String | Tipo da dose (ex: 1ª dose, 2ª dose, Reforço) |
| quantidadeAplicada | String | Quantidade de doses aplicadas no registro |
| dataRegistro | String | Data do registro no formato AAAA-MM-DD |

## Mapeamento de Rotas

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /vacinacao | Lista todos os registros |
| GET | /vacinacao/{id} | Busca registro por ID |
| GET | /vacinacao/filtro/vacina?nome= | Filtra por tipo de vacina |
| GET | /vacinacao/filtro/estado?uf= | Filtra por estado |
| POST | /vacinacao | Cadastra novo registro |
| PUT | /vacinacao/{id} | Atualiza registro existente |
| DELETE | /vacinacao/{id} | Remove registro |

## Justificativa do Optional

O `Optional` é usado no Service e no Controller para evitar que surja um `NullPointerException` ao buscar registros por ID. Em vez de retornar `null` quando um registro não existe, o `Optional` força o código a tratar explicitamente o caso de ausência — resultando no retorno correto de `404 Not Found` em vez de um erro inesperado.

## Prints

<img width="1822" height="877" alt="image" src="https://github.com/user-attachments/assets/be0973c1-847b-44b7-b313-6acf1e1511a5" />
<img width="844" height="486" alt="Captura de tela 2026-05-21 014131" src="https://github.com/user-attachments/assets/f60f53b7-a3ff-4d35-a5d6-df8eba87277e" />
<img width="835" height="487" alt="Captura de tela 2026-05-21 014049" src="https://github.com/user-attachments/assets/50fabf16-dd90-49cd-80cb-7ffcaf2a9b2e" />
<img width="842" height="392" alt="Captura de tela 2026-05-21 013932" src="https://github.com/user-attachments/assets/88167adc-b633-4bd6-8637-d8a970dcabae" />
<img width="850" height="606" alt="Captura de tela 2026-05-21 013814" src="https://github.com/user-attachments/assets/a88a5079-b4b3-432a-bc8a-b73132ddbba9" />
<img width="840" height="467" alt="Captura de tela 2026-05-21 014729" src="https://github.com/user-attachments/assets/8807c02a-2795-421c-b849-f4881b9b7508" />
