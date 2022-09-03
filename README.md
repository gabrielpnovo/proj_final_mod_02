1. Objetivo da Documentação

O objetivo da documentação consiste em descrever as funcionalidades que esta API (Application Programming Interface ou Interface de Programação de Aplicação) disponibiliza para o usuário bem como a estrutura e a organização do projeto. 

2. Funcionalidades da API

Esta API permite ao usuário fazer as manutenções necessárias no banco de dados de produtos vendidos em seu marketplace. Com ela é possível consultar todos os produtos cadastrados, podendo fazer esta busca por ID ou Tipo de Produto. Permite também alterar alguma informação específica de um produto, além de criar novos e/ou excluí-los do banco de dados.

3. Estrutura do Projeto

O projeto está estruturado da seguinte forma:

3. 1 Servidor

A API está hospedada na porta 3300 no servidor local do computador. O arquivo “./server.js” é utilizado para estabelecer a conexão com o servidor.

3. 2 Framework API

Foi utilizado o framework “express” a fim de facilitar a criação da API. O arquivo “./src/app.js” é responsável por inicializar o express e exportar a sua instância para que as funcionalidades possam ser utilizadas pelos outros arquivos do projeto.

3. 3 Banco de Dados

O banco de dados do servidor pode ser verificado em “./src/database.js”. Neste arquivo é declarada a const tabelaRoupas contendo todos os produtos cadastrados no marketplace.

Para o cálculo do próximo ID, foi utilizado o método Math.max.apply() para descobrir qual é o maior ID do array e, então, somar 1 unidade a ele. Isso garante a unicidade do valor.

3. 4 Rotas

Uma rota é uma associação entre um método HTTP, uma URL e um método de um controlador, responsável por processar a requisição e gerar a resposta dessa requisição.

No arquivo roupasRoutes.js foi declarada a const routes que armazena todas as rotas existentes nesta API. 

O objetivo é construir uma API utilizando as boas práticas e seguindo o padrão CRUD. Para isso utilizará os seguintes métodos HTTP:

3. 4 1. POST: 

Através deste método será possível criar um produto no banco de dados. A rota para esta operação é app.post (‘/criar’, RoupaController.criar).

3. 4 2. GET:

Através deste método será possível buscar todos os produtos cadastrados ou buscar um produto específico indicando o ID, nome ou tipo. Existem três rotas para esta operação: 

- app.get(‘/listar’, RoupaController.listar);
- app.get(‘/listar/id’, RoupaController.listarPorID);
- app.get(‘/buscar’, RoupaController.buscar);
      
3. 4 3. PUT:

Através deste método será possível alterar um produto específico. A rota para esta operação é app.put(‘/atualizar/: id’, RoupaController.atualizar).

3. 4 5. DELETE:

Aravés deste método será possível excluir um produto do banco de dados. A rota para esta operação é app.delete(‘/deletar/: id’, RoupaController.deletar).


4. Organização do Projeto

Para a organização deste projeto foi utilizado o modelo de arquitetura MVC que consiste em um padrão de arquitetura de software responsável por contribuir na otimização da velocidade entre as requisições feitas pelo comando dos usuários. Os componentes que acompanham essa arquitetura de software e o detalhamento de como foram utilizados no projeto são descritos abaixo:

4. 1 Model ou Modelo:

Sua responsabilidade é gerenciar e controlar a forma como os dados se comportam por meio das funções, lógica e regras de negócios estabelecidas. Ele é o detentor dos dados que recebe as informações do Controller, valida se ela está correta ou não e envia a resposta mais adequada. No projeto atual pode ser encontrado em “./src/models/Roupa.js”. Abaixo serão descritos os métodos criados no modelo.

4. 1 1. findById (id): 

Recebe como parâmetro o id e, a partir dele, retorna o elemento correspondente na tabelaRoupa.

4. 1 2. findIndexById (id): 

Recebe como parâmetro o id e, a partir dele, retorna a posição do elemento correspondente na tabelaRoupa.

4. 1 3. findAndDelete (id):

O objetivo desse método é deletar determinado item da tabelaRoupa. Para fazê-lo, primeiramente recebe como parâmetro o id e verifica se há correspondência na tabelaRoupa a partir do método findIndexById(id). Se não, retorna o booleano false. Se sim, aplica o método splice() para remover o item da tabela.

4. 1 4. findAndUpdtate (body, id):

O objetivo desse método é atualizar dados de determinado item da tabelaRoupa. Para isso, recebe como parâmetro o corpo da requisição e o id do item que se deseja atualizar. Para cada uma das chaves do corpo da requisição, busca a posição do item na tabelaRoupa e o atualiza de acordo com os valores de cada uma das chaves.

4. 1 5. verificaBody (reqBody):

O objetivo desse método é verificar se alguma chave passada no corpo da requisição não corresponde à alguma propriedade definida no constructor. Para isso, armazena em listaPropriedades as chaves do corpo da requisição e percorre cada uma delas a fim de verificar a existência (ou não) nas propriedades do constructor. Se não existir, retorna o booleano false. Caso contrário, retorna o booleano true.

4. 1 6. Constructor:

O constructor é um método utilizado para criar e inicializar um objeto criado a partir de uma classe.

O método construtor está declarado no arquivo roupa.js e recebe como argumento nome, tipo, valor, descrição e sustentavel. Suas propriedades são this.id, this.nome, this.tipo, this.valor, this.descricao e this.id.

4. 1 7. save():

O objetivo desse método é salvar um novo produto na tabelaRoupa. Primeiramente é verificado se o id do item que se está querendo salvar já existe na tabelaRoupa. Se não, utiliza o método push() para incluir o item na tabelaRoupa, caso contrário, não executa nada.

4. 2 Controller ou Controlador:

É responsável por intermediar as requisições enviadas pelo View com as respostas fornecidas pelo Model, processando os dados que o usuário informou e repassando para outras camadas. No projeto atual, pode ser encontrado no caminho “./src/controller/roupaController.js”.

Neste projeto, foram utilizados métodos baseados no modelo CRUD, utilizando suas quatro operações básicas: Create (criar), Read (ler), Update (atualizar) e Delete apagar). Abaixo descreveremos como cada uma destas operações estão estruturadas:

4. 2 1. Criar:

Nesta operação o método Criar vai receber como parâmetro as informações constantes no corpo da requisição.

Foi utilizado o método Object.keys para armazenar na variável do tipo Array listaPropriedades as informações recebidas no corpo da requisição.

O método verificaBody() é responsável por verificar se os campos informados na requisição estão de acordo com os dados necessários para criar o item (definidos no constructor do modelo Roupa.js), garantindo que não seja possível criar um item com outra informação que não esteja dentro do constructor.

Se os campos estiverem incorretos, exibirá o status 400 e a mensagem “Campos incorretos! Verifique a documentação!”.

Há uma segunda verificação para garantir que não está faltando nenhuma propriedade necessária para a criação de um produto. Esta verificação é feita através do método includes, onde é validado se, no array listaPropriedades, estão incluídas as propriedades “Nome”, “Tipo”, “Valor” e “Descrição”. Se todas as condições forem atendidas, serão armazenadas nas variáveis nome, tipo,  valor e descrição as informações recebidas no corpo da requisição (req.body). Caso contrário será retornado ostatus 400 e a mensagem “Os campos “nome”, “tipo” e “valor” são obrigatórios!”.

A criação da instância para o novo produto é feita através do operador new aplicado na classe Roupa.

É possível fazer a inclusão do novo produto no banco de dados através do método save() aplicado à instância criada a partir do classe Roupa. Primeiramente, o método save() verifica se o ID deste produto criado já existe na tabelaRoupa e, se não existir, irá utilizar o método push() para inserir o novo produto no array tabelaRoupa.

Por fim, exibirá o status 200 e a mensagem “Produto criado com sucesso” e retornará a tabelaRoupa com os produtos que estavam cadastrados e este novo produto incluído.

4. 2 2. Listar:

Nesta operação o método listar terá somente um tipo de retorno, que será toda a tabelaRoupa.

4. 2 3. Buscar:

Nesta operação será filtrado um produto de acordo com a query string especificada na URL de conexão à API.

4. 2 4. ListarPorID:

Nesta operação o ID procurado vai ser informado como parâmetro para o método findByID. Desta forma, irá procurar na tabelaRoupa o produto correspondente a este ID e, se houver correspondência, irá armazená-lo na variável produto.
Se a busca for feita por um ID que não existe, irá retornar o status 400 e a mensagem “Não foi encontrado nenhum item”.
Se encontrar o ID, vai retornar o status 200 e as informações do produto.

4. 2 5. Atualizar:

A primeira etapa desta operação é verificar, através do método findById, se o ID informado na requisição existe em tabelaRoupa.

Se não existir, retorna o status 400 e a mensagem “Item de ID xxx não existe!”.
Através do método verificaBody também será validado se todos os campos informados na requisição estão corretos. Se houver algum campo incorreto, retorna o status 400 e a mensagem “Você forneceu campos inválidos. Verifique a documentação!”.

Se os campos estiverem corretos, será executado o método findAndUpdate(corpoRequisição, id). O método é responsável por atualizar os campos do item informado de acordo com os valores de cada uma das chaves da requisição. Por fim, retorna o status 200 e a mensagem “Campos atualizados com sucesso!”.

4. 2 6. Deletar:

O objetivo dessa operação é deletar determinado item da tabelaRoupas de acordo com o ID informado. Para isso, foi criado o método estático findAndDelete(). Primeiramente, esse método verifica, através do método findIndex(), se o item existe em tabelaRoupas. Se o produto não existir, ou seja, se este método retornar o valor -1, será retornado o status 400 e a mensagem “Item não existe.”.

Se o produto existir, o produto será removido da tabelaRoupas através do método splice() e, então, retorna o status 200 e a mensagem “Item XXXX deletado com sucesso!”

4. 3 View ou Visão:

Está na linha de frente da comunicação com usuário e é responsável por transmitir questionamentos ao controller e entregar as respostas obtidas ao usuário. É a parte da interface que se comunica, disponibilizando e capturando todas as informações do usuário.