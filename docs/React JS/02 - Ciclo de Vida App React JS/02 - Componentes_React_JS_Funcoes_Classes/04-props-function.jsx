function FunctionSampleComponent({ name }) {
  return (
    <h1>
      <i>{name}</i>
    </h1>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <FunctionSampleComponent name="Function Sample" /> text
  </div>
);
