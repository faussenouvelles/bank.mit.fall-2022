<!DOCTYPE html>
<html>
  <head>
    <title>BadBank React</title>

    <!-- bootstrap css -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">    <!-- don't use this in production: -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <!-- we will put our teact component inside this div -->
    <div id="root"></div>

    <!-- load jquery & bootstrap for responsive navbar -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>    

    <!-- load react -->
    <script src="https://unpkg.com/react/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-router@5.2.1/umd/react-router.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-router-dom@5.2.1/umd/react-router-dom.min.js" crossorigin></script>

    <!-- load our react component. -->
    <script src="context.js" defer type="text/babel"></script>
    <script src="navbar.js" defer type="text/babel"></script>
    <script src="createaccount.js" defer type="text/babel"></script>
    <script src="login.js" defer type="text/babel"></script>
    <script src="deposit.js" defer type="text/babel"></script>
    <script src="withdraw.js" defer type="text/babel"></script>
    <script src="balance.js" defer type="text/babel"></script>
    <script src="alldata.js" defer type="text/babel"></script>
    <script src="home.js" defer type="text/babel"></script>
    <script src="index.js" defer type="text/babel"></script>

  </body>
</html>
