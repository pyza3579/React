import {connect} from 'react-redux';
import List from './List';

export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);
const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id), //nie rozumiem tej funkcji, ani tej na gorze
  //columns: state.columns, /*to jest lista z dataStore.js(initialStoreData). Jak to sie dzeiej, ze columns zostaje tutaj odczytaneczy to oznacza, ze state zdefiniowalismy wlasnie tutaj?*/
});

export default connect(mapStateToProps)(List);