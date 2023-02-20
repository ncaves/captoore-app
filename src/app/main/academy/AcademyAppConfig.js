import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import AcademyApp from './AcademyApp';

const Course = lazy(() => import('./course/Course'));
const Courses = lazy(() => import('./courses/Courses'));

const AcademyAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: 'academy',
      element: <AcademyApp />,
      children: [
        {
          path: '',
          element: <Navigate to="/academy/courses" />,
        },
        {
          path: 'courses/:repositoryName/*',
          element: <Course />,
        },
        {
          path: 'courses',
          element: <Courses />,
        },
      ],
    },
  ],
};

export default AcademyAppConfig;
