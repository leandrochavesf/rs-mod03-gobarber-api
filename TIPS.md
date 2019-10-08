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

29. Criar o arquivo database/index.js

30. Importar o arquivo database/index.js no arquivo app.js

31. Criar o controller app/controller/UserController.js

32. Importar UserController em Routes.js e configurar rota

33. Desenvolver no UserController a identificação de duplicaçnao de emails

34. Enxugar o retorno de parametros para apenas alguns determinados em UserController.js

35. Instalar o bcrypt para criar hashs para as senhas
    `yarn add bcryptjs`

36. Codar o model user para dar hash nas senhas do usuário

37. Instalar o Json Web Token
    `yarn add jsonwebtoken`

38. Criar o Controller SessionController.js

39. Criar a rota para acessar o SessionController

40. Criar o arquivo auth.js e colocar dados de autenticação da aplicação

41. Criar o middleware para autenticação em app/middlewares/auth.js

42. Criar o metodo de update de usuário em UserControlller.js

43. Instalar o Yup para trabalhar com validações na aplicação
    `yarn add yup`

44. Aplicar aos métodos onde há entrada do usuário (User e Session Controllers)

45. Instalar o multer para lidar com arquivos na aplicação
    `yarn add multer`

46. Criar a pasta tmp/uploads na raiz da aplicação

47. Crie a configuração do multer em app/config/multer.js

48. Configurar o multer

49. Adicionar os parametros de arquivos e rotas no routes.js

50. Criar o FileController e ajustar as rotas para chamar o Controller

51. Criar uma nova tabela no BD para Files usando as migrations
    `yarn sequelize migration:create --name=create-files`

52. Configurado a migration de files, rodar ela pelo CLI
    `yarn sequelize db:migrate`

53. Criar o model para Files

54. Não esquecer de importar o model no arquivo /app/database/index.js

55. Criar uma migration para adicionar uma nov coluna na tabela de Users
    `yarn sequelize migration:create --name=add-avatar-field-to-users`

56. Rodar novamente
    `yarn sequelize db:migrate`

57. Criar uma associação no Model User

58. Configurar em /app/database/index.js a associação criada

59. Agpra, trabalhar no Controller de Providers, ciar o /app/controllers/ProviderController.js

60. Criar um campo virtual no Model de file para disponibilizar uma URL do avatar

61. Declarar no app.js o middleware para uso de arquivos estáticos

62. Criar a Migration de agendamentos
    `yarn sequelize migration:create --name=appointments`

63. Rodar novamente
    `yarn sequelize db:migrate`

64. Criar o model para appointments

65. Não esquecer de configurar em /app/database/index.js a associação criada

66. Criar o controller de Appointment e configurar a rota

67. Instalar library para lidar com datas
    `yarn add date-fns@next`

68. Desenvolver verificações de horário nas datas enviadas ao usuário

69. Criar o método index no AppointmentController.js

70. Criar o controller ScheduleController.js e configurar rotas

71. Agora, será instanciado um banco não relacional para isso, será usado o docker
    passando o seguinte comando para instalar o container no MongoDb
    `docker run --name mongobarber -p 27017:27017 -d -t mongo`

72. Instalar a library que se comunica com o MongoDB
    `yarn add mongoose`

73. Configurar a conexão do Mongoose no database/index.js

74. Para trabalhar com o BDs não relacionais, vamos criar schemas, que são
    similares aos models em sua funcionalidade, onde determinam como os dados
    serão injetados dentro do BD. Para isso será criado e configurado o arquivo
    app/schemas/notification.js

75. Aplicar as notificações ao AppointmentController.js

76. Criar a app/controllers/NotificationController.js e configurar o método
    index para listar as notificações

77. Criar o metodo update de NotificationController.js para setar as notificações
    já lidas.

78. Então criar o método destroy para cancelamento de agendamento no AppointmentController.js

79. Instalar o nodemailer
    `yarn add nodemailer`

80. Criar o arquivo app/config/mail.js e adicioanr as configurações do nodemailer

81. Criar conta no mailtrap e adicionar os dados a app/config/mail.js

82. Criar o arquivo lib/Mail.js que de fato terá as funções de envio de email

83. Configurar o AppointmentController.js para o envio de email nos métodos necessários
