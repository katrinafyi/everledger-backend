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
