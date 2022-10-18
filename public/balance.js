function Balance(){
  const ctx = React.useContext(UserContext);
  const status = Number(JSON.stringify(ctx.users[0].balance));

  return (
    <Card
   bgcolor="white"
   txtcolor="black"
   header="Balance"
   body={(  
           <>
          Your Current Balance is ${status} Dollars<br/>
          What would you like to do next?<br/><br/>
          <a href="#/deposit/" className="btn btn-primary active" tabIndex="-1" role="button" aria-disabled="false">Deposit</a>
          <a href="#/withdraw/" className="btn btn-secondary active" tabIndex="-1" role="button" aria-disabled="false">Withdraw</a>
           </>)} />  
);
}