import React from 'react';
import "./ClickGame.css";
import bacons from '../../bacons.json';
import Scorecard from '../Scorecard/Scorecard';
import Image from '../Image';

class ClickGame extends React.Component {
    state = {
        score: 0,
        topScore: 0,
        bacons,
        guessed: []
    }

    setTopScore = () => {
        if (this.state.score >= this.state.topScore) {
            this.setState({ topScore: this.state.score });
        }
    }

    shuffle = (arr) => {
        const arr1 = arr;
        let arr2 = [];

        while (arr1.length !== 0) {
            const randomIndex = Math.floor(Math.random * arr1.length);
            arr2 = [...arr1.splice(randomIndex, 1)];
        }

        return arr2;
    }

    makeGuess = (id) => {
        // if id in guessed array
        if (this.state.guessed.includes(id)) {
            // end game
            console.log(`game over`);
            this.setState({ score: 0, guessed: [] })
        } else {
            // increment score
            if (this.state.score >= this.state.topScore) {
                this.setState({
                    score: this.state.score + 1,
                    topScore: this.state.score + 1
                });
            }
            else {
                this.setState({
                    score: this.state.score + 1
                })
            }

            // push id to guessed array
            this.state.guessed.push(id);

            // rerender with randomized

        }
    }

    render() {
        return (
            <div className="container-fluid">
                <Scorecard score={this.state.score} topScore={this.state.topScore} />
                <div className="row no-gutters">
                    {this.state.bacons.map(bacon =>
                        <Image
                            makeGuess={this.makeGuess}
                            id={bacon.id}
                            image={bacon.image}
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default ClickGame;