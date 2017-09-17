<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>App</title>
    <base href="/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link rel="stylesheet" type="text/css" href="{{url('static/fonts.css')}}">
</head>
<body>
<app-root></app-root>
<script src="{{asset('dist/assets/ckeditor/ckeditor.js')}}"></script>
<script type="text/javascript" src="{{asset('dist/inline.bundle.js')}}"></script>
<script type="text/javascript" src="{{asset('dist/polyfills.bundle.js')}}"></script>
<script type="text/javascript" src="{{asset('dist/styles.bundle.js')}}"></script>
<script type="text/javascript" src="{{asset('dist/vendor.bundle.js')}}"></script>
<script type="text/javascript" src="{{asset('dist/main.bundle.js')}}"></script>
<script src="{{asset('dist/assets/highlight/highlight.pack.js')}}"></script>
</body>
</html>