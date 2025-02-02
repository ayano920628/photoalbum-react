import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';

// actionの読み込み
import { getMe } from '../actions/user.actions';
import { images } from '../actions/image.actions';

// props経由でAPI経由で取得した自分自身の情報をコンポーネントに渡す
const mapStateToProps = (state, ownProps) => ({
  me: state.user.me,
  image: state.image
});

const mapDispatchToProps = dispatch => ({
  onMount() {
    dispatch(getMe());
    dispatch(images());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);