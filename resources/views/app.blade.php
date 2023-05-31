<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" type="image/x-icon" href="{{ asset('images/logo.png') }}">
    <link rel="shortcut icon" type="image/jpg" href="{{ asset('images/logo.png') }}" />
    @vite(['resources/js/app.jsx', 'resources/css/app.css'])
    @inertiaHead
</head>
<body>
    @inertia
</body>
</html>
