import React, {Component} from 'react';
import { Panel, PanelHeader, Button, Placeholder } from '@vkontakte/vkui';

import Icon56CheckCircleOutline from '@vkontakte/icons/dist/56/check_circle_outline';

//import connect from '@vkontakte/vk-connect';
import '@vkontakte/vkui/dist/vkui.css';
import './Home.css';
class Success extends Component {


    render() {
        const { id, onStoryChange } = this.props;

        return (
            <Panel id={id}>
                <PanelHeader>Успех</PanelHeader>
                <Placeholder
                  icon={<Icon56CheckCircleOutline id='success'/>}
                  action={
                    <Button
                      size="l"
                      onClick={() => onStoryChange('home', 'meets')}
                      level="tertiary">
                     На главную
                    </Button>
                    }
                  stretched
                >
             Сервис успешно добавлен в сообщество, откройте сервис из него
             </Placeholder>
            </Panel>
        );
    }
}

export default Success;
