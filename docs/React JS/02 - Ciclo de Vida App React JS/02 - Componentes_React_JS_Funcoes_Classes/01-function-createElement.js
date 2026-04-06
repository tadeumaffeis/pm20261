const MyComponent = function() {
  return React.createElement('span', null, 'I am so custom');
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  React.createElement('h1', null,
    React.createElement(MyComponent, null),
    ' text'
  )
);
