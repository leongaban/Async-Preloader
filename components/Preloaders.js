class Preloaders extends React.Component {
  render() {
    const { loaders, preloaders } = this.props;
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
