import React, { Fragment } from 'react';
import { View, ActivityIndicator, StyleSheet, Dimensions, StatusBar, Text } from 'react-native';
import { COLORS } from './constants';

const WHITE_OVERLAY = 'rgba(255, 255, 255, 0)';

const Loading = WrapperComponent =>
  class LoadingOverlay extends React.Component {
    static navigationOptions = WrapperComponent.navigationOptions;

    constructor(props) {
      super(props);
      this.loading = this.loading.bind(this);
      this.state = {
        isloading: false,
        message: ''
      };
    }
    loading(isloading, message) {
      this.setState({ isloading, message: isloading ? message : '' });
    }
    render() {
      const { isloading: loading, message = '' } = this.state;
      const { height } = Dimensions.get('window');

      return (
        <View style={{ height: '100%' }}>
          {loading && (
            <View
              style={{
                height: '100%',
                position: 'absolute',
                width: '100%',
                zIndex: 99999,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <View style={[styles.overlay, styles.content, { height: height }]}>
                <View style={[styles.overlay, styles.background]} />
                <View
                  style={[
                    styles.overTopCenter,
                    { padding: 14, backgroundColor: WHITE_OVERLAY, minWidth: 140, borderRadius: 8 }
                  ]}
                >
                  <ActivityIndicator size="large" animating={true} color={COLORS.WHITE} style={{ zIndex: 3 }} />
                </View>
                {message !== '' && (
                  <View style={[styles.overlayTextContainer, styles.overTopCenter]}>
                    <Text style={styles.message}>{message}</Text>
                  </View>
                )}
              </View>
            </View>
          )}

          <Fragment>
            <StatusBar networkActivityIndicatorVisible={loading} />
            <WrapperComponent {...this.props} loading={this.loading} />
          </Fragment>
        </View>
      );
    }
  };

const styles = StyleSheet.create({
  background: { backgroundColor: COLORS.PURE_BLACK, opacity: 0.4 },
  overlay: { position: 'absolute', width: '100%', height: '100%', zIndex: 1 },
  content: { alignItems: 'center', justifyContent: 'center' },
  overTopCenter: { zIndex: 999999, alignItems: 'center' },
  overlayTextContainer: {
    paddingVertical: 14,
    position: 'absolute',
    bottom: 94,
    padding: 14,
    backgroundColor: WHITE_OVERLAY,
    borderRadius: 8
  },
  message: { color: COLORS.BLUE_TEXT, fontSize: 16, textAlign: 'center' }
});

export default Loading;
