class Preloaders extends React.Component {
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps', this.props);
  }

  render() {
    const { loaders } = this.props;
    console.log('loaders', loaders);
    return (
      <div className="preloaders">
        <ul>
          {loaders.map((loader) => {
            return (<li>Loader! {loader}</li>);
          })}
        </ul>
      </div>
    );
  }
}

export default (Preloaders);
