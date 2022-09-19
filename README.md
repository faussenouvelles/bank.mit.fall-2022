# bank.mit.fall-2022

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Template</title>

    <!-- bootstrap css -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    />

    <!-- don't use this in production: -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <!-- we will put our teact component inside this div -->
    <div id="root"></div>

    <!-- load react -->
    <script src="https://unpkg.com/react/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-router@5.2.1/umd/react-router.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-router-dom@5.2.1/umd/react-router-dom.min.js" crossorigin></script>

    <!-- load our react component. -->
    <script src="https://raw.githubusercontent.com/faussenouvelles/bank.mit.fall-2022/main/context.js" defer type="text/babel"></script>
    <script type="text/javascript"> const Route       = ReactRouterDOM.Route;
      const Link        = ReactRouterDOM.Link;
      const HashRouter  = ReactRouterDOM.HashRouter;
      const UserContext = React.createContext(null);
      
      function Card(props){
          function classes(){
            const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
            const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
            return 'card mb-3 ' + bg + txt;
          }
        
          return (
            <div className={classes()} style={{maxWidth: "18rem"}}>
              <div className="card-header">{props.header}</div>
              <div className="card-body">
                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                {props.body}
                {props.status && (<div id='createStatus'>{props.status}</div>)}
              </div>
            </div>      
          );    
        }
        </script>
    <script src="https://raw.githubusercontent.com/faussenouvelles/bank.mit.fall-2022/main/navbar.js" defer type="text/babel"></script>
    <script type="text/javascript">function NavBar(){
      return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">BadBank</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#/CreateAccount/">Create Account</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/login/">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/deposit/">Deposit</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/withdraw/">Withdraw</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/balance/">Balance</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/alldata/">AllData</a>
              </li>          
            </ul>
          </div>
        </nav>
        </>
      );
    }"
    </script>
    <script src="https://raw.githubusercontent.com/faussenouvelles/bank.mit.fall-2022/main/createaccount.js" defer type="text/babel"></script>
    <script src="https://raw.githubusercontent.com/faussenouvelles/bank.mit.fall-2022/main/login.js" defer type="text/babel"></script>
    <script src="https://raw.githubusercontent.com/faussenouvelles/bank.mit.fall-2022/main/deposit.js" defer type="text/babel"></script>
    <script src="https://raw.githubusercontent.com/faussenouvelles/bank.mit.fall-2022/main/withdraw.js" defer type="text/babel"></script>
    <script src="https://raw.githubusercontent.com/faussenouvelles/bank.mit.fall-2022/main/balance.js" defer type="text/babel"></script>
    <script src="https://raw.githubusercontent.com/faussenouvelles/bank.mit.fall-2022/main/alldata.js" defer type="text/babel"></script>
    <script src="https://raw.githubusercontent.com/faussenouvelles/bank.mit.fall-2022/main/home.js" defer type="text/babel"></script>
    <script src="https://raw.githubusercontent.com/faussenouvelles/bank.mit.fall-2022/main/index.js" defer type="text/babel"></script>
  </body>
</html>
