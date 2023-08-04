import {Platform, StyleSheet} from 'react-native';
import {dimension} from '../../themes/dimension';
import colors from '../../themes/colors';
const {verticalScale, horizontalScale, moderateScale} = dimension();

export default StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundPrimary,
    flex: 1,
    alignItems: 'center',
  },
  loginText: {
    marginTop: moderateScale(200),
    fontSize: Platform.OS === 'android' ? 45 : 50,
    color: colors.white,
    fontFamily: Platform.OS === 'android' ? 'serif' : 'Baskerville-SemiBold',
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
    marginTop: verticalScale(100),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: moderateScale(300),
    height: moderateScale(50),
    backgroundColor: colors.buttonAuth,
  },
});
