class SampleComponent extends React.Component {
  render() {
    return <i>I am so custom</i>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <h1>
    <SampleComponent /> text
  </h1>
);
