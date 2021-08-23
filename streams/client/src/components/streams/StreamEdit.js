import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }
}

const mapStateToProps = state => {
  return { stream: state.streams[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { fecthStream })(StreamEdit);
