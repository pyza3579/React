import {connect} from 'react-redux';
import App from './App';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists, /*to jest lista z dataStore.js (initialStoreData). Jak to sie dzeiej, ze lists zostaje tutaj odczytane?Czy to oznacza, ze state zdefiniowalismy wlasnie tutaj?*/
});

export default connect(mapStateToProps)(App);