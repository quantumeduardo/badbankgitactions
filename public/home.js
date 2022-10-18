function Home(){
  const ctx = React.useContext(UserContext);
  return (
    <Card
      bgcolor="red"
      txtcolor="black"
      header="Bad Bank"
      title="Welcome to the bank"
      text="Beaware this Bank is Bad as it has no security"
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
   

  );  
}
