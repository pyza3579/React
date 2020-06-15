import {connect} from 'react-redux';
import List from './List';
import {getColumnsForList, createActionAddColumn} from '../../redux/columnsRedux.js';


const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),  //dlczaego props.id?
  //nie rozumiem tej funkcji, ani tej na gorze
  //columns: state.columns, /*to jest lista z dataStore.js(initialStoreData). Jak to sie dzeiej, ze columns zostaje tutaj odczytane?czy to oznacza, ze state zdefiniowalismy wlasnie tutaj?*/
});

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);