
export const items =[
    {
        nameItem:'HI/BYE',
    values:
    [{header:'HI', text:'Olá, eu sou ..., aguarde um momento enquanto estou analisando sua solicitação.'},
    {header:'BYE', text:'Vou finalizar o atendimento por aqui. Qualquer outra eventualidade só nos contatar via chatbot. Um abraço e bom trabalho pra ti.'},
    {header:'DIRECIONAMENTO PADRÃO', text:'Poderiam ajudar a loja com a situação? Por gentileza.'}]
    },
    
    {
        nameItem:'PDV', values:[
            {header: "RECONECTAR CABOS", text: `Realiza o seguinte procedimento: Desliga o pdv, desconecta os cabos e adaptadores dele, deixa 5 min desligado desta forma para após reconectar tudo e volta a ligar o PDV.`},
            {header: "INFO PDV", text: "Me informa o número do PDV (Ex.: PDV001)"},
            {header:'INVENT/SÉRIE', text: 'Me diz o número de inventário/série do PDV. No Equipamento terá uma etiqueta com essa numeração. Pode ser que ela se encontre atrás do monitor. Aguardo esta informação.'},
            {header: "HOSTNAME PDV", text: "Insere um mouse no pdv, pressiona o botão direito do mouse na tela do pdv, escolhe a opção console e após me envia uma foto da tela do PDV para eu poder observar o número dele, por gentileza."},
            {header: "ANÁLISE", text: "Vou analisar o PDV, só um momento."},
            {header: "CONSULTA IMP", text: "Preciso que reconecte o cabo usb da impressora. Assim que realizar o procedimento, me sinaliza por gentileza. Estou monitorando."},
            {header: "PROBLEMA TOUCH", text: "Faz um pequeno vídeo demonstrando o problema no touch e me envia, por gentileza."},
            {header: "PROBLEMA SAT", text: "Me envia uma foto dos leds do SAT para eu poder analizar, por gentileza."},
            {header: "INFO SAT", text: "Me envia uma foto do número de série/inventário do SAT."},

        ]
        
    },
    {
        nameItem:'MOBILE',
    values:[
        {header:'SOLUÇÃO GENÉRICA', text:'Realiza o seguinte procedimento: Desliga o mobile, remove a bateria, aguarda 2 min com ele desta forma para após ligar o dispositivo e realizar um teste.'},
        {header:'CONEXÃO', text:'Realiza o seguinte procedimento: Ir para a pagina HOME>selecionar o app HUB> HUB novamente > Na pagina da conta ir em > Este Dispositivo > Perfis > Nesta opção aparecerá todos os perfis disponíveis para o device selecionar o com nome: Wifi - Loja (NOME DA FILIAL) > Depois selecionar reaplicar perfil > Ira aparecer um balão de confirmação clicar em REAPLICAR.'},
        {header:'NÚMERO SÉRIE/INVENT', text:'Me informa o número de série/inventário do mobile impactado. Geralmente tem uma etiqueta com esta numeração atrás do equipamento, caso não tenha, será necessário remover a bateria do mesmo e enviar uma foto das etiquetas internas do dispositivos (ficam atrás da bateria). Aguardo esta informação'},
        {header:'NÚMERO MOBILE', text:'Qual é o número do mobile? Ex.: 600, 601... Qual número de inventário/série do mobile?'},
        {header:'REINSTALAR APLICATIVO', text:'Aguarde um momento, irei realizar a reparo na aplicação'},
        {header:'ERRO', text:'Me envia uma foto do erro gerado, por gentileza. Apenas um mobile apresenta este mesmo problema em loja?'},
        {header:'PROBLEMAS SAT PDV', text:'Tem algum pdv em loja com erro no SAT?'},
        {header:'IMP WIFI NÃO FUNCIONA', text:'Desliga a impressora, tira ela da tomada, tira o adaptador de rede, deixe ela desta forma por uns 5 min. Após esse processo, liga a impressora, deixa ela uns 2 min ligado e somente após esse tempo insere o adaptador de rede, aguardar mais 2 min e realiza o teste novamente.'},
        {header:'PROMELA DE ACESSO COLAB', text:'Me informa a matrícula do colaborador impactado, por gentileza.'},
    ]},
    {
        nameItem:'PC',
    values:[
        {header:"AGUARDE",text:"Aguarda um momento, estou analisando sua solicitação."},
        {header:"IP",text:"Me informa o ip do micro, por gentileza."},
        {header:"INVENT/SÉRIE",text:"Me informa o número de série/inventário do computador, geralmente tem uma etiqueta colada no próprio micro, preciso de uma foto contendo esta numeração."},
        {header:"ERRO APLICAÇÃO",text:"Me envia uma foto/vídeo do erro que está sendo gerado."},
        {header:"FINALIZAÇÃO LIMP MICRO",text:"Realizado otimização do sistema, utiliza o computador normalmente. Se o problema for muito persistente, retorna o contato conosco para podermos analisar melhor a questão."},
        {header:"RECONECTAR CABOS",text:"Desliga o computador, reconecte todos os cabos e adaptadores, após liga novamente o computador para podermos analisar."},
        {header:"NÃO LIGA",text:"Deconecta o cabo de energia do computador, tenta conectar na mesma tomada que liga o computador algum carregador de celular, analisa se o carregador apresenta ter eneriga (esse passo é importante para podermos analisar se tem energia na tomada que liga o computador). Aguardo você nesse processo."},
        {header:"SEM REDE",text:"O computador é conectado via cabo de rede? Se sim, tenta reconectar o cabo de rede do computador, analisa se no plug do cabo de rede acende alguma coloração de led verde ao conectar. Assim que realizar o procedimento me sinaliza."},
    ]},
    
    {
        nameItem:'SCANNER',
    values:[
        {header:'RECONECTAR CABO',text:'Reconecta o cabo usb da Scanner. Troca de porta usb da scanner, tenta conectar em uma porta usb que fica atrás do computador, aguardo você.'},
        {header:'ERRO SMARTOUCH VERMELHO',text:'Fecha a tampa da scanner, após abre e insere uma folha dentro do equipamento para testarmos. É importante que o equipamento esteja ligado. Assim que realizar este procedimento, me sinaliza'},
        {header:'ERRO DISPLAY',text:'A scanner apresenta algum led em vermelho com numeração no display? Me envia uma foto/vídeo demonstrando este erro no display'},
        {header:'INVENT/SÉRIE?',text:'Me informa o número de série/inventário da scanner, geralmente tem uma etiqueta colada no próprio equipamento, preciso de uma foto contendo esta numeração.'},
        {header:'QUAL PC?',text:'Me informa o ip do micro em que está conectada a scanner, por gentileza.'},
        {header:'ERRO RUÍDO/TRAVAMENTO',text:'Faz um pequeno vídeo demonstrando o erro gerado e me envia, aguardo você.'},
        {header:'INSERIR FOLHA',text:'Insere uma folha na scanner para eu realizar um teste, por gentileza.'},
        {header:'CONFIGURAÇÃO',text:'Aguarde um momento, vou realizar algumas configurações.'},
    ]
    }
    ,   
    {
        nameItem:'IMP RELATÓRIO',
    values:[
        {header:'QUAL COMPUTADOR INSTALAR?',text:'Me informa o ip do computador que deseja a instalação da impressora, por gentileza.'},
        {header:'QUAL SETOR DA IMP',text:'A impressora é de qual setor? Ex.: DCC, escritório, balcão.'},
        {header:'SUPRIMENTOS',text:'Realize as seguintes instruções na impressora: MENU - INFORMAÇÃO - PAG DE SUPRIMENTOS - IMPRIMIR. Após me envia uma foto da página de suprimentos gerada, esse passo é para obtermos as informações do tonner da impressora.'},
        {header:'INVENT/SÉRIE',text:'Preciso de uma foto do número de série/inventário da impressora, por gentileza, aguardo você.'},
        {header:'IP IMP',text:'Executa essa ação na impressora e me envia uma foto do display dela: Pressione Menu no painel de controle. > Pressione as setas para cima/para baixo para realçar Rede e pressione OK > Pressione as setas para cima/para baixo para realçar TCP/IP (IPv4) e pressione OK > Selecionar a opção para mostrar IPV4.'},
        {header:"AGUARDE",text:"Aguarda um momento, estou analisando sua solicitação."},
    ]
    },
    
    {
        nameItem:'IMP ETIQUETAS LPR',
    values:[
        {header:'IP DO MICRO',text:'Me informa o ip do computador responsável pela impressora de etiqueta, por gentileza.'},
        {header:'CONEXÃO',text:'Desliga a impressora, reconecta os cabos dela e liga novamente'},
        {header:'ERROS',text:'A impressora está com leds piscando? Os leds piscam alternadamente ou simultaneamente? Poderia me enviar um vídeo demonstrando os leds piscando da impressora? Por gentileza.'},
        {header:'CALIBRAR',text:'Segura o botão feed da impressora até sair 3 impressões de teste para podermos calibrar o equipamento, por gentileza. Após realiza um teste no sistema.'},
        {header:'INVENT/SÉRIE',text:'Preciso de uma foto do número de série/inventário da impressora, por gentileza, aguardo você.'},
    ]
    }
    ,
    
    {
        nameItem:'IMP CARTÃO',
    values:[
        {header:'ANALISE INICIAL',text:'Aguarde um momento que irei verificar no micro responsável pela impressora de cartão.'},
        {header:'ERRO',text:'Qual erro está sendo gerado no display da impressora? Poderia me enviar um vídeo demonstrando o problema? Por gentileza. '},
        {header:'PROBLEMAS DE CONEXÃO',text:'Realiza o seguinte procedimento: Desliga a impressora, reconecta os cabos de rede e de eneriga, religa a impressora. Valida se no plug do cabo de rede da impressora acende um led de cor verde. Tenta reconectar este cabo de rede. Troca este cabo de rede, por gentileza.'},
        {header:'PROBLEMAS TARJA',text:'Desliga a impressora, desconecta os cabos da mesma, deixa 4 min assim sem energia após recoloca o ribbon, recoloca os cartões,conecta os cabos e liga a impressora para testarmos. Tenta utilizar outros cartões para impressão. Troca o ribbon da impressora, utiliza o cartão de limpeza por 5x para testarmos novamente a impressão.'},
        {header:'INFO',text:'Me envia uma foto com o número de série/inventário da impressora, por gentileza.'},
    ]
    }
    ,
    
    {
        nameItem:'ONBOARDING',
    values:[
        {header:'TEMPO DE ESPERA',text:'Há quanto tempo está com esse status no cadastro do cliente?'},
        {header:'EVIDÊNCIA',text:'Me envia uma foto do status demonstrado no sistema para o cliente, preciso do CPF do cliente impactado também.'},
        {header:'AGUARDAR',text:'É necessário aguardar por no máximo 20 min, pois este é o tempo necessário para que o sistema valide todos os passos de segurança da plataforma.'},
        {header:'CPF IMPACTADO',text:'Qual seria o CPF do cliente impactado?'},
        {header:'IP DO MICRO',text:'Me informa o ip do computador para realizarmos alguns testes.'},
        {header:'PROBLEMAS CONTATO TOKEN',text:'Para mudança de contato de autenticação no sistema, é necessário abertura de chamado para Gestão de Acessos.'},
    ]
    }
    ,
    
    {
        nameItem:'SENHA',
    values:[
        {header:'TRIANGULUS SENHA',text:'Já tentou realizar o reset pelo próprio portal? Tem uma opção de esqueci minha senha, utilize o e-mail do ESC e o login da loja para realizar esse processo.'},
        {header:'GDA',text:'Para esta solicitação, é necessário abertura de chamado para Gestão de Acessos (GDA), no próprio Jira.'},
        {header:'D/R',text:'Qual seria a matrícula/login do usuário impactado?'},
        {header:'FINALIZAÇÃO D/R',text:'Realizado desbloqueio e reset de acesso, enviado informações sobre a nova senha para o e-mail do GER.'},
    ]
    }
,
{
    nameItem:'WEBCAM',
values:[
    {header:'INFO DO MICRO',text:'Me informa o ip do micro que está apresentando este problema.'},
    {header:'INFO WEBCAM',text:'Me informa o número de série/inventário da webcam impactada'},
    {header:'RECONECTAR',text:'Reconecta o cabo usb da webcam, por gentileza. Assim que fizer o procedimento, me sinaliza. Troca de porta usb da webcam, utiliza uma porta usb que tem na parte de trás do micro.'},
]
}
,
{
    nameItem:'MASSIVO',
}
,
{
    nameItem:'LOCKER',
values:[
    {header:'ACESSO',text:'Preciso do nome completo, CPF, cargo e número de matrícula do usuário que precisa do acesso.'},
    {header:'MENSAGEM AGUARDE',text:'Certo, um momento que vou realizar um acionamento.'},

]
}
,
{
    nameItem:'TV',
values:[
    {header:'NAO LIGA',text:'As Tvs apresentam algum sinal de energizada? Algum led aceso?'},
    {header:'TESTE ENERGIA',text:'Tenta desconectar o cabo de energia dela, conecta algum carregador de celular e valida se o carregador está funcionando (este passo é para podermos validar se tem energia no local que liga a TV).'},
    {header:'MinMac',text:'Tem um micro em loja, que é responsável por esses painéis, ele é um MiniMac. É um computador fininho, geralmente prateado, tem um ícone de uma maçã em cima dele, o equipamento fica no CPD. Ele é semelhante a imagem abaixo. Poderia econtrar o equipamento? Aguardo você.'},
    {header:'MediaVue',text:'Tem um micro em loja, que é responsável por esses painéis, ele é um MediaVue, o equipamento fica no CPD. É um micro mais largo, com nome MediaVue azul em cima (semelhante a este da foto abaixo). Poderia encontrar o equipamento? Aguardo você.'},
]
}
,

{
    nameItem:'FILSERVER',
values:[
    {header:'NAO LIGA',text:'Tem um computador, que fica no CPD, este micro é um DELL, fininho, semelhante ao da foto abaixo. Preciso que você o encontre, por gentileza.'},
    {header:'REINICAR EQUIPAMENTO',text:'Poderia reiniciar o equipamento? Por gentileza.'},
]
}
,
{
    nameItem:'SICC',
values:[
    {header:'INFO CLIENTE',text:'Me informa o nome e CPF do cliente impactado, por gentileza.'},
    {header:'ERRO',text:'Preciso que você realize um teste para eu poder analisar o erro gerado no sistema.'},
]
}
,
{
    nameItem:'PINPAD MOBILE',
values:[
    {header:'NUM. SÉRIE/INVENTÁRIO',text:'Me informa o número de série/inventário do pinpad. Caso a etiqueta na parte de trás do dispositivo esteja muito apagada, remove a tampa traseira e tira a bateria do equipamento e me envia uma foto da etiqueta interna do aparelho. Aguardo você.'},
]
}
,



]

