class SampleComponent extends React.Component {
  render() {
    const name = this.props ? this.props.name : 'undefined';
    return <i>{name}</i>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <h1>
    <SampleComponent name="SampleComponent Properties Test" /> text
  </h1>
);
