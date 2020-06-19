import {connect} from 'react-redux';
import Info from './Info';

const mapStateToProps = state => ({

  title: state.infoContent.infoTitle,
  image: state.infoContent.infoTitle,
  description: state.info.infoTitle,

});

export default connect(mapStateToProps)(Info);