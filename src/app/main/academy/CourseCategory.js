import { darken, lighten } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import { useSelector } from 'react-redux';
import _ from '@lodash';
import { selectCategories } from './store/categoriesSlice';

function CourseCategory({ slug }) {
  //const categories = useSelector(selectCategories);

  //const category = _.find(categories, { slug });

  return (
    <Chip
      className="font-semibold text-12"
      label={slug}
      color="primary"
      size="small"
    />
  );
}

export default CourseCategory;
