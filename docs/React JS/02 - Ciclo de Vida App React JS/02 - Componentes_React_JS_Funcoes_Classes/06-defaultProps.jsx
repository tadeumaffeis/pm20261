class SampleComponent extends React.Component {
  render() {
    const name = this.props ? this.props.name : 'undefined';
    return <i>{name}</i>;
  }
}

SampleComponent.defaultProps = {
  name: '__undefined__',
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <h1>
    <SampleComponent /> text
  </h1>
);
