import React from 'react';
import * as fs from 'fs';
import Header from './Header.jsx';
import Character from './Character.jsx';
import Blueprint from './Blueprint.jsx';
import Box from './Box.jsx';
import Confirm from './Confirm.jsx';
const Spreadsheets = require('electron').remote.require('./app/Spreadsheets');

export default class Submit extends React.Component {
    constructor(props) {
        super(props);

        const data = JSON.parse(fs.readFileSync('./app/chapterdata/' + this.props.area + '.json', 'utf8'));
        this.state = {
            popup: false,
            data: {
                num: data.num,
                name: data.name,
                description: data.description,
                box: data.box,
                blueprint: data.blueprint,
                character: data.character
            },
            character: null,
            blueprint: null,
            blueprintcount: 0,
            boxtech: null
        }

        this.onSelectBlueprint = this.onSelectBlueprint.bind(this);
        this.onSelectCharacter = this.onSelectCharacter.bind(this);
        this.onChangeBlueprintCount = this.onChangeBlueprintCount.bind(this);
        this.onSelectBoxTech = this.onSelectBoxTech.bind(this);
        this.next = this.next.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !(this.state.popup === nextState.popup);
    }

    onSelectCharacter(name) {
        this.setState({ character: name });
    }

    onSelectBlueprint(name) {
        this.setState({ blueprint: name });
    }

    onChangeBlueprintCount(count) {
        this.setState({ blueprintcount: count });
    }

    onSelectBoxTech(tech) {
        this.setState({ boxtech: tech });
    }

    next() {
        this.setState({ popup: !this.state.popup });
    }

    onSubmit() {
        Spreadsheets.submit();
    }

    render() {
        const { area, isHard } = this.props;
        const { num, name, description, box, blueprint, character } = this.state.data;

        return (
            <div className="submit">
                <Header area={area} isHard={isHard} name={name} description={description} />
                <div className="submitContent">
                    <h3>ドロップ艦</h3>
                    <Character character={character} onSelectCharacter={this.onSelectCharacter} />
                    {
                        blueprint ?
                            <div>
                                <h3>設計図</h3>
                                <Blueprint blueprint={blueprint} onSelectBlueprint={this.onSelectBlueprint} onChangeBlueprintCount={this.onChangeBlueprintCount} />
                            </div>
                            : null
                    }
                    <h3>装備箱</h3>
                    <Box box={box} onSelectBoxTech={this.onSelectBoxTech} />
                </div>
                <img className="bottomButton buttonLeft" src="img/back.png" width="120px" onClick={() => this.props.back()} draggable="false" />
                <img className="bottomButton buttonRight" src="img/next.png" width="120px" onClick={this.next} draggable="false" />
                {
                    this.state.popup ?
                        <Confirm character={this.state.character} blueprint={this.state.blueprint} count={this.state.blueprintcount} boxtech={this.state.boxtech} onClose={this.next} onSubmit={this.onSubmit} />
                        : null
                }
            </div>
        );
    }
}