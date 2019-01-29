class Preloaders extends React.Component {
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps', this.props);
  }

  render() {
    const { loaders, preloaders } = this.props;
    console.log('loaders', loaders);
    return (
      <div className="preloaders">
        <div>
          {preloaders.map((preloader, i) => {
            return (<span key={i}>{preloader}</span>);
          })}
          {loaders.map((loader, i) => {
            return (<li key={i}>Loaded!</li>);
          })}
        </div>
      </div>
    );
  }
}

export default (Preloaders);
