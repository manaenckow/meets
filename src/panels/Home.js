import React, { Component } from 'react';
import { Panel, PanelHeader, HeaderButton, PullToRefresh } from '@vkontakte/vkui';
import { getMessage } from '../js/helpers';
import MeetList from '../components/MeetList';

import Icon24Users from '@vkontakte/icons/dist/24/users';

import '@vkontakte/vkui/dist/vkui.css';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            meets: this.props.meets,
            fetching: false
        };

        this.onRefresh = () => {
      this.setState({ fetching: true });
      setTimeout(() => {
        this.props.getMeets();
        this.setState({ fetching: false });
      }, 500);  // сука ненавижу этот PTR, почему он не может нормально работать блять
    }
        this.api = this.props.api;
    }

    render() {
        const { id, setParentState } = this.props;

        return (
            <Panel id={id}>
                <PanelHeader left={
                  <HeaderButton onClick={ () => setParentState({
                    activePanel: 'comm'
                  }) }>
			               <Icon24Users/>
		               </HeaderButton>
                 }>{ getMessage('home_panel_title') }</PanelHeader>

                <PullToRefresh onRefresh={this.onRefresh} isFetching={this.state.fetching}>
                        <MeetList
                            {...this.props}
                            meets={ this.props.meets }
                            setParentState={ setParentState }
                        />
                </PullToRefresh>
                {this.props.state.snackbar}
            </Panel>
        );
    }
}

export default Home;
