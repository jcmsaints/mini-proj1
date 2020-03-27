var webAvancadaModule = angular.module("webAvancadaModule", ["ngRoute"]);

webAvancadaModule.config(function($routeProvider) {
  $routeProvider

    .when("/", {
      templateUrl: "pages/quemsoueu.html",
      controller: "quemSouEuController"
    })

    .when("/o-que-faco", {
      templateUrl: "pages/oquefaco.html",
      controller: "oQueFacoController"
    })

    .when("/hobbies", {
      templateUrl: "pages/hobbies.html",
      controller: "hobbiesController"
    });
});

webAvancadaModule.controller("quemSouEuController", function($scope) {
  $scope.apresentacao =
    "O meu nome é João Santos. Trabalho como Full Stack Developer há 3 anos e encontro-me actualmente a frequentar o Mestrado em Tecnologias e Sistemas de Informação Web.";
  $scope.imagem = "./img/passe.png";
  $scope.segundaApresentacao =
    "Esta tarefa foi realizada no âmbito da Unidade Curricular De Programação Web Avançada para a realização da Tarefa 2.2: Mini-Projeto: Single Page Application (SPA)Página ";
});

webAvancadaModule.controller("oQueFacoController", function($scope) {
  $scope.data = [
    {
      img: "./img/programming.jpg",
      title: "Programação",
      description:
        "Actuo como Full Stack Developer há mais de 3 anos. Durante este tempo sempre trabalhei com aplicações Web."
    },
    {
      img: "./img/study.jpg",
      title: "Estudo",
      description:
        "Encontro-me a frequentar o mestrado da Universidade Aberta de Tecnologias e Sistemas de informação Web."
    },
    {
      img: "./img/volunterring.jpg",
      title: "Voluntariado",
      description:
        "Pratico voluntariado no meu tempo livre de modo a ajudar a sociedade que me rodeia."
    }
  ];
});

webAvancadaModule.controller("hobbiesController", function($scope) {
  $scope.data = [
    {
      label: "Ler"
    },
    {
      label: "Ver séries"
    },
    {
      label: "Passear"
    },
    {
      label: "Cinema"
    },
    {
      label: "Jogar Computador"
    }
  ];
});
