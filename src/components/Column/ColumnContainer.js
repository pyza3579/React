import {connect} from 'react-redux';
import Column from './Column';

export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);
const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id), //nie rozumiem tej funkcji, ani tej na gorze
  //columns: state.columns, /*to jest lista z dataStore.js(initialStoreData). Jak to sie dzeiej, ze columns zostaje tutaj odczytaneczy to oznacza, ze state zdefiniowalismy wlasnie tutaj?*/
});

export default connect(mapStateToProps)(Column);