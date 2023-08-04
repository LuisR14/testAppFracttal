import {StyleSheet} from 'react-native';
import {dimension} from '../../themes/dimension';
import colors from '../../themes/colors';
const {verticalScale, horizontalScale, moderateScale} = dimension();

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  image: {
    height: verticalScale(400),
    width: horizontalScale(300),
  },
  imageContainer: {
    borderRadius: 5,
    borderColor: colors.imageContainer,
    borderWidth: 1,
    padding: 20,
    marginBottom: 10,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 25,
    color: colors.white,
  },
  textSubtitle: {
    marginTop: verticalScale(20),
    marginBottom: moderateScale(40),
    fontSize: 16,
    fontStyle: 'italic',
    color: colors.textSubtitle,
  },
  buttonAuth: {
    marginTop: verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: moderateScale(300),
    height: moderateScale(50),
    backgroundColor: colors.buttonAuth,
  },
  buttonChangeImage: {
    marginTop: verticalScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: moderateScale(200),
    height: moderateScale(30),
    backgroundColor: colors.black,
  },
});
