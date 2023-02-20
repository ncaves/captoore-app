import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import clsx from 'clsx';
import CourseCategory from './CourseCategory';

function CourseInfo({ course, className }) {
  if (!course) {
    return null;
  }

  return (
    <div className={clsx('w-full', className)}>
      <div className="flex items-center justify-between mb-16">
        <CourseCategory slug={course.language} />

      </div>

      <Typography className="text-16 font-medium">{course.name}</Typography>

      <Typography className="text-13 mt-2 line-clamp-2" color="text.secondary">
        {course.description}
      </Typography>

      <Divider className="w-48 my-24 border-1" light />

      <Typography className="flex items-center space-x-6 text-13" color="text.secondary">
        <FuseSvgIcon color="disabled" size={20}>
          heroicons-solid:clock
        </FuseSvgIcon>
        <span className="whitespace-nowrap leading-none">{`10 minutes`}</span>
      </Typography>
      <Typography className="flex items-center space-x-6 text-13 mt-8" color="text.secondary">
        <FuseSvgIcon color="disabled" size={20}>
          heroicons-solid:academic-cap
        </FuseSvgIcon>

      </Typography>
    </div>
  );
}

export default CourseInfo;
