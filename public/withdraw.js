function Withdraw(){
  const ctx = React.useContext(UserContext);
  const member =ctx.users[0].name;
  const [withdraw, setWithdraw] = React.useState(0);
  const [show, setShow]               = React.useState(true);
  const [totalState, setTotalState]   = React.useState(100);
  const [isValid, setIsValid] = React.useState(false);
  
  const handleChange = (event) =>{
  if (Number(event.target.value) > totalState || (Number(event.target.value) <= 0))
    { setIsValid(true);
    } else setIsValid(false);
    setWithdraw(Number(event.target.value))
    event.preventDefault();
  }

 
  //Logic to add deposit amount from deposit to total state
  function handleSubmit(event){
    let newTotal = Number(totalState) - Number(withdraw);
      setTotalState(newTotal);
      setShow(false);
      event.preventDefault();
    };

//when the deposit is successful
  function clearForm(){
    setWithdraw('');
    setShow(true);
  }
  return (
    <Card
   bgcolor="white"
   txtcolor="black"
   header="Withdraw"
   body={show ? (  
           <>
          Hi, {member}! Your Current Balance: ${totalState} USD <br/>

          <input type="number"  className="form-control" id="withdraw"  onChange={handleChange}/><br/>
          <button type="submit"  disabled={isValid} className="btn btn-light" onClick={handleSubmit}> Withdraw
          </button> 
          </>
          ):(
             <><h5>Success! Your Current Balance: ${totalState} USD</h5><button variant="primary" className="btn btn-light" type="submit" onClick={clearForm}> Withdraw Again
             </button></>
          )}

      />
      )
      }
        