# Use uma imagem Node.js 16 como base
FROM node:16

# Exponha a porta 3001
EXPOSE 3001

# Diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do Node.js
RUN npm install

# Copie o restante dos arquivos para o diretório de trabalho
COPY . .
