# API Endpoints Documentation

## POST /leaderboard/submit

Envia uma pontuação para o leaderboard.

### Request Body

```json
{
  "player_id": "string",
  "score": "number"
}
```

### Response

```json
{
  "id": "number",
  "player_id": "string",
  "name": "string",
  "score": "number",
  "app_id": "string",
  "created_at": "string"
}
```

## GET /leaderboard/top

Obtém as 5 melhores pontuações do leaderboard.

### Response

```json
[
  {
    "id": "number",
    "player_id": "string",
    "name": "string",
    "score": "number",
    "app_id": "string",
    "created_at": "string"
  },
  ...
]
```

## GET /leaderboard/:player_id/best

Obtém a melhor pontuação de um jogador específico.

### Response

```json
{
  "id": "number",
  "player_id": "string",
  "name": "string",
  "score": "number",
  "app_id": "string",
  "created_at": "string"
}
```

## GET /leaderboard/:player_id/scores

Obtém todas as pontuações de um jogador específico

### Response

```json
[
  {
    "id": "number",
    "player_id": "string",
    "name": "string",
    "score": "number",
    "app_id": "string",
    "created_at": "string"
  },
  ...
]
```
