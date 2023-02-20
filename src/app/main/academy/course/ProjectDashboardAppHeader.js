import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from '@lodash';
import Button from '@mui/material/Button';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { selectUser } from 'app/store/userSlice';

function ProjectDashboardAppHeader(props) {
  const { repository } = props;
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className="flex flex-col w-full px-24 sm:px-32">
      <div className="flex flex-col sm:flex-row flex-auto sm:items-center min-w-0 my-32 sm:my-48">
        <div className="flex flex-auto items-center min-w-0">
          <Avatar className="flex-0 w-64 h-64" alt="user photo" src={user?.data?.photoURL}>
            {user?.data?.username}
          </Avatar>
          <div className="flex flex-col min-w-0 mx-16">
            <Typography className="text-2xl md:text-5xl font-semibold tracking-tight leading-7 md:leading-snug truncate">
              {repository?.name || "..."}
            </Typography>

            <div className="flex items-center">
              <Typography className="mx-6 leading-6 truncate" color="text.secondary">
                { repository?.description }
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-24 sm:mt-0 sm:mx-8 space-x-12">
          <Button
                className="mt-12 sm:mt-0"
                variant="contained"
                color="info"
                component="a"
                href={repository?.github_html_url}
                target="_blank"
                role="button"
                startIcon={<FuseSvgIcon>feather:github</FuseSvgIcon>}
              >
                Show Repository
              </Button>
        </div>
      </div>
    </div>
  );
}

export default ProjectDashboardAppHeader;
