import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { showMessage } from 'app/store/fuse/messageSlice';

export const getCourse = createAsyncThunk('academyApp/repositories', async (repositoryName) => {
  const response = await axios.get(`/repositories/${repositoryName}`);

  const data = await response.data;

  return data;
});


const courseSlice = createSlice({
  name: 'academyApp/repositories',
  initialState: null,
  reducers: {},
  extraReducers: {
    [getCourse.fulfilled]: (state, action) => action.payload,
  },
});

export const selectCourse = ({ academyApp }) => academyApp.course;
export const getRepository = ({academyApp}) => academyApp.course;

export default courseSlice.reducer;
