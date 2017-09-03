<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <title>App</title>
        <base id="base" href="/" data-hash="true">

        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image/x-icon" href="favicon.ico">
    </head>
    <body>
    <app-root></app-root>
    <script type="text/javascript" src="{{asset('dist/inline.bundle.js')}}"></script>
    <script type="text/javascript" src="{{asset('dist/polyfills.bundle.js')}}"></script>
    <script type="text/javascript" src="{{asset('dist/styles.bundle.js')}}"></script>
    <script type="text/javascript" src="{{asset('dist/vendor.bundle.js')}}"></script>
    <script type="text/javascript" src="{{asset('dist/main.bundle.js')}}"></script>

    </body>
</html>