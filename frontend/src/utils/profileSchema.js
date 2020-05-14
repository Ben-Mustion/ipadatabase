import * as Yup from 'yup';

const ProfileSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, 'Username is Too Short!')
    .max(15, 'Username is Too Long!')
    .required('Username is Required'),
  location: Yup.string()
    .min(2, 'Location is Too Short!')
    .max(25, 'Location is Too Long!'),
});

export default ProfileSchema;
