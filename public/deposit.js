function Deposit(){
  const [deposit, setDeposit]         = React.useState();
  const [show, setShow]               = React.useState(true);
  const [totalState, setTotalState]   = React.useState();
  
  
  
  const handleChange = (event) =>{
  if (Number(event.target.value) <= 0)
    {setIsValid(true);
    } else setIsValid(false);
   
  }
 
 
  //Logic to add deposit amount from deposit to total state
  function handleSubmit(){ 
  const balance = doc.balance;
  setDeposit(Number(event.target.value))
  let newTotal = Number(balance) + Number(deposit);
      setTotalState(balance);
  const url =`/account/update/${email}/${balance}`;
  (async()=> {
    var res = await fetch(url)
    var data = await res.json();
    console.log(data);
    })();   
      setShow(false);
    };

//when the deposit is successful
  function clearForm(){
    setDeposit('');
    setShow(true);
  }
  return (
    <Card
   bgcolor="white"
   txtcolor="black"
   header="Deposit"
   body={show ? (  
           <>
          Hi, {name}! Your Current Balance: ${doc.balance} USD <br/>
          Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/>
              
          <input type="number"  className="form-control" id="deposit" onChange={handleChange}/><br/>
          <button type="submit"  className="btn btn-light" onClick={handleSubmit}> Make deposit
          </button> 
          </>
          ):(
             <><h5>Success! Your Current Balance: ${totalState} USD</h5><button variant="primary" className="btn btn-light" type="submit" onClick={clearForm}> Deposit again
             </button></>
          )}

      />
      )
      }
        