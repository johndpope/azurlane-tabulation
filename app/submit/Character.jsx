import React from 'react';

export default class Character extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rarity: Object.getOwnPropertyNames(this.props.character)[0],
            character: null
        }
    }

    onChangeRatity(k) {
        this.setState({ rarity: k });
    }

    _onSelectCharacter(name) {
        const c = name === this.state.character ? null : name;
        this.setState({character: c});
        this.props.onSelectCharacter(c);
    }

    render() {
        const character = this.props.character;

        const rarityList = [];
        for (let k in character) {
            rarityList.push(<li className={this.state.rarity === k ? "rarityItem rarityItemSelected " + k : "rarityItem " + k} key={k}><a onClick={() => this.onChangeRatity(k)}>{k.toUpperCase()}</a></li>);
        }

        const iconList = [];
        for (let k of character[this.state.rarity]) {
            const icon = <img src={'./img/character/' + k + '.png'} width="75" height="75" alt={k} className="characterItem" key={k} onClick={() => this._onSelectCharacter(k)} draggable="false" />;
            if (this.state.character === k)
                iconList.push(<div className="characterSelected" key={k}>{icon}<p>-選択中-</p></div>);
            else
                iconList.push(icon);
        }

        return (
            <div className="character">
                <ul className="rarity">
                    {rarityList}
                </ul>
                <div className="characterIcons">
                    {iconList}
                </div>
            </div>
        );
    }
}