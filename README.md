# Everledger Backend Test

## Tasks

- Setup a NestJS application.
- Add a health endpoint /health that shows the process uptime.
- Add a RESTful POST endpoint that takes the following diamond object, validates the fields, hashes the object and returns the hash (SHA256).

```
{
  "color": "G",
  "cut": "GD",
  "clarity": "VS1",
  "caratWeight": 0.8
}
```

## Design

### Health

- Assume returning uptime in milliseconds is sufficient.

### Diamonds

Process:

- `nest g resource diamonds` was very easy.
- class-validator problems: https://github.com/nestjs/nest/issues/589
- https://dev.to/raphaelbadia/fixing-class-validator-issues-in-a-new-nest-js-project-2547
- Sovled by installing class-validator and class-transformer.
- Needed to install class-transformer@^0.3.0 instead of latest due to nestjs dependencies.
