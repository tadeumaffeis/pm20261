function Welcome(props) {
  return <h1>Olá, {props.name}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Welcome name="Tadeu" />);
