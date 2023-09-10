import styles from "./ingredient-group.module.css";
import PropTypes from 'prop-types';

function IngredientGroup(props) {
  return (
    <div className=" pb-10">
      <p className="text text_type_main-medium">{props.title}</p>
      <div className={`${styles.container} pt-6 pl-4`}>{props.children}</div>
    </div>
  );
}

export default IngredientGroup;

IngredientGroup.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}