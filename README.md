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
