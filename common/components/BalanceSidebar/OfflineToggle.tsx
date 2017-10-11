import React from 'react';
import {
  forceOfflineConfig as dForceOfflineConfig,
  TForceOfflineConfig
} from 'actions/config';
import OfflineSymbol from 'components/ui/OfflineSymbol';
import { connect } from 'react-redux';
import { AppState } from 'reducers';

type sizeType = 'small' | 'medium' | 'large';

interface OfflineToggleProps {
  offline: boolean;
  forceOffline: boolean;
  forceOfflineConfig: TForceOfflineConfig;
  size?: sizeType;
}

class OfflineToggle extends React.Component<OfflineToggleProps, {}> {
  public render() {
    const { forceOfflineConfig, offline, forceOffline, size } = this.props;

    return (
      <div>
        {!offline ? (
          <div className="row text-center">
            <button className="btn btn-info" onClick={forceOfflineConfig}>
              <OfflineSymbol offline={forceOffline} />
              {forceOffline ? 'Go Online' : 'Go Offline'}
            </button>
          </div>
        ) : (
          <div className="text-center">
            <h5>You are currently offline.</h5>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state: AppState) {
  return {
    offline: state.config.offline,
    forceOffline: state.config.forceOffline
  };
}

export default connect(mapStateToProps, {
  forceOfflineConfig: dForceOfflineConfig
})(OfflineToggle);
