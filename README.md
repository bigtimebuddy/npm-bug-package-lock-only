# To Reproduce

After bump versions in the repository, doing `npm install --package-lock-only`.

## Successful

```bash
npm i npm@7.20.2 -g && npm test
```

```bash
npm i npm@8 -g && npm test
```

## Failed

```bash
npm i npm@9 -g && npm test
```