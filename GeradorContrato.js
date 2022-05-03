const input = require("input"); 


(async () => {
    console.log('start');
     let AppName = await input.text('AppName');
     let AppVersion = await input.text('AppVersion');
     let Time = await input.text('Time');
     let ExtendenTime = await input.text('Data');   
     let Contrato = await input.text('Contrato');
     let Contratado = await input.text('Cliente');   
     let CPF = await input.text('CPF');
     let Email = await input.text('Email');
     let Telefone = await input.text('Telefone');
     let Endereco = await input.text('Endereco');
     let Cidade = await input.text('Cidade');
     let Estado = await input.text('Estado');
     let CEP = await input.text('Cep');
     let Numero =  await input.text('Numero');
     let Rua = await input.text('Rua');
     let Bairro = await input.text('Bairro');


    let string = `
    CONDIÇÕES GERAIS DE UTILIZAÇÃO DO ${ AppName }

    Essas Condições Gerais de Utilização do ${ AppName } ("Condições Gerais") regulam o contrato ("Contrato") estabelecido entre Prestador de Serviço MEI, MEI, inscrita no CNPJ(MF) sob o nº.  42030164/0001-01, residente na Rua Santarém , 55 , Jardim Oratório , Cep: 08330-350, Cidade de Mauá ,  Estado de São Paulo, ${"Contratado"}, e, de outro lado, a pessoa identificada  na ("Confirmação Contratual"), representado por ${Contratado},  CPF ${ CPF } ,residente na ${  Endereco }, Cidade de ${ Cidade } Estado de ${ Estado  }.
    
    Ao contratar o Sistema o Cliente expressamente aceita todas as disposições destas Condições Gerais.
    
    1. DEFINIÇÕES
    
    Todas as palavras ou expressões constantes da lista abaixo deverão ser entendidas, nestas Condições Gerais, conforme o respectivo significado:
    
    “Cliente” é aquele que utiliza os serviços e/ou produtos disponibilizados pelo Contratado, mediante pagamento referente ao Pacote de Serviços escolhido pelo Cliente.
    
    "Confirmação Contratual" é a confirmação da contratação do Sistema, e consiste nesse documento reconhecido em cartório pelo Contratado e o Cliente.
    
    “Conta de Usuário" é o acesso que o Contratado fornece ao Cliente para utilização da Plataforma Observador de Resultados da Roleta bet365. Para utilização desta plataforma, será exigido E-mail e Senha e deverá conter os dados pessoais do Cliente.
    
    “E-mail” é o nome de usuário que o Cliente utilizará para acessar a Plataforma Observador de Resultados da Roleta bet365. É responsabilidade do Cliente manter o E-mail atualizado.
    
    “Formas de Pagamento” são as opções/soluções de pagamento disponibilizadas na Plataforma ${ AppName } para que o Cliente efetue o pagamento referente ao Pacote de Serviços escolhido. O Cliente poderá, a qualquer momento, alterar a Forma de Pagamento, de acordo com as opções/soluções oferecidas pelo Contratado, disponíveis na ocasião da solicitação da alteração.
    
    “Pacote de Serviços” é o valor cobrado pelo Contratado pelo Sistema. São 3 (três) pacotes disponíveis: Pacote Entrega, Pacote 30, Pacote 50.
    
    “Pacote Entrega” consiste no pagamento total por parte do Cliente ao Contratado no ato da entrega do Sistema.
    
    “Pacote 30" consiste no pagamento antecipado de 30% sobre o valor total, por parte do Cliente ao Contratado, no ato da Confirmação Contratual. O restante do valor, 70%, deverá ser pago no ato da entrega do Sistema.
    
    “Pacote 50" consiste no pagamento antecipado de 50% sobre o valor total, por parte do Cliente ao Contratado, no ato da Confirmação Contratual. O restante do valor, 50%, deverá ser pago no ato da entrega do Sistema.
    
    “ObservebleEcosystemAutobet” é a plataforma online por meio da qual o Cliente terá acesso às informações referente as Condições Gerais.
    
    “Senha” é o dado de acesso pessoal à ${ AppName } É responsabilidade do Cliente manter este dado em sigilo e atualizado.
    
    "Suporte Técnico" significa a prestação de serviço de suporte técnico por: telefone, e-mail, chat; exclusivamente ao Cliente sobre o Sistema desenvolvido pelo Contratado.
    
    “Sistema” é o serviço e/ou produto desenvolvido e/ou modificado pelo Contratado para o Cliente.
    
    2. OBJETO
    
    2.1. As presentes Condições Gerais regulam a disponibilização por parte do Contratado, e/ou por terceiros por ela autorizados, e a utilização por parte do Cliente, do Sistema.
    
    2.2. Pela contratação do Sistema, o contratado disponibilizará ao Cliente uma solução para automatizar o uso do site Blaze em jogo Crash e fornecerá uma estrutura para executar entradas com horários programados em um plataforma App executável em Sistemas Operacionais GNU/Linux e Windows. 
    
    2.3. Estarão à disposição do Cliente 3 Pacotes de Serviços referente a forma de pagamento, a qual o Cliente deverá escolher 1 desses pacotes.
    
    2.4. Para utilização do Sistema, o Cliente deverá aceitar suas Condições Gerais de Utilização do Sistema, o que ocorrerá no momento da contratação do Sistema. Tais Condições Gerais de utilização também encontram-se disponíveis na Plataforma ${AppName}
    
    2.5. Para manter o acesso à Plataforma ${ AppName }, o Cliente deve possuir e manter, durante toda a vigência deste Contrato, um E-mail válido e devidamente registrado em um órgão competente, ao qual estará vinculada sua Conta de usuário, responsabilizando-se o Cliente por qualquer prejuízo e/ou dano causado a terceiro em função deste E-mail.
    
    2.6. ${AppName} permite que o Cliente compartilhe mensagens, sendo que o Cliente será única e exclusivamente responsável por todas as ações por ele realizadas relacionadas a tal compartilhamento.
    
    2.7. O Cliente é responsável por todos os dados e informações por ele inseridos na ${  AppName }, bem como pelas mensagens compartilhadas.
    
    2.8. ${AppName},  será disponibilizada no site e domínio fornecido pelo cliente, podendo ser acessada por computador, smartphone ou tablet.
    
    2.9. O Contratado se reserva o direito de modificar, em qualquer momento e sem prévio aviso, a apresentação e configuração de utilização da ${AppName}
    
    2.11. Para o regular funcionamento da  ${ AppName } , o Cliente deverá cumprir com os requisitos mínimos listados abaixo:
    
    Para computadores:
    
    a) Conexão de internet;
    
    b) Navegadores: Internet Explorer; Mozilla Firefox; Google Chrome;
    
    c) Sistemas Operacionais: Windows, GNU/Linux.
    
    2.11.1. É de exclusiva responsabilidade do Cliente o custeio, manutenção e obtenção dos equipamentos e serviços mencionados nesta cláusula.
    
    
    3. OBRIGAÇÕES E DIREITOS DO CLIENTE
    
    4.1. Pagar pontualmente os valores devidos ao Contratado.
    
    4.2. Manter os equipamentos necessários ao acesso à internet em condições de uso, tomando todas as medidas de segurança necessárias à proteção de seus equipamentos, sistemas e arquivos contra a atuação indevida e invasões não autorizadas de outros usuários de internet.
    
    4.3. Não utilizar o Sistema para armazenar, propagar e/ou manter conteúdos que violem a lei, ou, de outra forma em geral, às exigências da moral e bons costumes geralmente aceitos.
    
    4.4. Observar as disposições contidas nestas Condições Gerais, sob pena do Contratado, a seu exclusivo critério, ao detectar conduta e/ou método contrário às mesmas, optar por rescindir o Contrato, interromper o acesso à ${ AppName } temporariamente e/ou notificar o Cliente para que sane, corrija ou regularize a situação.
    
    4.5. Assumir todas as responsabilidades decorrentes de seus atos e de sua conduta como usuário da rede internet e Cliente do Contratado, respondendo, ainda, pelos atos que terceiros praticarem em seu nome, por meio do uso de seu E-mail e senha de acesso. Indenizar o Contratado por quaisquer custos, prejuízos e danos decorrentes de ações ou omissões que violem as disposições contidas na lei e nestas Condições Gerais do Contratado, a qual está disponível na Plataforma XYZ.
    
    
    4.6. O Cliente, e/ou terceiro por ele indicado, administra o ambiente em que estiver localizado o servidor que alojar o Sistema.
    
    5. OBRIGAÇÕES E DIREITOS DO CONTRATADO
    
    5.1. Manter disponível a ${ AppName }para acesso do Cliente, nos termos destas Condições Gerais, podendo, eventualmente, a utilização da ${ AppName }sofrer interrupções devido a: ações de terceiros que impeçam o acesso a ${ AppName }; falta de fornecimento de energia elétrica; interrupção ou suspensão pela concessionária dos serviços de internet ou provedor de hospedagem; manutenções técnicas e/ou operacionais que exijam o desligamento temporário do sistema ou impossibilitem o acesso a ${ AppName };
    
    5.2. Não é responsável por quaisquer danos e/ou prejuízos decorrentes de interrupções relacionadas aos eventos previstos no item 5.1.
    
    5.3. O Contratado, e/ou terceiro por ele indicado, administrar o ambiente em que estiver localizado o servidor que alojar a ${ AppName }
    
    5.4. Ativar as funcionalidades da ${ AppName } em até ${ Time } ${ ExtendenTime} após a Confirmação Contratual, ou de eventual Alteração Contratual.
    
    5.5. Identificar eventuais problemas de interrupção na transmissão de dados entre o servidor que alojar o conteúdo do Cliente e a internet, tomando todas as medidas cabíveis para solução dos problemas.
    
    5.6. Oferecer ao Cliente suporte técnico e operacional ao Sistema, diretamente e/ou por terceiro indicado pelo Contratado, sob sua responsabilidade.
    
    6. RESPONSABILIDADES
    
    6.1. O Contratado não se responsabiliza pelos danos e/ou prejuízos de toda e qualquer natureza que possam derivar da má utilização do Sistema.
    
    6.2. O Contratado não se responsabiliza pelos danos e/ou prejuízos que possam se derivar da incorreta identidade do Cliente e da falta de veracidade e/ou autenticidade da informação que o Cliente informa acerca de si mesmo e proporciona a outros usuários.
    
    6.3. O Cliente é responsável por todos os dados e informações por ele repassado ao Contratado para desenvolvimento e/ou modificação do Sistema.
    
    7 - AUTORIZAÇÕES
    
    7.1. Através da Confirmação Contratual, o Cliente autoriza prévia e expressamente o Contratado a enviar-lhe, através de e-mail e/ou mala-direta e/ou qualquer outro tipo de correspondência/comunicação, informações de seus produtos e/ou serviços, bem como de seus parceiros.
    
    8 - VALORES E FORMA DE PAGAMENTO
    
    8.1. Como contraprestação pela contratação do Sistema objeto destas Condições Gerais, o Cliente deverá pagar ao Contratado a quantia constante da Confirmação Contratual, nas datas e/ou periodicidade referidas na mesma e correspondente ao Pacote de Serviços escolhido.
    
    8.2. O CLIENTE poderá optar pelas Formas de Pagamento disponíveis na Plataforma XYZ no momento da contratação.
    
    8.3. Verificando-se o atraso no pagamento do(s) valor(es) devidos e/ou dos eventuais pagamentos adicionais previstos em virtude do *Pacote de Serviços, o Sistema poderá ser imediatamente interrompido e o presente contrato considerado rescindido, respeitadas as condições previstas na cláusula 9.2 abaixo.
    
    8.4. No caso exposto na cláusula 8.3 acima, a interrupção do Sistema acarretará o bloqueio da Conta de Usuário de acesso a Plataforma , não sendo possível utilizar nenhuma funcionalidade do mesmo.
    
    8.5. A não utilização do Sistema não implica no cancelamento automático deste Contrato, estando o Cliente sujeito à cobrança regular do Pacote de Serviços contratado e às consequências do seu não pagamento.
    
    8.6. o cancelamento do contrato, por qualquer motivo, gerará a imediata indisponibilidade de acesso do Cliente à bem como todas as suas funcionalidades.
    
    09 - PRAZO DE VIGÊNCIA
    
    09.1. O presente Contrato vigorará por prazo indeterminado.
    
    12 - DECLARAÇÕES DO CLIENTE
    
    12.1. O Cliente declara expressamente e garante, para todos os fins de direito, que:
    
    12.1.1. Possui capacidade jurídica para celebrar este Contrato e utilizar o Sistema.
    
    12.1.2. É responsável pela utilização do Sistema contratado e tem condições financeiras para arcar com o pagamento, custos e/ou outras despesas decorrentes deste Contrato.
    
    12.1.3 Utilizará o Sistema nos limites do exposto nestas Condições Gerais, conhecendo todos os seus direitos e limitações, sendo que respeitará toda a legislação vigente.
    
    14 - DISPOSIÇÕES GERAIS
    
    14.1. Através da contratação do Sistema, o Cliente se compromete a respeitar e cumprir todas as disposições aqui contidas.
    
    14.2. O Contratado cederá ao Cliente os direitos sobre o Sistema, respeitando a propriedade intelectual do Contratado sobre este Sistema.
    
    14.3. Estas Condições Gerais e todos os seus termos obedecem às leis brasileiras.
    
    14.4. O Cliente concorda e reconhece que o Contratado se utilizará de correio eletrônico (e-mail) enviado para sua caixa postal como forma válida, eficaz e suficiente de comunicação, e aceitam a ${ AppName } como meio válido, eficaz e suficiente para a divulgação de qualquer assunto que se refere aos serviços objeto deste Contrato, bem como às condições de sua prestação ou a qualquer outro assunto nele abordado, ressalvadas as disposições expressamente diversas previstas nestas Condições Gerais.
    
    15 - FORO
    
    15.1. Elegem as partes, para dirimir eventuais e não esperadas demandas emergentes do presente Contrato, com renúncia a qualquer outro, por mais privilegiado que seja, o foro do domicílio do Contratado.
     `

//  Get this string into to a PDF FILE 
console.log(string) 

// Save string into PDF




})();