<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="icon" href="{{ url('img/app/favicon.png') }}">
        <link rel="manifest" href="/manifest.json"/>
        <title>Home</title>
    </head>
    <body>
    <div id="app">
    </div>
    <script>
        window.BASE_URL = @json(asset(''));
    </script>
    @viteReactRefresh
    @vite(['resources/js/index.jsx'])
    </body>
</html>
