<!DOCTYPE html>
<html lang="ja" ng-app="app">
<head>
    <meta charset="utf-8">
    <meta name="robots" content="noindex" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/angularjs-slider/5.8.0/rzslider.min.css" rel="stylesheet" type="text/css">
    <style>
      .contents{
        margin-bottom: 20px;
      }
    </style>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angularjs-slider/5.8.0/rzslider.min.js"></script>
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
