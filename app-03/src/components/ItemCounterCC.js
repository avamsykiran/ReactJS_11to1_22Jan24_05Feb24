import { Component } from 'react';

class ItemCounterCC extends Component {

    constructor() {
        super();
        this.state = {
            itemCount: 0,
            packetCount: 0
        };
    }

    componentDidMount(){
        setTimeout( () => this.setState({itemCount:1}) , 1000);
    }

    stepUp = event => this.setState({itemCount:this.state.itemCount+1});

    stepDown = event => this.setState({itemCount:this.state.itemCount-1});

    componentDidUpdate(){
        let { itemCount, packetCount } = this.state;

        if(itemCount<0 && packetCount>0){
            this.setState({itemCount:9,packetCount:packetCount-1});
        }else if(itemCount<0 && packetCount===0){
            this.setState({itemCount:0});
        }else if(itemCount===10){
            this.setState({itemCount:0,packetCount:packetCount+1});
        }
    }

    render() {

        let { itemCount, packetCount } = this.state;

        return (
            <section className="col p-4 border border-primary m-4">
                <h3>
                    {packetCount} <sub>packets</sub> , {itemCount} <sub>items</sub> 
                </h3>
                <div>
                    <button className='btn btn-sm btn-danger me-2' onClick={this.stepDown}>--LESSER</button>
                    <button className='btn btn-sm btn-primary' onClick={this.stepUp}>++MORE</button>
                </div>
            </section>
        );
    }
}

export default ItemCounterCC;