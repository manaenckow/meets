import React, { Component } from 'react';
import { Panel, PanelHeader, FixedLayout, Div, Tabs, TabsItem, Counter, HorizontalScroll } from '@vkontakte/vkui';
import { getMessage } from '../js/helpers';
import MeetList from '../components/MeetList';

import '@vkontakte/vkui/dist/vkui.css';
import './Home.css';

class Favorite extends Component {
    constructor(props) {
        super(props);

        this.state = {
            meets: this.props.userMeets
        };

        this.api = this.props.api;
    }


    render() {
        const { id, setParentState, getUserMeets, getExpiredUserMeets, getOwneredMeets, makeStory, userMeets, state } = this.props;

        return (
            <Panel id={id}>
                <PanelHeader noShadow>{ getMessage('favorite_panel_title') }</PanelHeader>
                    <Div style={{ marginBottom: 30 }}/>
                        <FixedLayout vertical="top">
                             <Tabs theme="header" type="buttons">
                               <HorizontalScroll>
                                 <TabsItem
                                   onClick={() => setParentState({ activeTab: 'all' }) & getUserMeets()}
                                   selected={state.activeTab === 'all'}
                                   after={state.activeTab === 'all' && <Counter>{userMeets.length}</Counter>}

                                 >
                                   Все
                                 </TabsItem>
                                 <TabsItem
                                   onClick={() => setParentState({ activeTab: 'exp' }) & getExpiredUserMeets()}
                                   selected={state.activeTab === 'exp'}
                                   after={state.activeTab === 'exp' && <Counter>{userMeets.length}</Counter>}
                                 >
                                   Завершенные
                                 </TabsItem>
                                 <TabsItem
                                   onClick={() => setParentState({ activeTab: 'my' }) & getOwneredMeets()}
                                   selected={state.activeTab === 'my'}
                                    after={state.activeTab === 'my' && <Counter>{userMeets.length}</Counter>}
                                 >
                                   Созданные
                                 </TabsItem>
                               </HorizontalScroll>
                             </Tabs>
                        </FixedLayout>
                        <MeetList
                            {...this.props}
                            isFave
                            makeStory={ makeStory }
                            getUserMeets={ getUserMeets }
                            meets={ this.props.userMeets }
                            setParentState={ setParentState }
                        />
                  {this.props.state.snackbar}
            </Panel>
        );
    }
}

export default Favorite;
