import {connect} from 'react-redux';
import Column from './Column';
import {getCardsForColumn, createActionAddCard} from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id), //nie rozumiem tej funkcji, ani tej na gorze
  //columns: state.columns, /*to jest lista z dataStore.js(initialStoreData). Jak to sie dzeiej, ze columns zostaje tutaj odczytaneczy to oznacza, ze state zdefiniowalismy wlasnie tutaj?*/
});

//dopasowac
const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id, //props.id?
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);