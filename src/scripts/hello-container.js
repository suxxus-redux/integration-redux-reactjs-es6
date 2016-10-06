import { connect } from 'react-redux';
import Hello from 'scripts/hello';

const mapStateToProps = state => ({
    greet: `hello ${state.name}`
});

export default connect(mapStateToProps)(Hello);
