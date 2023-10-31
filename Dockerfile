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

# Use uma imagem MySQL
FROM mysql:latest

# Crie um banco de dados e um usuário (substitua 'projetogeneration_db', 'root' e '123456' pelos valores desejados)
ENV MYSQL_DATABASE=projetogeneration_db
ENV MYSQL_ROOT_PASSWORD=123456

# Comando para iniciar o MySQL
CMD ["--name", "mysql-container", "mysqld"]
