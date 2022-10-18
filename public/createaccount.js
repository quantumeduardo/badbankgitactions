function CreateAccount(){
  const [show, setShow] = React.useState(true);
  const [name,setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [balance, setBalance] = React.useState('');
  const [status, setStatus] = React.useState('');
  
  function handleCreate(){

    function validate(field,label){
      if (!field) {
            setStatus(<div style={{color:'red'}}> enter a valid {label} </div>);
            setTimeout(() => setStatus(''),3000);
            return false;
          }
          return true;
        } 
    
    console.log(name,email,password,balance);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    if (!validate(balance, 'balance')) return;
    const url =`/account/create/${name}/${email}/${password}/${balance}`;
      (async()=> {
        var res = await fetch(url)
        var data = await res.json();
        console.log(data);
      })();
    setShow(false);
  }    

  return (
    <Card
      bgcolor="white"
      txtcolor="black"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/>
              
              <br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange = {e => setPassword(e.currentTarget.value)}/>
            
              <br/>
              Initial amount to deposit
              <input type="number" className="form-control" id = "balance" value = {balance} onChange ={e => setBalance(e.currentTarget.value)} />
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button> 
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setBalance('');
    setShow(true);
  }

  