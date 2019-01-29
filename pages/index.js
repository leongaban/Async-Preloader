import { connect } from 'react-redux'

import { addLoader } from '../store'
import Preloaders from '../components/Preloaders'
import '../global.scss'

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnAddLoader = this.handleOnAddLoader.bind(this);
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps', this.props);
  }

  render() {
    console.log('this.props', this.props);
    const { loaders } = this.props;

    return (
      <div className="container">
        <div className="buttonContainer">
          <h1>Hello world.</h1>
          <button onClick={this.handleOnAddLoader}>Add a Progress Bar</button>
        </div>
        <Preloaders loaders={loaders} />
      </div>
    );
  }

  handleOnAddLoader() {
    console.log('> handleOnAddLoader clicked.');
    this.props.addLoader();
  }
}

const mapDispatchToProps = dispatch => ({
  addLoader: (...args) => dispatch(addLoader(...args))
});

const mapStateToProps = ({ loaders }) => ({ loaders });

export default connect(mapStateToProps, mapDispatchToProps)(Home);
