# report-spam-api

## API con Express y TypeScript

Crear un nuevo proyecto:

```bash
npm init --yes
npm install express morgan cors sqlite3
```

Instalar TypeScript:

```bash
npm install -g typescript@4.8.2
```

Agregar TypeScript al proyecto:

```bash
tsc --init
```

En el archivo tsconfig.json cambiar los parametros "target": "es6" y "outDir": "./build".

Instalar los tipos:

```bash
npm install @types/express -D
npm install @types/morgan -D
npm install @types/cors -D
npm install @types/sqlite3 -D
```

Compilar el proyecto:

```bash
tsc
```

Correr el proyecto compilado:

```bash
node build/index.js
```
