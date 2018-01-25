import React from 'react';

export default class Hard extends React.Component {
    render() {
        return (
            <div>
                <label htmlFor="menu_bar1">第1章  トラ！トラ！トラ！</label>
                <input type="checkbox" id="menu_bar1" className="accordion" />
                <ul id="links1">
                    <li><a href="">1-1 近海演習</a></li>
                    <li><a href="">1-2 トラトラトラ</a></li>
                    <li><a href="">1-3 軍港燃ゆ</a></li>
                    <li><a href="">1-4 東より来たる敵</a></li>
                </ul>
                <label htmlFor="menu_bar2">第2章  初陣！珊瑚海</label>
                <input type="checkbox" id="menu_bar2" className="accordion" />
                <ul id="links2">
                    <li><a href="">2-1 ツラギ支援</a></li>
                    <li><a href="">2-2 太陽を隠す暗雲</a></li>
                    <li><a href="">2-3 初陣！珊瑚海</a></li>
                    <li><a href="">2-4 空母対空母</a></li>
                </ul>
                <label htmlFor="menu_bar3">第3章  AF決戦</label>
                <input type="checkbox" id="menu_bar3" className="accordion" />
                <ul id="links3">
                    <li><a href="">3-1 AF決戦へ</a></li>
                    <li><a href="">3-2 運命の5分間</a></li>
                    <li><a href="">3-3 背水の戦い</a></li>
                    <li><a href="">3-4 最後の反撃</a></li>
                </ul>
                <label htmlFor="menu_bar4">第4章  ソロモン海にて・上</label>
                <input type="checkbox" id="menu_bar4" className="accordion" />
                <ul id="links4">
                    <li><a href="">4-1 宵闇の死神</a></li>
                    <li><a href="">4-2 血染めの暁</a></li>
                    <li><a href="">4-3 東ソロモンにて</a></li>
                    <li><a href="">4-4 仇討ちの戦い</a></li>
                </ul>
                <label htmlFor="menu_bar5">第5章  ソロモン海にて・中</label>
                <input type="checkbox" id="menu_bar5" className="accordion" />
                <ul id="links5">
                    <li><a href="">5-1 輸送阻止作戦</a></li>
                    <li><a href="">5-2 聖十字の空</a></li>
                    <li><a href="">5-3 ホーネット墜つ</a></li>
                    <li><a href="">5-4 戦域から脱出</a></li>
                </ul>
                <label htmlFor="menu_bar6">第6章  ソロモン海にて・下</label>
                <input type="checkbox" id="menu_bar6" className="accordion" />
                <ul id="links6">
                    <li><a href="">6-1 夜戦対決</a></li>
                    <li><a href="">6-2 全面反撃</a></li>
                    <li><a href="">6-3 巨砲最後の戦い </a></li>
                    <li><a href="">6-4 ソロモンの悪夢</a></li>
                </ul>
            </div>
        );
    }
}