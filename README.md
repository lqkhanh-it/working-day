## Getting Started

First, run the development server:

```bash
docker-compose up -d

yarn install

yarn dev
```

migrate database

```bash
npx prisma format 

npx prisma migrate dev
```


build

```bash
docker build -t nextjs-docker .
docker images
docker run -p 3000:3000 nextjs-docker
```