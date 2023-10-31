# FROM node:16

# EXPOSE 3001

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# CMD ["npm", "start"]

# ---------------------------------------------------------------------------

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

# Instale o MySQL
RUN apt-get update && apt-get install -y mysql-server

# Inicie o MySQL
RUN service mysql start

# Crie um banco de dados e um usuário (substitua 'seu_banco_de_dados', 'seu_usuario' e 'sua_senha' pelos valores desejados)
RUN mysql -e "CREATE DATABASE 'projetogeneration_db';"
RUN mysql -e "CREATE USER 'root'@'localhost' IDENTIFIED BY '123456';"
RUN mysql -e "GRANT ALL PRIVILEGES ON projetogeneration_db.* TO 'root'@'localhost';"

# Defina a variável de ambiente para a conexão do Node.js com o MySQL
ENV DB_HOST=localhost
ENV DB_USER=root
ENV DB_PASSWORD=123456
ENV DB_DATABASE=projetogeneration_db

# Comando para iniciar a aplicação Node.js
CMD ["npm", "start"]
