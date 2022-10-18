function Login(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
 
  return (
    <Card
      bgcolor="secondary"
      header="Login"
      status={status}
      body={show ? 
        <LoginForm setShow={setShow} setStatus={setStatus}/> :
        <LoginMsg setShow={setShow} setStatus={setStatus}/>}
    />
  ) 
}
function LoginMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>
        Authenticate again
    </button>
  </>);
}
function LoginForm(props){
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');

  function handle(){
    fetch(`/account/login/${email}/${password}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus('');
            props.setShow(false);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus(text)
            console.log('err:', text);
        }
    });}
    return (
      <Card
     bgcolor="white"
     txtcolor="black"
     header="Login"

     body={(  
             <>
             Email address<br/>
             <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => validate(e.currentTarget.value)}/><br/>
             Password<br/>
             <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => validate(e.currentTarget.value)}/><br/>
             <button type="submit" className="btn btn-light" onClick={validate()}>Unsecurely Login</button>
             </>)} />  
);

  }

/*function validate(); {
  let input = this.state.value;
  let errors = {};
  let isValid = true;

  if (!input["email"])(
    isValid = false);
    errors["email"] ="please enter your email";
  if (typeof input["email"]!== undefined)
    isValid = false;
  
  if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    } else isValid = true;
}
*/
  