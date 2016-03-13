(function() {
  'use strict';

  angular
    .module('apretadores')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        views: {
          'left': {
            templateUrl: 'app/main/views/left.html'
          },
          'main': {
            templateUrl: 'app/main/views/main.html',
            controller: 'MainController',
            controllerAs: 'main'
          },
          'right': {
            templateUrl: 'app/main/views/right.html'
          }
        },
        resolve: {/* @ngInject */
          messagesResolved: function (MessageModel) {
            /*return MessageModel.get({subject: 'pizarra'});*/

            return {
              'email': 'api@apretaste.com',
              'isProfileIncomplete': true,
              'notes': [{
                'id': '8136',
                'email': 'giselacm@nauta.cu',
                'name': 'gisel2',
                'location': 'La Habana',
                'gender': 'F',
                'picture': '1',
                'text': 'Hhhaaayyy por dios que boberia esta pizara con tantos incultos no tienen en que.....',
                'inserted': '2016-03-12 20:53:17',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8135',
                'email': 'droid@nauta.cu',
                'name': 'droid',
                'location': 'Villa Clara',
                'gender': 'M',
                'picture': '1',
                'text': 'Club multichat mas de un a\u00f1o regalando amor y amistad, para todas las edades para todos los colores. mms 53204125',
                'inserted': '2016-03-12 20:34:31',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8134',
                'email': 'lis@nauta.cu',
                'name': 'lisna',
                'location': 'Cuba',
                'gender': null,
                'picture': '0',
                'text': 'Hola a todos los amigos d apretaste ,x favor mis viejos amigos xk no me escriben .lis@nauta.cu',
                'inserted': '2016-03-12 20:07:54',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8133',
                'email': 'yuliettewong@nauta.cu',
                'name': 'yulie14',
                'location': 'Cienfuegos',
                'gender': 'F',
                'picture': '0',
                'text': 'Luchen por sus sue\u00f1os amigos,eso nunca nadie podr\u00e1 arrebat\u00e1rselos',
                'inserted': '2016-03-12 19:52:33',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8132',
                'email': 'yuliettewong@nauta.cu',
                'name': 'yulie14',
                'location': 'Cienfuegos',
                'gender': 'F',
                'picture': '0',
                'text': 'Para @luise3,tienes un 0\ud83d\udc4e',
                'inserted': '2016-03-12 19:50:38',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8131',
                'email': 'yuliettewong@nauta.cu',
                'name': 'yulie14',
                'location': 'Cienfuegos',
                'gender': 'F',
                'picture': '0',
                'text': 'Las cosas buenas nunca caducan en la vida,recuerden eso',
                'inserted': '2016-03-12 19:50:33',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8130',
                'email': 'yuliettewong@nauta.cu',
                'name': 'yulie14',
                'location': 'Cienfuegos',
                'gender': 'F',
                'picture': '0',
                'text': 'Para @luise3 por lo tanto para m\u00ed eres un cero a la izq o la derecha si te cuadra m\u00e1s jaja',
                'inserted': '2016-03-12 19:50:09',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8129',
                'email': 'yuliettewong@nauta.cu',
                'name': 'yulie14',
                'location': 'Cienfuegos',
                'gender': 'F',
                'picture': '0',
                'text': 'Para @luise3 no vienes a decirme q me hace falta ni como debo vivir',
                'inserted': '2016-03-12 19:50:01',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8128',
                'email': 'yuliettewong@nauta.cu',
                'name': 'yulie14',
                'location': 'Cienfuegos',
                'gender': 'F',
                'picture': '0',
                'text': 'Para @luise3 yo no molesto a nadie con mis ventas y nunca me he metido con nadie',
                'inserted': '2016-03-12 19:49:43',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8127',
                'email': 'yuliettewong@nauta.cu',
                'name': 'yulie14',
                'location': 'Cienfuegos',
                'gender': 'F',
                'picture': '0',
                'text': 'Para @luise3 m\u00e1s bien me parece q al que le falta cerebro es a ti',
                'inserted': '2016-03-12 19:49:35',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8126',
                'email': 'yuliettewong@nauta.cu',
                'name': 'yulie14',
                'location': 'Cienfuegos',
                'gender': 'F',
                'picture': '0',
                'text': 'Para @luise3 no creo q me falte cerebro por vender cosas',
                'inserted': '2016-03-12 19:49:24',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8125',
                'email': 'ASDF',
                'name': null,
                'location': 'Cuba',
                'gender': null,
                'picture': null,
                'text': 'Tirando super fresca con jesus',
                'inserted': '2016-03-12 19:48:24',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8124',
                'email': 'yuliettewong@nauta.cu',
                'name': 'yulie14',
                'location': 'Cienfuegos',
                'gender': 'F',
                'picture': '0',
                'text': 'La vida es un reto',
                'inserted': '2016-03-12 19:30:40',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8123',
                'email': 'yuliettewong@nauta.cu',
                'name': 'yulie14',
                'location': 'Cienfuegos',
                'gender': 'F',
                'picture': '0',
                'text': 'Recargo doble cubacel cienfuegos garantizado!pagas 25cuc=recibes 50cuc.cont\u00e1ctame a yuliettewong@nauta.cu',
                'inserted': '2016-03-12 19:30:32',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8122',
                'email': 'yuliettewong@nauta.cu',
                'name': 'yulie14',
                'location': 'Cienfuegos',
                'gender': 'F',
                'picture': '0',
                'text': 'Vendo cintas de artes marciales marr\u00f3n,azul,verde y amarillo en 5cuc.mi email yuliettewong@nauta',
                'inserted': '2016-03-12 19:30:25',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8121',
                'email': 'yuliettewong@nauta.cu',
                'name': 'yulie14',
                'location': 'Cienfuegos',
                'gender': 'F',
                'picture': '0',
                'text': 'Hermoso s\u00e1bado para ser objetiva;)',
                'inserted': '2016-03-12 19:30:13',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8120',
                'email': 'yuliettewong@nauta.cu',
                'name': 'yulie14',
                'location': 'Cienfuegos',
                'gender': 'F',
                'picture': '0',
                'text': 'Si te gusta hacer tus propios pulsos de colores quiz\u00e1s para regalar!!!vendo paquetes d liguitas a 1cuc.mi email yuliettewong@naut',
                'inserted': '2016-03-12 19:30:07',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8119',
                'email': 'jovanys.guadalupe@gmail.com',
                'name': 'jovan',
                'location': 'Cuba',
                'gender': null,
                'picture': '1',
                'text': 'Hola estoy buscando una amistad sincera. espero por ustedes amigos jovanys.guadalupe@gmail.com',
                'inserted': '2016-03-12 19:07:40',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8118',
                'email': 'jovanys.guadalupe@gmail.com',
                'name': 'jovan',
                'location': 'Cuba',
                'gender': null,
                'picture': '1',
                'text': 'Hola amigos estoy buscando unas bocinas de pc nuevas marca maxell. jovanys. escriban a jovanys.guadalupe@gmail.com',
                'inserted': '2016-03-12 19:05:34',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8117',
                'email': 'jovanys.guadalupe@gmail.com',
                'name': 'jovan',
                'location': 'Cuba',
                'gender': null,
                'picture': '1',
                'text': 'Hola amigos, estoy esperando no lo piensen mas si tienen alguna desilucion amorosa aqui esta un amigo jovanys.guadalupe@gmail.com',
                'inserted': '2016-03-12 18:30:38',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8116',
                'email': 'ruyi@nauta.cu',
                'name': 'ruyin',
                'location': 'Cuba',
                'gender': null,
                'picture': '0',
                'text': 'A estudiar ortograf\u00eda @nelson22 para q sean reales tus deseos d gozar',
                'inserted': '2016-03-12 17:51:08',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8115',
                'email': 'yoandrarp@nauta.cu',
                'name': 'yoand21',
                'location': 'La Habana',
                'gender': 'F',
                'picture': '1',
                'text': 'Kien kiere hacer una locura hoy!?!?!?',
                'inserted': '2016-03-12 17:49:53',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8114',
                'email': 'ashley5@nauta.cu',
                'name': 'ashle',
                'location': 'Mayabeque',
                'gender': 'M',
                'picture': '1',
                'text': 'Hola,todo aquel que quiera pertenecer al club nacional de mms.mms al 58339979, foto,nombre y provincia se le explicara como obtene',
                'inserted': '2016-03-12 17:33:45',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8113',
                'email': 'ashley5@nauta.cu',
                'name': 'ashle',
                'location': 'Mayabeque',
                'gender': 'M',
                'picture': '1',
                'text': 'Hola quiero formar un club de gays y lesbianas, o sea como el chat que anuncio pero solo de lo mencionado.mms al 58339979',
                'inserted': '2016-03-12 17:31:58',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8112',
                'email': 'f.david@nauta.cu',
                'name': 'fdavi',
                'location': 'Cuba',
                'gender': null,
                'picture': '0',
                'text': 'Soy frank tengo 23 a\u00f1os y ando buscando en este sitio fuerte amistades si acepta me puede esscribir mms 52667524',
                'inserted': '2016-03-12 16:35:24',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8111',
                'email': 'leoml9211@nauta.cu',
                'name': 'leoml',
                'location': 'Cuba',
                'gender': null,
                'picture': '0',
                'text': 'Hola soy leodan 23 a\u00f1os un chico d mente abierta ando buscando fuertes amistades los espero escriban mms al 54268479',
                'inserted': '2016-03-12 16:34:59',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8110',
                'email': 'luiselprofe@nauta.cu',
                'name': 'luise3',
                'location': 'Holguin',
                'gender': 'M',
                'picture': '1',
                'text': 'Ven2 paquetes de liguitas a 0.50 cuc y cintas d artes marciales d todos los colores a 2 cuc',
                'inserted': '2016-03-12 15:46:19',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8109',
                'email': 'ruyi@nauta.cu',
                'name': 'ruyin',
                'location': 'Cuba',
                'gender': null,
                'picture': '0',
                'text': 'Permito 2 aptos x 1 llamar a ruslan 78617086 y 52840586',
                'inserted': '2016-03-12 14:40:20',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8108',
                'email': 'dailien9002@nauta.cu',
                'name': 'daili9',
                'location': 'Cuba',
                'gender': null,
                'picture': '0',
                'text': 'Soy de matanzas, busco amigos tengo 26a\u00f1os mido 1.80 blanco delgado bien parecido....me gusta divertirme a lo loco....!!!!espero ',
                'inserted': '2016-03-12 14:10:11',
                'likes': '1',
                'source': 'apretaste'
              }, {
                'id': '8107',
                'email': 'rahimi91@nauta.cu',
                'name': 'rahim',
                'location': 'Villa Clara',
                'gender': 'M',
                'picture': '1',
                'text': 'Rahimi91@nauta.cu y mms 55168931...soy de villa clara, solo chicos',
                'inserted': '2016-03-12 13:46:30',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8106',
                'email': 'ashley5@nauta.cu',
                'name': 'ashle',
                'location': 'Mayabeque',
                'gender': 'M',
                'picture': '1',
                'text': 'Hola,todo aquel que quiera pertenecer al club nacional de mms.mms al 58339979, foto,nombre y provincia se le explicara como obtene',
                'inserted': '2016-03-12 13:24:51',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8105',
                'email': 'ashley5@nauta.cu',
                'name': 'ashle',
                'location': 'Mayabeque',
                'gender': 'M',
                'picture': '1',
                'text': 'Hola quiero formar un club de gays y lesbianas, o sea como el chat que anuncio pero solo de lo mencionado.mms al 58339979',
                'inserted': '2016-03-12 13:24:47',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8104',
                'email': 'roch@nauta.cu',
                'name': 'rochn1',
                'location': 'Cuba',
                'gender': null,
                'picture': '0',
                'text': 'Se busca a jos\u00e9 miguel santiesteban rodrigues escriban a roch@nauta.cu si conocen su paradero.',
                'inserted': '2016-03-12 13:20:56',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8103',
                'email': 'joserodriguez@nauta.cu',
                'name': 'joser18',
                'location': 'Cuba',
                'gender': null,
                'picture': '0',
                'text': '@nelso22',
                'inserted': '2016-03-12 13:03:59',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8102',
                'email': 'nelson.linares@nauta.cu',
                'name': 'nelso22',
                'location': 'Camaguey',
                'gender': 'M',
                'picture': '1',
                'text': 'Hola soy un chico con unos deceos enormes de gosar con una buena p... nelson.linares@nauta.cu 53199927',
                'inserted': '2016-03-12 12:17:14',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8101',
                'email': 'nelson.linares@nauta.cu',
                'name': 'nelso22',
                'location': 'Camaguey',
                'gender': 'M',
                'picture': '1',
                'text': 'Hola ando buscando \'amigos\'',
                'inserted': '2016-03-12 12:07:52',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8100',
                'email': 'randy.gonzalez@nauta.cu',
                'name': 'randy',
                'location': 'Matanzas',
                'gender': 'M',
                'picture': '1',
                'text': 'Un saludo para @vampi buena suerte',
                'inserted': '2016-03-12 12:03:08',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8099',
                'email': 'alberto.vh@nauta.cu',
                'name': 'alber60',
                'location': 'Cuba',
                'gender': null,
                'picture': '0',
                'text': 'Hola soy claudio tengo 50 a\u00f10s me gusta el buen sexo q crees ah soy gay con buen desarrollo mi correo es alberto.vh@nauta.cu',
                'inserted': '2016-03-12 12:01:46',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8098',
                'email': 'jovanys.guadalupe@gmail.com',
                'name': 'jovan',
                'location': 'Cuba',
                'gender': null,
                'picture': '1',
                'text': 'Hola buenas, estoy buscando nuevas amistades, unanse al club los aventureros jovanys.guadalupe@gmail.com',
                'inserted': '2016-03-12 11:47:49',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8097',
                'email': 'solanch.marin@nauta.cu',
                'name': 'solan3',
                'location': 'Pinar Del Rio',
                'gender': 'F',
                'picture': '1',
                'text': 'Hola a todos!!!,me acabo d incorporar a apretaste!!!\ud83d\ude04\ud83d\ude03',
                'inserted': '2016-03-12 11:43:33',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8096',
                'email': 'yuliettewong@nauta.cu',
                'name': 'yulie14',
                'location': 'Cienfuegos',
                'gender': 'F',
                'picture': '0',
                'text': 'Y a los q les molestan q repita mis notas pq seg\u00fan ellos ocupan espacio',
                'inserted': '2016-03-12 11:42:03',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8095',
                'email': 'yuliettewong@nauta.cu',
                'name': 'yulie14',
                'location': 'Cienfuegos',
                'gender': 'F',
                'picture': '0',
                'text': 'Un abrazo para todas las chicas y chicos de apretastes',
                'inserted': '2016-03-12 11:41:33',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8094',
                'email': 'yuliettewong@nauta.cu',
                'name': 'yulie14',
                'location': 'Cienfuegos',
                'gender': 'F',
                'picture': '0',
                'text': '....su maleta para q no les pesen ;)jajaja',
                'inserted': '2016-03-12 11:39:31',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8093',
                'email': 'yuliettewong@nauta.cu',
                'name': 'yulie14',
                'location': 'Cienfuegos',
                'gender': 'F',
                'picture': '0',
                'text': 'Recargo doble cubacel cienfuegos garantizado!pagas 25cuc=recibes 50cuc.cont\u00e1ctame a yuliettewong@nauta.cu',
                'inserted': '2016-03-12 11:39:21',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8092',
                'email': 'yuliettewong@nauta.cu',
                'name': 'yulie14',
                'location': 'Cienfuegos',
                'gender': 'F',
                'picture': '0',
                'text': 'Magn\u00edfico s\u00e1bado para ser muy objetiva poniendo mis notas;)',
                'inserted': '2016-03-12 11:39:16',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8091',
                'email': 'yuliettewong@nauta.cu',
                'name': 'yulie14',
                'location': 'Cienfuegos',
                'gender': 'F',
                'picture': '0',
                'text': 'Vendo cintas de artes marciales marr\u00f3n,azul,verde y amarillo en 5cuc.mi email yuliettewong@nauta.cu',
                'inserted': '2016-03-12 11:38:58',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8090',
                'email': 'yuliettewong@nauta.cu',
                'name': 'yulie14',
                'location': 'Cienfuegos',
                'gender': 'F',
                'picture': '0',
                'text': 'Si te gusta hacer tus propios pulsos de colores quiz\u00e1s para regalar!!!vendo paquetes d liguitas a 1cuc.mi email yuliettewong@naut',
                'inserted': '2016-03-12 11:38:48',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8089',
                'email': 'ale7211@nauta.cu',
                'name': 'alena4',
                'location': 'La Habana',
                'gender': 'M',
                'picture': '1',
                'text': 'Hola a todos aqu\u00ed chico de 43 a\u00f1os de la habana buscando amigos chicos de cualquier edad',
                'inserted': '2016-03-12 10:13:04',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8088',
                'email': 'luiselprofe@nauta.cu',
                'name': 'luise3',
                'location': 'Holguin',
                'gender': 'M',
                'picture': '1',
                'text': 'Lo q faltaba una vendiendo ligas y pulsos y ya otro compran2 monedas antiguas x favor un cerebro nuevo para ellos',
                'inserted': '2016-03-12 09:21:34',
                'likes': '0',
                'source': 'apretaste'
              }, {
                'id': '8087',
                'email': 'jorge91@nauta.cu',
                'name': 'jorge27',
                'location': 'Matanzas',
                'gender': 'M',
                'picture': '1',
                'text': 'Buenos d\u00edas a todos',
                'inserted': '2016-03-12 09:18:55',
                'likes': '0',
                'source': 'apretaste'
              }]
            };
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
