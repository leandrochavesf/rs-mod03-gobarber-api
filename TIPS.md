# Módulo 02 - Iniciando backend do GoBarber

## Installation Steps

1. Iniciar o package.json com o Yarn
   `yarn init -y`

2. Instalar o express
   `yarn add express`

3. Criar a pasta src, e dentro dela os arquivos routes.js, app.js e server,js

4. Configurar o arquivo app.js

5. Instalar o Sucrase e o Nodemon como dependencia de desenvolvimento do App
   `yarn add sucrase nodemon -D`

6. Alterar as inportações dos arquivos para o modelos do JS6 import/export

7. Criar arquivo de configuração do nodemon para trabalhar com o sucrase

8. Criar a linha de chamada script no package.json

9. Instalar o eslint
   `yarn add eslint`

10. Rodar o eslint
    `yarn eslint --init`

11. Como o eslint baixa dependencias via npm, excluir o package-lock.json e
    rodar um yarn no temrinal
    `yarn`

12. Instalar o plugin do ESlint no VSCode

13. Realizar as configurações de autofix do eslint no Preferences do VSCode

14. Adicionar as Rules do eslint no arquivo .eslintrc

15. Instalar o Prettier
    `yarn add prettier eslint-config-prettier eslint-plugin-prettier -D`

16. Declarar o prettier em extends, plugin e rules do .eslintrc

17. Criar o arquivo .prettierrc para sobscrever algumas regras de formatação
    aplicadas equivocadamente.

18. Corrigir todos os arquivos iniciais com o eslint automaticamente
    `yarn eslint --fix src --ext .js`

19. Configurar o .editorconfig

20. Instalar o sequelize
    `yarn add sequelize`

21. Instalar a CLI do sequelize como dependencia de desenvolvimento
    `yarn add sequelize-cli -D`

22. Criar o arquivo .sequelizerc para as configs e configura as paths necessárias

23. Cria o arquivo src/config/database.js

24. Por o usar o sequelize com Postgress, é necessário as seguintes dependências:
    `yarn add pg pg-hstore`

25. Criar os diretorios e rodar a criação da Migration de usuários usando o
    CLI do sequelize
    `yarn sequelize migration:create --name=create-users`

26. Desenvolver e declarar os campos de cada coluna da tabela

27. Configurado a migration, rodar ela pelo CLI
    `yarn sequelize db:migrate`

28. Criar o model de Users em app/models/User.js

29.
