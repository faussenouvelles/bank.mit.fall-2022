function Withdraw(){
  const ctx = React.useContext(UserContext);

  const updateBalance = () => {
    ctx.user[0].balance -= 10;
    console.log(ctx.user[0].balance)
  }
  return (
    <h1>Withdraw</h1>
    {JSON.stringify(ctx)}

    <button onclick={updateBalance}> Withdraw </button>
  );
}
