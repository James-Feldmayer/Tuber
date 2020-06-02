
# Quickstart
You need to follow these steps carefully, every step is required.

# Install
[install docker](https://www.docker.com/products/docker-desktop)

sudo docker pull microsoft/mssql-server-linux:latest

# Clone
git clone https://gitlab.com/the_jukebox/csci334.git

cd csci334

# Database
cd database

sudo docker-compose -f stack.yml up

sudo mssql -s localhost -u sa -p myPassw0rd

CREATE DATABASE tuber_database; 

USE tuber_database;

.run dbcreate.sql

.run dbload.sql

.quit

# Dotnet
cd ../tuber

dotnet build

dotnet run


