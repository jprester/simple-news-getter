import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './App.css';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Routes from './components/Routes';

import { clearData, setCategory, startNewsFetch, showMenu } from './actions/';

interface IAppProps {
  history: [];
  newsData: [];
  newsListNumber: number;
  startNewsFetch: any;
  clearData: any;
  setCategory: any;
  showMenu: any;
  menuVisible: boolean;
}

interface IAppState {
  menuVisible: boolean;
  newsData: [];
  newsListNumber: number;
}

class App extends React.Component<IAppProps> {
  public componentDidMount() {
    this.props.clearData();
    this.props.setCategory();
    this.props.startNewsFetch();
  }

  public render() {
    return (
      <div className="App">
        <Header history={this.props.history} showMenu={this.props.showMenu} menuVisible={this.props.menuVisible}/>
        <div className="main-content">
          <div className="content-wrapper">
            <Routes />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  clearData: () => dispatch(clearData()),
  setCategory: (text: string) => dispatch(setCategory(text)),
  showMenu: (isVisible: boolean) => dispatch(showMenu(isVisible)),
  startNewsFetch: () => dispatch(startNewsFetch()),
});

const mapStateToProps = (state: IAppState) => {
  return {
    menuVisible: state.menuVisible,
    newsData: state.newsData,
    newsListNumber: state.newsListNumber,
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App) as any);
