import 'aframe';
import 'aframe-environment-component';
import 'aframe-animation-component';

import imgSky from "../../www/assets/sky.jpg";

import React, {Component} from 'react';
import Assets from 'aframe-react-assets';
import ReactDOM from 'react-dom';

import {Box, Sphere, Cylinder, Plane, Sky, Text, Scene, Entity, Animation, Camera} from 'react-aframe-ar';

import Loading from '../Loading/Loading';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            initialLoading: true
        }

    }

    static Assets = [
        <img id="sky" src={imgSky} alt="sky"/>
    ];


    updateAssetsLoadingStatus = () => {
        this.setState({ initialLoading: false })
    };

    updateAssetsCurrentInfo = () => null;
    updateAssetsLoadingInfo = () => null;

    render() {

        const {assets} = this.props;

        return (
            <Scene>
                <Loading loading={this.state.initialLoading} />
                <Assets
                    assets={assets}
                    timeout={4e4}
                    interval={500}
                    debug={false}
                    onLoad={this.updateAssetsLoadingStatus}
                    onLoadingBySize={this.updateAssetsCurrentInfo}
                    onLoadingByAmount={this.updateAssetsLoadingInfo}
                />
                <Camera position="0 1.6 0" animation="property: position; dur: 50000;
                                 easing: easeInSine; to: 0 0 5" />

                <Entity cursor="fuse: true; fuseTimeout: 500"
                     position="0 1.6 0"
                     geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
                     material="color: black; shader: flat" />
                {/*<Entity environment />*/}

                <Box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" shadow src="#sky" />
                <Sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E" shadow />
                <Cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D" shadow />
                <Plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4" shadow />
                <Sky src="#sky" />
                <Text value="Hello world, react-aframe-ar!" align="center" position="0 2.3 -1.5" color="#7BC8A4" />
            </Scene>
        )

    }
}

export default App;