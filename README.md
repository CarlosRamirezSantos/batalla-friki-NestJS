# Batalla Friki (NestJS + Prisma)

Proyecto backend en NestJS con Prisma y cliente web simple en `client/index.html`.

## Requisitos

- Node.js 18+ (recomendado 20+)
- Yarn
- PostgreSQL

## 1. Clonar e instalar dependencias

```bash
git clone <URL_DEL_REPO>
cd batalla-friki
yarn install
```

## 2. Configurar variables de entorno

1. Crea tu archivo `.env` (puedes copiar `.env.example`).
2. Ajusta al menos estas variables:

```env
DATABASE_URL="postgresql://postgres:tu_password@localhost:5433/batallaFriki?schema=public"
PORT=3000
JWT_SECRET=pon_aqui_un_secreto
CORS_ORIGIN=http://127.0.0.1:5501
```

Notas:
- `DATABASE_URL` debe apuntar a tu instancia real de PostgreSQL.
- Si abres el frontend en otro puerto/origen, actualiza `CORS_ORIGIN`.

## 3. Aplicar migraciones y cargar datos iniciales

```bash
yarn prisma migrate deploy
yarn seed
```

Si estás en desarrollo y quieres generar migraciones nuevas:

```bash
yarn prisma migrate dev --name init
```

## 4. Arrancar el backend

```bash
yarn start:dev
```

API por defecto: `http://localhost:3000`

## 5. Abrir el frontend

El frontend está en `client/index.html`. Debe abrirse con servidor local (no con `file://`).

Ejemplo con VS Code Live Server:
- Abrir `client/index.html`
- Ejecutar Live Server en `http://127.0.0.1:5501`

Ese origen coincide con el valor por defecto de `CORS_ORIGIN`.

## Credenciales de administrador (seed)

Usuario admin creado por seed:

- Email: `admin@batallafriki.com`
- Contraseña: `123456`

También se crea un usuario normal:

- Email: `goku@batallafriki.com`
- Contraseña: `123456`

## Tests

### Unitarios (Jest)

```bash
yarn test
```

### E2E personalizados

Con backend arrancado en `http://localhost:3000`:

```bash
node test/e2e/helpers/run-tests.cjs
```

Si quieres otro host:

```bash
set API_URL=http://localhost:3000 && node test/e2e/helpers/run-tests.cjs
```

## Scripts útiles

- `yarn start:dev`: backend en modo desarrollo
- `yarn build`: compilar
- `yarn start:prod`: ejecutar build
- `yarn seed`: ejecutar seeds
- `yarn test`: tests unitarios
