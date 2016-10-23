<!DOCTYPE html>
<html lang="ja" ng-app="app">
<head>
    <meta charset="utf-8">
    <meta name="robots" content="noindex" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/angularjs-slider/5.8.0/rzslider.min.css" rel="stylesheet" type="text/css">
    <style>
      .contents{
        margin-bottom: 20px;
      }
      .moneyForm {
        width: 60px;
        text-align: right;
      }
      .align-center {
        text-align: center;
      }
      .radio {
        display: none;
      }
      .btn-group .radioActive {
        background: #5cb85c;
        color: white;
      }
      .funkyradio div {
        clear: both;
        overflow: hidden;
      }

      .funkyradio label {
        width: 100%;
        border-radius: 3px;
        border: 1px solid #D1D3D4;
        font-weight: normal;
      }

      .funkyradio input[type="radio"]:empty,
      .funkyradio input[type="checkbox"]:empty {
        display: none;
      }

      .funkyradio input[type="radio"]:empty ~ label,
      .funkyradio input[type="checkbox"]:empty ~ label {
        position: relative;
        line-height: 2.5em;
        text-indent: 3.25em;
        margin-top: 0.2em;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .funkyradio input[type="radio"]:empty ~ label:before,
      .funkyradio input[type="checkbox"]:empty ~ label:before {
        position: absolute;
        display: block;
        top: 0;
        bottom: 0;
        left: 0;
        content: '';
        width: 2.5em;
        background: #D1D3D4;
        border-radius: 3px 0 0 3px;
      }

      .funkyradio input[type="radio"]:hover:not(:checked) ~ label,
      .funkyradio input[type="checkbox"]:hover:not(:checked) ~ label {
        color: #888;
      }

      .funkyradio input[type="radio"]:hover:not(:checked) ~ label:before,
      .funkyradio input[type="checkbox"]:hover:not(:checked) ~ label:before {
        content: '\2714';
        text-indent: .9em;
        color: #C2C2C2;
      }

      .funkyradio input[type="radio"]:checked ~ label,
      .funkyradio input[type="checkbox"]:checked ~ label {
        color: #777;
      }

      .funkyradio input[type="radio"]:checked ~ label:before,
      .funkyradio input[type="checkbox"]:checked ~ label:before {
        content: '\2714';
        text-indent: .9em;
        color: #333;
        background-color: #ccc;
      }

      .funkyradio input[type="radio"]:focus ~ label:before,
      .funkyradio input[type="checkbox"]:focus ~ label:before {
        box-shadow: 0 0 0 3px #999;
      }

      .funkyradio-primary input[type="radio"]:checked ~ label:before,
      .funkyradio-primary input[type="checkbox"]:checked ~ label:before {
        color: #fff;
        background-color: #337ab7;
      }
    </style>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angularjs-slider/5.8.0/rzslider.min.js"></script>
    <script type="text/javascript" src="../js/lib/angular/checklist-model.js"></script>
    <script type="text/javascript" src="../js/system.js"></script>
</head>
<body>
  <div class="container">
    @include('common.header')
    @include('content.content')
    @include('common.footer')
  </div>
</body>
</html>
