import { connect } from 'react-redux'

import { addLoader } from '../store'
import Preloaders from '../components/Preloaders'
import '../global.scss'

class Home extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      preloaders: []
    }

    this.handleOnAddLoader = this.handleOnAddLoader.bind(this);
  }

  render() {
    const { loaders } = this.props;
    const { preloaders } = this.state;
    console.log('preloaders', preloaders);
    console.log('loaders', loaders);

    return (
      <div className="container">
        <div className="buttonContainer">
          <h1>Hello world.</h1>
          <button onClick={this.handleOnAddLoader}>Add a Progress Bar</button>
        </div>
        <Preloaders preloaders={preloaders} loaders={loaders} />
      </div>
    );
  }

  handleOnAddLoader() {
    console.log('> handleOnAddLoader clicked.');
    const { preloaders } = this.state;
    this.setState({
      preloaders: new Array('Preloader called', ...preloaders)
    });
    this.props.addLoader();
  }
}

const mapDispatchToProps = dispatch => ({
  addLoader: (...args) => dispatch(addLoader(...args))
});

const mapStateToProps = ({ loaders }) => ({ loaders });

export default connect(mapStateToProps, mapDispatchToProps)(Home);
